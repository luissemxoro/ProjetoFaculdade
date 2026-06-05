# 📓 To-Do WEB — Guia de Uso e Manual do Usuário

Bem-vindo ao **To-Do WEB**, um gerenciador de tarefas moderno, responsivo e fluido. Este repositório foi desenvolvido com foco em organização diária, produtividade e uma experiência visual minimalista utilizando o conceito de *Glassmorphism* (efeito de vidro fosco).

Este documento serve como o **Manual Oficial do Usuário** para guiar você em todas as etapas, desde o primeiro acesso até a gestão avançada da sua rotina.

---

## 💻 Pré-requisitos para Rodar Localmente

Antes de começar, certifique-se de que você possui o [Visual Studio Code](https://code.visualstudio.com/) instalado em sua máquina e a extensão **Live Server** ativa no editor.

1. Baixe ou clone este repositório no seu computador.
2. Abra a pasta raiz do projeto no **VS Code**.
3. Localize o arquivo `index.html` na árvore lateral de arquivos.
4. Clique com o botão direito sobre ele e selecione **"Open with Live Server"**.
5. O sistema abrirá automaticamente em seu navegador padrão.

---

## 📖 Manual do Usuário

### 🔑 1. Criando sua Conta e Acessando o Sistema
* **Acesse a Tela Inicial:** Assim que a aplicação carregar, você será recebido por uma interface de login limpa e moderna.
* **Crie seu Cadastro:** Se for o seu primeiro acesso, clique na opção **"Cadastrar"** localizada no rodapé do card. Insira um endereço de e-mail válido e crie uma senha.
* **Realize o Login:** Retorne à tela principal, insira suas credenciais e clique em **"Entrar"** para acessar o seu painel pessoal seguro.
* **Recuperação de Acesso:** Caso esqueça sua senha, clique em **"Esqueci minha senha"**. Digite o e-mail cadastrado para receber as instruções imediatas de redefinição de acesso controladas pelo Firebase.

### 📅 2. Gerenciando suas Tarefas Diárias

#### 📝 Criando uma Nova Tarefa
1. No canto inferior direito da tela, clique no **Botão Flutuante (+)**.
2. Um formulário elegante se abrirá em formato de modal. Preencha os seguintes campos:
   * **Título:** O nome ou resumo da atividade.
   * **Descrição (Opcional):** Notas adicionais sobre o que precisa ser feito.
   * **Prioridade:** Defina a urgência entre **Alta** (marcador Vermelho), **Média** (marcador Amarelo) ou **Baixa** (marcador Azul).
3. Clique em **"Salvar"**. A tarefa será sincronizada e renderizada imediatamente no seu painel.

#### 🔄 Organizando, Filtrando e Customizando
* **Carrossel "Tarefas de Hoje":** As principais pendências e tarefas críticas ficam destacadas no topo em um carrossel horizontal responsivo. No celular, basta arrastar para o lado; no computador, utilize a rolagem customizada.
* **Filtros de Estado:** Logo acima do grid principal de cards, utilize os botões de ação para alternar a visualização instantaneamente entre: *Conluidas*, *Não Concluidas* ou *Pendentes*.

#### ✔️ Concluindo, Editando e Excluindo
* **Finalizar uma Tarefa:** Clique no ícone de conclusão localizado no card da tarefa. O item ganhará um fundo verde fosco absoluto, o texto será riscado e a edição será bloqueada automaticamente para garantir a integridade do seu histórico.
* **Modificar Dados:** Caso precise alterar o texto ou a prioridade de uma tarefa pendente, clique no botão de edição para reabrir o formulário.
* **Remover do Painel:** Para excluir definitivamente uma atividade que não faz mais sentido na sua rotina, clique no botão de exclusão (Vermelho).

### 🚪 3. Encerrando a Sessão
* Para manter o isolamento de dados e a segurança da sua conta (especialmente em computadores compartilhados), clique no botão **"Sair"** ou **"Deslogar"** posicionado junto ao chip do seu perfil no topo direito do cabeçalho.

---

## 🛠️ Stack Tecnológica Envolvida

* **Frontend:** HTML5 estrutural e estilização moderna via CSS3 (*Glassmorphism*).
* **Backend:** Lógica e manipulação dinâmica do DOM através de JavaScript Puro (ES6+ Modules).
* **Banco de Dados & Auth:** Persistência em tempo real e sessões seguras gerenciadas via **Firebase (Auth & Cloud Firestore)**.