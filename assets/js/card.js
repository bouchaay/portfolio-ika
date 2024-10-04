// Initialiser le panier à partir du localStorage ou un tableau vide s'il n'existe pas
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fonction pour mettre à jour le nombre d'articles dans le panier (optionnel, juste pour UI)
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    // Mettre à jour l'élément du compteur d'articles
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount > 0 ? cartCount : ''; // Ne pas afficher 0 si le panier est vide
}

// Fonction pour ajouter un produit au panier
function addToCart(productName, productPrice, productQuantity) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: productQuantity
    };

    // Vérifier si le produit existe déjà dans le panier
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex > -1) {
        // Si le produit existe, augmenter la quantité
        cart[existingProductIndex].quantity += productQuantity;
    } else {
        // Sinon, ajouter le produit au panier
        cart.push(product);
    }

    // Mettre à jour le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mettre à jour le compteur d'articles
    updateCartCount();

    // Afficher un message de confirmation
    alert(productQuantity + " item(s) added to cart!");
}

// Appel de la fonction lorsque l'utilisateur clique sur le bouton "Add to Cart"
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const productName = this.getAttribute('data-product-name'); // Récupérer le nom du produit
    const productPrice = this.getAttribute('data-product-price'); // Récupérer le prix du produit
    const productQuantity = parseInt(document.getElementById('quantity').value); // Quantité

    addToCart(productName, productPrice, productQuantity);
});

// Appeler la fonction lors du chargement de la page pour mettre à jour le compteur
window.onload = updateCartCount;
