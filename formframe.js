// Frame Specialist Contact Form

document.addEventListener('DOMContentLoaded', function() {
    // Add Montserrat font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #FFFFFF;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            color: #513C60;
        }
        .container {
            max-width: 800px;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        }
        @media (max-width: 390px) {
            .container {
                max-width: 390px;
            }
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
        @media (max-width: 768px) {
            .form-row {
                flex-direction: column;
                gap: 10px;
            }
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
    `;
    document.head.appendChild(style);

    // Create main container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Add top logo
    const topLogo = document.createElement('img');
    topLogo.src = 'https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png';
    topLogo.className = 'logo';
    topLogo.alt = 'Frame Logo';
    container.appendChild(topLogo);

    // Loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    const loader = document.createElement('div');
    loader.className = 'loader';
    const loadingText = document.createElement('p');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Preparando uma estrutura digital robusta para você...';
    loadingOverlay.appendChild(loader);
    loadingOverlay.appendChild(loadingText);
    document.body.appendChild(loadingOverlay);

    // Chat container
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    container.appendChild(chatContainer);

    // Form container
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    container.appendChild(formContainer);

    // Bottom logo
    const bottomLogo = document.createElement('img');
    bottomLogo.src = 'https://framerusercontent.com/images/NgAK6AJ3ME82obiSwtnDIyniw.png';
    bottomLogo.className = 'bottom-logo';
    bottomLogo.alt = 'Frame Logo';
    container.appendChild(bottomLogo);

    // Simulate initial loading
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        chatContainer.style.display = 'block';
        startChat();
    }, 2000);

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