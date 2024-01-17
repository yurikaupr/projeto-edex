document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a primeira opção por padrão ao carregar a página
    mostrarImagem('repele');
});

function mostrarImagem(tipo) {
    var imagens = document.getElementsByClassName("imagem");
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].style.display = "none";
    }

    var todasAsA = document.querySelectorAll('a');
    for (var i = 0; i < todasAsA.length; i++) {
        todasAsA[i].classList.remove('selected');
    }

    var imagem = document.getElementById(tipo);
    imagem.style.display = "block";

    var linkSelecionado = document.querySelector('a[href="javascript:void(0)"][onclick="mostrarImagem(\'' + tipo + '\')"]');
    linkSelecionado.classList.add('selected');

    var textoParagrafo;
    switch (tipo) {
        case 'repele':
            textoParagrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora, consequuntur non minima qui sunt odio autem ipsa animi saepe obcaecati soluta quaerat facilis sit quod, voluptatibus quo sequi cumque.";
            break;
        case 'empina':
            textoParagrafo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sed autem porro deserunt sit, fugiat odio expedita minus quidem ipsam molestiae, officia id quae deleniti. Repellendus atque voluptates officiis quasi.";
            break;
        case 'modeladora':
            textoParagrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora, consequuntur non minima qui sunt odio autem ipsa animi saepe obcaecati soluta quaerat facilis sit quod, voluptatibus quo sequi cumque.";
            break;
        case 'aviamentos':
            textoParagrafo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sed autem porro deserunt sit, fugiat odio expedita minus quidem ipsam molestiae, officia id quae deleniti. Repellendus atque voluptates officiis quasi.";
            break;
        case 'composicao':
            textoParagrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora, consequuntur non minima qui sunt odio autem ipsa animi saepe obcaecati soluta quaerat facilis sit quod, voluptatibus quo sequi cumque.";
            break;

        default:
            textoParagrafo = "Texto genérico.";
            break;
    }

    document.getElementById('descricaoOpcao').innerText = textoParagrafo;
}