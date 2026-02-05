// Product Database - Updated with Real Vastra Shailii Products
const products = [
    // Bedsheets Collection
    {
        id: 1,
        name: "Jaipuri Leaf Print Bedsheet",
        category: "bedsheets",
        price: 1299,
        description: "Beautiful block print with traditional leaf motifs, 100% cotton, double bed with 2 pillow covers",
        image: "images/bedsheet-leaf-print.jpg"
    },
    {
        id: 2,
        name: "Sanganeri Geometric Gold Bedsheet",
        category: "bedsheets",
        price: 1399,
        description: "Stunning geometric patterns with floral borders, premium cotton, includes pillow covers",
        image: "images/bedsheet-geometric-gold.jpg"
    },
    {
        id: 3,
        name: "Peacock Blue Cotton Bedsheet",
        category: "bedsheets",
        price: 1499,
        description: "Elegant peacock and bird motifs in blue tones, double bed, soft cotton fabric",
        image: "images/bedsheet-peacock-blue.jpg"
    },
    {
        id: 4,
        name: "Paisley Swirl Print Bedsheet",
        category: "bedsheets",
        price: 1199,
        description: "Contemporary paisley design in multiple colors, breathable cotton, king size",
        image: "images/bedsheet-paisley-swirl.jpg"
    },
    {
        id: 5,
        name: "Elephant Print Bedsheet - Blue & Green",
        category: "bedsheets",
        price: 1599,
        description: "Traditional Rajasthani elephant and peacock motifs, vibrant colors, 2 pillow covers",
        image: "images/bedsheet-elephant-blue-green.jpg"
    },
    {
        id: 6,
        name: "Floral Trio Bedsheet Set",
        category: "bedsheets",
        price: 1299,
        description: "Three beautiful floral patterns, perfect for mix and match, single bed size",
        image: "images/bedsheet-floral-trio.jpg"
    },
    {
        id: 7,
        name: "Mandala Collection Bedsheet",
        category: "bedsheets",
        price: 1699,
        description: "Intricate mandala designs in multiple color combinations, premium quality cotton",
        image: "images/bedsheet-mandala-collection.jpg"
    },
    {
        id: 8,
        name: "Elephant & Paisley Bedsheet",
        category: "bedsheets",
        price: 1399,
        description: "Classic Barmeri print with elephants and paisley motifs, brown tones, double bed",
        image: "images/bedsheet-elephant-brown.jpg"
    },
    {
        id: 9,
        name: "Blue Mandala Premium Bedsheet",
        category: "bedsheets",
        price: 1799,
        description: "Rich blue mandala pattern with elephant border, colorfast dyes, luxury cotton",
        image: "images/bedsheet-blue-mandala.jpg"
    },
    {
        id: 10,
        name: "Red Geometric Ajrak Bedsheet",
        category: "bedsheets",
        price: 1599,
        description: "Traditional Ajrak geometric patterns in red and yellow, natural dyes, king size",
        image: "images/bedsheet-red-geometric.jpg"
    },
    {
        id: 11,
        name: "Blue Elephant Ethnic Bedsheet",
        category: "bedsheets",
        price: 1699,
        description: "Royal blue with decorative elephant and peacock motifs, premium block print",
        image: "images/bedsheet-blue-elephant.jpg"
    },
    {
        id: 12,
        name: "Orange Geometric Bedsheet",
        category: "bedsheets",
        price: 1499,
        description: "Vibrant orange with traditional geometric patterns, soft cotton, includes pillow covers",
        image: "images/bedsheet-orange-geometric.jpg"
    },
    {
        id: 13,
        name: "Warli Art Bedsheet",
        category: "bedsheets",
        price: 1799,
        description: "Authentic Warli tribal art design in blue and white, unique cultural motifs, double bed",
        image: "images/bedsheet-warli-art.jpg"
    },
    
    // Kurtis & Suits Collection
    {
        id: 14,
        name: "Yellow Floral Cotton Kurti",
        category: "suits",
        price: 699,
        description: "Beautiful yellow floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        image: "images/kurti-yellow-floral.jpg"
    },
    {
        id: 15,
        name: "Grey Paisley Cotton Kurti",
        category: "suits",
        price: 799,
        description: "Elegant grey paisley print, breathable cotton fabric, perfect for office wear",
        image: "images/kurti-grey-paisley.jpg"
    },
    {
        id: 16,
        name: "Blue Floral Print Kurti",
        category: "suits",
        price: 899,
        description: "Navy blue with intricate floral patterns, button detail, straight cut, all sizes",
        image: "images/kurti-blue-floral.jpg"
    },
    {
        id: 17,
        name: "Aqua Floral Cotton Kurti",
        category: "suits",
        price: 849,
        description: "Fresh aqua blue with grey floral print, comfortable daily wear, premium cotton",
        image: "images/kurti-aqua-floral.jpg"
    },
    {
        id: 18,
        name: "Sky Blue Embroidered Suit",
        category: "suits",
        price: 2299,
        description: "Elegant sky blue suit with beautiful embroidery, includes kurta and dupatta, special occasions",
        image: "images/suit-sky-blue-embroidered.jpg"
    },
    {
        id: 19,
        name: "Pink Embroidered Suit Set",
        category: "suits",
        price: 2499,
        description: "Vibrant pink suit with traditional embroidery, 3-piece set with dupatta, festive wear",
        image: "images/suit-pink-embroidered.jpg"
    },
    {
        id: 20,
        name: "Turquoise Palazzo Suit",
        category: "suits",
        price: 2199,
        description: "Beautiful turquoise palazzo suit with floral print, includes kurta, palazzo & dupatta",
        image: "images/suit-turquoise-palazzo.jpg"
    }
];

// Shopping Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// Load Products
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
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'bedsheets' ? 'Bedsheets' : 'Suits & Kurtis'}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">₹${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
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

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    saveCartToStorage();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.style.background = '#25D366';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalAmount = document.getElementById('totalAmount');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `₹${total}`;
    
    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        document.getElementById('checkoutBtn').disabled = false;
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
    }
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            saveCartToStorage();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
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

// Handle Checkout - Send to WhatsApp
function handleCheckout(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const customerEmail = formData.get('customerEmail');
    const customerAddress = formData.get('customerAddress');
    const customerCity = formData.get('customerCity');
    const customerPincode = formData.get('customerPincode');
    const orderNotes = formData.get('orderNotes');
    
    // Build order details
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
        orderDetails += `   Quantity: ${item.quantity}\n`;
        orderDetails += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderDetails += `\n💰 *Total Amount: ₹${total}*\n`;
    
    if (orderNotes) {
        orderDetails += `\n📝 *Special Instructions:*\n${orderNotes}\n`;
    }
    
    orderDetails += `\n---\n🕐 Order placed on ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}`;
    
    // Your WhatsApp business number
    const whatsappNumber = '919887259471'; // Your number: 098872 59471
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderDetails)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Clear cart and close modal
    setTimeout(() => {
        cart = [];
        updateCart();
        saveCartToStorage();
        closeCheckout();
        closeCart();
        
        // Show success message
        alert('✅ Order details sent to WhatsApp! We will confirm your order shortly. Thank you for shopping with Vastra Shailii!');
        
        // Reset form
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

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .about-content, .footer-section');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
