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
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.chat-message {
  margin-bottom: 15px;
  font-size: 16px;
  color: #513C60;
}

.chat-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #A77BC6;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.chat-input:focus {
  border-color: #513C60;
  box-shadow: 0 0 5px rgba(81, 60, 96, 0.5);
}

.form-container {
  display: none;
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.form-group input:focus, .form-group select:focus {
  border-color: #513C60;
  box-shadow: 0 0 5px rgba(81, 60, 96, 0.5);
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
}

.submit-btn {
  background: linear-gradient(135deg, #A77BC6, #513C60);
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s;
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

.bottom-logo {
  display: block;
  margin: 20px auto 0;
  width: 100px;
}

/* Responsividade aprimorada */
@media (max-width: 600px) {
  .container {
    max-width: 390px;
    padding: 10px;
  }

  .chat-container, .form-container {
    padding: 15px;
  }

  .chat-message {
    font-size: 14px;
  }

  .chat-input {
    font-size: 14px;
    padding: 8px;
  }

  .form-row {
    flex-direction: column;
    gap: 10px;
  }

  .form-group input, .form-group select {
    font-size: 14px;
    padding: 8px;
  }

  .submit-btn {
    padding: 10px 18px;
    font-size: 14px;
  }

  .privacy-text {
    font-size: 11px;
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
  <img class="bottom-logo" src="https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png" alt="Frame Logo">
</div>

<div class="loading-overlay">
  <div class="loader"></div>
  <p class="loading-text">Preparando uma estrutura digital robusta para você...</p>
</div>
`;
document.body.innerHTML = appHTML;

// Elementos
const container = document.querySelector('.container');
const loadingOverlay = document.querySelector('.loading-overlay');
const chatContainer = document.querySelector('.chat-container');
const formContainer = document.querySelector('.form-container');

// Chat logic
let userName = '';
let userCNPJ = '';

function startChat() {
  showChatMessage('Olá! Tudo bem? Vi que você tem interesse nos serviços da Frame.');
  setTimeout(() => {
    showChatMessage('Qual é o seu nome?');
    showChatInput('name');
  }, 1000);
}

function showChatMessage(text) {
  const message = document.createElement('p');
  message.className = 'chat-message';
  message.textContent = text;
  chatContainer.appendChild(message);
}

function showChatInput(type) {
  const input = document.createElement('input');
  input.className = 'chat-input';
  input.placeholder = type === 'name' ? 'Digite seu nome...' : 'Digite o CNPJ (ex: 00.000.000/0000-00)';
  chatContainer.appendChild(input);
  input.focus();

  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && input.value.trim()) {
      if (type === 'name') {
        userName = input.value.trim();
        input.disabled = true;
        showLoadingInChat();
        setTimeout(() => {
          showChatMessage(`Ótimo, ${userName}! Nosso ecossistema é exclusivo para empresas com CNPJ ativo.`);
          showChatMessage('Qual é o CNPJ da sua empresa?');
          showChatInput('cnpj');
        }, 1500);
      } else if (type === 'cnpj') {
        const cnpj = input.value.trim();
        if (validateCNPJ(cnpj)) {
          userCNPJ = cnpj;
          input.disabled = true;
          showLoadingInChat();
          setTimeout(() => {
            chatContainer.style.display = 'none';
            formContainer.style.display = 'block';
            renderForm();
          }, 1500);
        } else {
          showChatMessage('CNPJ inválido. Por favor, tente novamente no formato brasileiro correto.');
        }
      }
    }
  });
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

// Render full form
function renderForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" value="${userName}" required>
      </div>
      <div class="form-group">
        <label for="cnpj">CNPJ</label>
        <input type="text" id="cnpj" value="${userCNPJ}" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="email">E-mail Profissional</label>
        <input type="email" id="email" placeholder="email@dominio.com.br" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="tel" id="phone" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="website">Site</label>
        <input type="text" id="website" placeholder="Digite o domínio..." required>
      </div>
      <div class="form-group">
        <label for="company">Nome da Empresa</label>
        <input type="text" id="company" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="department">Departamento</label>
        <select id="department" required>
          <option value="">Selecione...</option>
          <option value="TI">TI</option>
          <option value="Marketing">Marketing</option>
          <option value="Vendas">Vendas</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position">Cargo</label>
        <input type="text" id="position" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="gmv">GMV Anual Aproximado</label>
        <select id="gmv" required>
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
        <input type="checkbox" required>
        Concordo com a <a href="#">Política de Privacidade</a>
      </label>
    </div>
    <button type="submit" class="submit-btn" disabled>Enviar</button>
    <p class="privacy-text">Seus dados estão protegidos conforme nossa <a href="#">Política de Privacidade</a>.</p>
  `;
  formContainer.appendChild(form);

  // Enable submit button when checkbox is checked
  const checkbox = form.querySelector('input[type="checkbox"]');
  const submitBtn = form.querySelector('.submit-btn');
  checkbox.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });

  // Form submission logic (placeholder)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add actual submission logic here if needed
    alert('Formulário enviado com sucesso!');
  });
}

// Simulate initial loading
setTimeout(() => {
  loadingOverlay.style.display = 'none';
  chatContainer.style.display = 'block';
  startChat();
}, 2000);