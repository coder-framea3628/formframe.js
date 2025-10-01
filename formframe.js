// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// ===== Injetar CSS =====
const style = document.createElement('style');
style.textContent = `
:root {
  --bg-color: #FFFFFF;
  --text-color: #513C60;
  --accent-color: #A77BC6;
  --secondary-bg: #f3f3f3;
  --border-color: rgba(81,60,96,0.1);
  --error-color: #FF0000;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: var(--bg-color);
  min-height: 100vh;
  overflow: auto;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 800px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  width: 150px;
}

.bottom-logo {
  display: none; /* Escondida inicialmente */
  margin: 20px auto 0;
  width: 100px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #A77BC6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite, scaleIn 0.5s forwards;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes scaleIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.loading-text {
  margin-top: 20px;
  font-size: 18px;
  color: #513C60;
  text-align: center;
}

.chat-container {
  display: none;
  background: #FFFFFF;
  padding: 20px;
  border-radius: 15px; /* Mais arredondado */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(5px); /* Efeito glass inicial */
}

.bot-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.bot-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  flex-shrink: 0;
}

.bot-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-content {
  flex: 1;
}

.bot-header {
  color: #202020;
  font-size: 14px;
  margin: 0 0 5px;
  font-weight: 500;
}

.chat-message {
  margin: 0;
  font-size: 16px;
  color: #513C60;
  opacity: 0;
  animation: fadeInMessage 0.5s forwards;
}

@keyframes fadeInMessage {
  to { opacity: 1; }
}

.typing-indicator {
  display: flex;
  margin-bottom: 15px;
}

.typing-dot {
  width: 8px;
  height: 8px;
  background: #A77BC6;
  border-radius: 50%;
  margin-right: 4px;
  animation: typingBounce 1.2s infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
}

.chat-input-wrapper {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px; /* Espaço extra após input */
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #A77BC6;
  border-radius: 20px; /* Mais arredondado */
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.chat-input:focus {
  border-color: #513C60;
  box-shadow: 0 0 5px rgba(81, 60, 96, 0.5);
}

.send-btn {
  background: #A77BC6;
  color: #FFFFFF;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.send-btn:hover {
  background: #513C60;
}

.form-container {
  display: none;
  background: rgba(255, 255, 255, 0.8); /* Glass effect */
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 20px; /* Mais arredondado */
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  animation: fadeIn 0.5s;
}

.success-container {
  display: none;
  text-align: center;
  padding: 20px;
}

.success-image {
  max-width: 600px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin-bottom: 20px;
}

.success-text {
  font-size: 18px;
  margin-bottom: 20px;
}

.back-btn {
  background: linear-gradient(135deg, #A77BC6, #513C60);
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s;
  margin-bottom: 10px;
}

.back-btn:hover {
  transform: scale(1.02);
}

.email-link {
  color: #A77BC6;
  text-decoration: underline;
  font-size: 14px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #513C60;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #A77BC6;
  border-radius: 15px; /* Mais arredondado */
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  color: #513C60;
}

.form-group input:focus, .form-group select:focus {
  border-color: #513C60;
  box-shadow: 0 0 5px rgba(81, 60, 96, 0.5);
}

.form-group select {
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6"><path fill="%23A77BC6" d="M0 0l6 6 6-6z"/></svg>') no-repeat right 10px center / 12px;
}

.form-group.invalid input, .form-group.invalid select {
  border-color: var(--error-color);
}

.error-message {
  color: var(--error-color);
  font-size: 12px;
  margin-top: 5px;
}

.checkbox-group {
  margin-bottom: 15px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #513C60;
}

.checkbox-group input {
  margin-right: 10px;
  accent-color: #A77BC6; /* Cor roxa no checkbox */
}

.checkbox-group a {
  color: #A77BC6;
  text-decoration: underline;
}

.submit-btn {
  background: linear-gradient(135deg, #A77BC6, #513C60);
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  border-radius: 20px; /* Mais arredondado */
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s, transform 0.3s;
}

.submit-btn:hover {
  transform: scale(1.02);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.privacy-text {
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  color: #513C60;
}

.privacy-text a {
  color: #A77BC6;
  text-decoration: underline;
}

/* Responsividade aprimorada */
@media (max-width: 600px) {
  .container {
    max-width: 390px;
    padding: 10px;
  }

  .chat-container, .form-container {
    padding: 15px;
    border-radius: 15px;
  }

  .chat-message {
    font-size: 14px;
  }

  .chat-input {
    font-size: 14px;
    padding: 8px;
  }

  .send-btn {
    padding: 8px 12px;
    font-size: 12px;
  }

  .form-row {
    flex-direction: column;
    gap: 10px;
  }

  .form-group input, .form-group select {
    font-size: 14px;
    padding: 8px;
    border-radius: 15px;
  }

  .submit-btn {
    padding: 10px 18px;
    font-size: 14px;
  }

  .privacy-text {
    font-size: 11px;
  }

  .success-image {
    max-width: 380px;
  }
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 10px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 800px;
    padding: 30px;
  }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML Estrutura =====
const appHTML = `
<div class="container">
  <img class="logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo">
  <div class="chat-container"></div>
  <div class="form-container"></div>
  <div class="success-container">
    <img class="success-image" src="https://framerusercontent.com/images/vkLDmMzKHdkT96PK45UOBjjzCk.png" alt="Obrigado">
    <p class="success-text">Obrigado pelas informações!</p>
    <button class="back-btn">Retornar ao site</button>
    <p>ou se preferir, envie um e-mail para <a class="email-link" href="mailto:contact@weframe.com.br">contact@weframe.com.br</a></p>
  </div>
  <img class="bottom-logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo">
</div>

<div class="loading-overlay">
  <div class="loader"></div>
  <p class="loading-text">Personalizando tudo para você...</p>
</div>
`;
document.body.innerHTML = appHTML;

// Elementos
const container = document.querySelector('.container');
const loadingOverlay = document.querySelector('.loading-overlay');
const chatContainer = document.querySelector('.chat-container');
const formContainer = document.querySelector('.form-container');
const successContainer = document.querySelector('.success-container');
const bottomLogo = document.querySelector('.bottom-logo');

// Chat logic
let userName = '';
let userCNPJ = '';
let companyName = '';

function startChat() {
  showTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator();
    typeChatMessage('Olá! Tudo bem? Vi que você tem interesse nos serviços da Frame e vou te ajudar.', () => {
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        typeChatMessage('Qual é o seu nome?', () => {
          showChatInput('name');
        });
      }, 1000);
    });
  }, 1000);
}

function typeChatMessage(text, callback) {
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';

  const avatar = document.createElement('div');
  avatar.className = 'bot-avatar';
  const img = document.createElement('img');
  img.src = 'https://framerusercontent.com/images/kZ6cuSls8xdGbbmC7hZcnHw1P4.png';
  img.alt = 'Assistente Virtual';
  avatar.appendChild(img);
  botMessage.appendChild(avatar);

  const content = document.createElement('div');
  content.className = 'message-content';

  const header = document.createElement('h4');
  header.className = 'bot-header';
  header.textContent = 'Assistente Virtual | Frame';
  content.appendChild(header);

  const message = document.createElement('p');
  message.className = 'chat-message';
  content.appendChild(message);
  botMessage.appendChild(content);
  chatContainer.appendChild(botMessage);

  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      message.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      if (callback) callback();
    }
  }, 50); // Velocidade de digitação
}

function showTypingIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'typing-dot';
    indicator.appendChild(dot);
  }
  chatContainer.appendChild(indicator);
}

function removeTypingIndicator() {
  const indicator = chatContainer.querySelector('.typing-indicator');
  if (indicator) indicator.remove();
}

function showChatInput(type) {
  const wrapper = document.createElement('div');
  wrapper.className = 'chat-input-wrapper';
  const input = document.createElement('input');
  input.className = 'chat-input';
  input.placeholder = type === 'name' ? 'Digite seu nome...' : 'Digite o CNPJ (ex: 00.000.000/0000-00)';
  input.setAttribute('aria-label', type === 'name' ? 'Campo para nome' : 'Campo para CNPJ');
  wrapper.appendChild(input);

  const sendBtn = document.createElement('button');
  sendBtn.className = 'send-btn';
  sendBtn.textContent = 'Enviar';
  sendBtn.setAttribute('aria-label', 'Enviar resposta');
  wrapper.appendChild(sendBtn);
  chatContainer.appendChild(wrapper);
  input.focus();

  // Máscara para CNPJ
  if (type === 'cnpj') {
    input.addEventListener('input', (e) => {
      e.target.value = maskCNPJ(e.target.value);
    });
  }

  function handleSubmit() {
    if (input.value.trim()) {
      if (type === 'name') {
        userName = input.value.trim();
        input.disabled = true;
        sendBtn.disabled = true;
        showLoadingInChat();
        setTimeout(() => {
          showTypingIndicator();
          setTimeout(() => {
            removeTypingIndicator();
            typeChatMessage(`Ótimo, ${userName}! Nosso ecossistema é exclusivo para empresas com CNPJ ativo.`, () => {
              showTypingIndicator();
              setTimeout(() => {
                removeTypingIndicator();
                typeChatMessage('Qual é o CNPJ da sua empresa?', () => {
                  showChatInput('cnpj');
                });
              }, 1000);
            });
          }, 1000);
        }, 1500);
      } else if (type === 'cnpj') {
        const cnpj = input.value.trim().replace(/[^\d]/g, '');
        if (validateCNPJ(cnpj)) {
          userCNPJ = cnpj;
          input.disabled = true;
          sendBtn.disabled = true;
          showLoadingInChat();
          companyName = ''; // Sem auto-fill
          setTimeout(() => {
            chatContainer.style.display = 'none';
            formContainer.style.display = 'block';
            bottomLogo.style.display = 'block'; // Mostra logo de baixo no form
            renderForm();
          }, 1500);
        } else {
          showChatMessage('CNPJ inválido. Por favor, insira novamente no formato correto.');
        }
      }
    }
  }

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSubmit();
  });
  sendBtn.addEventListener('click', handleSubmit);
}

function showChatMessage(text) {
  const message = document.createElement('p');
  message.className = 'chat-message';
  message.textContent = text;
  chatContainer.appendChild(message);
}

function showLoadingInChat() {
  const chatLoader = document.createElement('div');
  chatLoader.className = 'loader';
  chatLoader.style.width = '20px';
  chatLoader.style.height = '20px';
  chatLoader.style.margin = '10px 0';
  chatContainer.appendChild(chatLoader);
  setTimeout(() => chatLoader.remove(), 1400);
}

// CNPJ validation function
function validateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != digits.charAt(0)) return false;

  length = length + 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != digits.charAt(1)) return false;

  return true;
}

// Mask functions
function maskCNPJ(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

function maskPhone(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

// Render full form
function renderForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" value="${userName}" required aria-required="true">
      </div>
      <div class="form-group">
        <label for="cnpj">CNPJ</label>
        <input type="text" id="cnpj" value="${maskCNPJ(userCNPJ)}" required aria-required="true">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="email">E-mail Profissional</label>
        <input type="email" id="email" placeholder="nome@dominio.com.br" required aria-required="true">
        <span class="error-message"></span>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="tel" id="phone" placeholder="(11) 0000-0000" required aria-required="true">
        <span class="error-message"></span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="website">Site</label>
        <input type="url" id="website" placeholder="https://www.seusite.com.br" required aria-required="true">
        <span class="error-message"></span>
      </div>
      <div class="form-group">
        <label for="company">Nome da Empresa</label>
        <input type="text" id="company" value="${companyName}" required aria-required="true">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="department">Departamento</label>
        <select id="department" required aria-required="true">
          <option value="">Selecione...</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Founder">Founder</option>
          <option value="Vendas">Vendas</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Onboarding">Onboarding</option>
          <option value="Riscos / Fraude">Riscos / Fraude</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position">Cargo</label>
        <input type="text" id="position" required aria-required="true">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="gmv">Qual o volume anual de faturamento bruto?</label>
        <select id="gmv" required aria-required="true">
          <option value="">Selecione...</option>
          <option value="menos_1m">Menos de R$1M</option>
          <option value="1m_10m">R$1M - R$10M</option>
          <option value="10m_50m">R$10M - R$50M</option>
          <option value="50m_mais">Mais de R$50M</option>
        </select>
      </div>
    </div>
    <div class="checkbox-group">
      <label>
        <input type="checkbox" required aria-required="true">
        Concordo em receber comunicações da Frame e que os dados inseridos serão utilizados para possibilitar o contato e serviços que possam ser do meu interesse.
      </label>
    </div>
    <button type="submit" class="submit-btn" disabled>Enviar</button>
    <p class="privacy-text">Nunca enviaremos spam. Seus dados estão protegidos conforme nossa <a href="#">Política de Privacidade</a>.</p>
  `;
  formContainer.appendChild(form);

  // Máscara para telefone
  const phoneInput = form.querySelector('#phone');
  phoneInput.addEventListener('input', (e) => {
    e.target.value = maskPhone(e.target.value);
  });

  // Enable submit button when checkbox is checked
  const checkbox = form.querySelector('input[type="checkbox"]');
  const submitBtn = form.querySelector('.submit-btn');
  checkbox.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });

  // Validação visual em tempo real para email
  const emailInput = form.querySelector('#email');
  emailInput.addEventListener('input', () => {
    const group = emailInput.closest('.form-group');
    const error = group.querySelector('.error-message');
    if (!emailInput.validity.valid) {
      group.classList.add('invalid');
      error.textContent = 'E-mail inválido.';
    } else {
      group.classList.remove('invalid');
      error.textContent = '';
    }
  });

  // Validação visual em tempo real para website
  const websiteInput = form.querySelector('#website');
  websiteInput.addEventListener('input', () => {
    const group = websiteInput.closest('.form-group');
    const error = group.querySelector('.error-message');
    if (!websiteInput.validity.valid) {
      group.classList.add('invalid');
      error.textContent = 'Por gentileza, envie um site válido.';
    } else {
      group.classList.remove('invalid');
      error.textContent = '';
    }
  });

  // Form submission logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
      formContainer.style.display = 'none';
      successContainer.style.display = 'block';
    }, 1500);
  });
}

// Botão de voltar ao site
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
  loadingOverlay.style.display = 'flex';
  setTimeout(() => {
    window.location.href = 'https://weframe.com.br';
  }, 1500);
});

// Simulate initial loading
setTimeout(() => {
  loadingOverlay.style.display = 'none';
  chatContainer.style.display = 'block';
  startChat();
}, 2000);