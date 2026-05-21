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
            .then(() => alert("E-mail de recuperação enviado! Check sua caixa de entrada."))
            .catch(err => alert("Erro ao enviar: " + err.message));
    });
}