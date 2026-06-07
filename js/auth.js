import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const loginForm = document.getElementById('loginForm');
const btnRecuperar = document.getElementById('btn-recuperar');
const mensagemErro = document.getElementById('error-msg');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                window.location.href = 'home.html';
            })
            .catch(err => {
                mensagemErro.innerText = "Erro na autenticação: " + err.message;
                mensagemErro.style.display = 'block';
            });
    });
}

if (btnRecuperar) {
    btnRecuperar.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        
        if (!email) {
            alert("Digite seu e-mail no campo acima primeiro.");
            return;
        }
        
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
            })
            .catch(err => {
                console.error("Código do erro:", err.code); // Ajuda a monitorar no console do navegador
                
                // Valida se o erro é de usuário não encontrado no banco do Firebase Auth
                if (err.code === 'auth/user-not-found') {
                    alert("Sem cadastro para esse e-mail");
                } else if (err.code === 'auth/invalid-email') {
                    alert("Por favor, digite um formato de e-mail válido.");
                } else {
                    alert("Erro ao enviar: " + err.message);
                }
            });
    });
}