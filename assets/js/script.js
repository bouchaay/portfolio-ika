
// Array pour stocker les produits ajoutés au panier
let cart = [];

// Fonction pour ajouter un produit au panier
function addToCart(productName, unitPrice) {
    // Vérifier si le produit est déjà dans le panier
    let existingProduct = cart.find(product => product.name === productName);

    if (existingProduct) {
        // Augmenter la quantité si le produit existe déjà
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * unitPrice;
    } else {
        // Ajouter un nouveau produit au panier
        cart.push({
            name: productName,
            unitPrice: unitPrice,
            quantity: 1,
            totalPrice: unitPrice
        });
    }

    // Mettre à jour l'affichage du tableau du panier
    updateCartDisplay();
}

// Fonction pour mettre à jour le tableau du panier
function updateCartDisplay() {
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    let totalPrice = 0;

    // Effacer le contenu actuel
    cartBody.innerHTML = '';

    // Ajouter chaque produit dans le tableau
    cart.forEach(product => {
        const row = document.createElement('tr');

        row.innerHTML = `
							<td style="color:rgb(114, 114, 114);">${product.name}</td>
							<td style="color:rgb(114, 114, 114);">${product.unitPrice} DH</td>
							<td style="color:rgb(114, 114, 114);">${product.quantity}</td>
							<td style="color:rgb(114, 114, 114);">${product.totalPrice} DH</td>
						`;

        cartBody.appendChild(row);
        totalPrice += product.totalPrice;
    });

    // Mettre à jour le total général du panier
    cartTotal.innerHTML = `<strong style="color:rgb(114, 114, 114);">${totalPrice} DH</strong>`;
}

// Fonction pour configurer les boutons "Ajouter au panier"
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            const unitPrice = parseFloat(button.dataset.productPrice);
            addToCart(productName, unitPrice);
        });
    });
}

// Appeler cette fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', setupAddToCartButtons);

// Fonction pour procéder au paiement
function proceedToCheckout() {
    // Vérifier s'il y a des produits dans le panier
    if (cart.length === 0) {
        alert('Votre panier est vide. Ajoutez des produits avant de procéder au paiement.');
        return;
    }

    // Stocker le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Rediriger vers la page de checkout
    window.location.href = 'checkout.html';
}