document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.target.id;
            abrirInfo(buttonId);
        });
    });
});

const buttonOptions = {
    titularBtn: [
        { label: 'Alteração de Dados Cadastrais - Exceto CPF', url: 'https://drive.google.com/file/d/1O6IkleY5IhBFOzpVnXziK___oXsjTzmh/view?usp=sharing' },
        { label: 'Alteração de CPF', url: 'https://drive.google.com/file/d/1ars8SJAMUF2q1c7bQ4E1t5WxAEru4GNG/view?usp=sharing' },
        { label: 'Alteração de Telefone/Email (inclusão, exclusão, alteração e correção)', url: 'https://drive.google.com/file/d/1MdW22Ob3W2kePo-JZtIeMjl48D0L-KXi/view?usp=sharing' },
        { label: 'Alteração de endereço da unidade consumidora', url: 'https://drive.google.com/file/d/1zF1CO0FyksTVtAN_S5n-SgPAtkvXi6PF/view?usp=drive_link' },        
    ],
    // Adicione mais opções para PELO TITULAR aqui
    terceirosBtn: [
        { label: 'Adesão ou cancelamento da tarifa baixa renda', url: 'https://davi-sf.github.io/InConstructionPage/' },
        { label: 'Adesão ou cancelamento da tarifa branca', url: 'https://davi-sf.github.io/InConstructionPage/' },
        { label: 'Alteração de dados fatura: (Entrega de fatura, data certa e fatura por e-mail)', url: 'https://davi-sf.github.io/InConstructionPage/' },
        { label: 'Alteração, inclusão ou cancelamento de serviços da fatura (mudança endereço da entrega da fatura digital ou física)', url: 'https://davi-sf.github.io/InConstructionPage/' },    
    ],
    autorizadasBtn: [
        { label: 'Informações sobre dúvidas cobranças na fatura', url: 'https://davi-sf.github.io/InConstructionPage/' },
        { label: 'Modificação Contratual / troca de padrão / aumento carga', url: 'https://davi-sf.github.io/InConstructionPage/' },
        { label: 'Selagem / vistoria de medidor', url: 'https://davi-sf.github.io/InConstructionPage/' },
    ],
    // Adicione mais objetos para outros botões, se precisar
};

function abrirInfo(buttonId) {
    const infoOverlay = document.getElementById('infoOverlay');
    const infoDisplay = document.getElementById('infoDisplay');
    const botaoVoltar = document.getElementById('botao-voltar'); // Referência ao botão de voltar

    const options = buttonOptions[buttonId];

    let content = '<ul>';
    options.forEach(option => {
        content += `<li><a href="${option.url}" target="_blank">${option.label}</a></li>`;
    });
    content += '</ul>';

    infoDisplay.innerHTML = content;
    infoOverlay.classList.add('active');
    infoDisplay.classList.add('active');
    botaoVoltar.style.display = 'block'; // Mostrar o botão de voltar ao exibir as informações
}


function fecharInfo() {
    const infoOverlay = document.getElementById('infoOverlay');
    const infoDisplay = document.getElementById('infoDisplay');
    const botaoVoltar = document.getElementById('botao-voltar'); // Adiciona esta linha para referenciar o botão de voltar

    infoOverlay.classList.remove('active');
    infoDisplay.classList.remove('active');
    botaoVoltar.style.display = 'none'; // Certifique-se de que o botão de voltar está oculto ao fechar a sobreposição
}




document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.currentTarget.id;
            abrirInfo(buttonId);
        });
    });
});

