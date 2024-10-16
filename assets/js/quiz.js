
const products = [
    { name: "Kylie", image: "images/faux-cils/KYLIE.png", newPrice: "110 DH", link: "kylie.html" },
    { name: "Casablanca", image: "images/casa-2-products.jpg", newPrice: "110 DH", link: "casa.html" },
    { name: "Rita", image: "images/faux-cils/RITA.png", newPrice: "110 DH", link: "rita.html" },
    { name: "Ika", image: "images/faux-cils/IKA.png", newPrice: "110 DH", link: "ika.html" },
    { name: "Barbie", image: "images/faux-cils/BARBIE.png", newPrice: "110 DH", link: "barbie.html" },
    { name: "Glamour", image: "images/faux-cils/GLAMOUR.png", newPrice: "110 DH", link: "glamour.html" },
    { name: "Love", image: "images/faux-cils/LOVE.png", newPrice: "110 DH", link: "love.html" },
    { name: "Meta 1", image: "images/faux-cils/META1.png", newPrice: "80 DH", link: "meta1.html" },
    { name: "Meta 2", image: "images/faux-cils/META2.png", newPrice: "80 DH", link: "meta2.html" },
    { name: "Meta 3", image: "images/faux-cils/META3.png", newPrice: "80 DH", link: "meta3.html" },
    { name: "Moscow", image: "images/faux-cils/MOSCOW.png", newPrice: "110 DH", link: "moscow.html" },
    { name: "Tima", image: "images/faux-cils/TIMA.png", newPrice: "110 DH", link: "tima.html" },
    { name: "Honey", image: "images/honey-1 (1).jpg", newPrice: "110 DH", link: "honey.html" }
];

// Combinaisons de réponses
const combinations = {
    /* Première combinaisons : Only for special events / multiple times a month —> minimal —> Almond / hooded / upturned / monolid —> LASHES : Honey , meta 1 , meta 2 , meta 3 */
    "Special_Minimal_Almond": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Special_Minimal_Hooded": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Special_Minimal_Upturned": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Special_Minimal_Monolid": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Multiple_Minimal_Almond": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Multiple_Minimal_Hooded": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Multiple_Minimal_Upturned": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Multiple_Minimal_Monolid": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Special_SoftGlam_Almond": ["Kylie", "Moscow", "Glamour"],
    "Special_SoftGlam_Hooded": ["Kylie", "Moscow", "Glamour"],
    "Special_SoftGlam_Upturned": ["Kylie", "Moscow", "Glamour"],
    "Multiple_SoftGlam_Almond": ["Kylie", "Moscow", "Glamour"],
    "Multiple_SoftGlam_Hooded": ["Kylie", "Moscow", "Glamour"],
    "Multiple_SoftGlam_Upturned": ["Kylie", "Moscow", "Glamour"],
    "Special_SoftGlam_Monolid": ["Kylie", "Moscow", "Glamour"],
    "Multiple_SoftGlam_Monolid": ["Kylie", "Moscow", "Glamour"],
    "Special_FullGlam_Almond": ["Barbie", "Love", "Rita", "Casablanca"],
    "Special_FullGlam_Hooded": ["Barbie", "Love", "Rita", "Casablanca"],
    "Multiple_FullGlam_Almond": ["Barbie", "Love", "Rita", "Casablanca"],
    "Multiple_FullGlam_Hooded": ["Barbie", "Love", "Rita", "Casablanca"],
    "Special_FullGlam_Upturned": ["Barbie", "Love", "Rita", "Tima"], // Casa
    "Multiple_FullGlam_Upturned": ["Barbie", "Love", "Rita", "Tima"], // Casa
    "Special_FullGlam_Monolid": ["Tima", "Casa", "Rita"],
    "Multiple_FullGlam_Monolid": ["Tima", "Casa", "Rita"],
    "Everyday_Minimal_Almond": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Everyday_Minimal_Hooded": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Everyday_Minimal_Upturned": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Everyday_Minimal_Monolid": ["Honey", "Meta 1", "Meta 2", "Meta 3"],
    "Everyday_SoftGlam_Almond": ["Ika", "Glamour", "Kylie", "Moscow"],
    "Everyday_SoftGlam_Hooded": ["Ika", "Glamour", "Kylie", "Moscow"],
    "Everyday_SoftGlam_Upturned": ["Ika", "Glamour", "Kylie", "Moscow"],
    "Everyday_SoftGlam_Monolid": ["Ika", "Glamour", "Kylie", "Moscow"],
    "Everyday_FullGlam_Almond": ["Barbie", "Love", "Casablanca"],
    "Everyday_FullGlam_Hooded": ["Barbie", "Love", "Casablanca"],
    "Everyday_FullGlam_Upturned": ["Barbie", "Love", "Casablanca"],
    "Everyday_FullGlam_Monolid": ["Barbie", "Love", "Casablanca"]
};

// Sélection des options sous forme d'images
const images = document.querySelectorAll('.quizImage');
images.forEach(image => {
    image.addEventListener('click', function () {
        // Enlever la sélection des autres images dans cette question
        const siblings = this.closest('.option-makeup-look').querySelectorAll('.image-container');
        siblings.forEach(sibling => sibling.classList.remove('selected'));

        // Ajouter la sélection à l'image cliquée
        this.parentElement.classList.add('selected');
    });
});

// Sélection des boutons dans les autres questions
const buttons = document.querySelectorAll('.option-how-often button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Enlever la sélection des autres boutons dans cette question
        const siblings = this.parentElement.querySelectorAll('button');
        siblings.forEach(sibling => sibling.classList.remove('selected'));

        // Ajouter la sélection au bouton cliqué
        this.classList.add('selected');
    });
});

// Fonction pour récupérer les réponses sélectionnées
function getQuizResults() {
    const selectedImages = document.querySelectorAll('.image-container.selected img');
    const selectedButtons = document.querySelectorAll('.option-how-often button.selected');

    let results = {
        imageSelections: [],
        buttonSelections: []
    };

    // Récupérer les alt des images sélectionnées
    selectedImages.forEach(image => {
        results.imageSelections.push(image.alt);
    });

    // Récupérer le texte des boutons sélectionnés
    selectedButtons.forEach(button => {
        results.buttonSelections.push(button.textContent.trim());
    });

    return results;
}

// Fonction pour injecter les produits dans le pop-up
function displayProductResults(selectedOptions) {
    const productResultsContainer = document.getElementById('product-results');

    // Obtenir les produits en fonction des options sélectionnées
    const key = selectedOptions.join("_"); // Créer une clé unique à partir des options
    const selectedProductNames = combinations[key] || []; // Récupérer les noms des produits

    // Filtrer les produits basés sur les noms sélectionnés
    const selectedProducts = products.filter(product => selectedProductNames.includes(product.name));

    // Créer les éléments HTML pour les produits sélectionnés
    selectedProducts.forEach(product => {
        const productHTML = `
                <article class="carousel-item">
                    <div class="image">
                        <a href="${product.link}">
                            <img src="${product.image}" alt="${product.name}" class="default-image">
                        </a>
                    </div>
                    <div class="content">
                        <h3 style="font-size : 0.7em; font-family: 'New Century Schoolbook', 'TeX Gyre Schola', serif;">${product.name}</h3>
                        <p class="price">
                            <span class="new-price" style="font-size : 0.6em;">${product.newPrice}</span>
                        </p>
                        <br>
                        <a href="${product.link}" class="view-more-btn" style="font-size:0.7em;">View More</a>
                    </div>
                </article>
                `;
        productResultsContainer.innerHTML += productHTML;
    });

    // Afficher le pop-up avec les produits
    document.getElementById('result-popup').classList.add('show');
}

// Fonction pour fermer le pop-up des résultats
function closeResultPopup() {
    /* Supprimer les produits du pop-up */
    document.getElementById('product-results').innerHTML = '';
    document.getElementById('result-popup').classList.remove('show');
}

// Fonction pour montrer le pop-up de chargement
function showLoadingPopup(selectedOptions) {
    const loadingPopup = document.getElementById('loading-popup');
    loadingPopup.classList.add('show');

    // Simuler un délai de 5 secondes
    setTimeout(() => {
        hideLoadingPopup(); // Masquer le pop-up après 5 secondes
        displayProductResults(selectedOptions); // Afficher le pop-up avec les produits recommandés
    }, 5000);
}

// Fonction pour masquer le pop-up de chargement
function hideLoadingPopup() {
    const loadingPopup = document.getElementById('loading-popup');
    loadingPopup.classList.remove('show');
}

// Gestionnaire de soumission du quiz
document.querySelector('.quiz-footer button').addEventListener('click', function () {
    const selectedOptions = getSelectedOptions(); // Récupérer les réponses sélectionnées
    showLoadingPopup(selectedOptions); // Montrer le pop-up de chargement lors du clic sur Submit
});

// Fonction pour obtenir les options sélectionnées par l'utilisateur
// Fonction pour obtenir les options sélectionnées par l'utilisateur
function getSelectedOptions() {
    const selectedImages = Array.from(document.querySelectorAll('.image-container.selected img')).map(img => img.alt);

    // Modifier ici pour récupérer l'attribut 'data-alt' au lieu du texte des boutons
    const selectedButtons = Array.from(document.querySelectorAll('.option-how-often button.selected')).map(btn => btn.getAttribute('data-alt'));


    return [...selectedButtons, ...selectedImages]; // Combinez les options de boutons et d'images
}