# SPARK - Landing Page de Soluções Digitais

Esta é a documentação para o projeto da landing page da SPARK, uma empresa focada em soluções digitais como PDV, ERP e automação de processos para pequenas e médias empresas.

## 📜 Descrição

O projeto consiste em uma landing page moderna e responsiva, desenvolvida para apresentar as soluções da SPARK, capturar o interesse de potenciais clientes e direcioná-los para o contato através de um formulário funcional. A página é estática, mas utiliza React para componentização e interatividade, e EmailJS para a funcionalidade do formulário de contato.

## ✨ Funcionalidades

- **Layout Responsivo:** Totalmente adaptado para uma experiência de usuário consistente em desktops, tablets e dispositivos móveis.
- **Seções Informativas:** Inclui seções dedicadas para apresentar a empresa (Hero), os serviços oferecidos, perguntas frequentes (FAQ) e informações de contato.
- **Navegação Suave (Smooth Scrolling):** Links no menu e no rodapé que rolam suavemente para a seção correspondente na página.
- **Formulário de Contato Funcional:** Um formulário de contato que envia os dados preenchidos para um e-mail pré-configurado usando um serviço de terceiros.
- **Feedback Visual:** O formulário de contato exibe um estado de carregamento durante o envio para melhorar a experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - [**React**](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
  - [**Vite**](https://vitejs.dev/) - Ferramenta de build para um desenvolvimento frontend moderno e rápido.
  - [**TypeScript**](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática.
  - [**Tailwind CSS**](https://tailwindcss.com/) - Framework de CSS utility-first para estilização rápida e responsiva.
- **Serviços Externos:**
  - [**EmailJS**](https://www.emailjs.com/) - Serviço para enviar e-mails diretamente do frontend sem a necessidade de um backend.

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo.

**1. Clone o repositório:**
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO>
```

**2. Instale as dependências:**
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Depois, execute o comando abaixo na raiz do projeto para instalar todas as bibliotecas necessárias.
```bash
npm install
```

**3. Configure as Variáveis de Ambiente:**
Para que o formulário de contato funcione, você precisará de credenciais do EmailJS.
- Crie uma cópia do arquivo `.env.example` e renomeie-a para `.env`.
- Preencha o arquivo `.env` com as suas chaves do EmailJS.

O conteúdo do seu arquivo `.env` deve ser o seguinte:
```
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

**4. Inicie o servidor de desenvolvimento:**
Execute o comando abaixo para iniciar a aplicação.
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173` (ou em outra porta, caso a 5173 esteja em uso).

## 🗂️ Estrutura de Arquivos

A estrutura de arquivos principal do projeto está contida na pasta `src/`:

```
src/
├── components/       # Componentes reutilizáveis (Hero, Services, FAQ, etc.)
├── pages/            # Componentes de página (Home, ThankYou)
├── assets/           # Imagens e outros recursos estáticos (se houver)
├── index.css         # Estilos globais e diretivas do Tailwind
├── main.tsx          # Ponto de entrada da aplicação React
└── App.tsx           # Componente principal que define as rotas
```

## 🔗 Endpoints e Serviços Externos

Como este é um projeto frontend, ele não possui uma API com endpoints próprios. A única comunicação externa relevante é com o serviço **EmailJS**.

- **Serviço:** EmailJS
- **Finalidade:** Enviar os dados do formulário de contato para um e-mail designado.
- **Acionamento:** Ocorre na função `handleSubmit` dentro do componente `src/components/Contact.tsx`.
- **Configuração:** As credenciais (Service ID, Template ID, Public Key) são gerenciadas através de variáveis de ambiente, conforme descrito na seção de configuração.
