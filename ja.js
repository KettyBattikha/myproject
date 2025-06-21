// Main JavaScript file for FitVerse Dynamic Website
// This file initializes the application and handles global functionality

// Import all components (simulated imports for vanilla JS)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    FitVerseApp.init();
});

// Global FitVerse Application Object
const FitVerseApp = {
    // Application state
    state: {
        currentUser: null,
        cart: [],
        userPoints: 0,
        isLoggedIn: false
    },

    // Initialize the application
    init() {
        // ANTI-SHAKE FIX: Disable problematic animations immediately
        this.disableShakingAnimations();

        this.loadUserData();
        this.initializeNavigation();
        this.initializeCurrentPage();
        this.setupGlobalEventListeners();
    },

    // Disable animations that cause shaking
    disableShakingAnimations() {
        // Override CSS animations that might cause shaking
        const antiShakeCSS = `
            <style id="anti-shake-fix">
                *, *::before, *::after {
                    animation: none !important;
                    transform: none !important;
                    -webkit-animation: none !important;
                    -webkit-transform: none !important;
                }
                .navbar, .navbar *, .logo, .logo *, header, header * {
                    animation: none !important;
                    transform: none !important;
                    -webkit-animation: none !important;
                    -webkit-transform: none !important;
                }
                /* Allow only safe transitions */
                * {
                    transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease !important;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', antiShakeCSS);
    },

    // Load user data from localStorage
    loadUserData() {
        const userData = localStorage.getItem('fitverse_user');
        if (userData) {
            this.state.currentUser = JSON.parse(userData);
            this.state.isLoggedIn = true;
            this.state.userPoints = this.state.currentUser.points || 0;
        }

        const cartData = localStorage.getItem('fitverse_cart');
        if (cartData) {
            this.state.cart = JSON.parse(cartData);
        }

        this.updateUI();
    },

    // Save user data to localStorage
    saveUserData() {
        if (this.state.currentUser) {
            this.state.currentUser.points = this.state.userPoints;
            localStorage.setItem('fitverse_user', JSON.stringify(this.state.currentUser));
        }
        localStorage.setItem('fitverse_cart', JSON.stringify(this.state.cart));
    },

    // Update UI based on current state
    updateUI() {
        this.updateCartIcon();
        this.updateLoginButton();
        this.updatePointsDisplay();
    },

    // Update cart icon
    updateCartIcon() {
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            const itemCount = this.state.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            if (itemCount > 0) {
                cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> <span class="cart-count">${itemCount}</span>`;
            } else {
                cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
            }
        }
    },

    // Update login button
    updateLoginButton() {
        const joinBtn = document.getElementById('join-us-btn');
        if (joinBtn) {
            if (this.state.isLoggedIn) {
                joinBtn.textContent = `Welcome, ${this.state.currentUser.name}`;
                joinBtn.href = '#';
                joinBtn.onclick = () => this.logout();
            } else {
                joinBtn.textContent = 'Join Us';
                joinBtn.href = 'login.html';
                joinBtn.onclick = null;
            }
        }
    },

    // Update points display
    updatePointsDisplay() {
        const pointsElement = document.getElementById('user-points');
        if (pointsElement) {
            pointsElement.textContent = this.state.userPoints;
        }
    },

    // Initialize navigation
    initializeNavigation() {
        const hamburger = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    },

    // Initialize current page functionality
    initializeCurrentPage() {
        const currentPage = this.getCurrentPage();

        switch(currentPage) {
            case 'sports':
                if (typeof SportsManager !== 'undefined') {
                    SportsManager.init();
                }
                break;
            case 'classes':
                if (typeof ClassesManager !== 'undefined') {
                    ClassesManager.init();
                }
                break;
            case 'competitions':
                if (typeof CompetitionsManager !== 'undefined') {
                    CompetitionsManager.init();
                }
                break;
            case 'shop':
                if (typeof ShopManager !== 'undefined') {
                    ShopManager.init();
                }
                break;
            case 'login':
                if (typeof AuthManager !== 'undefined') {
                    AuthManager.init();
                }
                break;
            case 'points':
                if (typeof PointsManager !== 'undefined') {
                    PointsManager.init();
                }
                break;
            case 'rating':
                if (typeof RatingManager !== 'undefined') {
                    RatingManager.init();
                }
                break;
            case 'contact':
                if (typeof ContactManager !== 'undefined') {
                    ContactManager.init();
                }
                break;
        }
    },

    // Get current page name
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().split('.')[0];
        return page === 'index' ? 'home' : page;
    },

    // Setup global event listeners
    setupGlobalEventListeners() {
        // Cart icon click
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', (e) => {
                e.preventDefault();
                this.showCart();
            });
        }
    },

    // Show cart modal
    showCart() {
        // Use ShopManager if available, otherwise show basic info
        if (typeof ShopManager !== 'undefined' && ShopManager.showCart) {
            ShopManager.showCart();
        } else {
            const itemCount = this.state.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            const total = this.state.cart.reduce((sum, item) => sum + (item.totalPrice || item.price || 0), 0);
            alert(`Cart has ${itemCount} items\nTotal: $${total.toFixed(2)}\n\nGo to the Shop page to manage your cart.`);
        }
    },

    // Login user
    login(userData) {
        this.state.currentUser = userData;
        this.state.isLoggedIn = true;
        this.state.userPoints = userData.points || 0;
        this.saveUserData();
        this.updateUI();
    },

    // Logout user
    logout() {
        this.state.currentUser = null;
        this.state.isLoggedIn = false;
        this.state.userPoints = 0;
        this.state.cart = [];
        localStorage.removeItem('fitverse_user');
        localStorage.removeItem('fitverse_cart');
        this.updateUI();
        window.location.href = 'index.html';
    },

    // Add points to user
    addPoints(points) {
        if (this.state.isLoggedIn) {
            this.state.userPoints += points;
            this.saveUserData();
            this.updateUI();
        }
    },

    // Add item to cart (legacy function - now handled by ShopManager)
    addToCart() {
        // This function is kept for compatibility but actual cart logic is in ShopManager
        console.log('Legacy addToCart called, use ShopManager.addToCart instead');
    },

    // Show notification
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
};

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);