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
        name: "Mandala Double Bedsheet",
        category: "bedsheets",
        price: 600,
        description: "This vibrant Colors of Jaipuri bedsheet features a traditional central mandala design accented by floral motifs. Crafted from pure cotton, it combines ethnic artistry with a soft, breathable feel perfect for any bedroom decor, 100% cotton, includes 2 pillow covers",
        images: [
            "images/bedsheet-mandala1.jpg",
            "images/bedsheet-mandala2.jpg",
            "images/bedsheet-mandala3.jpg",
            "images/bedsheet-mandala4.jpg"
        ],
        colors: ["Blue","Light Blue", "Orange", "Red"],
        availableColors: 4,
        size: "King Size (100*108)"
    },
    
    {
        id: 2,
        name: "Arbana Elephant Print with White base",
        category: "bedsheets",
        price: 550,
        description: "multicolored elephant motifs spread across a crisp white base, a classic hallmark of Rajasthani textile art. Pure Cotton Double BedSheet includes pillow covers",
        images: [
            "images/bedsheet-White_Print_elephate.jpg"
        ],
        colors: ["White"],
        availableColors: 1,
        size: "90*108"
    },
    
    {
        id: 3,
        name: "Arbana Hand-block Elephant Print",
        category: "bedsheets",
        price: 550,
        description: "Rajasthani artisanal work, known for its intricate detailing and traditional motifs.red royal elephants and paisley patterns,includes pillow covers",
        images: [
            "images/bedsheet-elephant-brown.jpg"
        ],
        colors: ["Maroon-Red"],
        availableColors: 1,
        size: "90*108"
    },
    
    {
        id: 4,
        name: "Arbana Zig-Zag or Chevron border",
        category: "bedsheets",
        price: 550,
        description: "Jaipuri hand-block printed bedsheet set showcases a refreshing seafoam green and white floral design, accented by a distinctive geometric chevron border.",
        images: [
            "images/bedsheet-geometric1.jpg",
            "images/bedsheet-geometric2.jpg",
            "images/bedsheet-geometric3.jpg",
            "images/bedsheet-geometric4.jpg",
            "images/bedsheet-geometric5.jpg"
        ],
        colors: ["Yellow-Blue", "Green-Black", "Blue-Brown", "Grey-Black", "Blue"],
        availableColors: 5,
        size: "90*108"
    },
    
    {
        id: 5,
        name: "Arbana jharokha-Border",
        category: "bedsheets",
        price: 550,
        description: "Jaipuri hand-block printed bedsheet is a quintessential example of the traditional textile art from Rajasthan ,botanical florals, paisley patterns,vibrant colors, 2 pillow covers",
        images: [
            "images/Sanganeri-handblock-prints.jpg",
            "images/Sanganeri-handblock-prints1.jpg",
            "images/Sanganeri-handblock-prints2.jpg",
            "images/Sanganeri-handblock-prints3.jpg"
        ],
        colors: ["Lime Yellow", "Blue", "Gray", "Pink"],
        availableColors: 4,
        size: "90*108"
    },
    
    {
        id: 6,
        name: "Arbana Floral Medallions",
        category: "bedsheets",
        price: 550,
        description: "Jaipuri hand-block printed bedsheet set is a quintessential example of traditional Rajasthani textile art, likely originating from artisan hubs like Sanganer or Bagru.",
        images: [
            "images/bedsheet-paisley-swirl.jpg",
            "images/bedsheet-paisley-swirl.jpg",
            "images/bedsheet-paisley-swirl.jpg"
        ],
        colors: ["grey-green","Maroon-Green","Yellow-grey""],
        availableColors: 3,
        size: "90*108"
    },
    
    {
        id: 7,
        name: "Arbana botanical Prints",
        category: "bedsheets",
        price: 550,
        description: "Jaipuri hand-block printed bedsheet features a traditional botanical and geometric design, a classic hallmark of Rajasthani artisanal textile work",
        images: [
            "images/bedsheet-floral.jpg",
            "images/bedsheet-floral1.jpg",
            "images/bedsheet-floral2.jpg",
            "images/bedsheet-floral3.jpg"
        ],
        colors: ["Green", "Pink", "Blue", "Orange"],
        availableColors: 4,
        size: "90*108"
    },
    
    {
        id: 8,
        name: "Arbana Pashmina silk jacquard Print",
        category: "bedsheets",
        price: 550,
        description: "These designs are characteristic of high-end Kashmiri craftsmanship and are often used for luxury shawls, scarves, or bedding.",
        images: [
            "images/damask pattern.jpg"
        ],
        colors: ["Yellow", "Grey"],
        availableColors: 2,
        size: "90*108"
    },
    
    {
        id: 9,
        name: "Warli Tribal Art Bedsheet",
        category: "bedsheets",
        price: 1799,
        description: "Authentic Warli tribal art design, unique cultural motifs, double bed",
        images: [
            "images/bedsheet-elephant-blue.jpg",
            "images/bedsheet-elephant-green.jpg"
        ],
        colors: ["Blue", "Green"],
        availableColors: 2,
        size: "90*108"
    },
    
    // ═══════════════════════════════════════════════════════════
    // KURTIS & SUITS SECTION
    // ═══════════════════════════════════════════════════════════
    
    {
        id: 11,
        name: "Floral Print Cotton Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves",
        images: [
            "images/kurti-yellow-floral.jpg"
        ],
        colors: ["Yellow"],
        availableColors: 1,
        size: ["L-40", "XL-42", "3XL-46"]
    },
    
    {
        id: 12,
        name: "Floral Print Aqua",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        images: [
            "images/kurti-aqua-floral.jpg"
        ],
        colors: ["Sky Blue"],
        availableColors: 1,
        size: ["M", "L", "XL", "XXL"]
    },
    
    {
        id: 13,
        name: "Long Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful Red brown floral print long kurti, 100% cotton, comfortable 3/4 sleeves",
        images: [
            "images/kurti-blue-floral.jpg"
        ],
        colors: ["Blue-Red"],
        availableColors: 1,
        size: ["M", "L", "XL"]
    },
    
    {
        id: 14,
        name: "Kurti Paisley Print",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes",
        images: [
            "images/kurti-grey-paisley.jpg"
        ],
        colors: ["Grey"],
        availableColors: 1,
        size: ["M-38", "L-40", "XL-42", "XXL-44"]
    },
    
    {
        id: 15,
        name: "3 piece-Embroidered Suits",
        category: "suits",
        price: 1700,
        description: "Elegant embroidered suit with beautiful work, includes kurta and dupatta, comfortable, party wear",
        images: [
            "images/suit-sky-blue-embroidered.jpg"
        ],
        colors: ["Sky Blue"],
        availableColors: 1,
        size: ["M", "L", "XL"]
    },
    
    {
        id: 16,
        name: "Kurta Set",
        category: "suits",
        price: 1400,
        description: "Teal floral kurta set includes a straight-cut kurta, matching trousers or palazzos, and a dupatta. Crafted from breathable pure cotton or smooth viscose rayon, making it suitable for both daily wear and special occasions.",
        images: [
            "images/suit-turquoise-palazzo.jpg"
        ],
        colors: ["Teal Blue"],
        availableColors: 1,
        size: ["L", "XL", "XXL"]
    },
    
    {
        id: 17,
        name: "Kurta Set",
        category: "suits",
        price: 950,
        description: "Features intricate detailing and a classic silhouette, ideal choice for festive or semi-formal occasions.",
        images: [
            "images/suit-pink.jpg",
            "images/suit-green.jpg"
        ],
        colors: ["Pink", "Lime Green"],
        availableColors: 2,
        size: ["M", "L", "XL", "XXXL"]
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
