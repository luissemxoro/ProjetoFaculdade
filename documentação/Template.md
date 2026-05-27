# 📝 Template: Proposta de Projeto

> Use este template para documentar sua proposta de projeto para a disciplina

## 📋 Informações Básicas

### Nome do Projeto
To do APP

### Equipe
| Nome | GitHub | Papel Principal |
|------|--------|-----------------|
| Luis Henrique Fernandes Rodrigues| luissemxoro | Frontend |
| Nome 2 | @username2 | Frontend / Backend / Full Stack |
| Nome 3 | @username3 | Frontend / Backend / Full Stack |

### Link do Repositório
`https://github.com/luissemxoro/ProjetoFaculdade`

---

## 🎯 Identificação do Problema

### 1. Descrição do Problema
Descreva claramente o problema que seu projeto pretende resolver:
- **Quem** enfrenta esse problema?
Pessoas de todas as idades com problema de organização com tarefas e compromissos.
- **Quando** esse problema ocorre?
No dia a dia. Pessoas esquecem de compromissos/tarefas e não consegue, organizalas com facilidade e simplicidade.
- **Por que** esse problema é importante?
Por que quando se desorganiza algo que é para ser simples, acaba gerando muita perca de tempo, no mundo de hoje em dia, todo minuto agilizado é extremamente importante.
- **Qual** o impacto negativo desse problema?
O impacto é relativamente grande e importante, causando perca de minutos ou até horas, por acabar esquecendo ou não tendo um lembrete de compromissos e tarefas que seriam simples ou até mesmo mais importantes, como compromissos de eventos ou atividades.

**Exemplo:**
>A maioria de pessoas que trabalham ou estudam frequentemente esquecem de datas dos seus compromissos ou atividades, oque pode acarretar em graves consequencias. Algo que deveria ser simples pode acabar se tornando em algo mais prejudicial tanto na vida social quanto na profissional.


### 2. Pesquisa de Soluções Existentes
Liste soluções que já existem e explique suas limitações:

| Solução Existente | Limitações | Como seu projeto é diferente |
|-------------------|------------|------------------------------|
| Todoist | O plano gratuito limita a quantidade de projetos ativos. | Não tem limitação de projetos.|
| Microsoft To Do |  A experiência é muito inferior se você não usa o Window | Não tem problemas que diferencie sua experiência.  |
| Google Tarefas |Visual poluído | Visual intuitivo |

### 3. Público-Alvo
- **Idade:** 10-80
- **Perfil:** Pessoas com muitos compromissos/tarefas
- **Necessidades específicas:** Gerenciar prazos rígidos com alertas visuais, conciliar múltiplos papéis, esvaziar a mente para reduzir a ansiedade.
- **Conhecimento tecnológico:** [Iniciante]

---

## 💡 Solução Proposta

### 1. Descrição da Solução
Descreva sua solução em 2-3 parágrafos. Foque em:

O To do APP une visual minimalista e independência de sistema operacional, funcionando de forma idêntica em qualquer navegador. Ele oferece criação ilimitada de projetos para separar sua rotina sem poluir a tela.Seu diferencial é a separação de tarefas por cores customizadas. Você pode associar tons diferentes para cada tipo de compromisso, permitindo bater o olho na tela e identificar instantaneamente o que é urgente, o que é trabalho ou o que é pessoal.



### 2. Funcionalidades Principais (MVP)

Liste as 3-5 funcionalidades essenciais para o MVP:

- [ ] **Funcionalidade 1**: [Interface Minimalista Web-First]
  - Descrição: Site acessível por qualquer navegador e sistema operacional, com design limpo e sem poluição visual.
  - Valor para usuário: Garante uma experiência idêntica, leve e fluida em qualquer computador ou celular, sem barreiras de ecossistema.

- [ ] **Funcionalidade 2**: Criação Ilimitada de Projetos
  - Descrição: Sistema flexível que permite ao usuário criar quantas pastas e listas personalizadas desejar.
  - Valor para usuário:  Dá total liberdade para organizar a rotina e separar a vida pessoal da profissional em um único lugar.

- [ ] **Funcionalidade 3**: Organização Visual por Cores
  - Descrição: Recurso de categorização que permite atribuir cores customizadas para tarefas e listas diferentes.
  - Valor para usuário: Permite identificar prioridades e tipos de compromissos instantaneamente ao bater o olho na tela.

### 3. Funcionalidades Futuras (Pós-MVP)

Funcionalidades que seriam interessantes mas não são essenciais:
- [ ] Modo Foco / Timer Pomodoro
- [ ] Subtarefas em Checklist
- [ ] Anexos de Arquivos

---

## 🛠️ Especificações Técnicas

### 1. Arquitetura do Sistema

```
┌─────────────────────────┐
│      FRONTEND           │
│         HTML/CSS        │
└───────────┬─────────────┘
            │
            ↓ REST API
┌─────────────────────────┐
│      BACKEND            │
│   JAVA SCRIPT           │
└───────────┬─────────────┘
            │
            ↓ SQL/NoSQL
┌─────────────────────────┐
│      DATABASE           │
│       FIREBASE          │
└─────────────────────────┘
```

### 2. Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| **Frontend** | HTML/CSS | [Por ser visualmente simples de manuseio e ter mais intimidade e praticidade] |
| **Backend** | JavaScrip | [Mais viavel com o front-end escolhido] |
| **Banco de Dados** | Firebase | [Por ser pratico com o uso do site] |
| **Hospedagem** | Netlify | [Opção gratuita] |

### 3. Requisitos Não-Funcionais

- **Performance**: Carregar a página inicial e a lista de tarefas em menos de 1.5 segundos em conexões 3G estáveis.
- **Segurança**: Criptografia de dados ponta a ponta (HTTPS obrigatório) e armazenamento seguro de senhas com hashing bcrypt.
- **Usabilidade**: Interface limpa e responsiva que se adapta automaticamente a telas de computadores, tablets e smartphones.
- **Escalabilidade**: Arquitetura pronta para suportar o crescimento do MVP, aguentando até 1.000 usuários cadastrados sem perda de desempenho.
---

## 📅 Planejamento

### Cronograma de 3 Meses

#### Mês 1: Fundação (Semanas 1-4)
- **Semana 1-2**: Setup e Planejamento
  - [X] Configurar repositório GitHub - https://github.com/luissemxoro/ProjetoFaculdade
  - [X] Configurar ambiente de desenvolvimento - VSCode
  - [X] Criar protótipos - Desenhos/imagens geradas por IA
  

- **Semana 3-4**: Funcionalidade Base
  - [X] Implementar autenticação básica
  - [X] Criar estrutura do banco de dados
  - [X] Desenvolver telas principais (sem funcionalidades)

#### Mês 2: Desenvolvimento (Semanas 5-8)
- **Semana 5-6**: Funcionalidades
  - [X] Implementar Criação de tarefas
  - [X] Implementar Edição de Tarefas
  - [X] Implementar Botão de configurações/Opções
  - [X] Integração frontend-backend
  - [X] Testes básicos

- **Semana 7-8**: Funcionalidades Adicionais
  - [X] Redefinição de senha e e-mail.
  - [X] Refinamento de UI/UX
  - [X] Tratamento de erros
  

#### Mês 3: Finalização (Semanas 9-12)
- **Semana 9-10**: Refinamento
  - [ ] Correção de bugs
  - [ ] Otimizações de performance
  - [ ] Testes com usuários
  - [ ] Ajustes baseados em feedback

- **Semana 11**: Documentação
  - [ ] README completo
  - [ ] Documentação de API (se aplicável)
  - [ ] Guia de instalação
  - [ ] Manual do usuário

- **Semana 12**: Apresentação
  - [ ] Preparar slides
  - [ ] Gravar demo
  - [ ] Ensaiar apresentação
  - [ ] Deploy final

### Divisão de Responsabilidades

| Membro | Responsabilidade Principal | Responsabilidade Secundária |
|--------|---------------------------|----------------------------|
| [Luis Henrique] | Frontend | Testes |
| [Nicolas] | Backend | Banco de Dados |
| [Pedro] | Design/UX | Documentação |

---

## 📊 Métricas de Sucesso

### Como saberemos que o projeto foi bem-sucedido?

- [ ] **Funcional**: Todas as funcionalidades MVP implementadas e funcionando
- [ ] **Usabilidade**: 3+ usuários testaram e consideraram fácil de usar
- [ ] **Performance**: Tempo de resposta < 2 segundos
- [ ] **Código**: Sem bugs críticos, código organizado
- [ ] **Documentação**: README completo permite outro dev configurar o projeto
- [ ] **GitHub**: 20+ commits bem distribuídos, issues organizadas

### Métricas Quantitativas (se aplicável)
- Número de usuários cadastrados: [meta]
- Taxa de retenção: [meta]
- Tempo médio de uso: [meta]
- Satisfação do usuário (NPS): [meta]

---

## 🎨 Design e Experiência do Usuário

### 1. Fluxo Principal do Usuário

Descreva o fluxo principal passo a passo:

1. Usuário abre o site
2. Cria seu usuario com facilidade
3. Loga seu e-mail e sua senha
4. Cria suas tarefas
5. Organiza da sua forma
6. Marca tarefas como "concluido" ou "a fazer"
7. Desloga

### 2. Wireframes/Protótipos

Link para protótipos (Figma, Adobe XD, etc.):
`[https://drive.google.com/file/d/1sM5PL4vFiqje3-jLkwKExn0HX97qqKi9/view?usp=drive_link]`
`[https://drive.google.com/file/d/1pWTqlKFALIxQr1fnh8EeeLNnJq-CaFyH/view?usp=drive_link]`


### 3. Princípios de Design

- **Simplicidade**: Uso máximo de espaços em branco, linhas finas e eliminação de menus ocultos ou complexos. As ações principais devem exigir apenas um clique.
- **Acessibilidade**: Contraste adequado entre os textos e os fundos, suporte para navegação via teclado e fontes legíveis para facilitar a leitura.
- **Responsividade**: Layout flexível que reorganiza as listas verticalmente em telas menores. Garante a mesma facilidade de uso tanto no monitor do PC quanto no celular.
- **Feedback visual**: Mudanças imediatas na tela ao realizar ações, como o risco automático no texto ao marcar uma tarefa como concluída e animações suaves ao arrastar os itens.

---

## 🔒 Considerações de Segurança

Liste considerações de segurança relevantes:

- [X] HTTPS obrigatório
- [X] Validação de dados de entrada
- [X] Validação por e-mail
- [X] Troca de e-mail caso ocorra esquecimento
- [X] Troca de senha caso ocorra esquecimento
- [ ] Autenticação segura (senhas hasheadas)
- [ ] Proteção contra SQL Injection
- [ ] Proteção contra XSS
- [ ] [Outras relevantes ao projeto]

---

## 🌍 Impacto Social Esperado

### 1. Benefícios Diretos
- [Aumento da Produtividade Diária:] Centralização de tarefas em uma única tela para eliminar distrações e acelerar a execução.
- [Redução da Carga Mental:] Registro rápido de pendências para evitar o estresse de esquecer compromissos importantes.
- [Foco nas Prioridades Reais:] Visualização clara de prazos e tarefas urgentes por meio de marcadores visuais coloridos.

### 2. Potencial de Escala
Expansão para Dispositivos Móveis: Transformar o site em um aplicativo nativo (iOS e Android) para permitir o uso offline e notificações push diretas no celular.
Conectar o To do APP a ferramentas populares do mercado, como Google Agenda, Slack, Microsoft Teams e e-mails, centralizando o fluxo de trabalho dos usuários.

### 3. Sustentabilidade
Como o projeto poderia ser mantido a longo prazo?

O MVP permanece gratuito com as funções essenciais (projetos ilimitados e reordenação). Recursos avançados lançados pós-MVP (como o Modo Foco Pomodoro e anexos de arquivos) fariam parte de uma assinatura mensal acessível para cobrir os custos de servidores.
Abrir o código do projeto no GitHub permite que outros desenvolvedores ajudem a corrigir bugs, criar novas funcionalidades e traduzir o app de graça, reduzindo drasticamente o custo e o tempo de desenvolvimento técnico.

 
---

## 📚 Referências

Liste fontes de pesquisa e inspiração:

### Pesquisa do Problema
1.  Dados oficiais divulgados pelo G1 Globo apontando que o Brasil registrou recordes sucessivos em licenças médicas decorrentes de transtornos mentais, com um aumento severo motivado pela dificuldade de conciliar demandas profissionais e pessoais. 
-https://g1.globo.com/trabalho-e-carreira/noticia/2026/01/26/brasil-tem-mais-de-546-mil-afastamentos-por-saude-mental-em-2025-e-bate-recorde-pela-segunda-vez-em-10-anos.ghtml
2. Estudo científico sobre os impactos da desorganização, como a revisão bibliográfica desenvolvida pela Ânima Educação, que investiga como a falta de gestão de tempo e sobrecarga de tarefas diárias levam ao desgaste psicológico crônico.
https://repositorio.animaeducacao.com.br/items/3b4b8c5f-70a4-48ce-a329-c2a0973aa620/full
3. [Entrevistas com usuários]

### Referências Técnicas
1. [Documentação de tecnologias usadas]
2. [Tutoriais seguidos]
3. [Projetos similares que inspiraram]


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