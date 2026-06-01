import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut, verifyBeforeUpdateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, doc, onSnapshot, updateDoc, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let filtroAtual = 'pendentes';
let editId = null;

// Elementos do novo Modal de Opções (Perfil Completo)
const modalOpcoes = document.getElementById('modal-opcoes');
const btnFecharOpcoes = document.getElementById('btn-fechar-opcoes');
const btnSalvarNome = document.getElementById('btn-salvar-nome'); 
const inputNovoNome = document.getElementById('input-novo-nome');
const inputNovoEmail = document.getElementById('input-novo-email');
const inputNovaSenha = document.getElementById('input-nova-senha');

// Proteção da Rota
onAuthStateChanged(auth, (user) => { 
    if (user) {
        const nomeSalvo = localStorage.getItem('usuarioNome');
        const saudacaoNome = nomeSalvo ? nomeSalvo : user.email.split('@')[0];
        
        document.getElementById('user-greeting').innerHTML = `Olá, <span id="userName">${saudacaoNome}</span>`;
        carregar(); 
    } else {
        window.location.href = 'index.html'; 
    }
});

function carregar() {
    const hoje = new Date().toISOString().split('T')[0];
    onSnapshot(collection(db, "tarefas"), (snap) => {
        const mainList = document.getElementById('task-list');
        const todayList = document.getElementById('today-list');
        mainList.innerHTML = ""; todayList.innerHTML = "";
        let temHoje = false;

        snap.forEach(d => {
            const t = d.data();
            const id = d.id;
            
            const sampleConcluido = t.concluida;
            const classeConcluido = sampleConcluido ? 'card-concluido' : '';
            const classeBtnConcluido = sampleConcluido ? 'btn-concluido' : '';
            const atributoDisabled = sampleConcluido ? 'disabled' : '';
            
            // Define a classe CSS de acordo com a prioridade salva no Firebase
            const prioridadeClasse = t.prioridade ? `prioridade-${t.prioridade}` : 'prioridade-baixa';
            
            // HTML padrão do card de tarefa (Lista de Baixo) com prioridade inclusa
            const cardHtml = `
                <div class="card ${prioridadeClasse} ${classeConcluido}">
                    <h3>${t.titulo}</h3>
                    <p>${t.descricao}</p>
                    <small>📅 ${t.prazo}</small>
                    <div class="actions">
                        <button class="btn-action toggle-status ${classeBtnConcluido}" data-id="${id}" data-status="${t.concluida}">${t.concluida ? 'Reabrir' : 'Concluir'}</button>
                        <button class="btn-action editar-tarefa" data-id="${id}" data-titulo="${t.titulo}" data-desc="${t.descricao}" data-prazo="${t.prazo}" data-prioridade="${t.prioridade || 'baixa'}" ${atributoDisabled}>Editar</button>
                        <button class="btn-action btn-del deletar-tarefa" data-id="${id}">🗑️</button>
                    </div>
                </div>`;

            // SE A TAREFA FOR DE HOJE:
            if (t.prazo === hoje) {
                temHoje = true;
                const classeConcluidoHoje = t.concluida ? 'card-concluido' : '';
                const classeBtnConcluidoHoje = t.concluida ? 'btn-concluido' : '';
                
                todayList.innerHTML += `
                    <div class="card ${prioridadeClasse} ${classeConcluidoHoje}">
                        <h3>${t.titulo}</h3>
                        <p>${t.descricao}</p>
                        <div class="actions">
                            <button class="btn-action toggle-status ${classeBtnConcluidoHoje}" data-id="${id}" data-status="${t.concluida}">${t.concluida ? '✓ Reabrir' : 'Concluir'}</button>
                            <button class="btn-action btn-del deletar-tarefa" data-id="${id}">🗑️</button>
                        </div>
                    </div>`;
            }

            // Filtros da lista de baixo
            if (filtroAtual === 'pendentes' && !t.concluida && t.prazo <= hoje) mainList.innerHTML += cardHtml;
            if (filtroAtual === 'concluidas' && t.concluida) mainList.innerHTML += cardHtml;
            if (filtroAtual === 'futuras' && t.prazo > hoje) mainList.innerHTML += cardHtml;
        });

        if (!temHoje) {
            todayList.innerHTML = "<p>Sem tarefas por hoje, procure descansar</p>";
        }
        
        atribuirEventosCards();
    });
}

function atribuirEventosCards() {
    document.querySelectorAll('.toggle-status').forEach(btn => {
        btn.onclick = async (e) => {
            const id = e.target.getAttribute('data-id');
            const status = e.target.getAttribute('data-status') === 'true';
            await updateDoc(doc(db, "tarefas", id), { concluida: !status });
        };
    });

    document.querySelectorAll('.deletar-tarefa').forEach(btn => {
        btn.onclick = async (e) => {
            const id = e.target.getAttribute('data-id');
            if (confirm("Deseja apagar esta tarefa?")) await deleteDoc(doc(db, "tarefas", id));
        };
    });

    document.querySelectorAll('.editar-tarefa').forEach(btn => {
        btn.onclick = (e) => {
            editId = e.target.getAttribute('data-id');
            document.getElementById('t-titulo').value = e.target.getAttribute('data-titulo');
            document.getElementById('t-desc').value = e.target.getAttribute('data-desc');
            document.getElementById('t-prazo').value = e.target.getAttribute('data-prazo');
            document.getElementById('t-prioridade').value = e.target.getAttribute('data-prioridade') || 'baixa';
            document.getElementById('modal-title').innerText = "Editar Tarefa";
            abrirModal();
        };
    });
}

// Funções de Gerenciamento do Modal de Tarefas
const abrirModal = () => document.getElementById('modalTask').style.display = 'block';
const fecharModal = () => { 
    document.getElementById('modalTask').style.display = 'none'; 
    editId = null; 
    document.getElementById('t-titulo').value = '';
    document.getElementById('t-desc').value = '';
    document.getElementById('t-prazo').value = '';
    document.getElementById('t-prioridade').value = 'baixa';
};

document.getElementById('btn-abrir-modal').onclick = () => {
    document.getElementById('modal-title').innerText = "Nova Tarefa";
    abrirModal();
};
document.getElementById('btn-fechar-modal').onclick = fecharModal;

document.getElementById('btn-salvar-tarefa').onclick = async () => {
    const data = {
        titulo: document.getElementById('t-titulo').value,
        descricao: document.getElementById('t-desc').value,
        prazo: document.getElementById('t-prazo').value,
        prioridade: document.getElementById('t-prioridade').value,
        concluida: false
    };
    if (editId) {
        delete data.concluida; // Impede que o status de concluído seja resetado ao editar
        await updateDoc(doc(db, "tarefas", editId), data);
    } else {
        await addDoc(collection(db, "tarefas"), data);
    }
    fecharModal();
};

// Filtros
const gerenciarFiltro = (val, btnElem) => {
    filtroAtual = val;
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btnElem.classList.add('active');
    carregar();
};

document.getElementById('btn-filtro-pendentes').onclick = (e) => gerenciarFiltro('pendentes', e.target);
document.getElementById('btn-filtro-concluidas').onclick = (e) => gerenciarFiltro('concluidas', e.target);
document.getElementById('btn-filtro-futuras').onclick = (e) => gerenciarFiltro('futuras', e.target);

// Lógica de perfil (Modal de Configurações)
document.getElementById('btn-config').onclick = () => {
    const userNameSpan = document.getElementById('userName');
    const usuarioLogado = auth.currentUser;
    modalOpcoes.style.display = 'flex';
    if (userNameSpan) inputNovoNome.value = userNameSpan.textContent;
    if (usuarioLogado) inputNovoEmail.value = usuarioLogado.email;
    inputNovaSenha.value = "";
    inputNovoNome.focus();
};

if (btnFecharOpcoes) {
    btnFecharOpcoes.onclick = () => { modalOpcoes.style.display = 'none'; };
}

if (btnSalvarNome) {
    btnSalvarNome.onclick = async () => {
        const novoNome = inputNovoNome.value.trim();
        const novoEmail = inputNovoEmail.value.trim();
        const novaSenha = inputNovaSenha.value.trim();
        const userNameSpan = document.getElementById('userName');
        const user = auth.currentUser;

        if (!user) { alert("Usuário não autenticado."); return; }

        if (novoNome !== "") {
            if (userNameSpan) userNameSpan.textContent = novoNome;
            localStorage.setItem('usuarioNome', novoNome);
        } else { alert("Por favor, digite um nome válido."); return; }

        try {
            if (novoEmail !== "" && novoEmail !== user.email) {
                await verifyBeforeUpdateEmail(user, novoEmail);
                alert("Um e-mail de verificação foi enviado para o novo endereço!");
            }
            if (novaSenha !== "") {
                if (novaSenha.length >= 6) {
                    await updatePassword(user, novaSenha);
                    alert("Senha atualizada com sucesso!");
                } else { alert("A nova senha deve conter pelo menos 6 caracteres."); return; }
            }
            alert("Alterações de perfil processadas!");
            modalOpcoes.style.display = 'none';
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/requires-recent-login') {
                alert("Por segurança, faça login novamente para aplicar as mudanças.");
            } else { alert("Erro ao salvar alterações: " + error.message); }
        }
    };
}

window.onclick = (e) => {
    if (e.target === modalOpcoes) modalOpcoes.style.display = 'none';
};

document.getElementById('btn-logout').onclick = () => {
    if(confirm("Deseja mesmo sair?")) signOut(auth);
};