document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const infoOverlay = document.getElementById('infoOverlay');
    const infoDisplay = document.getElementById('infoDisplay');
    const botaoVoltar = document.getElementById('botao-voltar');

    const buttonOptions = {
        titularBtn: [
            { label: 'Alteração de Dados Cadastrais - Exceto CPF', url: 'https://drive.google.com/file/d/1O6IkleY5IhBFOzpVnXziK___oXsjTzmh/view?usp=sharing' },
            { label: 'Alteração de CPF', url: 'https://drive.google.com/file/d/1ars8SJAMUF2q1c7bQ4E1t5WxAEru4GNG/view?usp=sharing' },
            { label: 'Alteração de Telefone/Email (inclusão, exclusão, alteração e correção)', url: 'https://drive.google.com/file/d/1MdW22Ob3W2kePo-JZtIeMjl48D0L-KXi/view?usp=sharing' },
            { label: 'Alteração de endereço da unidade consumidora', url: 'https://drive.google.com/file/d/1zF1CO0FyksTVtAN_S5n-SgPAtkvXi6PF/view?usp=drive_link' },        
            // ... 
        ],
        terceirosBtn: [
            { label: 'Adesão ou cancelamento da tarifa baixa renda', url: 'https://davi-sf.github.io/InConstructionPage/' },
            { label: 'Adesão ou cancelamento da tarifa branca', url: 'https://davi-sf.github.io/InConstructionPage/' },
            { label: 'Alteração de dados fatura: (Entrega de fatura, data certa e fatura por e-mail)', url: 'https://davi-sf.github.io/InConstructionPage/' },
            { label: 'Alteração, inclusão ou cancelamento de serviços da fatura (mudança endereço da entrega da fatura digital ou física)', url: 'https://davi-sf.github.io/InConstructionPage/' },   
            // ... 
        ],
        autorizadasBtn: [
            { label: 'Informações sobre dúvidas cobranças na fatura', url: 'https://davi-sf.github.io/InConstructionPage/' },
            { label: 'Modificação Contratual / troca de padrão / aumento carga', url: 'https://davi-sf.github.io/InConstructionPage/' },
            { label: 'Selagem / vistoria de medidor', url: 'https://davi-sf.github.io/InConstructionPage/' },
        ],
    };

    function abrirInfo(buttonId) {
        const options = buttonOptions[buttonId];
        const content = options.map(option => `<li><a href="${option.url}" target="_blank">${option.label}</a></li>`).join('');

        infoDisplay.innerHTML = `<ul>${content}</ul>`;
        infoOverlay.classList.add('active');
        infoDisplay.classList.add('active');
        botaoVoltar.style.display = 'block';
    }

    function fecharInfo() {
        infoOverlay.classList.remove('active');
        infoDisplay.classList.remove('active');
        botaoVoltar.style.display = 'none';
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.currentTarget.id;
            abrirInfo(buttonId);
        });
    });

    botaoVoltar.addEventListener('click', fecharInfo);
});

document.addEventListener("DOMContentLoaded", function() {
    const balao = document.querySelector('.balao');
    const mainContent = document.querySelector('.main-content');

    function mostrarConteudoPrincipal() {
        balao.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Obter a duração das animações do balão
    const animationDuration = 10000; // Tempo total das animações em milissegundos

    // Definir um atraso para a exibição do conteúdo principal após a conclusão da animação do balão
    setTimeout(mostrarConteudoPrincipal, animationDuration);
});





  
