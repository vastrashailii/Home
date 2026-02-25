// ═══════════════════════════════════════════════════════════════
// VASTRA SHAILII - PRODUCT CATALOG
// ═══════════════════════════════════════════════════════════════
//
// 📝 CATEGORIES:
//   "single-bedsheets"  → Single Bedsheet (60*90)
//   "double-bedsheets"  → Double Bedsheet (90*108, 93*108, 100*108)
//   "suits"             → Suits & Kurtis
//
// 📸 IMAGE VARIANT RULE:
//   images[0] ← Color 1,  images[1] ← Color 2, ...
//   When customer clicks a color circle, matching image shows.
//
// 📐 SIZE VARIANT RULE (for bedsheets):
//   sizes: ["60*90", "90*108", "100*108"]
//   Each size can have a different price via sizePrices{}
//   e.g.  sizePrices: { "90*108": 550, "100*108": 600 }
//
// ═══════════════════════════════════════════════════════════════

const products = [

    // ═══════════════════════════════════════════════════════════
    // SINGLE BEDSHEETS  (60*90)
    // ═══════════════════════════════════════════════════════════

    {
        id: 101,
        name: "Single Mandala Print",
        category: "single-bedsheets",
        printType: "Mandala",
        price: 350,
        description: "Classic Jaipuri mandala design on pure cotton single bedsheet. Vibrant colors, soft feel, includes 1 pillow cover.",
        images: [
            "images/single-mandala-blue.jpg",
            "images/single-mandala-orange.jpg",
            "images/single-mandala-pink.jpg"
        ],
        colors: ["Blue", "Orange", "Pink"],
        availableColors: 3,
        sizes: ["60*90"],
        sizePrices: { "60*90": 350 }
    },

    {
        id: 102,
        name: "Single Arbana Elephant Print",
        category: "single-bedsheets",
        printType: "Arbana",
        price: 320,
        description: "Traditional hand-block elephant motifs on pure cotton. Rajasthani artisanal craft, includes 1 pillow cover.",
        images: [
            "images/single-elephant-white.jpg",
            "images/single-elephant-maroon.jpg"
        ],
        colors: ["White", "Maroon-Red"],
        availableColors: 2,
        sizes: ["60*90"],
        sizePrices: { "60*90": 320 }
    },

    {
        id: 103,
        name: "Single Ajrak Block Print",
        category: "single-bedsheets",
        printType: "Ajrak",
        price: 380,
        description: "Authentic Ajrak hand-block print from Barmer. Geometric patterns in natural dyes, 100% cotton, 1 pillow cover.",
        images: [
            "images/single-ajrak-blue.jpg",
            "images/single-ajrak-red.jpg",
            "images/single-ajrak-green.jpg"
        ],
        colors: ["Indigo Blue", "Brick Red", "Forest Green"],
        availableColors: 3,
        sizes: ["60*90"],
        sizePrices: { "60*90": 380 }
    },

    {
        id: 104,
        name: "Single Floral Botanical Print",
        category: "single-bedsheets",
        printType: "Arbana",
        price: 320,
        description: "Delicate botanical florals and paisley, hand-block printed. Breathable pure cotton, includes 1 pillow cover.",
        images: [
            "images/single-floral-green.jpg",
            "images/single-floral-pink.jpg",
            "images/single-floral-blue.jpg",
            "images/single-floral-yellow.jpg"
        ],
        colors: ["Green", "Pink", "Blue", "Yellow"],
        availableColors: 4,
        sizes: ["60*90"],
        sizePrices: { "60*90": 320 }
    },

    {
        id: 105,
        name: "Single Chevron Border Print",
        category: "single-bedsheets",
        printType: "Arbana",
        price: 320,
        description: "Zig-zag chevron border with floral center, Jaipuri hand-block printed, 100% cotton, 1 pillow cover.",
        images: [
            "images/single-chevron-yellow.jpg",
            "images/single-chevron-grey.jpg",
            "images/single-chevron-blue.jpg"
        ],
        colors: ["Yellow-Blue", "Grey-Black", "Blue-Brown"],
        availableColors: 3,
        sizes: ["60*90"],
        sizePrices: { "60*90": 320 }
    },

    // ═══════════════════════════════════════════════════════════
    // DOUBLE BEDSHEETS — MANDALA PRINTS
    // ═══════════════════════════════════════════════════════════

    {
        id: 1,
        name: "Mandala Double Bedsheet",
        category: "double-bedsheets",
        printType: "Mandala",
        price: 550,
        description: "Vibrant traditional central mandala design with floral motifs. Pure cotton, breathable, 2 pillow covers included.",
        images: [
            "images/bedsheet-mandala1.jpg",
            "images/bedsheet-mandala2.jpg",
            "images/bedsheet-mandala3.jpg",
            "images/bedsheet-mandala4.jpg"
        ],
        colors: ["Blue", "Light Blue", "Orange", "Red"],
        availableColors: 4,
        sizes: ["90*108", "93*108", "100*108"],
        sizePrices: {
            "90*108":  550,
            "93*108":  575,
            "100*108": 600
        }
    },

    // ═══════════════════════════════════════════════════════════
    // DOUBLE BEDSHEETS — ARBANA PRINTS
    // ═══════════════════════════════════════════════════════════

    {
        id: 2,
        name: "Arbana Elephant Print — White Base",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Multicolored elephant motifs on crisp white base. Classic Rajasthani textile art, pure cotton, 2 pillow covers.",
        images: [
            "images/bedsheet-White_Print_elephate.jpg"
        ],
        colors: ["White"],
        availableColors: 1,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 3,
        name: "Arbana Hand-block Elephant Print",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Red royal elephants and paisley patterns. Rajasthani artisanal hand-block work, includes 2 pillow covers.",
        images: [
            "images/bedsheet-elephant-brown.jpg",
            "images/bedsheet-elephant-blue.jpg",
            "images/bedsheet-elephant-green.jpg"
        ],
        colors: ["Maroon-Red", "Blue", "Green"],
        availableColors: 3,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 4,
        name: "Arbana Zig-Zag Chevron Border",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Seafoam green and white floral design with distinctive geometric chevron border. Jaipuri hand-block printed, 2 pillow covers.",
        images: [
            "images/bedsheet-geometric1.jpg",
            "images/bedsheet-geometric2.jpg",
            "images/bedsheet-geometric3.jpg",
            "images/bedsheet-geometric4.jpg",
            "images/bedsheet-geometric5.jpg"
        ],
        colors: ["Yellow-Blue", "Green-Black", "Blue-Brown", "Grey-Black", "Blue"],
        availableColors: 5,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 5,
        name: "Arbana Jharokha Border",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Botanical florals and paisley patterns with jharokha border motif. Vibrant Jaipuri colors, 2 pillow covers.",
        images: [
            "images/Sanganeri-handblock-prints.jpg",
            "images/Sanganeri-handblock-prints1.jpg",
            "images/Sanganeri-handblock-prints2.jpg",
            "images/Sanganeri-handblock-prints3.jpg"
        ],
        colors: ["Lime Yellow", "Blue", "Gray", "Pink"],
        availableColors: 4,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 6,
        name: "Arbana Floral Medallions",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Traditional Rajasthani floral medallion prints, originating from Sanganer artisan workshops. Includes 2 pillow covers.",
        images: [
            "images/bedsheet-paisley-swirl.jpg",
            "images/bedsheet-paisley-swirl2.jpg",
            "images/bedsheet-paisley-swirl3.jpg"
        ],
        colors: ["Grey-Green", "Maroon-Green", "Yellow-Grey"],
        availableColors: 3,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 7,
        name: "Arbana Botanical Prints",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "Traditional botanical and geometric design, Rajasthani artisanal hand-block work. 2 pillow covers included.",
        images: [
            "images/bedsheet-floral.jpg",
            "images/bedsheet-floral1.jpg",
            "images/bedsheet-floral2.jpg",
            "images/bedsheet-floral3.jpg"
        ],
        colors: ["Green", "Pink", "Blue", "Orange"],
        availableColors: 4,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    {
        id: 8,
        name: "Arbana Pashmina Silk Jacquard",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 500,
        description: "High-end Kashmiri jacquard-style craftsmanship. Luxury feel, classic damask pattern, 2 pillow covers.",
        images: [
            "images/damask-pattern-yellow.jpg",
            "images/damask-pattern-grey.jpg"
        ],
        colors: ["Yellow", "Grey"],
        availableColors: 2,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 500,
            "93*108": 525
        }
    },

    // ═══════════════════════════════════════════════════════════
    // DOUBLE BEDSHEETS — AJRAK PRINTS
    // ═══════════════════════════════════════════════════════════

    {
        id: 20,
        name: "Ajrak Hand-block Print",
        category: "double-bedsheets",
        printType: "Ajrak",
        price: 600,
        description: "Authentic Ajrak resist-block print from Barmer. Traditional geometric and floral motifs in natural dyes. 100% cotton, 2 pillow covers.",
        images: [
            "images/ajrak-double-blue.jpg",
            "images/ajrak-double-red.jpg",
            "images/ajrak-double-black.jpg"
        ],
        colors: ["Indigo Blue", "Brick Red", "Black-Gold"],
        availableColors: 3,
        sizes: ["90*108", "93*108", "100*108"],
        sizePrices: {
            "90*108":  600,
            "93*108":  625,
            "100*108": 650
        }
    },

    {
        id: 21,
        name: "Ajrak Barmeri Floral",
        category: "double-bedsheets",
        printType: "Ajrak",
        price: 600,
        description: "Barmeri Ajrak with intricate floral medallions and fine geometric borders. Natural dyes, 100% cotton, 2 pillow covers.",
        images: [
            "images/ajrak-floral-blue.jpg",
            "images/ajrak-floral-maroon.jpg"
        ],
        colors: ["Deep Blue", "Maroon"],
        availableColors: 2,
        sizes: ["90*108", "93*108", "100*108"],
        sizePrices: {
            "90*108":  600,
            "93*108":  625,
            "100*108": 650
        }
    },

    {
        id: 9,
        name: "Warli Tribal Art Bedsheet",
        category: "double-bedsheets",
        printType: "Arbana",
        price: 550,
        description: "Authentic Warli tribal art motifs. Unique cultural design, double bed, 2 pillow covers.",
        images: [
            "images/bedsheet-elephant-blue.jpg",
            "images/bedsheet-elephant-green.jpg"
        ],
        colors: ["Blue", "Green"],
        availableColors: 2,
        sizes: ["90*108", "93*108"],
        sizePrices: {
            "90*108": 550,
            "93*108": 575
        }
    },

    // ═══════════════════════════════════════════════════════════
    // SUITS & KURTIS
    // ═══════════════════════════════════════════════════════════

    {
        id: 11,
        name: "Floral Print Cotton Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves.",
        images: [
            "images/kurti-yellow-floral.jpg"
        ],
        colors: ["Yellow"],
        availableColors: 1,
        sizes: ["L-40", "XL-42", "3XL-46"],
        sizePrices: { "L-40": 350, "XL-42": 350, "3XL-46": 350 }
    },

    {
        id: 12,
        name: "Floral Print Aqua Kurti",
        category: "suits",
        price: 350,
        description: "Beautiful floral print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes.",
        images: [
            "images/kurti-aqua-floral.jpg"
        ],
        colors: ["Sky Blue"],
        availableColors: 1,
        sizes: ["M", "L", "XL", "XXL"],
        sizePrices: { "M": 350, "L": 350, "XL": 350, "XXL": 350 }
    },

    {
        id: 13,
        name: "Long Kurti",
        category: "suits",
        price: 350,
        description: "Red-brown floral print long kurti, 100% cotton, comfortable 3/4 sleeves.",
        images: [
            "images/kurti-blue-floral.jpg"
        ],
        colors: ["Blue-Red"],
        availableColors: 1,
        sizes: ["M", "L", "XL"],
        sizePrices: { "M": 350, "L": 350, "XL": 350 }
    },

    {
        id: 14,
        name: "Kurti Paisley Print",
        category: "suits",
        price: 350,
        description: "Beautiful paisley print kurti, 100% cotton, comfortable 3/4 sleeves, all sizes.",
        images: [
            "images/kurti-grey-paisley.jpg"
        ],
        colors: ["Grey"],
        availableColors: 1,
        sizes: ["M-38", "L-40", "XL-42", "XXL-44"],
        sizePrices: { "M-38": 350, "L-40": 350, "XL-42": 350, "XXL-44": 350 }
    },

    {
        id: 15,
        name: "3-Piece Embroidered Suit",
        category: "suits",
        price: 1700,
        description: "Elegant embroidered suit, beautiful work, includes kurta and dupatta. Party wear.",
        images: [
            "images/suit-sky-blue-embroidered.jpg"
        ],
        colors: ["Sky Blue"],
        availableColors: 1,
        sizes: ["M", "L", "XL"],
        sizePrices: { "M": 1700, "L": 1700, "XL": 1700 }
    },

    {
        id: 16,
        name: "Teal Floral Kurta Set",
        category: "suits",
        price: 1400,
        description: "Straight-cut kurta, matching trousers/palazzos, and dupatta. Pure cotton or viscose rayon. Suitable for daily and special occasions.",
        images: [
            "images/suit-turquoise-palazzo.jpg"
        ],
        colors: ["Teal Blue"],
        availableColors: 1,
        sizes: ["L", "XL", "XXL"],
        sizePrices: { "L": 1400, "XL": 1400, "XXL": 1400 }
    },

    {
        id: 17,
        name: "Festive Kurta Set",
        category: "suits",
        price: 950,
        description: "Intricate detailing, classic silhouette. Ideal for festive or semi-formal occasions.",
        images: [
            "images/suit-pink.jpg",
            "images/suit-green.jpg"
        ],
        colors: ["Pink", "Lime Green"],
        availableColors: 2,
        sizes: ["M", "L", "XL", "XXXL"],
        sizePrices: { "M": 950, "L": 950, "XL": 950, "XXXL": 950 }
    }

    // ═══════════════════════════════════════════════════════════
    // ✏️ ADD NEW PRODUCTS BELOW
    // ═══════════════════════════════════════════════════════════
    //
    // TEMPLATE — Copy and fill in:
    //
    // ,{
    //     id: 30,
    //     name: "Your Product Name",
    //     category: "single-bedsheets",   // single-bedsheets | double-bedsheets | suits
    //     printType: "Mandala",           // Mandala | Arbana | Ajrak  (bedsheets only)
    //     price: 350,                     // base/lowest price
    //     description: "Description here",
    //     images: [
    //         "images/your-photo-color1.jpg",
    //         "images/your-photo-color2.jpg"
    //     ],
    //     colors: ["Color 1", "Color 2"],
    //     availableColors: 2,
    //     sizes: ["90*108", "100*108"],
    //     sizePrices: {
    //         "90*108":  550,
    //         "100*108": 600
    //     }
    // }
    //
    // ═══════════════════════════════════════════════════════════

];

// Don't edit below this line
// ═══════════════════════════════════════════════════════════════
