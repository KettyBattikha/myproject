# FitVerse - Dynamic Sports Club Website

A fully functional, dynamic sports club website built with vanilla HTML, CSS, and JavaScript. This project transforms static pages into an interactive experience with complete CRUD operations, user management, and mock API integration.

## 🚀 Features

### ✅ Completed Features

1. **Dynamic Sports Management**
   - Add/delete sports with forms
   - Real-time updates
   - Difficulty levels and descriptions
   - Image support with fallbacks

2. **Class Management System**
   - Dynamic class creation and enrollment
   - Trainer assignment and scheduling
   - User enrollment tracking
   - Delete functionality

3. **Competition System**
   - Create competitions with detailed forms
   - Registration system with validation
   - Status tracking (upcoming/active/completed)
   - Participant management

4. **Authentication System**
   - Login/Register forms with validation
   - Demo accounts for testing
   - Job application system
   - Session management with localStorage

5. **E-commerce Shop**
   - Product catalog with filtering
   - Shopping cart functionality
   - Checkout process with forms
   - Points-based rewards system

6. **Points & Rewards System**
   - Earn points for various activities
   - Points expiration tracking
   - Reward redemption system
   - Detailed points history

7. **Rating & Review System**
   - Star rating functionality
   - Review submission with categories
   - Review filtering and display
   - Overall rating calculations

8. **Contact System**
   - Comprehensive contact forms
   - FAQ section with toggles
   - Form validation and submission
   - Priority levels and response tracking

9. **User Search & Directory**
   - Search members by name/email/username
   - Filter by points and join date
   - Grid and list view options
   - Real-time search results

10. **Additional Features**
    - Responsive design for all devices
    - Notification system
    - Local storage persistence
    - Clean, modular code structure

## 🏗️ Project Structure

```
fitverse/
├── index.html              # Home page
├── sports.html             # Sports management
├── classes.html            # Class enrollment
├── competitions.html       # Competition system
├── shop.html               # E-commerce shop
├── login.html              # Authentication
├── points.html             # Points & rewards
├── rating.html             # Reviews & ratings
├── contact.html            # Contact forms
├── users.html              # Member directory
├── about.html              # About page
├── master.css              # Main stylesheet
├── ja.js                   # Main application file
├── js/
│   ├── api.js              # Mock API functions
│   └── components/
│       ├── sports.js       # Sports management
│       ├── classes.js      # Class management
│       ├── competitions.js # Competition system
│       ├── shop.js         # E-commerce functionality
│       ├── auth.js         # Authentication
│       ├── points.js       # Points system
│       ├── rating.js       # Rating system
│       ├── contact.js      # Contact forms
│       └── users.js        # User search
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Clone or download the project files**
2. **Open in a web server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Or simply open `index.html` in your browser**

### Demo Accounts

For testing the login functionality, use these demo accounts:

**Member Account:**
- Email: `john@fitverse.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@fitverse.com`
- Password: `admin123`

## 🎯 How to Use

### 1. Sports Management
- Navigate to **Sports** page
- Click "Add New Sport" to create sports
- Fill in name, description, difficulty, and image URL
- Delete sports using the delete button on each card

### 2. Class Management
- Go to **Classes** page
- Use "Add New Class" to create classes
- Set trainer, schedule, and description
- Enroll in classes (requires login)
- Delete classes as needed

### 3. Competition System
- Visit **Competitions** page
- Create competitions with detailed information
- Set dates, prizes, and participant limits
- Register for competitions (requires login)

### 4. Shopping & Points
- Browse **Shop** for products
- Add items to cart and checkout
- Earn points for purchases (1 point per $10)
- View points history on **Points** page
- Redeem rewards with accumulated points

### 5. Reviews & Ratings
- Go to **Reviews** page
- Submit ratings and reviews
- Filter reviews by category and rating
- View overall rating statistics

### 6. Contact & Support
- Use **Contact** page for inquiries
- Browse FAQ section
- Submit different types of requests
- Get automatic response confirmations

### 7. Member Directory
- Search members on **Members** page
- Filter by points and join date
- Switch between grid and list views
- Connect with other members

## 🔧 Mock API Integration

The website uses a sophisticated mock API system that simulates real backend functionality:

### Data Storage
- **localStorage** for persistence
- **JSONPlaceholder** for user data
- Automatic data initialization
- Cross-session data retention

### API Endpoints Simulated
- `GET /sports` - Fetch all sports
- `POST /sports` - Create new sport
- `DELETE /sports/:id` - Delete sport
- Similar endpoints for classes, competitions, products, etc.

### Testing API Responses

You can modify mock data by:

1. **Clearing localStorage**: Open browser dev tools → Application → Local Storage → Clear
2. **Modifying default data**: Edit the `getDefault*()` functions in `js/api.js`
3. **Adding new data types**: Extend the API object with new endpoints

## 🎨 Customization

### Styling
- Main styles in `master.css`
- CSS custom properties for easy theming
- Responsive design with mobile-first approach

### Adding New Features
1. Create new HTML page
2. Add corresponding JavaScript component in `js/components/`
3. Update navigation in all HTML files
4. Add API endpoints in `js/api.js`
5. Style in `master.css`

### Modifying Mock Data
Edit the default data generators in `js/api.js`:
- `getDefaultSports()`
- `getDefaultClasses()`
- `getDefaultCompetitions()`
- `getDefaultProducts()`

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**
- [ ] Login with demo accounts
- [ ] Register new account
- [ ] Submit job application
- [ ] Logout functionality

**Sports Management:**
- [ ] Add new sport
- [ ] Delete existing sport
- [ ] Form validation

**Classes:**
- [ ] Create new class
- [ ] Enroll in class (logged in)
- [ ] Delete class

**Shop:**
- [ ] Browse products
- [ ] Add to cart
- [ ] Checkout process
- [ ] Points earning

**Points System:**
- [ ] View points history
- [ ] Redeem rewards
- [ ] Points expiration

**Reviews:**
- [ ] Submit review
- [ ] Filter reviews
- [ ] Star rating

**Contact:**
- [ ] Submit contact form
- [ ] FAQ toggles
- [ ] Form validation

**Search:**
- [ ] Search members
- [ ] Filter results
- [ ] View toggles

## 🔍 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🚀 Performance Features

- Lazy loading for images
- Efficient DOM manipulation
- Minimal external dependencies
- Optimized CSS and JavaScript
- Local storage for fast data access

## 🔒 Security Considerations

While this is a demo application:
- Form validation on client-side
- XSS prevention in dynamic content
- Safe localStorage usage
- Input sanitization

## 🤝 Contributing

This is a demonstration project, but you can:
1. Fork the repository
2. Add new features
3. Improve existing functionality
4. Submit pull requests

## 📄 License

This project is for educational and demonstration purposes.

## 🆘 Troubleshooting

**Common Issues:**

1. **Data not persisting**: Check if localStorage is enabled in your browser
2. **Styles not loading**: Ensure you're running from a web server, not file://
3. **JavaScript errors**: Check browser console for specific error messages
4. **Forms not working**: Verify all required JavaScript files are loaded

**Reset Application:**
- Clear browser localStorage
- Refresh the page
- Data will reinitialize with defaults

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify all files are properly loaded
3. Test with demo accounts first
4. Clear localStorage and try again

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
