# one.jpg Image Replacement Tracking

This document lists all files where images were replaced with `one.jpg` placeholder.

## Component Files (JavaScript/JSX)

### Hero Sections
1. **src/components/hero/hero.js**
   - hero1, hero2, hero3 (3 slide backgrounds)

2. **src/components/hero2/Hero2.js**
   - hero1, hero2, hero3 (3 slide backgrounds)

### About Sections
3. **src/components/about/about.js**
   - abimg (1 image)

4. **src/components/about2/about2.js**
   - abimg (1 image)

5. **src/components/about4/about4.js**
   - abimg (1 image)

### Mission & Vision
6. **src/components/MissionVission/MissionVission.js**
   - abimg1, abimg2, abimg3 (3 images)

### Blog Components
7. **src/components/BlogSidebar/BlogSidebar.js**
   - about (1 widget image)

8. **src/components/BlogDetails/BlogSingle.js**
   - blog3, blog4, blog5, blog6 (4 author/comment images)

### Partner Sections
9. **src/components/PartnerSection/PartnerSection.js**
   - pimg1, pimg2, pimg3, pimg4 (4 partner logos)

10. **src/components/PartnerSection2/PartnerSectionS2.js**
    - pimg1, pimg2, pimg3, pimg4, pimg5 (5 partner logos)

### Contact Section
11. **src/components/ContactSection/ContactSection.js**
    - contactImg (1 background image with overlay)

## API Data Files

12. **src/api/team.js**
    - timg1, timg2, timg3, timg4 (4 team member images)

13. **src/api/blogs.js**
    - blogImg1, blogImg2, blogImg3 (3 blog thumbnails)
    - blogSingleImg1, blogSingleImg2, blogSingleImg3 (3 blog detail images)

14. **src/api/service.js**
    - simg, simg3, simg4 (3 service images)

15. **src/api/product.js**
    - sp1, sp2, sp3, sp4, sp5, sp6 (6 product images)

16. **src/api/project.js**
    - pimg1, pimg2, pimg3, pimg4, pimg5, pimg6 (6 project images)

## Main Component Pages

17. **src/main-component/TermPage/TermPage.js**
    - tImg1, tImg2, tImg3 (3 terms page images)

18. **src/main-component/ProductSinglePage/alltab.js**
    - rv1, rv2 (2 review images)

## SCSS/Style Files (Background Images)

19. **src/sass/page/_service-single.scss**
    - service-single-form-bg.jpg → one.jpg

20. **src/sass/page/_home-style2.scss**
    - about-s2-bg.jpg → one.jpg
    - service-bg.jpg → one.jpg
    - contact-bg.jpg → one.jpg (with dark overlay added)

21. **src/sass/page/_home-default.scss**
    - cta-team-bg.jpg → one.jpg

22. **src/sass/page/_about.scss**
    - about/skill-left-col.jpg → one.jpg

23. **src/sass/layout/_hero-slider.scss**
    - slider/slide-1.jpg → one.jpg (with dark overlay added)

24. **src/sass/components/_service-sidebar.scss**
    - service-single-contact-widget-bg.jpg → one.jpg

25. **src/sass/components/_page-title.scss**
    - page-title.jpg → one.jpg (already had dark overlay)

## Summary

- **Total Files Modified:** 25
- **Total Image Imports Replaced:** 60+ individual image references
- **Background Images (SCSS):** 9 background image paths
- **Dark Overlays Added:** 2 locations (hero slider, contact section left column)

## Note
All images now point to `src/images/slider/one.jpg`. To revert or update with actual images, search and replace `../../images/slider/one.jpg` or `../images/slider/one.jpg` with the appropriate image paths in each file.
