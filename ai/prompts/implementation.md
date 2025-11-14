# MRI DATA - Landing Page Design Mockup
## Complete Visual Design & Content Specification

---

## 🎨 DESIGN SYSTEM & STYLE GUIDE

### Color Palette
```
Primary Colors:
- Deep Blue: #0A2463 (main brand color, headers, CTA buttons)
- Ocean Blue: #1E3A8A (secondary elements, hover states)

Secondary Colors:
- Electric Cyan: #06B6D4 (accents, highlights, icons)
- Bright Cyan: #22D3EE (secondary CTAs, borders)

Accent Colors:
- Success Green: #10B981 (success states, positive metrics)
- Warning Orange: #F59E0B (attention elements)
- Neutral Gray: #64748B (body text, secondary info)

Background Colors:
- Pure White: #FFFFFF (main backgrounds)
- Light Gray: #F8FAFC (section separators)
- Dark Navy: #0F172A (footer, dark sections)

Text Colors:
- Primary Text: #1E293B (headings, main content)
- Secondary Text: #64748B (descriptions, subtext)
- Light Text: #F8FAFC (text on dark backgrounds)
```

### Typography System
```
Font Family: 
- Primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Code/Mono: "Fira Code", "Courier New", monospace

Headings:
H1 (Hero):
  - Mobile: 32px / 38px line-height, font-weight: 800
  - Tablet: 48px / 56px, font-weight: 800
  - Desktop: 64px / 72px, font-weight: 800
  - Color: #0A2463

H2 (Section Headers):
  - Mobile: 28px / 34px, font-weight: 700
  - Tablet: 36px / 44px, font-weight: 700
  - Desktop: 48px / 56px, font-weight: 700
  - Color: #0A2463

H3 (Subsections):
  - Mobile: 22px / 28px, font-weight: 600
  - Tablet: 26px / 32px, font-weight: 600
  - Desktop: 30px / 38px, font-weight: 600
  - Color: #1E293B

H4 (Card Titles):
  - All sizes: 20px / 28px, font-weight: 600
  - Color: #1E293B

Body Text:
- Large: 18px / 28px, font-weight: 400 (hero subheadings)
- Regular: 16px / 26px, font-weight: 400 (main content)
- Small: 14px / 22px, font-weight: 400 (captions, meta info)
- Color: #64748B

Button Text:
- 16px / 24px, font-weight: 600
- Letter-spacing: 0.3px
```

### Button Styles
```
Primary CTA:
- Background: #0A2463
- Text: #FFFFFF
- Padding: 16px 32px (mobile), 18px 40px (desktop)
- Border-radius: 8px
- Font-size: 16px, font-weight: 600
- Hover: Background #1E3A8A, transform: translateY(-2px), box-shadow: 0 8px 16px rgba(10,36,99,0.2)
- Transition: all 0.3s ease

Secondary CTA:
- Background: transparent
- Border: 2px solid #06B6D4
- Text: #0A2463
- Padding: 14px 30px (mobile), 16px 38px (desktop)
- Border-radius: 8px
- Hover: Background #06B6D4, Text #FFFFFF
- Transition: all 0.3s ease

Ghost Button:
- Background: transparent
- Text: #06B6D4
- Padding: 12px 24px
- Border-radius: 6px
- Hover: Background rgba(6,182,212,0.1)
```

### Spacing System (8px base unit)
```
- XXS: 4px
- XS: 8px
- S: 16px
- M: 24px
- L: 32px
- XL: 48px
- XXL: 64px
- XXXL: 96px

Section Padding (vertical):
- Mobile: 48px top/bottom
- Tablet: 64px top/bottom
- Desktop: 96px top/bottom

Container Max-Width:
- Mobile: 100% (16px side padding)
- Tablet: 720px
- Desktop: 1200px
- Large Desktop: 1400px
```

### Grid System
```
Mobile (< 768px):
- 1 column
- 16px gutters

Tablet (768px - 1024px):
- 2 columns for cards
- 24px gutters

Desktop (> 1024px):
- 3-4 columns for cards
- 32px gutters
- 12-column grid for complex layouts
```

### Visual Elements Style
```
Icons:
- Size: 24px (mobile), 32px (desktop)
- Style: Outline/stroke style, 2px stroke-width
- Color: #06B6D4 (primary), #22D3EE (secondary)
- Hover: scale(1.1), color shift to #0A2463

Cards:
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 12px
- Padding: 24px (mobile), 32px (desktop)
- Box-shadow (hover): 0 12px 24px rgba(0,0,0,0.08)
- Transition: all 0.3s ease

Images:
- Border-radius: 8px
- Max-width: 100%
- Box-shadow: 0 4px 12px rgba(0,0,0,0.06)
```

---

## 📱 SECTION 1: NAVIGATION HEADER

### Layout
```
Position: Fixed top, sticky on scroll
Background: White with subtle shadow on scroll
Height: 72px (mobile), 80px (desktop)
Z-index: 1000
```

### Visual Structure
```
Container: Full-width with max-width 1400px, centered
Display: Flexbox, justify-content: space-between, align-items: center
Padding: 0 16px (mobile), 0 32px (desktop)
```

### Content & Elements

**Left Section: Logo**
```
Logo Design:
- Text: "MRI DATA" 
- Font: Inter, 24px, font-weight: 800
- Color: #0A2463
- Icon element: Abstract data wave/signal icon in #06B6D4, 28px
- Layout: Icon + Text horizontal, gap: 8px
- Hover: slight opacity animation
```

**Center Section: Navigation Menu (Desktop only)**
```
Display: None (mobile), Flex (desktop > 1024px)
Gap: 32px

Menu Items:
1. "Услуги" - Link, 15px, font-weight: 500, color: #64748B
2. "Кейсы" - Link, 15px, font-weight: 500, color: #64748B
3. "Преимущества" - Link, 15px, font-weight: 500, color: #64748B
4. "О нас" - Link, 15px, font-weight: 500, color: #64748B

Hover State:
- Color change to #0A2463
- Bottom border: 2px solid #06B6D4, animated
- Transition: 0.2s ease
```

**Right Section: CTA Button**
```
Desktop:
- Button: "Связаться с нами"
- Style: Primary CTA
- Size: 14px padding, 16px 28px

Mobile:
- Burger menu icon (3 horizontal lines)
- Size: 24px
- Color: #0A2463
- Animation: Transform to X on click
```

**Mobile Menu (Overlay)**
```
Display: Slide from right, full-screen overlay
Background: White
Padding: 80px 24px 24px

Menu Items (stacked):
- Font-size: 24px
- Padding: 16px 0
- Border-bottom: 1px solid #E2E8F0
- Color: #0A2463

CTA Button:
- Full-width
- Margin-top: 32px
```

---

## 🚀 SECTION 2: HERO SECTION

### Layout
```
Background: Linear gradient from #F8FAFC (top) to #FFFFFF (bottom)
Padding: 120px 16px 80px (mobile), 160px 32px 120px (desktop)
Min-height: 90vh (mobile), 85vh (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
Display: Two-column grid (desktop), single column (mobile)
Grid: 1fr (mobile), 5fr 6fr (desktop)
Gap: 48px (mobile), 64px (desktop)
Align-items: center
```

### Content - Left Column

**Badge/Label**
```
Display: Inline-flex
Background: rgba(6,182,212,0.1)
Color: #0A2463
Font-size: 14px, font-weight: 600
Padding: 8px 16px
Border-radius: 20px
Border: 1px solid #06B6D4
Margin-bottom: 24px

Text: "🎯 Профессионалы в парсинге данных"
```

**Main Heading (H1)**
```
Text: "Извлекаем данные из любых источников. Автоматически."

Font-size: 32px (mobile), 64px (desktop)
Line-height: 1.15
Font-weight: 800
Color: #0A2463
Margin-bottom: 24px

Accent word "Автоматически" styling:
- Background: linear-gradient(to right, #06B6D4, #22D3EE)
- Background-clip: text
- -webkit-text-fill-color: transparent
```

**Subheading**
```
Text: "MRI Data предоставляет комплексные услуги по парсингу данных с веб-сайтов, API и любых онлайн-источников. Мы берем на себя полный цикл: от анализа до внедрения и поддержки."

Font-size: 18px (mobile), 20px (desktop)
Line-height: 1.6
Color: #64748B
Margin-bottom: 40px
Max-width: 600px
```

**CTA Buttons Group**
```
Display: Flex (horizontal on desktop, vertical on mobile)
Gap: 16px
Flex-wrap: wrap

Button 1: "Начать проект"
- Style: Primary CTA
- Icon: Arrow right →, 20px, margin-left: 8px

Button 2: "Посмотреть примеры"
- Style: Secondary CTA
- Icon: Play circle, 20px, margin-right: 8px
```

**Social Proof Bar**
```
Margin-top: 48px
Display: Flex
Gap: 32px
Align-items: center
Flex-wrap: wrap

Metric 1:
- Number: "500+" (24px, font-weight: 700, color: #0A2463)
- Label: "Завершенных проектов" (14px, color: #64748B)

Metric 2:
- Number: "98%" (24px, font-weight: 700, color: #0A2463)
- Label: "Довольных клиентов" (14px, color: #64748B)

Metric 3:
- Number: "24/7" (24px, font-weight: 700, color: #0A2463)
- Label: "Поддержка" (14px, color: #64748B)
```

### Content - Right Column

**Hero Image/Illustration**
```
Image Type: Custom illustration or 3D graphic
Theme: Data flow visualization - abstract representation of:
  - Server/database icons
  - Data streams (flowing lines)
  - Charts and analytics elements
  - Web browser windows with data extraction
  - Network connections

Style:
- Modern, gradient-based illustration
- Primary colors: #0A2463, #06B6D4, #22D3EE
- Background: Subtle grid pattern
- Border-radius: 16px
- Box-shadow: 0 20px 40px rgba(10,36,99,0.1)

Animation (optional):
- Floating effect: translateY animation, -10px to 10px
- Duration: 6s, ease-in-out, infinite
- Data flow lines: animated dash-array stroke
```

**Alternative: Code Block Visual**
```
Show mock terminal/code editor with:
```
import mri_data

# Simple API call
response = mri_data.scrape(
    url="https://example.com",
    format="json",
    render_js=True
)

print(response.data)
# Returns: Structured JSON data ✓
```

Style:
- Background: #0F172A
- Text: Syntax highlighted (VS Code style)
- Border-radius: 12px
- Font: Fira Code, 14px
- Box-shadow: 0 24px 48px rgba(0,0,0,0.15)
```

---

## 💼 SECTION 3: FEATURED CLIENTS / TRUST BAR

### Layout
```
Background: #FFFFFF
Padding: 48px 16px (mobile), 64px 32px (desktop)
Border-top: 1px solid #E2E8F0
Border-bottom: 1px solid #E2E8F0
```

### Visual Structure
```
Container: Max-width 1400px, centered
Text-align: center
```

### Content

**Section Label**
```
Text: "Нам доверяют компании разных отраслей"
Font-size: 14px
Font-weight: 600
Color: #64748B
Text-transform: uppercase
Letter-spacing: 1px
Margin-bottom: 32px
```

**Logos Grid**
```
Display: Grid
Grid: 2 columns (mobile), 4-6 columns (desktop)
Gap: 32px (mobile), 48px (desktop)
Align-items: center
Justify-items: center

Logo Placeholders (6-8 company logos):
- Size: 120px x 60px
- Format: Grayscale with 40% opacity
- Hover: Full color, 100% opacity, scale(1.05)
- Transition: 0.3s ease
- Filter: grayscale(100%) opacity(0.4)

Suggested industries to represent:
1. E-commerce (shopping cart icon)
2. Finance (bank/chart icon)
3. Real Estate (building icon)
4. Marketing (megaphone icon)
5. Analytics (graph icon)
6. Logistics (truck icon)
```

---

## ⚡ SECTION 4: KEY PROBLEMS WE SOLVE

### Layout
```
Background: #F8FAFC
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "Почему MRI Data"
Font-size: 14px
Font-weight: 600
Color: #06B6D4
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Решаем критические задачи вашего бизнеса"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #0A2463
Margin-bottom: 16px

Description:
Text: "От рутинного сбора данных до обхода сложных систем защиты — мы автоматизируем процессы, которые раньше требовали часов ручной работы."

Font-size: 18px
Line-height: 1.6
Color: #64748B
Max-width: 800px
Margin: 0 auto
```

**Problems Grid**
```
Display: Grid
Grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
Gap: 24px (mobile), 32px (desktop)
Margin-top: 48px
```

**Problem Card (×5)**

*Card Structure:*
```
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 32px (mobile), 40px (desktop)
Transition: all 0.3s ease
Hover: 
  - transform: translateY(-4px)
  - box-shadow: 0 12px 24px rgba(10,36,99,0.08)
  - border-color: #06B6D4
```

*Card Content Pattern:*

**Icon Container**
```
Width: 56px
Height: 56px
Background: rgba(6,182,212,0.1)
Border-radius: 12px
Display: flex
Align-items: center
Justify-content: center
Margin-bottom: 20px

Icon: 
- Size: 28px
- Stroke-width: 2px
- Color: #06B6D4
```

**Card Title (H4)**
```
Font-size: 20px
Font-weight: 600
Color: #0A2463
Margin-bottom: 12px
Line-height: 1.3
```

**Card Description**
```
Font-size: 16px
Line-height: 1.6
Color: #64748B
```

---

### CARD 1: Automation
```
Icon: ⚙️ Gear/cog icon with rotating arrows

Title: "Автоматизация сбора данных"

Description: "Избавляем от рутины и человеческого фактора. Ручной сбор информации заменяется автоматическими решениями, работающими 24/7."
```

### CARD 2: Hard-to-Access Data
```
Icon: 🔓 Unlocked database/shield icon

Title: "Доступ к сложным данным"

Description: "Извлекаем данные, которые невозможно получить стандартными API или вручную без существенных затрат времени и ресурсов."
```

### CARD 3: Anti-Bot Bypass
```
Icon: 🛡️ Shield with check mark

Title: "Обход защитных систем"

Description: "Реализуем специализированные алгоритмы для работы с сайтами, защищёнными от автоматического сбора: CAPTCHA, блокировки, динамический JS-контент."
```

### CARD 4: Scalability
```
Icon: 📈 Growth chart/scale icon

Title: "Масштабируемость и надежность"

Description: "Берём на себя инфраструктурные и технические риски. Вам не нужно развивать in-house команду и компетенции по извлечению данных."
```

### CARD 5: Speed
```
Icon: ⚡ Lightning bolt/rocket icon

Title: "Оперативный доступ к данным"

Description: "Предоставляем сырые и очищенные данные под нужды анализа, маркетинга, продаж для быстрого принятия бизнес-решений."
```

---

## 🎯 SECTION 5: USE CASES

### Layout
```
Background: #FFFFFF
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "Применение"
Font-size: 14px
Font-weight: 600
Color: #06B6D4
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Как наши клиенты используют парсинг данных"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #0A2463
```

**Use Cases Layout**
```
Display: Grid
Grid: 1 column (mobile), 2 columns (desktop)
Gap: 48px
Margin-top: 48px
```

### Use Case Block (×5)

*Block Structure (Horizontal card):*
```
Display: Flex (horizontal on desktop, vertical on mobile)
Gap: 24px
Align-items: flex-start
Padding: 32px
Background: #F8FAFC
Border-left: 4px solid #06B6D4
Border-radius: 8px
Transition: 0.3s ease
Hover:
  - Background: #FFFFFF
  - Box-shadow: 0 8px 16px rgba(0,0,0,0.06)
  - Border-left-color: #0A2463
```

*Content Pattern:*

**Icon/Number**
```
Flex-shrink: 0
Width: 64px
Height: 64px
Background: #FFFFFF
Border: 2px solid #06B6D4
Border-radius: 50%
Display: flex
Align-items: center
Justify-content: center

Number:
- Font-size: 24px
- Font-weight: 700
- Color: #0A2463
```

**Text Content**
```
Title (H4):
- Font-size: 20px
- Font-weight: 600
- Color: #0A2463
- Margin-bottom: 8px

Description:
- Font-size: 16px
- Line-height: 1.6
- Color: #64748B
```

---

### USE CASE 1
```
Number: "01"

Title: "Лидогенерация и обогащение CRM"

Description: "Автоматизация сбора контактов и информации о потенциальных клиентах. Обогащение существующих баз данных актуальной информацией о компаниях и лицах, принимающих решения."
```

### USE CASE 2
```
Number: "02"

Title: "Мониторинг конкурентов и аналитика цен"

Description: "Регулярная выгрузка продуктовых линеек и ценовых предложений с сайтов конкурентов. Отслеживание изменений в режиме реального времени для принятия оперативных решений."
```

### USE CASE 3
```
Number: "03"

Title: "Аналитика рынка и выявление трендов"

Description: "Сбор больших массивов данных для отраслевого анализа, построения прогностических моделей и выявления новых рыночных ниш и возможностей."
```

### USE CASE 4
```
Number: "04"

Title: "Заполнение и поддержка баз данных"

Description: "Обновление товарных, партнерских и других справочников компании. Поддержание актуальности продуктовых каталогов и информационных систем."
```

### USE CASE 5
```
Number: "05"

Title: "Исследование спроса и предпочтений"

Description: "Анализ отзывов, блогов, форумов, профилей в социальных сетях. Мониторинг репутации бренда и изучение потребительских инсайтов."
```

---

## 🏆 SECTION 6: COMPETITIVE ADVANTAGES

### Layout
```
Background: Linear gradient 135deg from #0A2463 to #1E3A8A
Padding: 80px 16px (mobile), 120px 32px (desktop)
Position: relative
Overflow: hidden
```

**Background Decorative Elements**
```
Position: absolute
Opacity: 0.05

Element 1: Large circle pattern (top-right)
- Size: 500px
- Border: 2px dashed #FFFFFF

Element 2: Grid pattern (bottom-left)
- Size: 400px x 400px
- Stroke: 1px #FFFFFF

Element 3: Floating dots
- Scattered, various sizes (8px-16px)
- Color: #FFFFFF
- Animation: floating, 8s infinite ease-in-out
```

### Visual Structure
```
Container: Max-width 1400px, centered
Position: relative
Z-index: 1
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "Преимущества"
Font-size: 14px
Font-weight: 600
Color: #22D3EE
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Почему выбирают MRI Data"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #FFFFFF
```

**Advantages Grid**
```
Display: Grid
Grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)
Gap: 24px
Margin-top: 48px
```

### Advantage Card (×4)

*Card Structure:*
```
Background: rgba(255,255,255,0.08)
Backdrop-filter: blur(10px)
Border: 1px solid rgba(255,255,255,0.12)
Border-radius: 12px
Padding: 32px
Transition: 0.3s ease
Hover:
  - Background: rgba(255,255,255,0.12)
  - Transform: translateY(-4px)
  - Border-color: #22D3EE
```

*Card Content:*

**Icon Container**
```
Width: 48px
Height: 48px
Background: rgba(6,182,212,0.2)
Border-radius: 10px
Display: flex
Align-items: center
Justify-content: center
Margin-bottom: 20px

Icon:
- Size: 24px
- Color: #22D3EE
```

**Title**
```
Font-size: 20px
Font-weight: 600
Color: #FFFFFF
Margin-bottom: 12px
```

**Description**
```
Font-size: 15px
Line-height: 1.6
Color: rgba(255,255,255,0.8)
```

---

### ADVANTAGE 1
```
Icon: ✓ Checkmark in circle

Title: "Чистый результат"

Description: "Гарантируем получение только необходимых вам данных в требуемом формате. Никакого мусора — только ценная информация."
```

### ADVANTAGE 2
```
Icon: 🔧 Wrench/tools icon

Title: "Любая сложность"

Description: "От простого парсинга витрины интернет-магазина до интеграции с многоуровневыми динамическими системами."
```

### ADVANTAGE 3
```
Icon: ⚡ Lightning/rocket icon

Title: "Быстрый старт"

Description: "Не тратим время на долговременные внедрения инструментов и платформ — проектирование и запуск под ключ."
```

### ADVANTAGE 4
```
Icon: 🔒 Lock/shield icon

Title: "Безопасность и конфиденциальность"

Description: "Работаем строго в правовом поле и соблюдаем интересы клиентов. Защита данных на всех этапах работы."
```

---

## 💬 SECTION 7: TESTIMONIALS / SOCIAL PROOF

### Layout
```
Background: #F8FAFC
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "Отзывы"
Font-size: 14px
Font-weight: 600
Color: #06B6D4
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Что говорят наши клиенты"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #0A2463
```

**Testimonials Grid**
```
Display: Grid
Grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
Gap: 24px
Margin-top: 48px
```

### Testimonial Card (×3)

*Card Structure:*
```
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 32px
Position: relative
Overflow: hidden
Transition: 0.3s ease
Hover:
  - Box-shadow: 0 12px 24px rgba(10,36,99,0.08)
  - Transform: translateY(-4px)
```

**Quote Icon**
```
Position: absolute
Top: 24px
Right: 24px
Font-size: 48px
Color: rgba(6,182,212,0.15)
Content: """
```

*Card Content:*

**Rating Stars**
```
Display: flex
Gap: 4px
Margin-bottom: 16px

Star icon (×5):
- Size: 18px
- Color: #F59E0B (filled)
- Color: #E2E8F0 (empty - if needed)
```

**Quote Text**
```
Font-size: 16px
Line-height: 1.7
Color: #1E293B
Margin-bottom: 24px
Font-style: italic
```

**Author Section**
```
Display: flex
Gap: 16px
Align-items: center
Border-top: 1px solid #E2E8F0
Padding-top: 20px

Avatar:
- Size: 48px x 48px
- Border-radius: 50%
- Background: linear-gradient(135deg, #06B6D4, #0A2463)
- Content: Initials in white, 18px, font-weight: 600

Author Info:
Name:
  - Font-size: 16px
  - Font-weight: 600
  - Color: #0A2463
  - Margin-bottom: 4px

Position & Company:
  - Font-size: 14px
  - Color: #64748B
```

---

### TESTIMONIAL 1
```
Rating: 5 stars

Quote: "MRI Data полностью автоматизировала наш процесс мониторинга цен конкурентов. Теперь мы получаем актуальные данные каждый день, что позволило нам оперативно реагировать на изменения рынка и увеличить маржу на 15%."

Author:
- Name: Алексей Морозов
- Position: Руководитель отдела аналитики
- Company: E-commerce Platform
- Avatar Initials: АМ
```

### TESTIMONIAL 2
```
Rating: 5 stars

Quote: "Нам нужен был сбор данных о недвижимости с десятков различных сайтов. Команда MRI Data справилась блестяще — данные поступают стабильно, качество обработки на высоте. Рекомендуем как надежного партнера."

Author:
- Name: Мария Соколова
- Position: Директор по развитию
- Company: Real Estate Analytics
- Avatar Initials: МС
```

### TESTIMONIAL 3
```
Rating: 5 stars

Quote: "Попробовали несколько решений для парсинга, но только MRI Data смогли обойти все защиты и предоставить стабильный поток данных. Профессионализм команды и внимание к деталям впечатляют."

Author:
- Name: Дмитрий Волков
- Position: CTO
- Company: Marketing Agency
- Avatar Initials: ДВ
```

---

## 📊 SECTION 8: HOW IT WORKS / PROCESS

### Layout
```
Background: #FFFFFF
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
Display: Two-section layout
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "Процесс работы"
Font-size: 14px
Font-weight: 600
Color: #06B6D4
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Как мы работаем"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #0A2463
Margin-bottom: 16px

Description:
Text: "Прозрачный и эффективный процесс от первого контакта до запуска проекта"

Font-size: 18px
Line-height: 1.6
Color: #64748B
Max-width: 700px
Margin: 0 auto
```

**Process Timeline**
```
Display: Flex (vertical)
Position: relative
Margin-top: 48px
Max-width: 800px
Margin-left: auto
Margin-right: auto
```

**Timeline Connector Line**
```
Position: absolute
Left: 31px (mobile), 31px (desktop)
Top: 0
Bottom: 0
Width: 2px
Background: linear-gradient(to bottom, #06B6D4, #22D3EE)
Opacity: 0.3
```

### Process Step (×4)

*Step Structure:*
```
Display: flex
Gap: 24px
Margin-bottom: 48px (last step: 0)
Position: relative
```

**Step Number Circle**
```
Flex-shrink: 0
Width: 64px
Height: 64px
Background: #FFFFFF
Border: 3px solid #06B6D4
Border-radius: 50%
Display: flex
Align-items: center
Justify-content: center
Position: relative
Z-index: 1

Number:
- Font-size: 24px
- Font-weight: 700
- Color: #0A2463
```

**Step Content Card**
```
Flex: 1
Background: #F8FAFC
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 24px (mobile), 32px (desktop)
Transition: 0.3s ease
Hover:
  - Background: #FFFFFF
  - Box-shadow: 0 8px 16px rgba(0,0,0,0.06)
  - Border-color: #06B6D4
```

*Content:*

**Step Title**
```
Font-size: 20px
Font-weight: 600
Color: #0A2463
Margin-bottom: 12px
Display: flex
Align-items: center
Gap: 8px

Icon (optional):
- Size: 20px
- Color: #06B6D4
```

**Step Description**
```
Font-size: 16px
Line-height: 1.6
Color: #64748B
Margin-bottom: 16px
```

**Step Details (List)**
```
Display: flex
Flex-direction: column
Gap: 8px

List Item:
- Font-size: 14px
- Color: #64748B
- Padding-left: 20px
- Position: relative

Bullet:
- Position: absolute
- Left: 0
- Content: "✓"
- Color: #10B981
- Font-weight: 600
```

---

### STEP 1
```
Number: "1"

Title: "📝 Анализ задачи"

Description: "Детально изучаем вашу задачу и источники данных"

Details:
- Определяем цели и ожидаемые результаты
- Анализируем структуру источников данных
- Оцениваем сложность и сроки реализации
- Формируем техническое задание
```

### STEP 2
```
Number: "2"

Title: "⚙️ Проектирование решения"

Description: "Разрабатываем оптимальную архитектуру системы парсинга"

Details:
- Выбираем технологии и подходы
- Проектируем обход защитных механизмов
- Планируем формат выходных данных
- Согласовываем решение с клиентом
```

### STEP 3
```
Number: "3"

Title: "🚀 Реализация и тестирование"

Description: "Разрабатываем и тестируем парсер под ваши требования"

Details:
- Разработка парсинговых скриптов
- Настройка инфраструктуры
- Тестирование на реальных данных
- Оптимизация производительности
```

### STEP 4
```
Number: "4"

Title: "🔄 Запуск и поддержка"

Description: "Запускаем проект и обеспечиваем стабильную работу"

Details:
- Запуск в продакшн
- Мониторинг работоспособности
- Регулярные обновления при изменении источников
- Техническая поддержка 24/7
```

---

## 🎁 SECTION 9: VALUE PROPOSITION / WHY NOT SAAS

### Layout
```
Background: Linear gradient 135deg from #F8FAFC to #FFFFFF
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 1000px, centered
Text-align: center
```

### Content

**Main Content Block**
```
Background: #FFFFFF
Border: 2px solid #06B6D4
Border-radius: 16px
Padding: 48px 24px (mobile), 64px 48px (desktop)
Box-shadow: 0 24px 48px rgba(10,36,99,0.08)
```

**Icon/Badge**
```
Width: 80px
Height: 80px
Background: rgba(6,182,212,0.1)
Border: 2px solid #06B6D4
Border-radius: 50%
Display: flex
Align-items: center
Justify-content: center
Margin: 0 auto 24px

Icon: 🎯 Target/bullseye
- Size: 40px
- Color: #0A2463
```

**Heading**
```
Text: "Не SaaS-платформа, а проектный сервис"

Font-size: 28px (mobile), 36px (desktop)
Font-weight: 700
Color: #0A2463
Margin-bottom: 20px
```

**Description**
```
Text: "Мы не предлагаем универсальный инструмент для самостоятельного использования. Вместо этого мы создаем индивидуальные решения под конкретные бизнес-задачи, обеспечивая максимальный ROI и минимальное привлечение ваших ресурсов."

Font-size: 18px
Line-height: 1.7
Color: #64748B
Margin-bottom: 32px
Max-width: 800px
Margin-left: auto
Margin-right: auto
```

**Benefits Grid**
```
Display: Grid
Grid: 1 column (mobile), 3 columns (desktop)
Gap: 24px
Margin-top: 40px
```

**Benefit Item (×3)**
```
Display: flex
Flex-direction: column
Align-items: center
Text-align: center
Padding: 24px

Icon:
- Size: 32px
- Color: #06B6D4
- Margin-bottom: 16px

Title:
- Font-size: 18px
- Font-weight: 600
- Color: #0A2463
- Margin-bottom: 8px

Text:
- Font-size: 15px
- Color: #64748B
- Line-height: 1.5
```

**Benefit 1:**
```
Icon: 🎯 Target
Title: "Точное решение"
Text: "Решение заточено под вашу задачу, а не универсальный инструмент"
```

**Benefit 2:**
```
Icon: 👥 People/support
Title: "Полная поддержка"
Text: "Команда экспертов работает на ваш результат"
```

**Benefit 3:**
```
Icon: 💰 Money/ROI
Title: "Максимальный ROI"
Text: "Платите только за результат, без скрытых затрат"
```

---

## 📞 SECTION 10: CTA SECTION

### Layout
```
Background: Linear gradient 135deg from #0A2463 to #1E3A8A
Padding: 80px 16px (mobile), 100px 32px (desktop)
Position: relative
Overflow: hidden
```

**Background Elements**
```
Position: absolute
Opacity: 0.1

Floating elements:
- Abstract geometric shapes
- Data connection lines
- Subtle grid pattern
- Animated particles (optional)
```

### Visual Structure
```
Container: Max-width 1000px, centered
Text-align: center
Position: relative
Z-index: 1
```

### Content

**Badge**
```
Display: inline-flex
Background: rgba(6,182,212,0.2)
Border: 1px solid rgba(6,182,212,0.4)
Color: #22D3EE
Font-size: 14px
Font-weight: 600
Padding: 8px 20px
Border-radius: 20px
Margin-bottom: 24px

Text: "✨ Начните прямо сейчас"
```

**Heading**
```
Text: "Готовы автоматизировать сбор данных?"

Font-size: 32px (mobile), 48px (desktop)
Font-weight: 700
Color: #FFFFFF
Margin-bottom: 20px
Line-height: 1.2
```

**Subheading**
```
Text: "Расскажите о вашей задаче, и мы предложим оптимальное решение в течение 24 часов"

Font-size: 18px (mobile), 20px (desktop)
Line-height: 1.6
Color: rgba(255,255,255,0.9)
Margin-bottom: 40px
Max-width: 700px
Margin-left: auto
Margin-right: auto
```

**CTA Buttons Group**
```
Display: flex
Gap: 16px
Justify-content: center
Flex-wrap: wrap
Margin-bottom: 48px
```

**Button 1**
```
Text: "Обсудить проект"
Style: White background
Background: #FFFFFF
Color: #0A2463
Padding: 18px 40px
Font-size: 16px
Font-weight: 600
Border-radius: 8px
Box-shadow: 0 4px 12px rgba(0,0,0,0.15)
Hover:
  - Transform: translateY(-2px)
  - Box-shadow: 0 8px 20px rgba(0,0,0,0.2)

Icon: → Arrow right, 20px
```

**Button 2**
```
Text: "Узнать больше"
Style: Ghost/outline
Background: transparent
Border: 2px solid rgba(255,255,255,0.3)
Color: #FFFFFF
Padding: 16px 38px
Font-size: 16px
Font-weight: 600
Border-radius: 8px
Hover:
  - Background: rgba(255,255,255,0.1)
  - Border-color: #FFFFFF
```

**Contact Information Bar**
```
Display: Flex
Justify-content: center
Gap: 32px (desktop), 16px (mobile)
Flex-wrap: wrap
Border-top: 1px solid rgba(255,255,255,0.2)
Padding-top: 32px

Each Contact Item:
Display: flex
Align-items: center
Gap: 8px
Color: rgba(255,255,255,0.9)
Font-size: 15px

Icon:
- Size: 20px
- Color: #22D3EE
```

**Contact Items:**
```
1. Email:
   Icon: ✉️ Envelope
   Text: "hello@mridata.com"
   Link: mailto:hello@mridata.com

2. Phone:
   Icon: 📞 Phone
   Text: "+7 (XXX) XXX-XX-XX"
   Link: tel:+7XXXXXXXXXX

3. Telegram:
   Icon: ✈️ Paper plane
   Text: "@mridata_support"
   Link: https://t.me/mridata_support
```

---

## 📋 SECTION 11: FAQ

### Layout
```
Background: #FFFFFF
Padding: 80px 16px (mobile), 120px 32px (desktop)
```

### Visual Structure
```
Container: Max-width 900px, centered
```

### Content

**Section Header**
```
Text-align: center
Margin-bottom: 64px

Sup-title:
Text: "FAQ"
Font-size: 14px
Font-weight: 600
Color: #06B6D4
Text-transform: uppercase
Letter-spacing: 1.5px
Margin-bottom: 16px

Main title (H2):
Text: "Частые вопросы"

Font-size: 32px (mobile), 42px (desktop)
Font-weight: 700
Color: #0A2463
```

**FAQ Accordion List**
```
Display: flex
Flex-direction: column
Gap: 16px
```

### FAQ Item (×6-8)

*Item Structure (Accordion):*
```
Background: #F8FAFC
Border: 1px solid #E2E8F0
Border-radius: 10px
Overflow: hidden
Transition: 0.3s ease

States:
- Closed: Default
- Open: Background #FFFFFF, Border-color #06B6D4
```

**Question Header (Clickable)**
```
Display: flex
Justify-content: space-between
Align-items: center
Padding: 20px 24px
Cursor: pointer
User-select: none

Question Text:
- Font-size: 17px (mobile), 18px (desktop)
- Font-weight: 600
- Color: #0A2463
- Flex: 1

Toggle Icon:
- Size: 24px
- Color: #06B6D4
- Transition: transform 0.3s ease
- Closed: "+" or "⌄" down chevron
- Open: "−" or "⌃" up chevron, rotate 180deg
```

**Answer Panel (Collapsible)**
```
Display: none (closed), block (open)
Padding: 0 24px 24px (open)
Animation: slideDown 0.3s ease

Answer Text:
- Font-size: 16px
- Line-height: 1.7
- Color: #64748B
- Max-width: 100%
```

---

### FAQ QUESTIONS & ANSWERS

**Q1:**
```
Question: "Сколько времени занимает разработка парсера?"

Answer: "Время разработки зависит от сложности задачи. Простые проекты можно запустить за 3-5 дней, более сложные проекты с обходом защит и интеграциями могут занять 2-3 недели. После первичного анализа мы предоставим точную оценку сроков."
```

**Q2:**
```
Question: "Какие данные вы можете собирать?"

Answer: "Мы работаем с любыми публично доступными данными: товары и цены интернет-магазинов, контактная информация компаний, отзывы и рейтинги, вакансии, новости, статистика, посты в социальных сетях и многое другое. Если данные доступны в браузере, мы можем их извлечь."
```

**Q3:**
```
Question: "В каком формате предоставляются данные?"

Answer: "Данные могут быть предоставлены в любом удобном для вас формате: JSON, CSV, Excel, XML, прямая интеграция с вашей базой данных через API или загрузка в облачное хранилище. Формат обсуждается на этапе проектирования."
```

**Q4:**
```
Question: "Как часто обновляются данные?"

Answer: "Частота обновления настраивается индивидуально: от режима реального времени (каждые несколько минут) до еженедельных или ежемесячных выгрузок. Все зависит от ваших потребностей и особенностей источника данных."
```

**Q5:**
```
Question: "Что если структура сайта изменится?"

Answer: "Мы обеспечиваем техническую поддержку и мониторинг работоспособности парсеров. При изменении структуры сайта мы оперативно адаптируем парсер, чтобы сбор данных продолжился без перерывов. Это входит в пакет поддержки."
```

**Q6:**
```
Question: "Это легально?"

Answer: "Мы собираем только публично доступные данные и работаем в строгом соответствии с законодательством. Перед началом проекта мы анализируем правовые аспекты и убеждаемся, что сбор данных не нарушает правила использования сайта и применимые законы."
```

**Q7:**
```
Question: "Сколько стоят ваши услуги?"

Answer: "Стоимость зависит от сложности задачи, объема данных, частоты обновлений и требуемой поддержки. После анализа вашей задачи мы предоставим детальное коммерческое предложение. Свяжитесь с нами для получения персональной оценки."
```

**Q8:**
```
Question: "Можете ли вы обойти CAPTCHA и другие защиты?"

Answer: "Да, у нас есть опыт работы с различными типами защит, включая CAPTCHA, rate limiting, JavaScript-рендеринг, fingerprinting и другие антибот-системы. Мы используем специализированные технологии и подходы для обхода таких защит."
```

---

## 🔗 SECTION 12: FOOTER

### Layout
```
Background: #0F172A
Color: #F8FAFC
Padding: 64px 16px 32px (mobile), 80px 32px 40px (desktop)
```

### Visual Structure
```
Container: Max-width 1400px, centered
```

### Content Layout
```
Display: Grid
Grid: 1 column (mobile), 4 columns (desktop)
Gap: 40px (mobile), 48px (desktop)
Margin-bottom: 48px
```

---

### COLUMN 1: Brand & Description

**Logo**
```
Display: flex
Align-items: center
Gap: 8px
Margin-bottom: 20px

Icon: Data wave/signal in #06B6D4, 32px
Text: "MRI DATA"
- Font-size: 24px
- Font-weight: 800
- Color: #FFFFFF
```

**Description**
```
Text: "Профессиональные услуги по парсингу и извлечению данных из любых источников. Автоматизируем сбор данных для вашего бизнеса."

Font-size: 15px
Line-height: 1.6
Color: rgba(248,250,252,0.7)
Margin-bottom: 24px
Max-width: 280px
```

**Social Links**
```
Display: flex
Gap: 12px

Social Icon Button (×4):
- Size: 40px x 40px
- Background: rgba(6,182,212,0.1)
- Border: 1px solid rgba(6,182,212,0.2)
- Border-radius: 8px
- Color: #06B6D4
- Hover: Background #06B6D4, Color #0F172A
- Transition: 0.3s ease

Icons:
1. Telegram
2. Email
3. LinkedIn
4. GitHub (optional)
```

---

### COLUMN 2: Services / Услуги

**Title**
```
Text: "Услуги"
Font-size: 16px
Font-weight: 600
Color: #FFFFFF
Margin-bottom: 20px
Text-transform: uppercase
Letter-spacing: 0.5px
```

**Links List**
```
Display: flex
Flex-direction: column
Gap: 12px

Link Style:
- Font-size: 15px
- Color: rgba(248,250,252,0.7)
- Text-decoration: none
- Transition: 0.2s ease
- Hover: Color #06B6D4, padding-left: 4px
```

**Links:**
```
1. Парсинг веб-сайтов
2. Обход антибот-систем
3. Сбор данных API
4. Мониторинг конкурентов
5. Обогащение CRM
6. Индивидуальные решения
```

---

### COLUMN 3: Company / Компания

**Title**
```
Text: "Компания"
Font-size: 16px
Font-weight: 600
Color: #FFFFFF
Margin-bottom: 20px
Text-transform: uppercase
Letter-spacing: 0.5px
```

**Links List**
```
Display: flex
Flex-direction: column
Gap: 12px

Link Style: (same as Column 2)
```

**Links:**
```
1. О нас
2. Кейсы
3. Блог
4. Карьера
5. Контакты
6. Политика конфиденциальности
```

---

### COLUMN 4: Contact / Контакты

**Title**
```
Text: "Связаться"
Font-size: 16px
Font-weight: 600
Color: #FFFFFF
Margin-bottom: 20px
Text-transform: uppercase
Letter-spacing: 0.5px
```

**Contact Items**
```
Display: flex
Flex-direction: column
Gap: 16px
```

**Contact Item Pattern:**
```
Display: flex
Gap: 12px
Align-items: flex-start

Icon:
- Size: 20px
- Color: #06B6D4
- Flex-shrink: 0

Text:
- Font-size: 15px
- Line-height: 1.5
- Color: rgba(248,250,252,0.7)
- Link hover: Color #06B6D4
```

**Contact Details:**
```
1. Email:
   Icon: ✉️
   Text: "hello@mridata.com"
   Link: mailto:hello@mridata.com

2. Phone:
   Icon: 📞
   Text: "+7 (XXX) XXX-XX-XX"
   Link: tel:+7XXXXXXXXXX

3. Telegram:
   Icon: ✈️
   Text: "@mridata_support"
   Link: https://t.me/mridata_support

4. Address (optional):
   Icon: 📍
   Text: "Москва, Россия"
```

**CTA Button**
```
Margin-top: 24px
Background: #06B6D4
Color: #0F172A
Padding: 12px 24px
Font-size: 14px
Font-weight: 600
Border-radius: 6px
Text-align: center
Hover: Background #22D3EE
Transition: 0.3s ease

Text: "Начать проект →"
```

---

### FOOTER BOTTOM BAR

**Layout**
```
Border-top: 1px solid rgba(248,250,252,0.1)
Padding-top: 32px
Margin-top: 48px
```

**Content**
```
Display: Flex
Justify-content: space-between
Align-items: center
Flex-wrap: wrap
Gap: 16px
```

**Left: Copyright**
```
Text: "© 2025 MRI Data. Все права защищены."
Font-size: 14px
Color: rgba(248,250,252,0.5)
```

**Right: Legal Links**
```
Display: flex
Gap: 24px
Flex-wrap: wrap

Link Style:
- Font-size: 14px
- Color: rgba(248,250,252,0.5)
- Hover: Color #06B6D4
- Transition: 0.2s ease

Links:
1. Политика конфиденциальности
2. Условия использования
3. Cookie Policy
```

---

## 📱 MOBILE-SPECIFIC ADJUSTMENTS

### General Mobile Optimizations
```
- All sections: 16px side padding
- Font sizes reduced by 20-30%
- Grids collapse to single column
- Buttons full-width on small screens
- Increased touch target sizes (min 44px)
- Simplified animations for performance
- Lazy loading for images
- Optimized image formats (WebP)
```

### Navigation Mobile Menu
```
Hamburger Menu:
- Position: fixed right, top
- Full-screen overlay on open
- Slide-in animation from right
- Close X button top-right
- Menu items: larger spacing (24px vertical)
- CTA button: fixed bottom
```

### Mobile Hero Adjustments
```
- Image/illustration moves below text
- Buttons stack vertically
- Social proof metrics: 2 columns instead of 3
- Reduced vertical spacing
```

### Mobile Cards
```
- Full-width cards
- Reduced padding: 24px instead of 32px
- Smaller icons: 24px instead of 32px
- Simplified hover effects (tap effects)
```

---

## 🎨 ADDITIONAL DESIGN NOTES

### Animations & Micro-interactions
```
Page Load:
- Fade in from bottom: 0.6s ease-out
- Stagger delay: 0.1s per element

Scroll Animations:
- Elements fade in and slide up when entering viewport
- Use Intersection Observer API
- Threshold: 0.2 (20% visible)

Hover Effects:
- Transform: translateY(-4px) for cards
- Scale: 1.05 for icons
- Color transitions: 0.3s ease
- Box-shadow transitions: 0.3s ease

Button Interactions:
- Active state: scale(0.98)
- Ripple effect on click
- Loading spinner for form submissions
```

### Accessibility
```
- WCAG AA compliance
- Contrast ratio: 4.5:1 minimum for text
- Focus indicators: 2px solid #06B6D4 outline
- Keyboard navigation support
- ARIA labels for icons and interactive elements
- Alt text for all images
- Semantic HTML structure
```

### Performance
```
- Lazy load images below fold
- Use WebP format with fallback
- Minimize CSS/JS bundle size
- Defer non-critical CSS
- Preload critical fonts
- Optimize for Core Web Vitals:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
```

### Browser Support
```
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 13+, Chrome Mobile
```

---

## 🖼️ IMAGE & ICON SPECIFICATIONS

### Hero Section Image/Illustration
```
Size: 1200px x 900px
Format: SVG (preferred) or PNG
Style: Modern, gradient-based illustration
Theme: Data extraction, automation, technology
Colors: Primary palette (#0A2463, #06B6D4)
Elements:
- Abstract server/database icons
- Data flow visualization (animated lines)
- Browser/website mockups
- Charts and analytics symbols
- Network connection nodes
```

### Icons Throughout Site
```
Library: Heroicons, Lucide, or Feather Icons
Style: Outline/stroke (2px width)
Sizes:
- Small: 20px
- Medium: 24px
- Large: 32px
- XL: 48px
Colors: #06B6D4 (primary), #0A2463 (on hover)
Format: SVG inline for performance
```

### Testimonial Avatars
```
Size: 48px x 48px (64px for larger variants)
Style: Gradient background with initials
Border-radius: 50%
Background: Linear gradient 135deg from #06B6D4 to #0A2463
Text: White, 18px, font-weight: 600, centered
```

### Logo Placeholders (Client Trust Bar)
```
Size: 120px x 60px
Format: SVG grayscale
Filter: grayscale(100%) opacity(0.4)
Hover: Remove filter, opacity(1), scale(1.05)
Spacing: 48px horizontal gap
```

### Background Patterns
```
Grid Pattern:
- Line width: 1px
- Color: rgba(6,182,212,0.1)
- Spacing: 32px
- Subtle, low opacity

Gradient Overlays:
- Linear gradients with 2-3 color stops
- Angle: 135deg
- Opacity: 0.05-0.1 for patterns
```

---

## 📋 CONTENT TONE & VOICE GUIDELINES

### Brand Voice
```
- Professional but approachable
- Technical expertise without jargon overload
- Solution-focused
- Confident and reliable
- Client-centric language
```

### Writing Style
```
- Use active voice
- Short, scannable paragraphs (2-3 sentences)
- Bullet points for lists
- Clear call-to-actions
- Benefit-oriented (not just feature-focused)
- Numbers and statistics where relevant
```

### Russian Language Specifics
```
- Formal "Вы" form for direct address
- Professional terminology
- Clear, simple sentences
- Avoid anglicisms where good Russian terms exist
- Industry-standard terms for technical concepts
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Setup
- [ ] Set up HTML structure with semantic tags
- [ ] Implement CSS custom properties for design system
- [ ] Configure responsive grid system
- [ ] Set up font loading (Inter + Fira Code)

### Phase 2: Components
- [ ] Build navigation header (mobile + desktop)
- [ ] Create button component variants
- [ ] Build card component with variants
- [ ] Create icon system

### Phase 3: Sections (in order)
- [ ] Hero section with CTA
- [ ] Trust bar / client logos
- [ ] Problems section with cards
- [ ] Use cases section
- [ ] Advantages section (dark background)
- [ ] Testimonials
- [ ] Process/How it works
- [ ] Value proposition block
- [ ] Final CTA section
- [ ] FAQ accordion
- [ ] Footer

### Phase 4: Interactions
- [ ] Mobile menu functionality
- [ ] Smooth scroll navigation
- [ ] Scroll animations (fade-in)
- [ ] Hover effects
- [ ] FAQ accordion functionality
- [ ] Form validation (if forms added)

### Phase 5: Optimization
- [ ] Optimize images (WebP + fallback)
- [ ] Implement lazy loading
- [ ] Minify CSS/JS
- [ ] Add meta tags (SEO)
- [ ] Test on multiple devices
- [ ] Accessibility audit
- [ ] Performance testing (Lighthouse)

---

## 🎯 KEY SUCCESS METRICS

### Design Success Indicators
```
- Clean, modern aesthetic
- Clear information hierarchy
- Strong visual branding
- Intuitive navigation
- Mobile-first optimization
- Fast load times (<3s)
- High contrast and readability
- Professional appearance
```

### User Experience Goals
```
- Immediate understanding of value proposition
- Easy path to contact/conversion
- Scannable content structure
- Trust signals visible
- Clear differentiation from competitors
- Compelling CTAs throughout
```

---

**END OF MOCKUP SPECIFICATION**

This comprehensive mockup provides everything needed to implement the MRI Data landing page in code or a no-code tool. Every section includes detailed visual specifications, exact content, spacing, colors, typography, and interaction patterns based on the ScrapingBee design approach adapted for your business model.