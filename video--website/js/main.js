// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Code pour gérer les événements et les interactions de l'utilisateur sur les pages
    console.log("JavaScript principal chargé et prêt à l'emploi.");

    // Exemple d'interaction : gestion d'un clic sur un bouton de recherche
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = document.getElementById('search-input').value;
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        });
    }
});