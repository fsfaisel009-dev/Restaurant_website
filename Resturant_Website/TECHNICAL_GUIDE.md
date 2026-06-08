# 🍽️ Foodly Website - Technical Architecture & Design Guide

## 📊 Overall Page Structure

```
┌─────────────────────────────────────────────────────────┐
│                    STICKY NAVBAR                         │
│  Logo | Home | Menu | Reservation | About | Contact | Sign Up │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   HERO SECTION (Full Width)             │
│  Left: Badge + Title + Description + 2 Buttons         │
│  Right: Circular Food Image + Decorative Shapes        │
│  Background: Light Gray Gradient                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            QUICK CATEGORIES BAR (5 Items)              │
│  Pizza | Burgers | Coffee | Salads | Drinks           │
│  Background: Dark Charcoal                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         FEATURED MENU (6 Cards in 3×2 Grid)            │
│  Each Card: Image + Badge + Title + Desc + Price + CTA │
│  Background: White                                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          ABOUT / WHY CHOOSE US SECTION                  │
│  Left: Image | Right: Title + Description + 4 Features │
│  Background: Light Gray                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          RESERVATION / TABLE BOOKING FORM               │
│  Form: Name + Email + Date + Time + Guests + Occasion  │
│  Background: Dark Charcoal with White Card             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           TESTIMONIALS (3 Review Cards)                 │
│  Each: Stars + Review Text + Author Name               │
│  Background: White                                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│    CONTACT SECTION (Left Form | Right Info)            │
│  Left: Contact Form (Name + Email + Subject + Message) │
│  Right: Address + Phone + Email + Hours + Social Icons │
│  Background: Light Gray                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    FOOTER                               │
│  Logo | Links | Support | Newsletter | Copyright       │
│  Background: Dark Charcoal                              │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette Reference

### Primary Colors
- **Primary Green `#22C55E`**: Main CTA buttons, accents, hover states
- **Dark Charcoal `#1F2937`**: Headers, text, premium feel
- **White `#FFFFFF`**: Cards, backgrounds, contrast
- **Light Gray `#F3F4F6`**: Section backgrounds, subtle areas

### Secondary Colors
- **Medium Gray `#E5E7EB`**: Borders, dividers, input states
- **Dark Gray `#6B7280`**: Body text, secondary information
- **Orange Accent `#FF8C42`**: Highlights, badges, secondary CTAs

### Usage Guide
```
Buttons         → Green (#22C55E) or Orange (#FF8C42)
Headers         → Dark Charcoal (#1F2937)
Body Text       → Dark Gray (#6B7280)
Backgrounds     → White or Light Gray
Sections Dark   → Dark Charcoal (#1F2937)
Hover Effects   → Slight transparency or brightness change
Shadows         → rgba(0, 0, 0, 0.08) - 0.12
```

---

## 🔤 Typography System

### Font Stack
```css
Headers:    'Playfair Display', serif
           (elegant, premium, high contrast)

Body:       'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
           (modern, clean, highly readable)
```

### Font Sizes & Weights
```
H1 (Hero Title):        3.5rem   | 700 weight
H2 (Section Title):     2.5rem   | 700 weight
H3 (Card Title):        1.75rem  | 700 weight
H4 (Small Heading):     1.25rem  | 700 weight
Body Text:              1rem     | 400-500 weight
Small Text:             0.9rem   | 400 weight
```

### Line Heights
```
Headings:   1.3 (tighter for elegance)
Body:       1.6-1.7 (comfortable reading)
Forms:      1.4 (good readability)
```

---

## 📐 Spacing & Layout System

### The 8px Grid System
All spacing uses multiples of 8px for consistency:

```
8px   - Extra small (component padding)
12px  - Small spacing
16px  - Standard form/component spacing
20px  - Medium component gaps
24px  - Card padding
32px  - Section gaps
40px  - Large spacing between items
60px  - Section spacing
100px - Hero / Large section padding
```

### Responsive Padding
```
Desktop:  100px sections | 40px gaps | 20px containers
Tablet:   60px sections  | 30px gaps | 15px containers
Mobile:   40px sections  | 20px gaps | 12px containers
```

---

## 🌐 Responsive Breakpoints

### Breakpoint Strategy
```
Large Desktop:  1200px+ (no changes, full layout)
Small Desktop:  1024px  (slight column reduction)
Tablet:         768px   (major layout adjustments)
Large Mobile:   480px   (single column)
Small Mobile:   <480px  (ultra-compact)
```

### Grid Changes by Breakpoint
```
Menu Cards:
  Desktop:  3 columns
  Tablet:   2 columns
  Mobile:   1 column

Categories:
  Desktop:  5 columns
  Tablet:   3 columns
  Mobile:   2 columns

About:
  Desktop:  2 columns (image | text)
  Tablet:   1 column (stacked)
  Mobile:   1 column (stacked)

Contact:
  Desktop:  2 columns (form | info)
  Tablet:   1 column (stacked)
  Mobile:   1 column (stacked)

Footer:
  Desktop:  4 columns
  Tablet:   2 columns
  Mobile:   1 column
```

---

## 🎯 Component Specifications

### Navbar
```
Height:           70px
Position:         Sticky (top: 0)
Z-index:          1000
Shadow:           Subtle, increases on scroll
Logo:             Left aligned
Menu:             Center (desktop), hidden (mobile)
Button:           Right aligned (desktop), hidden (mobile)
Hamburger:        Hidden (desktop), visible (mobile at 768px)
Mobile Menu:      Full-width dropdown, appears below navbar
```

### Hero Section
```
Height:           90vh (viewport height)
Padding:          100px (desktop) | 60px (tablet) | 40px (mobile)
Grid:             2 columns (desktop) | 1 column (mobile)
Gap:              60px (desktop) | 40px (tablet)
Image Circle:     500px max-width
Decorative Shapes: Float animation, staggered delays
Badge Background: Transparent green (rgba(34, 197, 94, 0.1))
```

### Menu Cards
```
Card Width:       Responsive grid (1/3 on desktop)
Image Height:     250px
Card Radius:      16px
Shadow:           Medium (0 4px 16px)
Badge:            Top-right corner, 20px border-radius
Hover:            translateY(-12px) + larger shadow
Transition:       0.3s cubic-bezier
```

### Buttons
```
Default Padding:  14px 32px
Font Weight:      600
Border Radius:    8px
Transition:       All 0.3s ease
Hover Effects:    
  - Primary:      Darker green + lift + shadow
  - Secondary:    Fill with color + lift
  - Order:        Slight scale + brightness

Form Buttons:     Full width on mobile (flex: 1)
```

### Form Inputs
```
Padding:          14px 16px
Border:           2px solid (medium gray)
Border Radius:    8px
Font Size:        1rem (prevents zoom on mobile)
Focus State:      Green border + subtle box-shadow
Error State:      Red border
Transition:       0.3s all
Mobile:           Slightly larger for touch
```

---

## ✨ Animation & Transition Guide

### Transition Speeds
```
Fast:    0.2s (hover effects, small changes)
Normal:  0.3s (standard transitions, card hovers)
Slow:    0.5s (page load animations)
Smooth:  cubic-bezier(0.4, 0, 0.2, 1) - Material Design easing
```

### Animation Types
```
Fade In Left:   opacity: 0 → 1, translateX(-30px) → 0
Fade In Right:  opacity: 0 → 1, translateX(30px) → 0
Float:          translateY(0) ↔ translateY(-30px)
Lift on Hover:  translateY(-8px to -12px)
Scale on Hover: scale(1.05) - small increase
Rotate:         rotate() for hamburger animation
```

### When Animations Play
```
Page Load:       Sections fade in with Intersection Observer
Hover:           All cards and buttons
Scroll:          Navbar shadow increases
Hamburger:       Click to open/close menu
Form Inputs:     Focus state changes
Button Click:    Ripple or scale effect
```

---

## 🛠️ HTML Structure Best Practices Used

### Semantic HTML5
```
<header>        - Navigation area
<nav>           - Navigation bar
<section>       - Major content sections
<article>       - Menu cards, testimonials
<aside>         - Not used (could be for sidebar)
<footer>        - Footer section
<form>          - All forms
<button>        - Interactive elements
<label>         - Form labels
<input>         - Form inputs
<h1-h6>         - Headings (proper hierarchy)
```

### Accessibility Features
```
Semantic tags   - Proper structure for screen readers
ARIA attributes - When needed (not over-used)
Focus states    - Visible on interactive elements
Color contrast  - WCAG AA standard met
Form labels     - Properly associated with inputs
Button types    - Proper button semantics
Link text       - Descriptive, not "click here"
```

---

## 🔧 CSS Organization

### File Structure
```
1. Global Styles & Variables
   - :root variables (colors, fonts, shadows)
   - Base element styles (*, html, body)
   - Typography defaults

2. Utility Classes
   - .container (max-width, centering)
   - .btn (base button styles)
   - .section-header (common section header)

3. Component Styles
   - Navbar
   - Hero
   - Categories
   - Menu
   - About
   - Reservation
   - Testimonials
   - Contact
   - Footer

4. Animation Keyframes
   - @keyframes definitions

5. Responsive Media Queries
   - 1023px (tablet)
   - 767px (mobile)
   - 479px (small mobile)
```

---

## 💻 JavaScript Architecture

### Mobile Menu Logic
```javascript
- Hamburger toggle
- Menu show/hide
- Auto-close on link click
- Auto-close on outside click
- Close on Escape key
```

### Form Handling
```javascript
- Prevent default submission
- Collect form data
- Validate (basic)
- Show success message
- Reset form
- Log to console (replace with API call)
```

### Scroll Events
```javascript
- Navbar shadow on scroll
- Intersection Observer for animations
- Scroll-to-top button
- Smooth scroll behavior (CSS)
```

### Interaction Handlers
```javascript
- Order button feedback
- Category card selection
- Button click tracking
- Form input validation
```

---

## 🚀 Performance Considerations

### CSS Optimization
```
✓ Uses CSS Grid and Flexbox (efficient layout)
✓ Minimal reflows with transform animations
✓ CSS variables for maintainability
✓ Grouped media queries
✓ Efficient selectors
```

### JavaScript Optimization
```
✓ Event delegation where possible
✓ Intersection Observer (lazy animation)
✓ No libraries or frameworks
✓ Minimal DOM manipulation
✓ Debounced scroll events (not implemented, but recommended)
```

### Image Optimization
```
Recommendation: Use Unsplash (already cached) or:
- WebP format for modern browsers
- Proper sizing (not larger than needed)
- Lazy loading with loading="lazy"
- Srcset for responsive images
```

---

## 📋 Customization Checklist

### Colors
- [ ] Update :root CSS variables
- [ ] Test contrast ratio (WCAG AA)
- [ ] Update all sections (hero, cards, buttons)
- [ ] Test hover states

### Typography
- [ ] Update Google Fonts import
- [ ] Update font-family CSS variables
- [ ] Adjust font sizes if needed
- [ ] Test on mobile (readability)

### Content
- [ ] Replace restaurant name
- [ ] Update menu items and prices
- [ ] Add real images
- [ ] Update contact information
- [ ] Add real testimonials
- [ ] Update hours and address

### Functionality
- [ ] Connect forms to backend
- [ ] Add payment integration
- [ ] Implement cart functionality
- [ ] Add order tracking

### Performance
- [ ] Minify CSS/JS for production
- [ ] Optimize images
- [ ] Enable caching
- [ ] Use CDN for assets

---

## 📱 Testing Checklist

### Desktop Testing
- [ ] Full page layout works
- [ ] Hover effects visible
- [ ] Forms are usable
- [ ] Smooth scrolling works
- [ ] All images load

### Tablet Testing (768px)
- [ ] Navigation collapses properly
- [ ] Grid adjusts to 2 columns
- [ ] Touch targets are adequate (44px)
- [ ] Forms are usable
- [ ] Images scale properly

### Mobile Testing (< 480px)
- [ ] Hamburger menu works
- [ ] Single column layout
- [ ] Text is readable
- [ ] No horizontal scroll
- [ ] Forms work
- [ ] Buttons are clickable
- [ ] Images are visible

### Browser Testing
- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop + mobile)
- [ ] Safari (desktop + iPad)
- [ ] Edge (desktop)

### Accessibility Testing
- [ ] Tab navigation works
- [ ] Focus states visible
- [ ] Color contrast adequate
- [ ] Form labels present
- [ ] Screen reader friendly

---

## 🎓 Learning Resources

### For Customization:
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript DOM](https://developer.mozilla.org/en-US/docs/Web/API/DOM)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

### Tools:
- Chrome DevTools (F12)
- Can I Use (browser support)
- Lighthouse (performance audit)
- WAVE (accessibility)

---

**This is a production-ready template. Happy customizing! 🍽️✨**
