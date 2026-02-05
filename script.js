// ═══════════════════════════════════════════════════════════════
// VASTRA SHAILII - MAIN SCRIPT
// ═══════════════════════════════════════════════════════════════
// Products are managed in: products-data.js
// ═══════════════════════════════════════════════════════════════

// Shopping Cart
let cart = [];
let currentImageIndex = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// Load Products with Image Gallery
function loadProducts(category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        // Initialize current image index
        currentImageIndex[product.id] = 0;
        
        // Build color badges
        const colorBadges = product.colors.slice(0, 3).map(color => 
            `<span class="color-badge">${color}</span>`
        ).join('');
        
        const moreColors = product.availableColors > 3 
            ? `<span class="color-badge">+${product.availableColors - 3} more</span>` 
            : '';
        
        // Build image gallery navigation
        const imageNavigation = product.images.length > 1 
            ? `<div class="image-navigation">
                <button class="nav-btn prev-btn" onclick="changeProductImage(${product.id}, -1)">‹</button>
                <button class="nav-btn next-btn" onclick="changeProductImage(${product.id}, 1)">›</button>
                <div class="image-dots">
                    ${product.images.map((_, i) => 
                        `<span class="dot ${i === 0 ? 'active' : ''}" onclick="setProductImage(${product.id}, ${i})"></span>`
                    ).join('')}
                </div>
            </div>`
            : '';
        
        productCard.innerHTML = `
            <div class="product-image-container" id="product-${product.id}">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" id="img-${product.id}">
                ${product.availableColors > 1 ? `<span class="variant-badge">${product.availableColors} Colors</span>` : ''}
                ${imageNavigation}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'bedsheets' ? 'Bedsheets' : 'Suits & Kurtis'}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${product.availableColors > 1 ? `
                    <div class="color-options">
                        <span class="available-label">Available in:</span>
                        ${colorBadges}${moreColors}
                    </div>
                ` : ''}
                <div class="product-footer">
                    <span class="product-price">₹${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Change Product Image (Gallery Navigation)
function changeProductImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!product || product.images.length <= 1) return;
    
    currentImageIndex[productId] = (currentImageIndex[productId] + direction + product.images.length) % product.images.length;
    updateProductImage(productId);
}

// Set Product Image (Dot Navigation)
function setProductImage(productId, index) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentImageIndex[productId] = index;
    updateProductImage(productId);
}

// Update Product Image Display
function updateProductImage(productId) {
    const product = products.find(p => p.id === productId);
    const imgElement = document.getElementById(`img-${productId}`);
    const dots = document.querySelectorAll(`#product-${productId} .dot`);
    
    if (imgElement && product) {
        imgElement.src = product.images[currentImageIndex[productId]];
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex[productId]);
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Category Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            loadProducts(category);
        });
    });
    
    // Cart Button
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    // Checkout Button
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    
    // Modal Close
    document.getElementById('closeModal').addEventListener('click', closeCheckout);
    document.getElementById('modalOverlay').addEventListener('click', closeCheckout);
    
    // Checkout Form
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Add to Cart - Handles color variants separately
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedImageIndex = currentImageIndex[productId] || 0;
    const selectedImage = product.images[selectedImageIndex];
    
    // Determine color variant name
    let selectedColor = 'Default';
    if (product.colors && product.colors[selectedImageIndex]) {
        selectedColor = product.colors[selectedImageIndex];
    }
    
    // Check if this exact variant (product + color) already exists in cart
    const existingItem = cart.find(item => 
        item.id === productId && item.selectedImage === selectedImage
    );
    
    if (existingItem) {
        // Same product, same color → increase quantity
        existingItem.quantity += 1;
    } else {
        // Same product, different color → add as new item
        cart.push({
            ...product,
            quantity: 1,
            selectedImage: selectedImage,
            selectedColor: selectedColor,
            cartItemId: `${productId}-${selectedImageIndex}` // Unique ID for this variant
        });
    }
    
    updateCart();
    saveCartToStorage();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = `Added ${selectedColor} ✓`;
    btn.style.background = '#25D366';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalAmount = document.getElementById('totalAmount');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `₹${total}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        document.getElementById('checkoutBtn').disabled = false;
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.selectedImage || item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    ${item.selectedColor && item.selectedColor !== 'Default' 
                        ? `<div class="cart-item-color">Color: ${item.selectedColor}</div>` 
                        : ''}
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.cartItemId}')">×</button>
            </div>
        `).join('');
    }
}

// Update Quantity - Works with unique cart item IDs
function updateQuantity(cartItemId, change) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            updateCart();
            saveCartToStorage();
        }
    }
}

// Remove from Cart - Works with unique cart item IDs
function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    updateCart();
    saveCartToStorage();
}

// Cart Storage
function saveCartToStorage() {
    localStorage.setItem('vastraShailiiCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('vastraShailiiCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}

// Open/Close Cart
function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

// Open/Close Checkout
function openCheckout() {
    if (cart.length === 0) return;
    
    document.getElementById('checkoutModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Checkout - Send to WhatsApp with color details
function handleCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const customerEmail = formData.get('customerEmail');
    const customerAddress = formData.get('customerAddress');
    const customerCity = formData.get('customerCity');
    const customerPincode = formData.get('customerPincode');
    const orderNotes = formData.get('orderNotes');
    
    let orderDetails = `*NEW ORDER - VASTRA SHAILII* 🛍️\n\n`;
    orderDetails += `👤 *Customer Details:*\n`;
    orderDetails += `Name: ${customerName}\n`;
    orderDetails += `Phone: ${customerPhone}\n`;
    if (customerEmail) orderDetails += `Email: ${customerEmail}\n`;
    orderDetails += `Address: ${customerAddress}\n`;
    orderDetails += `City: ${customerCity}\n`;
    orderDetails += `Pincode: ${customerPincode}\n`;
    
    orderDetails += `\n🛍️ *Order Items:*\n`;
    cart.forEach(item => {
        orderDetails += `\n📦 ${item.name}\n`;
        if (item.selectedColor && item.selectedColor !== 'Default') {
            orderDetails += `   🎨 Color: ${item.selectedColor}\n`;
        }
        orderDetails += `   Quantity: ${item.quantity}\n`;
        orderDetails += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderDetails += `\n💰 *Total Amount: ₹${total}*\n`;
    
    if (orderNotes) {
        orderDetails += `\n📝 *Special Instructions:*\n${orderNotes}\n`;
    }
    
    orderDetails += `\n---\n🕐 Order placed on ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}`;
    
    const whatsappNumber = '919887259471';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderDetails)}`;
    
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
        cart = [];
        updateCart();
        saveCartToStorage();
        closeCheckout();
        closeCart();
        
        alert('✅ Order details sent to WhatsApp! We will confirm your order shortly. Thank you for shopping with Vastra Shailii!');
        e.target.reset();
    }, 500);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .about-content, .footer-section');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
