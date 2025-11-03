# DataForge Visual Style Guide
## B2B Landing Page Design System

---

## 1. Color Palette

### Primary Colors
```
Deep Navy (Primary Brand)
- HEX: #0A2540
- RGB: 10, 37, 64
- Usage: Headers, navigation, primary text, footer backgrounds
- Conveys: Trust, professionalism, technical expertise
```

```
Electric Blue (Primary Accent)
- HEX: #0066FF
- RGB: 0, 102, 255
- Usage: Primary CTAs, links, interactive elements, key highlights
- Conveys: Innovation, technology, action
```

### Secondary Colors
```
Slate Gray (Secondary Text)
- HEX: #64748B
- RGB: 100, 116, 139
- Usage: Body text, secondary information, captions
- Conveys: Clarity without overwhelming
```

```
Light Cyan (Accent/Highlight)
- HEX: #06B6D4
- RGB: 6, 182, 212
- Usage: Icons, data visualizations, subtle highlights
- Conveys: Data, freshness, modernity
```

```
Emerald Green (Success/Growth)
- HEX: #10B981
- RGB: 16, 185, 129
- Usage: Success states, growth metrics, positive indicators
- Conveys: Results, growth, success
```

### Neutral Colors
```
Pure White (Background)
- HEX: #FFFFFF
- RGB: 255, 255, 255
- Usage: Primary background, card backgrounds
```

```
Off-White (Alternate Background)
- HEX: #F8FAFC
- RGB: 248, 250, 252
- Usage: Section alternation, subtle distinction
```

```
Light Gray (Borders/Dividers)
- HEX: #E2E8F0
- RGB: 226, 232, 240
- Usage: Borders, dividers, input fields
```

```
Charcoal (Dark Text)
- HEX: #1E293B
- RGB: 30, 41, 59
- Usage: Primary headings, important text
```

### Alert/Status Colors
```
Warning Orange
- HEX: #F59E0B
- RGB: 245, 158, 11

Error Red
- HEX: #EF4444
- RGB: 239, 68, 68
```

---

## 2. Typography

### Font Families

**Primary Font: Inter** (or alternative: 'SF Pro Display', 'Helvetica Neue')
- Modern, highly legible
- Excellent for digital interfaces
- Professional yet approachable

**Monospace Font: 'JetBrains Mono'** (or alternative: 'Monaco', 'Courier New')
- For code snippets, technical details
- Usage: API examples, data format displays

### Type Scale & Hierarchy

```
Hero Heading (H1)
- Font Size: 56px (3.5rem) desktop / 36px (2.25rem) mobile
- Font Weight: 700 (Bold)
- Line Height: 1.1
- Letter Spacing: -0.02em (tight)
- Color: #0A2540 or #1E293B
- Max Width: 900px
- Usage: Primary page headline
```

```
Section Heading (H2)
- Font Size: 40px (2.5rem) desktop / 28px (1.75rem) mobile
- Font Weight: 700 (Bold)
- Line Height: 1.2
- Letter Spacing: -0.01em
- Color: #0A2540
- Usage: Main section titles
```

```
Subsection Heading (H3)
- Font Size: 28px (1.75rem) desktop / 22px (1.375rem) mobile
- Font Weight: 600 (Semibold)
- Line Height: 1.3
- Color: #1E293B
- Usage: Feature titles, card headings
```

```
Card/Component Heading (H4)
- Font Size: 20px (1.25rem)
- Font Weight: 600 (Semibold)
- Line Height: 1.4
- Color: #1E293B
- Usage: Individual feature cards, list items
```

```
Body Large (Lead Text)
- Font Size: 20px (1.25rem) desktop / 18px (1.125rem) mobile
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Color: #64748B
- Max Width: 700px
- Usage: Hero subheadings, introductory paragraphs
```

```
Body Regular
- Font Size: 16px (1rem)
- Font Weight: 400 (Regular)
- Line Height: 1.7
- Color: #64748B
- Max Width: 650px
- Usage: Standard body text, descriptions
```

```
Body Small
- Font Size: 14px (0.875rem)
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Color: #64748B
- Usage: Captions, footnotes, labels
```

---

## 3. Button Styles

### Primary Button (CTA)

**Default State:**
```css
Background: #0066FF
Color: #FFFFFF
Font Size: 16px
Font Weight: 600
Padding: 14px 32px
Border Radius: 8px
Border: none
Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.12)
Cursor: pointer
Transition: all 0.2s ease
```

**Hover State:**
```css
Background: #0052CC
Transform: translateY(-1px)
Box Shadow: 0 4px 12px rgba(0, 102, 255, 0.3)
```

**Active/Pressed State:**
```css
Background: #0047B3
Transform: translateY(0px)
Box Shadow: 0 1px 2px rgba(0, 0, 0, 0.12)
```

**Disabled State:**
```css
Background: #E2E8F0
Color: #94A3B8
Cursor: not-allowed
```

### Secondary Button

**Default State:**
```css
Background: transparent
Color: #0066FF
Font Size: 16px
Font Weight: 600
Padding: 14px 32px
Border Radius: 8px
Border: 2px solid #0066FF
Transition: all 0.2s ease
```

**Hover State:**
```css
Background: #0066FF
Color: #FFFFFF
Transform: translateY(-1px)
```

### Ghost/Text Button

**Default State:**
```css
Background: transparent
Color: #64748B
Font Size: 16px
Font Weight: 600
Padding: 14px 24px
Border: none
Transition: all 0.2s ease
```

**Hover State:**
```css
Color: #0066FF
Background: rgba(0, 102, 255, 0.05)
```

---

## 4. Spacing System

### Spacing Scale (Base Unit: 4px)

```
xs:  4px   (0.25rem)  - Tight spacing, icon gaps
sm:  8px   (0.5rem)   - Small gaps, button text spacing
md:  16px  (1rem)     - Default spacing between elements
lg:  24px  (1.5rem)   - Section padding, card spacing
xl:  32px  (2rem)     - Larger gaps, subsections
2xl: 48px  (3rem)     - Section spacing
3xl: 64px  (4rem)     - Major section breaks
4xl: 96px  (6rem)     - Hero section padding
5xl: 128px (8rem)     - Extra large section spacing
```

### Margin Guidelines

**Vertical Rhythm:**
- Heading to body text: 16px (md)
- Body paragraph spacing: 16px (md)
- Section spacing: 64px - 96px (3xl - 4xl)
- Component internal padding: 24px - 32px (lg - xl)

**Horizontal Spacing:**
- Container max-width: 1280px
- Container padding: 24px mobile / 48px tablet / 80px desktop
- Element side margins: 16px - 24px (md - lg)

---

## 5. Layout & Grid System

### Container System

```
Max Width Container: 1280px
- Centered on page
- Horizontal padding: 80px desktop / 48px tablet / 24px mobile
```

```
Narrow Content Container: 800px
- For text-heavy sections
- Improves readability
```

```
Wide Container: 1440px
- For dashboard previews, full-width features
```

### Grid System

**12-Column Grid**
- Column gap: 24px desktop / 16px mobile
- Typical layouts:
  - 3 columns: 4-4-4 (features, benefits)
  - 2 columns: 6-6 (split content)
  - 2 columns: 7-5 or 5-7 (text + image)
  - 4 columns: 3-3-3-3 (use cases, statistics)

### Section Layouts

**Hero Section:**
```
Layout: Centered or 5-7 split (text-image)
Padding: 96px - 128px vertical
Background: White or subtle gradient
Max text width: 700px
```

**Feature Section:**
```
Layout: 3-column grid or alternating 6-6
Padding: 64px - 96px vertical
Background: Alternate white and off-white (#F8FAFC)
```

**Social Proof Section:**
```
Layout: Centered with logo grid
Padding: 48px - 64px vertical
Background: Off-white (#F8FAFC)
```

**CTA Section:**
```
Layout: Centered, single column
Padding: 96px vertical
Background: Deep Navy (#0A2540) or Electric Blue gradient
Text color: White
```

---

## 6. Card Components

### Feature Card

```css
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border Radius: 12px
Padding: 32px
Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.06)
Transition: all 0.3s ease

Hover:
  Transform: translateY(-4px)
  Box Shadow: 0 12px 24px rgba(0, 0, 0, 0.1)
  Border Color: #0066FF
```

**Card Content Structure:**
1. Icon (48px × 48px, color: #06B6D4 or #0066FF)
2. Heading (H3 or H4, 16px margin-bottom)
3. Description (Body text, #64748B)
4. Optional link (text button style)

### Testimonial Card

```css
Background: #F8FAFC
Border: none
Border Radius: 12px
Padding: 32px
Box Shadow: none

Contains:
- Quote text (18px, italic, color: #1E293B)
- Author name (16px, semibold, color: #0A2540)
- Author title/company (14px, color: #64748B)
- Optional avatar (48px circle)
```

---

## 7. Icons & Graphics

### Icon System

**Style:** Outline/stroke style icons
**Recommended Library:** Heroicons, Lucide, or Feather Icons
**Sizing:**
- Small: 20px × 20px
- Medium: 24px × 24px
- Large: 32px × 32px
- Hero: 48px × 48px

**Colors:**
- Primary icons: #06B6D4 (Light Cyan)
- Interactive icons: #0066FF (Electric Blue)
- Neutral icons: #64748B (Slate Gray)
- Success icons: #10B981 (Emerald Green)

### Illustration Style

**Approach:**
- Abstract, geometric shapes
- Data visualization elements (graphs, nodes, connections)
- Minimal, clean line work
- Primary colors: #0066FF, #06B6D4, #0A2540
- Accent gradients allowed

**Usage:**
- Hero sections (right side of split layout)
- Feature explanations
- Empty states
- Loading states

### Image Guidelines

**Photography:**
- Prefer abstract data/tech imagery over people
- High contrast, professional quality
- Color grading: Cool tones (blues, cyans)
- Avoid stock photos that look overly staged

**Product Screenshots:**
- Clean interface mockups
- Add subtle shadow: 0 20px 60px rgba(0, 0, 0, 0.15)
- Border radius: 8px
- Optional: 1px border in #E2E8F0

---

## 8. Interactive Elements

### Links

**In-text Links:**
```css
Color: #0066FF
Text Decoration: none
Border Bottom: 1px solid transparent
Transition: border-color 0.2s ease

Hover:
  Border Bottom: 1px solid #0066FF
```

**Navigation Links:**
```css
Color: #64748B
Font Weight: 500
Transition: color 0.2s ease

Hover:
  Color: #0066FF
```

### Input Fields

```css
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border Radius: 8px
Padding: 12px 16px
Font Size: 16px
Color: #1E293B
Transition: all 0.2s ease

Focus:
  Border Color: #0066FF
  Box Shadow: 0 0 0 3px rgba(0, 102, 255, 0.1)
  Outline: none

Error:
  Border Color: #EF4444
```

### Checkboxes & Radio Buttons

```css
Size: 20px × 20px
Border: 2px solid #E2E8F0
Border Radius: 4px (checkbox) / 50% (radio)

Checked:
  Background: #0066FF
  Border Color: #0066FF
  Checkmark: White
```

---

## 9. Animation & Motion

### Transition Principles

**Default Timing:** 0.2s - 0.3s
**Easing:** ease-out for entrances, ease-in for exits
**Properties to Animate:**
- Transform (translateY, scale)
- Opacity
- Background color
- Border color
- Box shadow

### Micro-interactions

**Button Hover:**
```css
Transform: translateY(-1px)
Duration: 0.2s
Easing: ease-out
```

**Card Hover:**
```css
Transform: translateY(-4px)
Duration: 0.3s
Easing: ease-out
```

**Page Load (Fade-in):**
```css
Opacity: 0 → 1
Transform: translateY(20px) → translateY(0)
Duration: 0.6s
Easing: ease-out
Delay: Stagger by 0.1s per element
```

---

## 10. Mobile Optimization

### Breakpoints

```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large Desktop: > 1280px
```

### Mobile-Specific Adjustments

**Typography:**
- Reduce font sizes by 30-40% for headings
- Maintain body text at 16px minimum
- Increase line height to 1.7-1.8

**Spacing:**
- Reduce vertical spacing by 30-40%
- Container padding: 20px - 24px
- Section spacing: 48px - 64px

**Layout:**
- Stack all multi-column layouts to single column
- Hero splits become stacked (text on top, image below)
- Feature cards: 1 per row
- Increase button tap target to minimum 44px × 44px

**Navigation:**
- Hamburger menu for mobile
- Full-screen mobile menu overlay
- Sticky header on scroll

**Images:**
- Reduce image sizes, optimize for mobile bandwidth
- Use responsive images with srcset
- Lazy load images below fold

---

## 11. Accessibility Guidelines

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- Interactive elements: Clear focus states

### Focus States

```css
Outline: 2px solid #0066FF
Outline Offset: 2px
Border Radius: 4px (match element)
```

### Typography Accessibility

- Minimum body font size: 16px
- Maximum line length: 75 characters
- Sufficient line height: 1.5 minimum
- No text in images (use HTML text)

---

## 12. Component Examples

### Hero Section Layout

```
┌─────────────────────────────────────────┐
│  NAVIGATION (sticky)                     │
├─────────────────────────────────────────┤
│                                          │
│  ┌──────────────┐  ┌─────────────────┐ │
│  │              │  │                  │ │
│  │   HEADLINE   │  │   ILLUSTRATION   │ │
│  │   (H1)       │  │   OR IMAGE       │ │
│  │              │  │                  │ │
│  │   SUBHEADING │  │                  │ │
│  │   (Lead)     │  │                  │ │
│  │              │  │                  │ │
│  │   [CTA]      │  │                  │ │
│  │              │  │                  │ │
│  └──────────────┘  └─────────────────┘ │
│                                          │
└─────────────────────────────────────────┘
```

### Feature Grid Layout

```
┌──────────────────────────────────────────────┐
│         SECTION HEADING (H2)                  │
│         Section description (Body)            │
│                                               │
│  ┌────────┐  ┌────────┐  ┌────────┐         │
│  │ [Icon] │  │ [Icon] │  │ [Icon] │         │
│  │ Title  │  │ Title  │  │ Title  │         │
│  │ Text   │  │ Text   │  │ Text   │         │
│  └────────┘  └────────┘  └────────┘         │
│                                               │
│  ┌────────┐  ┌────────┐  ┌────────┐         │
│  │ [Icon] │  │ [Icon] │  │ [Icon] │         │
│  │ Title  │  │ Title  │  │ Title  │         │
│  │ Text   │  │ Text   │  │ Text   │         │
│  └────────┘  └────────┘  └────────┘         │
└──────────────────────────────────────────────┘
```

---

## 13. Design Principles Summary

### 1. Clarity Over Complexity
- Every element serves a purpose
- Remove unnecessary decoration
- Focus on content hierarchy

### 2. Consistent Visual Language
- Maintain spacing rhythm throughout
- Use color palette consistently
- Keep component styles uniform

### 3. Trustworthy & Professional
- Clean, minimalist aesthetic
- Professional typography
- Reliable, familiar interaction patterns

### 4. Data-Focused Visual Identity
- Geometric, technical illustrations
- Data visualization elements
- Cool color palette (blues, cyans)

### 5. Conversion-Optimized
- Clear visual hierarchy guides to CTAs
- Strategic color contrast on buttons
- Minimal friction in user journey
- White space directs attention

### 6. Mobile-First Responsive
- Design for mobile, enhance for desktop
- Touch-friendly interactive elements
- Readable typography at all sizes

---

## 14. Implementation Checklist

### For Designers:
- [ ] Create design system library in Figma/Sketch
- [ ] Build reusable component templates
- [ ] Document all variants and states
- [ ] Create responsive breakpoint examples

### For No-Code Tools:
- [ ] Set up global style variables
- [ ] Create reusable symbol/component library
- [ ] Define responsive breakpoint behaviors
- [ ] Test on multiple devices

### Quality Assurance:
- [ ] Test all interactive states
- [ ] Verify color contrast ratios
- [ ] Validate responsive behavior
- [ ] Check loading performance
- [ ] Test cross-browser compatibility

---

## 15. Example Color Combinations

### Primary CTA on White Background:
- Button: #0066FF
- Text: #FFFFFF
- Background: #FFFFFF
- Shadow: rgba(0, 102, 255, 0.3)

### Dark Section with CTA:
- Background: #0A2540
- Heading: #FFFFFF
- Body: rgba(255, 255, 255, 0.8)
- Button: #0066FF or #10B981
- Button Text: #FFFFFF

### Feature Card:
- Background: #FFFFFF
- Border: #E2E8F0
- Icon: #06B6D4
- Heading: #1E293B
- Body: #64748B

### Data/Stats Section:
- Background: #F8FAFC
- Numbers: #0066FF
- Labels: #64748B
- Accents: #06B6D4

---

This visual style guide provides a complete foundation for creating professional, conversion-optimized landing pages for DataForge. The design system emphasizes clarity, trustworthiness, and technical sophistication while maintaining a clean, modern aesthetic that guides users toward taking action.