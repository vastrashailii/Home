// ═══════════════════════════════════════════════════════════════
// VASTRA SHAILII - PRODUCT CATALOG
// ═══════════════════════════════════════════════════════════════
// 
// 📝 HOW TO ADD NEW PRODUCTS:
// 
// 1. Copy any existing product below
// 2. Change the id to next number (21, 22, 23...)
// 3. Update name, price, description
// 4. Add your image path(s) in images array
// 5. List available colors
// 6. Save the file - Done!
//
// ═══════════════════════════════════════════════════════════════

const products = [
    
    // ═══════════════════════════════════════════════════════════
    // BEDSHEETS SECTION
    // ═══════════════════════════════════════════════════════════
    
    {
        id: 1,
        name: "Jaipuri Leaf Print Bedsheet",
        category: "bedsheets",
        price: 1299,
        description: "Beautiful block print with traditional leaf motifs, 100% cotton, double bed with 2 pillow covers",
        images: [
            "images/bedsheet-leaf-print.jpg"
        ],
        colors: ["Beige & Black", "Red & Black"],
        availableColors: 2
    },
    
    {
        id: 2,
        name: "Sanganeri Geometric Bedsheet",
        category: "bedsheets",
        price: 1399,
        description: "Stunning geometric patterns with floral borders, premium cotton, includes pillow covers",
        images: [
            "images/bedsheet-geometric-gold.jpg"
        ],
        colors: ["Gold", "Multiple Colors"],
        availableColors: 3
    },
    
    {
        id: 3,
        name: "Peacock & Bird Motif Bedsheet",
        category: "bedsheets",
        price: 1499,
        description: "Elegant peacock and bird motifs, double bed, soft cotton fabric",
        images: [
            "images/bedsheet-peacock-blue.jpg"
        ],
        colors: ["Blue", "White"],
        availableColors: 2
    },
    
    {
        id: 4,
        name: "Paisley Print Bedsheet",
        category: "bedsheets",
        price: 1199,
        description: "Contemporary paisley design, breathable cotton, king size",
        images: [
            "images/bedsheet-paisley-swirl.jpg"
        ],
        colors: ["Green", "Pink", "Beige"],
        availableColors: 3
    },
    
    {
        id: 5,
        name: "Elephant & Peacock Bedsheet",
        category: "bedsheets",
        price: 1599,
        description: "Traditional Rajasthani elephant and peacock motifs, vibrant colors, 2 pillow covers",
        images: [
            "images/bedsheet-elephant-blue-green.jpg",
            "images/bedsheet-elephant-brown.jpg"
        ],
        colors: ["Blue", "Green", "Brown"],
        availableColors: 2
    },
    
    {
        id: 6,
        name: "Floral Border Bedsheet",
        category: "bedsheets",
        price: 1299,
        description: "Beautiful floral patterns with decorative borders, single bed size",
        images: [
            "images/bedsheet-floral-trio.jpg"
        ],
        colors: ["Yellow", "Pink", "Teal"],
        availableColors: 3
    },
    
    {
        id: 7,
        name: "Mandala Design Double Bedsheet",
        category: "bedsheets",
        price: 1699,
        description: "Intricate mandala designs, premium quality cotton Size 93*108 | 2 Pillow Covers | Hand & Machine Washable ",
        images: [
            "images/bedsheet-mandala1.jpg",
            "images/bedsheet-mandala2.jpg",
            "images/bedsheet-mandala3.jpg",
            "images/bedsheet-mandala4.jpg"
        ],
        colors: ["Multi-design", "Blue", "Red", "Orange"],
        availableColors: 3
    },
    
    {
        id: 8,
        name: "Ajrak Geometric Print Bedsheet",
        category: "bedsheets",
        price: 1599,
        description: "Traditional Ajrak geometric patterns, natural dyes, king size",
        images: [
            "images/bedsheet-red-geometric.jpg",
            "images/bedsheet-blue-elephant.jpg",
            "images/bedsheet-orange-geometric.jpg"
        ],
        colors: ["Red", "Blue", "Orange"],
        availableColors: 3
    },
    
    {
        id: 9,
        name: "Warli Tribal Art Bedsheet",
        category: "bedsheets",
        price: 1799,
        description: "Authentic Warli tribal art design, unique cultural motifs, double bed",
        images: [
            "images/bedsheet-warli-art.jpg"
        ],
        colors: ["Blue & White", "Black & White"],
        availableColors: 2
    },

    {
        id: 10,
        name: "Jaipuri Single Bedsheet",
        category: "bedsheets",
        price: 350,
        description: "Authentic Warli tribal art design, unique cultural motifs, double bed",
        images: [
            "images/bedsheet-warli-art.jpg"
        ],
        colors: ["Pink & White", "Yellow & Brown"],
        availableColors: 2
    },
    
    // ═══════════════════════════════════════════════════════════
    // KURTIS & SUITS SECTION
    // ═══════════════════════════════════════════════════════════
    
    {
        id: 13,
        name: "Floral Print Cotton Kurti",
        category: "suits",
        price: 699,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        images: [
            "images/kurti-yellow-floral.jpg",
        ],
        colors: ["Yellow"],
     //   availableColors: 3
    },

    {
        id: 14,
        name: "Floral Print Cotton Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        images: [
            "images/kurti-aqua-floral.jpg"
        ],
        colors: ["Aqua Blue"],
        // availableColors: 3
    },

    
    {
        id: 15,
        name: "Floral Print Cotton Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        images: [
            "images/kurti-blue-floral.jpg",
        ],
        colors: ["Navy Blue"],
        // availableColors: 3
    },
    
    {
        id: 17,
        name: "Paisley Print Cotton Kurti",
        category: "suits",
        price: 350,
        description: "Elegant paisley print, breathable cotton fabric, perfect for office wear",
        images: [
            "images/kurti-grey-paisley.jpg"
        ],
        colors: ["Grey"],
        // availableColors: 3
    },
    
    {
        id: 18,
        name: "Embroidered Cotton Suit Set",
        category: "suits",
        price: 1699,
        description: "Elegant embroidered suit with beautiful work, includes kurta and dupatta",
        images: [
            "images/suit-sky-blue-embroidered.jpg",
        ],
        colors: ["Sky Blue"],
        // availableColors: 3
    },

    {
        id: 19,
        name: "Cotton Suit Set",
        category: "suits",
        price: 1399,
        description: "Elegant embroidered suit with beautiful work, includes kurta and dupatta",
        images: [
             "images/suit-pink-embroidered.jpg"
        ],
        colors: ["Pink", "Mehendi"],
        availableColors: 2
    },

    {
        id: 20,
        name: "Palazzo Suit Set",
        category: "suits",
        price: 1499,
        description: "Beautiful palazzo suit with floral print, includes kurta, palazzo & dupatta",
        images: [
            "images/suit-turquoise-palazzo.jpg"
        ],
        color: ["Turquoise"],
        // availableColors: 3
    }
    
    // ═══════════════════════════════════════════════════════════
    // ✏️ ADD YOUR NEW PRODUCTS BELOW
    // ═══════════════════════════════════════════════════════════
    //
    // TEMPLATE - Copy this and fill in your details:
    //
    // ,{
    //     id: 21,  // Use next number: 21, 22, 23...
    //     name: "Your Product Name Here",
    //     category: "bedsheets",  // or "suits"
    //     price: 1499,  // Your price
    //     description: "Describe your product here - material, size, features",
    //     images: [
    //         "images/your-photo-1.jpg",
    //         "images/your-photo-2.jpg"  // Add more if multiple colors
    //     ],
    //     colors: ["Color 1", "Color 2", "Color 3"],
    //     availableColors: 3  // Total number of colors
    // }
    //
    // ═══════════════════════════════════════════════════════════
    
];

// Don't edit below this line
// ═══════════════════════════════════════════════════════════════
