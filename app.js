document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        }
    });
});
