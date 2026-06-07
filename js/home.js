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
        
        // Limpa as listas de forma eficiente
        mainList.innerHTML = ""; 
        todayList.innerHTML = "";
        let temHoje = false;

        snap.forEach(d => {
            const t = d.data();
            const id = d.id;
            
            const sampleConcluido = t.concluida;
            const classeConcluido = sampleConcluido ? 'card-concluido' : '';
            const classeBtnConcluido = sampleConcluido ? 'btn-concluido' : '';
            const atributoDisabled = sampleConcluido ? 'disabled' : '';
            const prioridadeClasse = t.prioridade ? `prioridade-${t.prioridade}` : 'prioridade-baixa';
            
            // --- PROTEÇÃO CONTRA XSS: Criando os elementos de texto com segurança ---
            const card = document.createElement('div');
            card.className = `card ${prioridadeClasse} ${classeConcluido}`;

            const h3 = document.createElement('h3');
            h3.textContent = t.titulo; // Protegido contra XSS

            const p = document.createElement('p');
            p.textContent = t.descricao; // Protegido contra XSS

            const small = document.createElement('small');
            small.textContent = `📅 ${t.prazo}`;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';

            // Botão Concluir/Reabrir
            const btnToggle = document.createElement('button');
            btnToggle.className = `btn-action toggle-status ${classeBtnConcluido}`;
            btnToggle.textContent = t.concluida ? 'Reabrir' : 'Concluir';
            btnToggle.onclick = async () => {
                await updateDoc(doc(db, "tarefas", id), { concluida: !sampleConcluido });
            };

            // Botão Editar
            const btnEditar = document.createElement('button');
            btnEditar.className = 'btn-action editar-tarefa';
            btnEditar.textContent = 'Editar';
            if (sampleConcluido) btnEditar.setAttribute('disabled', 'true');
            btnEditar.onclick = () => {
                editId = id;
                document.getElementById('t-titulo').value = t.titulo;
                document.getElementById('t-desc').value = t.descricao;
                document.getElementById('t-prazo').value = t.deadline || t.prazo; // Garante consistência do campo
                document.getElementById('t-prioridade').value = t.prioridade || 'baixa';
                document.getElementById('modal-title').innerText = "Editar Tarefa";
                abrirModal();
            };

            // Botão Deletar
            const btnDeletar = document.createElement('button');
            btnDeletar.className = 'btn-action btn-del deletar-tarefa';
            btnDeletar.textContent = '🗑️';
            btnDeletar.onclick = async () => {
                if (confirm("Deseja apagar esta tarefa?")) {
                    await deleteDoc(doc(db, "tarefas", id));
                }
            };

            // Monta o bloco de ações e o card principal
            actionsDiv.appendChild(btnToggle);
            actionsDiv.appendChild(btnEditar);
            actionsDiv.appendChild(btnDeletar);

            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(small);
            card.appendChild(actionsDiv);

            // --- SEÇÃO DE FILTROS DA LISTA GERAL ---
            if (filtroAtual === 'pendentes' && !t.concluida && t.prazo <= hoje) mainList.appendChild(card);
            if (filtroAtual === 'concluidas' && t.concluida) mainList.appendChild(card);
            if (filtroAtual === 'futuras' && t.prazo > hoje) mainList.appendChild(card);

            // --- SEÇÃO TAREFAS DE HOJE (Clone seguro para evitar duplicidade de nós no DOM) ---
            if (t.prazo === hoje) {
                temHoje = true;
                const cardHoje = card.cloneNode(true);
                
                // Readiciona os eventos aos botões do card clonado (cloneNode não copia eventos executados via propriedade)
                const botoesHoje = cardHoje.querySelectorAll('.btn-action');
                
                // Botão de Status de Hoje
                botoesHoje[0].textContent = t.concluida ? '✓ Reabrir' : 'Concluir';
                botoesHoje[0].onclick = async () => {
                    await updateDoc(doc(db, "tarefas", id), { concluida: !sampleConcluido });
                };
                
                // O botão Editar não existe na lista de hoje na sua lógica original, então removemos se o clone o trouxe
                if(botoesHoje[1] && botoesHoje[1].textContent === 'Editar') {
                    botoesHoje[1].remove();
                }

                // Botão de Deletar de Hoje
                const btnDelHoje = cardHoje.querySelector('.btn-del');
                if(btnDelHoje) {
                    btnDelHoje.onclick = async () => {
                        if (confirm("Deseja apagar esta tarefa?")) await deleteDoc(doc(db, "tarefas", id));
                    };
                }

                todayList.appendChild(cardHoje);
            }
        });

        if (!temHoje) {
            const pAviso = document.createElement('p');
            pAviso.textContent = "Sem tarefas por hoje, procure descansar";
            todayList.appendChild(pAviso);
        }
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