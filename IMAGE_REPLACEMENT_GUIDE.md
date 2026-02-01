# Digiroc Technologies - Image Replacement Guide

This guide identifies all image locations in your React project and provides recommendations for suitable replacement images that align with Digiroc's business focus: **IT Distribution, Data Analytics, and Market Research**.

---

## 🎯 PRIORITY 1: HERO/SLIDER IMAGES (Most Visible)

### Location: `src/images/slider/`
**Current files:** slide-1.jpg, slide-2.jpg, slide-3.jpg

**Used in:** 
- Hero sections (Homepage variants 1-5)
- First thing visitors see

**Recommended Images:**
1. **Slide 1 - Data Analytics Theme**
   - Modern office setting with data visualization dashboards on screens
   - Business professionals analyzing charts/graphs
   - Keywords: "data analytics", "business intelligence dashboard", "market research office"
   - Suggested sources: Unsplash, Pexels, Pixabay
   - Search terms: "data analytics team", "business dashboard", "modern office analytics"

2. **Slide 2 - IT Distribution Theme**
   - Modern data center or server room
   - Technology infrastructure/networking equipment
   - Enterprise IT environment
   - Search terms: "data center", "server room", "IT infrastructure", "network technology"

3. **Slide 3 - Market Research Theme**
   - Business meeting/strategy session
   - Team collaboration with charts
   - Professional presentation setting
   - Search terms: "business strategy meeting", "corporate presentation", "market analysis"

**Image Specifications:**
- Dimensions: 1920x1080px or higher (16:9 ratio)
- Format: JPG
- Style: Professional, modern, clean
- Color tone: Should complement Digiroc blue (#001C4A)

---

## 🏢 PRIORITY 2: ABOUT SECTION IMAGES

### Location: `src/images/about/`
**Current files:** img-1.jpg, img-2.jpg, about.jpg, about-2.jpg

**Used in:** About sections across multiple page variants

**Recommended Images:**
1. **about-2.jpg** (Main about image)
   - Professional office environment in Zimbabwe/Africa
   - Modern workspace showing technology and teamwork
   - Search: "african business office", "modern zimbabwe office", "technology workspace africa"

2. **img-1.jpg & img-2.jpg** (Mission/Vision section)
   - Corporate team collaboration
   - Professional meeting rooms
   - Technology-focused workspace
   - Search: "business team collaboration", "corporate meeting", "professional workspace"

**Specifications:**
- Dimensions: 800x600px minimum
- Professional, well-lit photography
- Diverse team representation preferred

---

## 👥 PRIORITY 3: TEAM MEMBER PHOTOS

### Location: `src/images/team/`
**Current files:** img-1.jpg, img-2.jpg, img-3.jpg, img-4.jpg

**Team Members (from team.js):**
1. Morkal Akunda - Designer
2. Tiptop Jonathon - Developer
3. Aleon Dela - Programmer
4. Beila kelar - Designer

**Recommended Replacement:**
- Professional headshots of actual Digiroc team members
- OR stock photos of professional business people
- **IMPORTANT:** Update team.js with actual team member names and titles:
  - Market Research Analyst
  - Data Scientist
  - IT Distribution Manager
  - Business Intelligence Consultant

**Search terms:** "professional headshot african", "business professional portrait", "corporate headshot"

**Specifications:**
- Dimensions: 400x400px (square format)
- Professional attire
- Clean background (neutral colors)
- High quality, good lighting

---

## 📊 PRIORITY 4: PROJECT/CASE STUDY IMAGES

### Location: `src/images/projects/`
**Current files:** img-1.jpg through img-10.jpg

**Current Project Titles (from project.js):**
1. Market Research
2. Investment planning
3. Business Analysis
4. Financial Advices

**Recommended Images:**
1. **Market Research Projects**
   - Data visualization charts
   - Survey/research activities
   - Market analysis dashboards
   - Search: "market research", "data analysis charts", "business intelligence"

2. **IT Distribution Projects**
   - Technology products/hardware
   - Warehouse/logistics operations
   - Supply chain visualization
   - Search: "IT distribution", "technology warehouse", "enterprise hardware"

3. **Data Analytics Projects**
   - Dashboard screenshots
   - Analytics platforms
   - Data visualization examples
   - Search: "analytics dashboard", "data visualization", "business metrics"

**Specifications:**
- Dimensions: 800x600px minimum
- Can be actual project screenshots (anonymized)
- Professional, clean visuals

---

## 📝 PRIORITY 5: BLOG IMAGES

### Location: `src/images/blog/`
**Current files:** img-1.jpg, img-2.jpg, img-3.jpg, img-4.jpg, img-5.jpg, img-6.jpg

**Blog Topics (from blogs.js):**
1. Consulting Success is the most comprehensive learning
2. Fields works with individual consult and consulting firms across
3. Proven advice on how to grow your consulting practice

**Recommended Images:**
- Business/technology themed stock photos
- Office environments
- Technology and analytics imagery
- Search: "business consulting", "technology blog", "data analytics", "market research"

**Specifications:**
- Dimensions: 800x500px minimum
- Consistent style across all blog images
- Professional quality

---

## 🤝 PRIORITY 6: PARTNER LOGOS

### Location: `src/images/partners/`
**Current files:** img-1.png, img-2.png, img-3.png, img-4.png

**Recommended Content:**
- Logos of actual technology vendor partners (if authorized)
- Logos of client organizations (with permission)
- Industry certification badges
- Technology partner logos (Microsoft, IBM, Cisco, etc.)

**Specifications:**
- Format: PNG with transparent background
- Dimensions: 200x100px recommended
- Grayscale or monochrome preferred for consistency

---

## 🎨 PRIORITY 7: BACKGROUND IMAGES

### Files to Replace:
1. **page-title.jpg** - Page header background
   - Abstract tech pattern or office environment
   - Search: "tech abstract background", "blue business background"

2. **service-bg.jpg** - Service section background
   - Subtle texture or gradient
   - Should complement Digiroc blue

3. **contact-bg.jpg** - Contact section background
   - Professional, clean background

**Specifications:**
- Large dimensions: 1920x1080px or higher
- Subtle, non-distracting patterns
- Colors that complement #001C4A (Digiroc blue)

---

## 📱 LOGO FILES

### Location: `src/images/`
**Current files:** logo.png, logo-2.png, logo1.png, logo-22.png, footer-logo.png

**Status:** ✅ Already replaced with Digiroc logo
- Verify all logo files are updated
- Ensure consistent branding across all variants

---

## 🔍 WHERE TO FIND SUITABLE IMAGES

### Free Stock Photo Sources (Commercial Use Allowed):
1. **Unsplash** (unsplash.com)
   - High-quality, free images
   - Great for business/tech imagery
   - No attribution required

2. **Pexels** (pexels.com)
   - Free stock photos and videos
   - Excellent business section
   - African business photography available

3. **Pixabay** (pixabay.com)
   - Free images and vectors
   - Good for tech/business themes

4. **Freepik** (freepik.com - with attribution)
   - Vectors and photos
   - Good for infographics

### Recommended Search Terms:
- "african business professionals"
- "data analytics dashboard"
- "IT infrastructure africa"
- "market research team"
- "business intelligence"
- "enterprise technology"
- "zimbabwe business office"
- "corporate meeting africa"
- "data visualization"
- "technology distribution"

### AI Image Generation (Alternative):
- **Leonardo.ai** - AI-generated business imagery
- **Midjourney** - Professional quality AI images
- **DALL-E** - Custom business scenes

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: Critical Images (Week 1)
- [ ] 3 Hero slider images (slide-1.jpg, slide-2.jpg, slide-3.jpg)
- [ ] Main about image (about-2.jpg)
- [ ] Page title background (page-title.jpg)

### Phase 2: Team & Projects (Week 2)
- [ ] 4 Team member photos (img-1 to img-4 in team/)
- [ ] Update team.js with real names and titles
- [ ] 6 Project images (projects/img-1 to img-6)
- [ ] Update project.js titles to match Digiroc services

### Phase 3: Supporting Content (Week 3)
- [ ] 6 Blog images (blog/img-1 to img-6)
- [ ] Partner logos (partners/img-1 to img-4)
- [ ] Background images (service-bg, contact-bg)
- [ ] About section images (about/img-1, img-2)

### Phase 4: Final Polish (Week 4)
- [ ] Blog detail images (blog-details/)
- [ ] Comment author images (if keeping blog functionality)
- [ ] Service single page images
- [ ] Any remaining placeholder images

---

## 🎯 IMAGE STYLE GUIDE

### Overall Aesthetic:
- **Professional & Modern**: Clean, contemporary business photography
- **Color Palette**: Images should complement Digiroc blue (#001C4A)
- **Diversity**: Represent African business environment when possible
- **Technology Focus**: Emphasize data, analytics, and IT themes
- **Quality**: High resolution, well-lit, professional composition

### What to AVOID:
- ❌ Generic "handshake" stock photos (overused)
- ❌ Overly posed, fake-looking business scenarios
- ❌ Low resolution or blurry images
- ❌ Images with competing brand logos visible
- ❌ Dated technology (old computers, etc.)
- ❌ Western-only representation (aim for African context)

---

## 💡 QUICK START RECOMMENDATIONS

### If you need images RIGHT NOW, here are specific Unsplash searches:

1. **Hero Slide 1**: Search "data analytics office" - Use photos by Firmbee.com or Campaign Creators
2. **Hero Slide 2**: Search "data center" - Use photos by Taylor Vick or imgix
3. **Hero Slide 3**: Search "business meeting africa" - Use photos by MyKenya or Brooke Cagle
4. **About Image**: Search "modern office zimbabwe" or "african business team"
5. **Team Photos**: Search "professional headshot black" - Get diverse, professional portraits

### Image Optimization Before Upload:
1. Resize to recommended dimensions
2. Optimize file size (use TinyPNG.com or similar)
3. Convert to appropriate format (JPG for photos, PNG for logos)
4. Rename files to match existing names in project

---

## 📞 NEED HELP?

If you need assistance with:
- Image selection
- Image optimization
- Updating image paths in code
- Creating custom graphics

I can help you with specific recommendations or code updates!

---

**Last Updated:** February 1, 2026
**Project:** Digiroc Technologies Website
**Focus:** IT Distribution | Data Analytics | Market Research
