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
        
        // Build color circle buttons (one per image/color variant)
        const colorCircles = product.images.length > 1
            ? `<div class="color-circles">
                <span class="available-label">Select Color:</span>
                <div class="color-circle-row">
                    ${product.colors.map((color, i) => 
                        `<button class="color-circle ${i === 0 ? 'active' : ''}" 
                            id="circle-${product.id}-${i}"
                            onclick="selectColorVariant(${product.id}, ${i})" 
                            title="${color}"
                            style="background:${colorNameToHex(color)}">
                        </button>`
                    ).join('')}
                </div>
               </div>`
            : '';
        
        productCard.innerHTML = `
            <div class="product-image-container" id="product-${product.id}">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" id="img-${product.id}">
                ${product.availableColors > 1 ? `<span class="variant-badge">${product.availableColors} Colors</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'bedsheets' ? 'Bedsheets' : 'Suits & Kurtis'}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${colorCircles}
                <div class="product-footer">
                    <span class="product-price">₹${product.price}</span>
                    <button class="add-to-cart-btn" id="addBtn-${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Select Color Variant (Color Circle Click)
function selectColorVariant(productId, index) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentImageIndex[productId] = index;

    // Update image
    const imgElement = document.getElementById(`img-${productId}`);
    if (imgElement) {
        imgElement.src = product.images[index] || product.images[0];
    }

    // Update active circle
    product.colors.forEach((_, i) => {
        const circle = document.getElementById(`circle-${productId}-${i}`);
        if (circle) circle.classList.toggle('active', i === index);
    });

    // Show selected color on button
    const addBtn = document.getElementById(`addBtn-${productId}`);
    if (addBtn) {
        const colorName = product.colors[index] || '';
        addBtn.textContent = `Add ${colorName}`;
        setTimeout(() => { addBtn.textContent = 'Add to Cart'; }, 2000);
    }
}

// Map color names to hex for color circles
function colorNameToHex(colorName) {
    const map = {
        'blue': '#4a90d9', 'sky blue': '#87ceeb', 'teal blue': '#008080',
        'green': '#4caf50', 'lime green': '#8bc34a', 'lime yellow': '#cddc39',
        'orange': '#ff9800', 'red': '#e53935', 'maroon-red': '#880e4f',
        'pink': '#e91e63', 'grey': '#9e9e9e', 'gray': '#9e9e9e', 'grey-black': '#616161',
        'yellow': '#ffd600', 'yellow-blue': '#a0b04a', 'white': '#f5f5f5',
        'multicolored': 'linear-gradient(135deg,#e53935,#ff9800,#4caf50,#4a90d9)',
        'blue-red': '#6a3ab5', 'blue-brown': '#5d8aa8', 'green-black': '#2e7d32',
        'default': '#c8a876'
    };
    return map[colorName.toLowerCase()] || '#c8a876';
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

// Open/Close Policy Modals
function openPolicyModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePolicyModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            // Close all modals
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            this.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// Handle Checkout - Send to WhatsApp with color details
let whatsappUrl = '';

function handleCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const customerEmail = formData.get('customerEmail');
    const customerAddress = formData.get('customerAddress');
    const customerCity = formData.get('customerCity');
    const customerPincode = formData.get('customerPincode');
    const paymentMethod = formData.get('paymentMethod');
    const orderNotes = formData.get('orderNotes');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Calculate COD charges
    let codCharges = 0;
    let finalTotal = total;
    if (paymentMethod === 'cod' && total < 2000) {
        codCharges = 50;
        finalTotal = total + codCharges;
    }
    
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
    
    orderDetails += `\n💰 *Subtotal: ₹${total}*\n`;
    
    if (codCharges > 0) {
        orderDetails += `💵 *COD Charges: ₹${codCharges}*\n`;
    }
    
    orderDetails += `\n💳 *Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Online Payment (UPI)'}\n`;
    orderDetails += `\n💰 *TOTAL AMOUNT: ₹${finalTotal}*\n`;
    
    if (paymentMethod === 'online') {
        orderDetails += `\n📱 *UPI Payment Details:*\n`;
        orderDetails += `UPI ID: 9950349005@hdfc\n`;
        orderDetails += `Account Name: Vastra Shailii\n`;
        orderDetails += `Amount to Pay: ₹${finalTotal}\n`;
        orderDetails += `\n✅ After payment, please send screenshot\n`;
    } else {
        orderDetails += `\n💵 *Amount to pay on delivery: ₹${finalTotal}*\n`;
    }
    
    if (orderNotes) {
        orderDetails += `\n📝 *Special Instructions:*\n${orderNotes}\n`;
    }
    
    orderDetails += `\n---\n🕐 Order placed on ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}`;
    
    const whatsappNumber = '919887259471';
    whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderDetails)}`;
    
    // Show payment modal instead of opening WhatsApp immediately
    showPaymentModal(paymentMethod, finalTotal, total, codCharges);
    
    // Clear cart and close checkout
    setTimeout(() => {
        cart = [];
        updateCart();
        saveCartToStorage();
        closeCheckout();
        closeCart();
        e.target.reset();
    }, 500);
}

function showPaymentModal(paymentMethod, finalTotal, subtotal, codCharges) {
    const paymentDetailsDiv = document.getElementById('paymentDetails');
    const paymentStepLi = document.getElementById('paymentStep');
    
    if (paymentMethod === 'online') {
        paymentDetailsDiv.innerHTML = `
            <div class="upi-payment-box">
                <h3>💳 Complete Your Payment</h3>
                <div class="upi-details">
                    <div class="upi-item">
                        <span class="upi-label">UPI ID:</span>
                        <span class="upi-value">9950349005@hdfc</span>
                        <button class="copy-btn" onclick="copyUPI()">Copy</button>
                    </div>
                    <div class="upi-item">
                        <span class="upi-label">Account Name:</span>
                        <span class="upi-value">Vastra Shailii</span>
                    </div>
                    <div class="upi-item total">
                        <span class="upi-label">Amount to Pay:</span>
                        <span class="upi-value">₹${finalTotal}</span>
                    </div>
                </div>
                <div class="payment-apps">
                    <p><strong>Pay using:</strong></p>
                    <div class="app-buttons">
                        <button class="app-btn" onclick="openUPI('gpay')">Google Pay</button>
                        <button class="app-btn" onclick="openUPI('phonepe')">PhonePe</button>
                        <button class="app-btn" onclick="openUPI('paytm')">Paytm</button>
                    </div>
                </div>
                <div class="payment-note">
                    <p>⚠️ After payment, please send screenshot on WhatsApp for confirmation</p>
                </div>
            </div>
        `;
        paymentStepLi.textContent = 'Complete payment using UPI and send screenshot on WhatsApp';
    } else {
        paymentDetailsDiv.innerHTML = `
            <div class="cod-payment-box">
                <h3>💵 Cash on Delivery</h3>
                <div class="cod-details">
                    <div class="cod-item">
                        <span class="cod-label">Product Total:</span>
                        <span class="cod-value">₹${subtotal}</span>
                    </div>
                    ${codCharges > 0 ? `
                    <div class="cod-item">
                        <span class="cod-label">COD Charges:</span>
                        <span class="cod-value">₹${codCharges}</span>
                    </div>
                    ` : ''}
                    <div class="cod-item total">
                        <span class="cod-label">Amount to Pay on Delivery:</span>
                        <span class="cod-value">₹${finalTotal}</span>
                    </div>
                </div>
                <div class="cod-note">
                    <p>✅ Please keep exact cash ready for delivery</p>
                    <p>💡 We'll confirm your order on WhatsApp shortly</p>
                </div>
            </div>
        `;
        paymentStepLi.textContent = 'Keep ₹' + finalTotal + ' ready for delivery';
    }
    
    document.getElementById('paymentModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
}

function openWhatsApp() {
    window.location.href = whatsappUrl;
    closePaymentModal();
}

function copyUPI() {
    const upiId = '9950349005@hdfc';
    navigator.clipboard.writeText(upiId).then(() => {
        alert('✅ UPI ID copied! Paste in your payment app.');
    }).catch(() => {
        alert('UPI ID: 9950349005@hdfc (Please copy manually)');
    });
}

function openUPI(app) {
    const upiId = '9950349005@hdfc';
    const amount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const name = 'Vastra Shailii';
    
    let upiUrl = '';
    
    switch(app) {
        case 'gpay':
            upiUrl = `gpay://upi/pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
            break;
        case 'phonepe':
            upiUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
            break;
        case 'paytm':
            upiUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
            break;
    }
    
    window.location.href = upiUrl;
    
    // Fallback alert if app not installed
    setTimeout(() => {
        alert('If the app didn\'t open, please copy UPI ID: 9950349005@hdfc and pay manually.');
    }, 2000);
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