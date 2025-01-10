# Gestão de Usuários com Node.js e Vue.js

Bem-vindo ao **Gestão de Usuários**, um sistema completo para cadastro, gerenciamento e autenticação de usuários. Este projeto foi desenvolvido para demonstrar a integração entre uma API REST em Node.js e um frontend dinâmico em Vue.js, com foco na segurança e boas práticas.

---

## 📖 Descrição

O sistema consiste em um backend desenvolvido em Node.js para gerenciar as funcionalidades de autenticação, CRUD de usuários e validação de permissões. O frontend, construído com Vue.js, consome a API e exibe uma interface interativa e amigável.

---

## 🚀 Funcionalidades

### Backend (API)
- **Autenticação** com tokens JWT.
- **CRUD de Usuários**: criação, leitura, atualização e exclusão.
- **Recuperação de Senha**: envio de email para redefinição de senha.
- **Validação de Sessão**: middleware para proteger rotas administrativas.

### Frontend
- **Cadastro e Login**: formulários responsivos para usuários.
- **Dashboard**: lista de usuários protegida por autenticação.
- **Edição de Usuários**: edição individual de informações.
- **Logout Seguro**: remoção de tokens armazenados localmente.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: plataforma backend.
- **Express**: framework web.
- **MySQL2**: driver para conexão com banco de dados.
- **Knex**: ORM para manipulação do banco de dados.
- **JWT**: autenticação baseada em tokens.
- **Bcrypt**: hash seguro para senhas.
- **Cors**: controle de acesso entre frontend e backend.

### Frontend
- **Vue.js**: framework frontend.
- **Vue Router**: gerenciamento de rotas.
- **Axios**: consumo de APIs REST.
- **Bulma**: framework CSS para estilização.

---

## 📂 Estrutura do Projeto

### Backend
```bash
📦 user-api
├── 📂 controllers       # Lógica do CRUD e autenticação
├── 📂 middlewares       # Validação de autenticação
├── 📂 migrations        # Scripts para criar tabelas no banco
├── 📂 routes            # Rotas da API
├── 📂 services          # Serviços auxiliares (e.g., envio de email)
└── index.js             # Arquivo principal da aplicação

📦 vue-users
├── 📂 src
│   ├── 📂 components     # Componentes Vue reutilizáveis
│   ├── 📂 views          # Páginas principais
│   ├── 📂 router         # Configuração de rotas
│   └── main.js          # Arquivo de entrada
├── 📂 public            # Arquivos estáticos
└── package.json         # Configuração do projeto Vue

