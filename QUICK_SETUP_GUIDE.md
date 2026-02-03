# 🚀 Quick Setup Guide - Vastra Shailii Website

## Step-by-Step: Host on GitHub Pages

### 1️⃣ Create GitHub Account (if you don't have one)
- Go to https://github.com
- Click "Sign up"
- Follow the registration process

### 2️⃣ Create New Repository
- Click "+" icon (top right) → "New repository"
- Repository name: `vastra-shailii`
- Select: ✅ Public
- Click "Create repository"

### 3️⃣ Upload Your Files
**Easiest Method:**
1. Click "uploading an existing file" link
2. Drag and drop ALL 4 files:
   - ✅ index.html
   - ✅ styles.css
   - ✅ script.js
   - ✅ README.md
3. Click "Commit changes"

### 4️⃣ Enable GitHub Pages
1. Go to **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under "Branch": Select **main**
4. Click **Save**
5. Wait 1-2 minutes

### 5️⃣ Your Website is LIVE! 🎉
URL: `https://YOUR-USERNAME.github.io/vastra-shailii/`

---

## ⚙️ IMPORTANT: Customize Before Going Live

### 🔴 MUST DO: Update WhatsApp Number

**File:** `script.js` (line 325)

```javascript
// REPLACE THIS NUMBER WITH YOURS:
const whatsappNumber = '919887259471';
```

**Format:** `91XXXXXXXXXX` (no spaces, no +, no -)
- Your number: 098872 59471
- Correct format: `919887259471` ✅
- Wrong format: `+91 98872 59471` ❌

---

## 📝 Adding More Products

**File:** `script.js` (lines 2-65)

### Example: Add a new bedsheet

```javascript
{
    id: 13,  // Make sure ID is unique
    name: "Royal Rajasthani Print Bedsheet",
    category: "bedsheets",
    price: 1899,
    description: "Luxurious design with traditional motifs",
    image: "🌹"  // Choose any emoji
},
```

**Available Categories:**
- `"bedsheets"` - For all bedsheet products
- `"suits"` - For suits and kurtis

**Tips:**
- Keep IDs unique (use 13, 14, 15...)
- Price in rupees (no ₹ symbol needed)
- Use emojis for now: 🌺🌸🌼🌻🌹🏵️💐🌷✨💫⭐🔷🔶💎👗👘👚💃

---

## 🎨 Change Website Colors

**File:** `styles.css` (lines 1-10)

```css
:root {
    --primary: #8B4513;     /* Main color (brown) */
    --secondary: #D4AF37;   /* Gold accent */
    --accent: #DC143C;      /* Red for prices/buttons */
    --text-dark: #2C1810;   /* Text color */
}
```

**Popular Color Combinations:**
- **Traditional:** Keep current (Brown + Gold)
- **Modern Pink:** `#E91E63` + `#F06292`
- **Royal Blue:** `#1565C0` + `#42A5F5`
- **Elegant Purple:** `#6A1B9A` + `#AB47BC`

Use [Coolors.co](https://coolors.co) to generate color palettes!

---

## 📱 Update Business Info

**File:** `index.html`

### Store Address (line 90-95)
```html
<p>59-B, Triveni Nagar 1st, Nangal Jaisa Bohra<br/>
Near Prakash Public School, Jhotwara<br/>
Jaipur, Rajasthan 302012</p>
```

### Phone & Hours (line 98-101)
```html
<p>Phone: 098872 59471<br/>
Hours: 9:30 AM - 8:00 PM<br/>
Closed on Sundays</p>
```

---

## 🖼️ Adding Real Product Images (Future)

**Current:** Using emoji placeholders (🌺👗)

**To add real images:**

1. Create `images` folder in repository
2. Upload product photos (use JPG, 800x800px recommended)
3. Name them: `product1.jpg`, `product2.jpg`, etc.

4. In `script.js`, change:
```javascript
// FROM:
image: "🌺"

// TO:
image: "images/product1.jpg"
```

5. Update `loadProducts()` function in `script.js`:
```javascript
// Find line with:
<div class="product-image">${product.image}</div>

// Replace with:
<img src="${product.image}" alt="${product.name}" class="product-image">
```

---

## 📊 Track Visitors (Optional)

### Add Google Analytics:
1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Get your tracking code
3. Add to `index.html` before `</head>` tag

---

## ✅ Pre-Launch Checklist

Before sharing your website:

- [ ] Updated WhatsApp number in `script.js`
- [ ] Added your products (at least 6-8)
- [ ] Verified business address and hours
- [ ] Tested on mobile phone
- [ ] Tested cart and checkout
- [ ] Sent a test order to WhatsApp
- [ ] Added website URL to Google Business

---

## 🆘 Troubleshooting

### Website not loading?
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages → URL is green ✅
- Clear browser cache (Ctrl + Shift + R)

### WhatsApp not opening?
- Verify number format: `919887259471` (no spaces)
- Test on actual phone, not computer
- Make sure WhatsApp is installed

### Products not showing?
- Check `script.js` for syntax errors
- Each product must have comma except last one
- IDs must be unique numbers

---

## 📞 Need Help?

**Testing Checklist:**
1. ✅ Add product to cart
2. ✅ Change quantity
3. ✅ Remove item
4. ✅ Fill checkout form
5. ✅ Click WhatsApp button
6. ✅ Verify order details in WhatsApp

**Success!** When order appears in WhatsApp with all details ✅

---

## 🎉 Next Steps After Launch

1. **Share Your Website:**
   - Add to Instagram bio
   - Share on Facebook page
   - WhatsApp status
   - Google Business Profile

2. **Marketing Ideas:**
   - First order discount: "Use code FIRST10"
   - Share customer photos
   - Festival special offers
   - Combo deals

3. **Future Enhancements:**
   - Add image gallery for products
   - Customer testimonials section
   - Instagram feed integration
   - Blog for styling tips

---

**Your website URL will be:**
`https://YOUR-GITHUB-USERNAME.github.io/vastra-shailii/`

**Example:**
If your GitHub username is `rajeshkumar`, your site will be:
`https://rajeshkumar.github.io/vastra-shailii/`

---

**All the best! 🚀**

Questions? WhatsApp: 098872 59471
