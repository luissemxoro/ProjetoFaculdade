import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, doc, onSnapshot, updateDoc, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let filtroAtual = 'pendentes';
let editId = null;

// Proteção da Rota: Se deslogado, joga para o index
onAuthStateChanged(auth, (user) => { 
    if (user) {
        document.getElementById('user-greeting').innerText = `Olá, ${user.email.split('@')[0]}`;
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
            
            // Criamos IDs e classes dinâmicas para associar os eventos sem usar onclick inline
            const cardHtml = `
                <div class="card">
                    <h3>${t.titulo}</h3>
                    <p>${t.descricao}</p>
                    <small>📅 ${t.prazo}</small>
                    <div class="actions">
                        <button class="btn-action toggle-status" data-id="${id}" data-status="${t.concluida}">${t.concluida ? 'Reabrir' : 'Concluir'}</button>
                        <button class="btn-action editar-tarefa" data-id="${id}" data-titulo="${t.titulo}" data-desc="${t.descricao}" data-prazo="${t.prazo}">Editar</button>
                        <button class="btn-action btn-del deletar-tarefa" data-id="${id}">🗑️</button>
                    </div>
                </div>`;

            if (t.prazo === hoje) {
                temHoje = true;
                todayList.innerHTML += `<div class="today-card"><h3>${t.titulo}</h3><div class="actions"><button class="btn-action toggle-status" data-id="${id}" data-status="${t.concluida}">✓</button></div></div>`;
            }

            if (filtroAtual === 'pendentes' && !t.concluida && t.prazo <= hoje) mainList.innerHTML += cardHtml;
            if (filtroAtual === 'concluidas' && t.concluida) mainList.innerHTML += cardHtml;
            if (filtroAtual === 'futuras' && t.prazo > hoje) mainList.innerHTML += cardHtml;
        });

        if (!temHoje) todayList.innerHTML = "<p>Sem tarefas por hoje, procure descansar</p>";
        
        // Mapeia os listeners dinâmicos após renderizar o HTML na tela
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
            document.getElementById('modal-title').innerText = "Editar Tarefa";
            abrirModal();
        };
    });
}

// Funções de Gerenciamento do Modal
const abrirModal = () => document.getElementById('modalTask').style.display = 'block';
const fecharModal = () => { 
    document.getElementById('modalTask').style.display = 'none'; 
    editId = null; 
    document.getElementById('t-titulo').value = '';
    document.getElementById('t-desc').value = '';
    document.getElementById('t-prazo').value = '';
};

// Configuração dos botões estáticos da tela
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
        concluida: false
    };
    if (editId) await updateDoc(doc(db, "tarefas", editId), data);
    else await addDoc(collection(db, "tarefas"), data);
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

// Engrenagem Opções e Deslogar
document.getElementById('btn-config').onclick = () => alert("Configurações em breve!");
document.getElementById('btn-logout').onclick = () => {
    if(confirm("Deseja mesmo sair?")) signOut(auth);
};