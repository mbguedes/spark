document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão do menu e o menu mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('menu-mobile');
    const links = mobileMenu.querySelectorAll('a');

    // Verifica se os elementos existem antes de adicionar o evento
    if (menuButton && mobileMenu) {
        // Adiciona um listener para o clique no botão
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' para mostrar ou esconder o menu
            mobileMenu.classList.toggle('hidden');
        });

        // Adiciona um listener para cada link dentro do menu
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Esconde o menu mobile quando um link é clicado
                mobileMenu.classList.add('hidden');
            });
        });
    }
});