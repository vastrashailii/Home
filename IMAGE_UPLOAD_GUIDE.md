# 📸 How to Upload Your Product Images to GitHub

Your website now includes **20 real product images** from your Vastra Shailii collection! Here's how to upload them to GitHub Pages.

## 📁 Your Product Images

All your images are already renamed and organized in the `images` folder:

### Bedsheets (13 images):
1. bedsheet-leaf-print.jpg
2. bedsheet-geometric-gold.jpg
3. bedsheet-peacock-blue.jpg
4. bedsheet-paisley-swirl.jpg
5. bedsheet-elephant-blue-green.jpg
6. bedsheet-floral-trio.jpg
7. bedsheet-mandala-collection.jpg
8. bedsheet-elephant-brown.jpg
9. bedsheet-blue-mandala.jpg
10. bedsheet-red-geometric.jpg
11. bedsheet-blue-elephant.jpg
12. bedsheet-orange-geometric.jpg
13. bedsheet-warli-art.jpg

### Kurtis & Suits (7 images):
14. kurti-yellow-floral.jpg
15. kurti-grey-paisley.jpg
16. kurti-blue-floral.jpg
17. kurti-aqua-floral.jpg
18. suit-sky-blue-embroidered.jpg
19. suit-pink-embroidered.jpg
20. suit-turquoise-palazzo.jpg

---

## 🚀 Step-by-Step: Upload to GitHub

### Method 1: Using GitHub Web Interface (EASIEST)

1. **Go to your GitHub repository**
   - Navigate to `github.com/YOUR-USERNAME/vastra-shailii`

2. **Upload the main files first**
   - Click "Add file" → "Upload files"
   - Drag and drop: `index.html`, `styles.css`, `script.js`, `README.md`
   - Click "Commit changes"

3. **Create images folder**
   - Click "Add file" → "Create new file"
   - Type: `images/placeholder.txt`
   - Click "Commit new file"

4. **Upload all product images**
   - Click on the `images` folder
   - Click "Add file" → "Upload files"
   - Drag and drop ALL 20 images from your `images` folder
   - Click "Commit changes"
   - ⏱️ This may take 2-3 minutes depending on your internet speed

5. **Delete placeholder file (optional)**
   - Click on `placeholder.txt`
   - Click trash icon to delete
   - Confirm deletion

### Method 2: Using Git Command Line

```bash
# Navigate to your folder
cd path/to/vastra-shailii

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Added Vastra Shailii website with product images"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/vastra-shailii.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## ✅ Verification Checklist

After uploading, verify:

- [ ] All 20 images are in `images/` folder on GitHub
- [ ] `index.html`, `styles.css`, `script.js` are in root directory
- [ ] GitHub Pages is enabled (Settings → Pages → Source: main branch)
- [ ] Website is live at: `https://YOUR-USERNAME.github.io/vastra-shailii/`

---

## 🖼️ File Size Information

Your images are optimized:
- **Bedsheet images:** 168 KB - 1.2 MB each
- **Kurti/Suit images:** 52 KB - 119 KB each
- **Total:** ~8.1 MB (well within GitHub's limits)

All images are already optimized and ready to upload!

---

## 🔧 Troubleshooting

### Images not showing on website?
1. Check file names match exactly (case-sensitive)
2. Ensure images are in `images/` folder
3. Wait 2-3 minutes for GitHub Pages to rebuild
4. Clear browser cache (Ctrl + Shift + R)

### Upload fails?
- Try uploading in batches of 5-10 images
- Check internet connection
- Ensure file names have no special characters

### Images too large?
- They're already optimized, but if needed use:
  - TinyPNG.com (compress without quality loss)
  - Squoosh.app (advanced compression)

---

## 📱 Testing Your Website

Once uploaded:

1. **Desktop Test:**
   - Open: `https://YOUR-USERNAME.github.io/vastra-shailii/`
   - Check all images load
   - Test cart functionality
   - Try checkout to WhatsApp

2. **Mobile Test:**
   - Open on your phone
   - Test responsive design
   - Verify WhatsApp integration works

---

## 🎨 Your Product Catalog

The website now displays your actual products:

**Bedsheets Section:**
- 13 stunning Jaipuri, Sanganeri, and Barmeri prints
- Price range: ₹1,199 - ₹1,799
- Categories: Leaf prints, geometric, elephant motifs, mandala, Warli art

**Kurtis & Suits Section:**
- 7 beautiful cotton wear items
- Price range: ₹699 - ₹2,499
- Styles: Printed kurtis, embroidered suits, palazzo sets

---

## 🎯 Next Steps After Upload

1. **Test Everything:**
   - Browse products ✅
   - Add to cart ✅
   - Checkout via WhatsApp ✅

2. **Share Your Website:**
   - Instagram bio
   - Facebook page
   - WhatsApp status
   - Google Business Profile

3. **Add More Products:**
   - Take new product photos
   - Add to `images/` folder
   - Update `script.js` products array

---

## 💡 Pro Tips

1. **Consistent Image Quality:**
   - All your images are high quality
   - Customers can see fabric details
   - Prints and colors are clearly visible

2. **Image Names:**
   - Descriptive names help with SEO
   - Easy to identify products
   - Good for search engines

3. **Adding New Images Later:**
   - Just upload to `images/` folder
   - Update product details in `script.js`
   - Commit changes

---

## 📞 Need Help?

If you face any issues:
1. Check the main README.md file
2. Refer to QUICK_SETUP_GUIDE.md
3. WhatsApp: 098872 59471

---

**Your website is ready to go live with real products! 🎉**

All 20 product images are included and properly configured.
Just upload to GitHub and your e-commerce site will be live!
