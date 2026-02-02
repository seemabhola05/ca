# ☕ Café Aroma - Coffee eCommerce Website

A modern, responsive coffee café eCommerce website built with React.js. Features a warm, cozy design with premium coffee aesthetics and full shopping cart functionality.

## Features

- **Modern Design**: Warm coffee-themed color palette with smooth animations
- **Interactive Menu**: Dynamic digital menu with categories (Coffee, Cold Coffee, Breakfast, Combos)
- **Shopping Cart**: Full cart functionality with add/remove items and quantity controls
- **Product Shop**: Coffee beans, ground coffee, and breakfast items
- **Best Sellers**: Highlighted popular items with customer favorite badges
- **Customer Reviews**: Testimonials with star ratings
- **Contact Form**: Get in touch with integrated Google Maps
- **Responsive Design**: Mobile-friendly layout
- **Smooth Animations**: Framer Motion animations for enhanced UX

## Tech Stack

- React.js 18
- React Router DOM
- Framer Motion (animations)
- Lucide React (icons)
- CSS3 with custom properties

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and cart button
│   ├── Hero.js            # Hero section with CTA
│   ├── DigitalMenu.js     # Interactive menu with categories
│   ├── Shop.js            # Product catalog
│   ├── BestSellers.js     # Popular items showcase
│   ├── Reviews.js         # Customer testimonials
│   ├── Contact.js         # Contact form and info
│   ├── Footer.js          # Footer with links and info
│   └── Cart.js            # Shopping cart sidebar
├── App.js                 # Main app with cart context
├── App.css               # Styling with coffee theme
└── index.js              # React DOM render
```

## Color Palette

- Coffee Brown: `#6B4423`
- Dark Coffee: `#4A2C17`
- Cream: `#F5F1EB`
- Beige: `#E8DDD4`
- Soft White: `#FEFCF9`
- Caramel: `#D4A574`
- Light Gold: `#E6C79C`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## Features Overview

### Header
- Café logo and navigation
- Cart icon with item count
- Order Online CTA button

### Hero Section
- Full-width background image
- Compelling headline and description
- View Menu and Order Now buttons

### Digital Menu
- Interactive category filtering
- Coffee, Cold Coffee, Breakfast, and Combos
- Add to cart functionality with prices

### Shop
- Product grid with high-quality images
- Coffee beans, ground coffee, beverages, bakery items
- Hover effects and smooth animations

### Best Sellers
- Customer favorite badges
- Most popular items highlighted
- Star ratings and special styling

### Reviews
- Customer testimonials with photos
- 5-star rating system
- Authentic customer feedback

### Contact
- Contact information and hours
- Interactive contact form
- Google Maps integration
- WhatsApp and phone options

### Cart
- Sliding cart panel
- Quantity controls
- Remove items functionality
- Order total calculation
- Checkout process

## Customization

The website uses CSS custom properties for easy theming. Update the `:root` variables in `App.css` to customize colors:

```css
:root {
  --coffee-brown: #6B4423;
  --cream: #F5F1EB;
  --caramel: #D4A574;
  /* ... other variables */
}
```

## License

This project is open source and available under the [MIT License](LICENSE).# ca
