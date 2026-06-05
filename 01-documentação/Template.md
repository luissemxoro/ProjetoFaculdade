# 📝 Template: Proposta de Projeto

> Documentação oficial da proposta de projeto desenvolvida para a disciplina de projetos.

## 📋 Informações Básicas

### Nome do Projeto: To-Do WEB

### Equipe
| Nome | GitHub | Papel Principal |
| :--- | :--- | :--- |
| Luis Henrique Fernandes Rodrigues | [@luissemxoro](https://github.com/luissemxoro) | Full Stack / Documentação |

### Link do Repositório
`https://github.com/luissemxoro/ProjetoFaculdade`

---

## 🎯 Identificação do Problema

### 1. Descrição do Problema
* **Quem enfrenta esse problema?** Pessoas de todas as idades que encontram dificuldades na organização de tarefas, rotinas e compromissos diários.
* **Quando esse problema ocorre?** No cotidiano. A falta de simplicidade nas ferramentas faz com que os usuários esqueçam compromissos e falhem em estruturar o dia com agilidade.
* **Por que esse problema é importante?** A desorganização de processos simples gera um desperdício severo de tempo. Em uma rotina dinâmica, otimizar cada minuto torna-se um diferencial indispensável para a saúde mental e produtividade.
* **Qual o impacto negativo desse problema?** A ausência de monitoramento de prazos e lembretes visuais causa o esquecimento crônico de obrigações, afetando desde atividades básicas até eventos profissionais de alta prioridade, gerando ansiedade e sobrecarga.

### 2. Pesquisa de Soluções Existentes

| Solução Existente | Limitações | Como o To-Do WEB se diferencia |
| :--- | :--- | :--- |
| **Todoist** | O plano gratuito limita rigorosamente a quantidade de projetos ativos. | Permite a criação ilimitada de listas e projetos de forma gratuita. |
| **Microsoft To Do** | Experiência e integração significativamente inferiores caso o usuário não utilize o ecossistema Windows. | Funciona de forma 100% idêntica, fluida e independente em qualquer navegador ou sistema operacional. |
| **Google Tarefas** | Interface visual considerada poluída, rígida e com pouca distinção de prioridades. | Design minimalista baseado em *Glassmorphism* com forte apelo visual e intuitivo. |

### 3. Público-Target
* **Faixa Etária:** Entre 18 e 35 anos.
* **Perfil:** Estudantes universitários, profissionais autônomos, assistentes administrativos e microempreendedores.
* **Necessidades específicas:** Gerenciar prazos rígidos por meio de alertas visuais eficientes, conciliar múltiplos papéis (estudo/trabalho/vida pessoal) e esvaziar a mente de pendências para mitigar a ansiedade.
* **Conhecimento tecnológico:** Básico a intermediário.

---

## 💡 Solução Proposta

### 1. Descrição da Solução
O **To-Do WEB** une um visual minimalista baseado em *Glassmorphism* à total independência de sistemas operacionais. A aplicação oferece criação ilimitada de projetos para segmentar rotinas sem poluir a tela. 

O grande diferencial do projeto reside na **organização visual inteligente por cores e níveis de prioridade**. Ao associar tons e marcadores específicos para cada tipo de compromisso, o usuário consegue identificar de forma instantânea (com um único olhar sobre a tela) o que é urgente, o que pertence ao escopo profissional e o que é pessoal.

### 2. Funcionalidades Principais (MVP)

- [x] **Funcionalidade 1: Interface Minimalista Web-First**
  * *Descrição:* Interface acessível via navegadores modernos, responsiva, leve e com design limpo.
  * *Valor:* Garante uma experiência unificada tanto no computador quanto no celular, quebrando barreiras de ecossistema.
- [x] **Funcionalidade 2: Criação Ilimitada de Projetos**
  * *Descrição:* Estrutura dinâmica que possibilita ao usuário criar quantas listas personalizadas desejar.
  * *Valor:* Liberdade total para segmentar obrigações, separando os ambientes profissionais e pessoais em uma só central.
- [x] **Funcionalidade 3: Organização Visual por Cores e Prioridades**
  * *Descrição:* Categorização imediata (Alta, Média, Baixa e Concluída) com comportamentos e estilos dinâmicos baseados no status da tarefa.
  * *Valor:* Reduz o esforço cognitivo do usuário através de identificação visual imediata de urgências.

### 3. Funcionalidades Futuras (Pós-MVP)
* [ ] Modo Foco (Temporizador Pomodoro integrado).
* [ ] Subtarefas estruturadas em formato de Checklist.
* [ ] Sistema para anexar arquivos e mídias aos cards de tarefas.

---

## 🛠️ Especificações Técnicas

### 1. Arquitetura do Sistema
---

## 🛠️ Especificações Técnicas

### 1. Arquitetura do Sistema

```
┌─────────────────────────┐
│        FRONTEND         │
│        HTML/CSS         │
└───────────┬─────────────┘
            │
            ↓ REST API
┌─────────────────────────┐
│        BACKEND          │
│      JAVA SCRIPT        │
└───────────┬─────────────┘
            │
            ↓ SQL/NoSQL
┌─────────────────────────┐
│        DATABASE         │
│        FIREBASE         │
└─────────────────────────┘
```

### 2. Stack Tecnológica

| Camada | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / CSS3 | Escolhidos pela alta flexibilidade na construção do design responsivo (*Glassmorphism*) e familiaridade técnica da equipe. |
| **Backend** | JavaScript (ES6) | Linguagem nativa da web, garantindo total sinergia com o frontend através de arquitetura baseada em módulos. |
| **Banco de Dados & Auth** | Firebase (Firestore) | Praticidade na persistência em tempo real e gerenciamento nativo e seguro de sessões de usuários. |

### 3. Requisitos Não-Funcionais
* **Performance:** O carregamento da interface e a renderização das tarefas devem ocorrer de forma ágil, garantindo usabilidade estável mesmo em conexões mobile limitadas.
* **Segurança:** Autenticação robusta controlada via Firebase Auth, validação de e-mails existentes na recuperação de senha e proteção de escopo de leitura/escrita de dados.
* **Usabilidade:** Design adaptável e intuitivo, oferecendo suporte a rolagem lateral otimizada em dispositivos móveis e suporte a Modo Escuro dinâmico.
* **Escalabilidade:** Estrutura modular em JavaScript que permite o crescimento estável da aplicação e adição de novas features sem quebras de escopo.

---

## 📅 Planejamento e Cronograma

### Desenvolvimento Realizado e Próximos Passos

#### 🗓️ Mês 1: Fundação & Estrutura Base (Concluído)
* [x] Configuração inicial do repositório GitHub e ambiente de desenvolvimento local (VS Code).
* [x] Desenvolvimento das telas e protótipos de interface.
* [x] Criação da estrutura de dados e setup inicial do Firebase Console.
* [x] Implementação dos módulos base de autenticação e tratamento de erros.

#### 🗓️ Mês 2: Desenvolvimento de Features & Refinamento (Concluído)
* [x] Implementação dos fluxos completos de tarefas: Criação, Edição, Deleção e Filtros.
* [x] Integração total entre os estados de UI (Frontend) e o banco de dados Firestore (Backend).
* [x] Desenvolvimento da lógica segura de redefinição de senha com tratamento de e-mails inválidos/inexistentes.
* [x] Aplicação das regras de responsividade (rolagem horizontal na seção "Hoje") e estilização visual das prioridades.

#### 🗓️ Mês 3: Finalização & Entrega (Em Andamento)
* [x] Correção de bugs críticos de segurança e validação do Firebase Auth.
* [x] Otimização de performance e organização estrutural do CSS de forma comentada.
* [x] Finalização do README explicativo principal do repositório.
* [ ] Preparação dos materiais de apresentação acadêmica (slides e gravação de demo).

### Divisão de Responsabilidades
* **Luis Henrique Fernandes Rodrigues:** Desenvolvimento Full Stack, Arquitetura do Banco de Dados, Design de Interface (UI/UX) e Escrita da Documentação Técnica.

---

## 📊 Métricas de Sucesso
- [x] **Funcional:** 100% das funcionalidades descritas no MVP totalmente integradas e operacionais.
- [x] **Usabilidade:** Testes práticos realizados com usuários reais validando a facilidade e a simplicidade da interface.
- [x] **Performance:** Tempo de resposta imediato na renderização local e transições de tela fluidas.
- [x] **Qualidade de Código:** Código desacoplado, refatorado, modularizado e limpo de bugs de bloqueio.
- [ ] **Engajamento Git:** Histórico robusto com mais de 20 commits estruturados mapeando a evolução das features.

---

## 🔒 Considerações de Segurança
- [x] Conexão segura sob protocolo HTTPS obrigatório via provedor de hospedagem.
- [x] Validação rigorosa dos campos de entrada de dados no formulário antes das requisições.
- [x] Tratamento explícito de exceções no client-side para evitar vazamentos de logs de erro do console Firebase.
- [x] Controle de redefinição de senhas com proteção contra entradas nulas ou formatos inválidos.

---

## 🌍 Impacto Social Esperado

### 1. Benefícios Diretos
* **Aumento da Produtividade:** Centralização prática que mitiga distrações e organiza fluxos caóticos em um painel limpo.
* **Redução da Carga Mental:** O registro imediato das pendências atua diretamente na diminuição da ansiedade ligada ao receio de esquecimento de prazos.

### 2. Sustentabilidade e Futuro
* **Arquitetura Open-Source:** A disponibilização do código no GitHub abre precedentes para que novos estudantes e desenvolvedores utilizem a aplicação como base acadêmica, propondo melhorias de forma comunitária e sem custos de manutenção de software.

---

## 📚 Referências

### Pesquisa do Problema
1. **G1 Globo (Saúde e Carreira):** Dados sobre o recorde de afastamentos por saúde mental no Brasil devido à sobrecarga de tarefas e dificuldades na gestão de tempo.  
   * Disponível em: `https://g1.globo.com/trabalho-e-carreira/noticia/2026/01/26/brasil-tem-mais-de-546-mil-afastamentos-por-saude-mental-em-2025-e-bate-recorde-pela-segunda-vez-em-10-anos.ghtml`
2. **Repositório Ânima Educação:** Estudo acadêmico abordando a sobrecarga de atividades, impactos psicológicos e a necessidade crônica de ferramentas eficazes de gestão de tempo.  
   * Disponível em: `https://repositorio.animaeducacao.com.br/items/3b4b8c5f-70a4-48ce-a329-c2a0973aa620/full`

### Referências Técnicas
1. **Firebase Authentication & Firestore Documentation:** Guias e referências oficiais do Google para consumo de métodos de autenticação e persistência NoSQL.
2. **MDN Web Docs (CSS Flexible Box Layout & Grid):** Documentação técnica utilizada como base para a responsividade e o alinhamento estrutural dos cards e modais.
## ✅ Aprovação

### Checklist de Validação da Proposta

Antes de submeter, verifique:

- [ ] Problema claramente definido e justificado
- [ ] Solução viável tecnicamente em 3 meses
- [ ] Público-alvo identificado
- [ ] Funcionalidades MVP bem definidas
- [ ] Stack tecnológica escolhida e justificada
- [ ] Cronograma realista
- [ ] Divisão de tarefas entre membros
- [ ] Repositório GitHub criado
- [ ] Impacto social claro
- [ ] Referências incluídas