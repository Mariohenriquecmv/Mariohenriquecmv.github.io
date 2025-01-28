document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contact-modal");
    var btnContato1 = document.querySelector(".btn-contato1 button");
    var btnContato2 = document.querySelector(".btn-contato2 button");
    var span = document.getElementsByClassName("close")[0];

    // Abrir o modal ao clicar nos botões
    btnContato1.onclick = function() {
        modal.style.display = "block";
    }

    btnContato2.onclick = function() {
        modal.style.display = "block";
    }

    // Fechar o modal quando clicar no "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar o modal se clicar fora da janela modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
