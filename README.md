# Status da Barbearia — Aberto/Fechado em tempo real

Duas páginas:

- `admin.html` — o barbeiro faz login e atualiza o status (aberto/fechado + mensagem opcional, tipo "fechado mais cedo hoje" ou "almoço até 14h"). **Não compartilhe esse link com clientes.**
- `index.html` — página pública. É esse link que vai no WhatsApp/Instagram para os clientes verem se está aberto antes de sair de casa. Atualiza sozinha, sem precisar recarregar a página.

O status fica salvo no Firebase (plano gratuito), então funciona em qualquer lugar, em tempo real.

## Passo 1 — Criar o projeto Firebase (você precisa fazer isso, é sua conta Google)

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e clique em **"Adicionar projeto"**. Dê um nome (ex: `status-minha-barbearia`) e conclua a criação.
2. No menu lateral, vá em **Build > Firestore Database** > **Criar banco de dados**. Escolha o modo de produção e a região mais próxima (ex: `southamerica-east1`).
3. Ainda no Firestore, vá na aba **Regras** e cole o conteúdo do arquivo [`firestore.rules`](firestore.rules) deste projeto, substituindo o que já está lá. Clique em **Publicar**.
4. No menu lateral, vá em **Build > Authentication** > **Vamos começar**. Ative o provedor **E-mail/senha**.
5. Ainda em Authentication, aba **Users**, clique em **Adicionar usuário** e crie o login do barbeiro (o e-mail e senha que ele vai usar no `admin.html`).
6. No menu lateral, clique na engrenagem (⚙️) > **Configurações do projeto**. Role até **Seus apps**, clique no ícone `</>` (Web) para registrar um app, dê um apelido e clique em **Registrar app**.
7. O Firebase vai mostrar um bloco `firebaseConfig` com `apiKey`, `authDomain`, etc. Copie esses valores e cole em [`firebase-config.js`](firebase-config.js) deste projeto, substituindo `"COLE_AQUI"` em cada campo.

## Passo 2 — Personalizar

- O nome "Barbershop 33" e a logo (`logo.png`) já estão configurados em `index.html` e `admin.html`.
- Em `index.html`, troque `https://wa.me/55SEUNUMERO` pelo link real de WhatsApp da barbearia (formato `https://wa.me/55DDDNUMERO`).

## Passo 3 — Publicar no GitHub Pages

1. Crie um repositório novo no GitHub e suba esta pasta (`status-barbearia`) para ele.
2. No repositório, vá em **Settings > Pages**, em "Branch" escolha `main` (ou `master`) e pasta `/ (root)`, salve.
3. Em alguns minutos o GitHub vai gerar um link tipo `https://seuusuario.github.io/status-barbearia/`.
   - Link público (pros clientes, manda no WhatsApp/Instagram): `https://seuusuario.github.io/status-barbearia/`
   - Link do painel (só o barbeiro usa): `https://seuusuario.github.io/status-barbearia/admin.html`

## Como o barbeiro usa no dia a dia

1. Abre o link do painel (`admin.html`) no celular, faz login uma vez (o navegador salva o login).
2. Toca em **Aberto** ou **Fechado**.
3. Se quiser, escreve uma mensagem (ex: "Fechado - almoço estendido até 14h30").
4. Toca em **Salvar atualização**. Pronto — quem acessar o link público já vê a mudança na hora.
