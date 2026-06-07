(function () {
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation triggers (buttons, links with data-nav attribute)
    const navTriggers = document.querySelectorAll('[data-nav]');
    
    // Add click event to each navigation trigger
    navTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target page ID from data-nav attribute
            const targetPageId = this.getAttribute('data-nav');
            
            // Special handling for 'home' - uses 'page-home' as target
            // For all others, target is 'page-' + targetPageId
            let targetId;
            if (targetPageId === 'home') {
                targetId = 'page-home';
            } else {
                targetId = 'page-' + targetPageId;
            }
            
            // Hide all pages
            const allPages = document.querySelectorAll('.page');
            allPages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the target page
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                
                // Scroll to top when navigating
                window.scrollTo(0, 0);
            } else {
                console.warn('Page not found:', targetId);
            }
        });
    });
});
})();
(function () {
    /* DATA */
    var MENU_ITEMS = [
      // A La Carte
      { id: 'kingfish-nigiri',    name: 'Kingfish Nigiri',        price: 5.8,  sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Delicate slices of premium kingfish over hand-pressed vinegared rice. Clean, buttery, and distinctly oceanic.',                                                                                                                                img: 'assets/images/kingfish.svg',      color: '#ddd5c8' },
      { id: 'hotate-nigiri',      name: 'Hotate Nigiri',          price: 8,    sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH'],                  desc: 'Hokkaido scallop nigiri — sweet, tender, and lightly seared. A seasonal highlight from the northern waters.',                                                                                                                                    img: 'assets/images/hotate.svg',        color: '#e2ddd5' },
      { id: 'ama-ebi-nigiri',     name: 'Ama Ebi Nigiri',         price: 7.5,  sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH', 'HIGH PROTEIN'],  desc: 'Sweet shrimp nigiri served raw, with a delicate sweetness and firm texture that melts on the palate.',                                                                                                                                              img: 'assets/images/ama-ebi.svg',       color: '#e8ddd0' },
      { id: 'toro-nigiri',        name: 'Toro Nigiri',            price: 12,   sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Fatty tuna belly nigiri — rich, buttery, and deeply flavoured. One of the most prized cuts in Japanese cuisine.',                                                                                                                                    img: 'assets/images/toro.png',          color: '#e0d8cc' },
      // Sushi Pack
      { id: 'sushi-pack-8',       name: 'Sushi Pack 8',           price: 38,   sub: '8 pieces',   category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Eight pieces of seasonal nigiri, selected by our chef each morning. A balanced introduction to the Hinoki style.',                                                                                                                                    img: 'assets/images/sushi-pack.png',    color: '#e8e0d4' },
      { id: 'sushi-pack-16',      name: 'Sushi Pack 16',          price: 72,   sub: '16 pieces',  category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Sixteen pieces of premium nigiri — ideal for sharing. Includes seasonal fish, scallop, and prawn selections.',                                                                                                                                      img: 'assets/images/sushi-pack-lg.png', color: '#ddd0c4' },
      // Nigiri Pack
      { id: 'nigiri-pack-classic',name: 'Classic Nigiri Pack',    price: 48,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN', 'GLUTEN FREE'],desc: 'Ten pieces of Edomae-style nigiri. Salmon, tuna, kingfish, scallop, and prawn — each pressed by hand over seasoned rice.',                                                                                                                          img: 'assets/images/nigiri-pack.png',   color: '#e4dcd0' },
      { id: 'nigiri-pack-premium',name: 'Premium Nigiri Pack',    price: 78,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN'],               desc: 'Ten pieces featuring premium cuts: toro, uni, wagyu, and seasonal specials. The definitive Hinoki nigiri experience.',                                                                                                                               img: 'assets/images/nigiri-premium.png',color: '#d8d0c4' },
      // Hoso Maki Pack
      { id: 'hoso-maki-salmon',   name: 'Salmon Hoso Maki',       price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Thin rolls of fresh salmon wrapped in seasoned rice and nori. Clean, simple, and deeply satisfying.',                                                                                                                                              img: 'assets/images/hoso-salmon.png',   color: '#e8ddd4' },
      { id: 'hoso-maki-tuna',     name: 'Tuna Hoso Maki',         price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Classic tuna hosomaki — lean, savoury, and precise. A staple of the Japanese sushi tradition.',                                                                                                                                                   img: 'assets/images/hoso-tuna.png',     color: '#e0d4cc' },
      { id: 'hoso-maki-cucumber', name: 'Cucumber Hoso Maki',     price: 10,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Crisp cucumber wrapped in vinegared rice and nori. Light, refreshing, and a perfect palate cleanser.',                                                                                                                                              img: 'assets/images/hoso-cucumber.png', color: '#d8e0d4' },
      // Deka Maki Pack
      { id: 'deka-maki-spicy',    name: 'Spicy Tuna Deka Maki',   price: 22,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['HIGH PROTEIN', 'SPICY'],      desc: 'Thick rolls of spicy tuna with cucumber and avocado. Bold, satisfying, and built for those who like heat.',                                                                                                                                         img: 'assets/images/deka-spicy.png',    color: '#e4d8cc' },
      { id: 'deka-maki-prawn',    name: 'Prawn Tempura Deka Maki',price: 24,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['SHELLFISH'],                  desc: 'Crispy prawn tempura with avocado and house sauce, wrapped in seasoned rice and nori. A crowd favourite.',                                                                                                                                       img: 'assets/images/deka-prawn.png',    color: '#ece0d4' },
      // Vegan
      { id: 'vegan-pack',         name: 'Vegan Sushi Pack',        price: 32,   sub: '10 pieces',  category: 'Vegan',         tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Ten pieces of plant-based nigiri and maki — avocado, pickled daikon, cucumber, and seasonal vegetables over seasoned rice.',                                                                                                                          img: 'assets/images/vegan-pack.png',    color: '#d4ddd0' },
      { id: 'vegan-inari',        name: 'Inari Sushi',             price: 18,   sub: '6 pieces',   category: 'Vegan',         tags: ['VEGAN'],                      desc: 'Sweet tofu pouches filled with seasoned rice. A beloved Japanese classic — soft, subtly sweet, and deeply comforting.',                                                                                                                             img: 'assets/images/inari.png',         color: '#e0dcc8' },
      // Platter
      { id: 'platter-small',      name: 'Hinoki Platter (Small)',  price: 85,   sub: 'Serves 2',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'A curated selection for two: nigiri, hosomaki, and sashimi. Composed by our chef to showcase the breadth of the Hinoki menu.',                                                                                                                      img: 'assets/images/platter-sm.png',    color: '#e8e0d4' },
      { id: 'platter-large',      name: 'Hinoki Platter (Large)',  price: 155,  sub: 'Serves 4',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'The full Hinoki experience for four. Premium nigiri, deka maki, sashimi, and seasonal specials — a complete Japanese feast.',                                                                                                                     img: 'assets/images/platter-lg.png',    color: '#ddd0c4' }
    ];
  
    // Desktop tab categories (matches HTML cat-tab buttons)
    var CATEGORIES_DESKTOP = ['A La Carte', 'Sushi Pack', 'Nigiri Pack', 'Hoso Maki Pack', 'Deka Maki Pack', 'Vegan', 'Platter'];
    // Mobile category buttons (grouped)
    var CATEGORIES_MOBILE = ['A La Carte', 'Sushi Pack', 'Nigiri Pack', 'Hoso Maki Pack', 'Deka Maki Pack', 'Vegan', 'Platter'];
  
    /* STATE */
    var cart = {};
    var currentPage = 'home';
    var selectedItem = null;
    var selectedTime = '1:00 p.m.';
    var menuScrollY = 0;
    var orderSnapshot = []; // cart contents saved when order is placed
  
    /* DOM HELPERS */
    function $(id) { return document.getElementById(id); }
    function $$(sel) { return document.querySelectorAll(sel); }
  
    /* UTILITIES */
    function formatPrice(n) { return '$' + Number(n).toFixed(2); }
  
    function getCartTotal() {
      return Object.entries(cart).reduce(function (s, entry) {
        var id = entry[0], qty = entry[1];
        var item = MENU_ITEMS.find(function (m) { return m.id === id; });
        return s + (item ? item.price * qty : 0);
      }, 0);
    }
  
    function getCartCount() {
      return Object.values(cart).reduce(function (s, q) { return s + q; }, 0);
    }
  
    /* NAVIGATION */
    function navigateTo(page) {
      // Save scroll position when leaving the product page
      if (currentPage === 'product') {
        menuScrollY = window.scrollY;
      }
  
      // Clear cart when navigating away from confirmation
      if (currentPage === 'confirmation') {
        cart = {};
        updateCartBadges();
      }
    }  
})();

(function () {
    /* DATA */
    var MENU_ITEMS = [
      // A La Carte
      { id: 'kingfish-nigiri',    name: 'Kingfish Nigiri',        price: 5.8,  sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Delicate slices of premium kingfish over hand-pressed vinegared rice. Clean, buttery, and distinctly oceanic.',                                                                                                                                img: 'assets/images/kingfish.svg',      color: '#ddd5c8' },
      { id: 'hotate-nigiri',      name: 'Hotate Nigiri',          price: 8,    sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH'],                  desc: 'Hokkaido scallop nigiri — sweet, tender, and lightly seared. A seasonal highlight from the northern waters.',                                                                                                                                    img: 'assets/images/hotate.svg',        color: '#e2ddd5' },
      { id: 'ama-ebi-nigiri',     name: 'Ama Ebi Nigiri',         price: 7.5,  sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH', 'HIGH PROTEIN'],  desc: 'Sweet shrimp nigiri served raw, with a delicate sweetness and firm texture that melts on the palate.',                                                                                                                                              img: 'assets/images/ama-ebi.svg',       color: '#e8ddd0' },
      { id: 'toro-nigiri',        name: 'Toro Nigiri',            price: 12,   sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Fatty tuna belly nigiri — rich, buttery, and deeply flavoured. One of the most prized cuts in Japanese cuisine.',                                                                                                                                    img: 'assets/images/toro.png',          color: '#e0d8cc' },
      // Sushi Pack
      { id: 'sushi-pack-8',       name: 'Sushi Pack 8',           price: 38,   sub: '8 pieces',   category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Eight pieces of seasonal nigiri, selected by our chef each morning. A balanced introduction to the Hinoki style.',                                                                                                                                    img: 'assets/images/sushi-pack.png',    color: '#e8e0d4' },
      { id: 'sushi-pack-16',      name: 'Sushi Pack 16',          price: 72,   sub: '16 pieces',  category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Sixteen pieces of premium nigiri — ideal for sharing. Includes seasonal fish, scallop, and prawn selections.',                                                                                                                                      img: 'assets/images/sushi-pack-lg.png', color: '#ddd0c4' },
      // Nigiri Pack
      { id: 'nigiri-pack-classic',name: 'Classic Nigiri Pack',    price: 48,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN', 'GLUTEN FREE'],desc: 'Ten pieces of Edomae-style nigiri. Salmon, tuna, kingfish, scallop, and prawn — each pressed by hand over seasoned rice.',                                                                                                                          img: 'assets/images/nigiri-pack.png',   color: '#e4dcd0' },
      { id: 'nigiri-pack-premium',name: 'Premium Nigiri Pack',    price: 78,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN'],               desc: 'Ten pieces featuring premium cuts: toro, uni, wagyu, and seasonal specials. The definitive Hinoki nigiri experience.',                                                                                                                               img: 'assets/images/nigiri-premium.png',color: '#d8d0c4' },
      // Hoso Maki Pack
      { id: 'hoso-maki-salmon',   name: 'Salmon Hoso Maki',       price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Thin rolls of fresh salmon wrapped in seasoned rice and nori. Clean, simple, and deeply satisfying.',                                                                                                                                              img: 'assets/images/hoso-salmon.png',   color: '#e8ddd4' },
      { id: 'hoso-maki-tuna',     name: 'Tuna Hoso Maki',         price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Classic tuna hosomaki — lean, savoury, and precise. A staple of the Japanese sushi tradition.',                                                                                                                                                   img: 'assets/images/hoso-tuna.png',     color: '#e0d4cc' },
      { id: 'hoso-maki-cucumber', name: 'Cucumber Hoso Maki',     price: 10,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Crisp cucumber wrapped in vinegared rice and nori. Light, refreshing, and a perfect palate cleanser.',                                                                                                                                              img: 'assets/images/hoso-cucumber.png', color: '#d8e0d4' },
      // Deka Maki Pack
      { id: 'deka-maki-spicy',    name: 'Spicy Tuna Deka Maki',   price: 22,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['HIGH PROTEIN', 'SPICY'],      desc: 'Thick rolls of spicy tuna with cucumber and avocado. Bold, satisfying, and built for those who like heat.',                                                                                                                                         img: 'assets/images/deka-spicy.png',    color: '#e4d8cc' },
      { id: 'deka-maki-prawn',    name: 'Prawn Tempura Deka Maki',price: 24,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['SHELLFISH'],                  desc: 'Crispy prawn tempura with avocado and house sauce, wrapped in seasoned rice and nori. A crowd favourite.',                                                                                                                                       img: 'assets/images/deka-prawn.png',    color: '#ece0d4' },
      // Vegan
      { id: 'vegan-pack',         name: 'Vegan Sushi Pack',        price: 32,   sub: '10 pieces',  category: 'Vegan',         tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Ten pieces of plant-based nigiri and maki — avocado, pickled daikon, cucumber, and seasonal vegetables over seasoned rice.',                                                                                                                          img: 'assets/images/vegan-pack.png',    color: '#d4ddd0' },
      { id: 'vegan-inari',        name: 'Inari Sushi',             price: 18,   sub: '6 pieces',   category: 'Vegan',         tags: ['VEGAN'],                      desc: 'Sweet tofu pouches filled with seasoned rice. A beloved Japanese classic — soft, subtly sweet, and deeply comforting.',                                                                                                                             img: 'assets/images/inari.png',         color: '#e0dcc8' },
      // Platter
      { id: 'platter-small',      name: 'Hinoki Platter (Small)',  price: 85,   sub: 'Serves 2',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'A curated selection for two: nigiri, hosomaki, and sashimi. Composed by our chef to showcase the breadth of the Hinoki menu.',                                                                                                                      img: 'assets/images/platter-sm.png',    color: '#e8e0d4' },
      { id: 'platter-large',      name: 'Hinoki Platter (Large)',  price: 155,  sub: 'Serves 4',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'The full Hinoki experience for four. Premium nigiri, deka maki, sashimi, and seasonal specials — a complete Japanese feast.',                                                                                                                     img: 'assets/images/platter-lg.png',    color: '#ddd0c4' }
    ];
  
    // Desktop tab categories (matches HTML cat-tab buttons)
    var CATEGORIES_DESKTOP = ['A La Carte', 'Sushi Pack', 'Nigiri Pack', 'Hoso Maki Pack', 'Deka Maki Pack', 'Vegan', 'Platter'];
    // Mobile category buttons (grouped)
    var CATEGORIES_MOBILE = ['A La Carte', 'Sushi Pack', 'Nigiri Pack', 'Hoso Maki Pack', 'Deka Maki Pack', 'Vegan', 'Platter'];
  
    /* STATE */
    var cart = {};
    var currentPage = 'home';
    var selectedItem = null;
    var selectedTime = '1:00 p.m.';
    var menuScrollY = 0;
    var orderSnapshot = []; // cart contents saved when order is placed
  
    /* DOM HELPERS */
    function $(id) { return document.getElementById(id); }
    function $$(sel) { return document.querySelectorAll(sel); }
  
    /* UTILITIES */
    function formatPrice(n) { return '$' + Number(n).toFixed(2); }
  
    function getCartTotal() {
      return Object.entries(cart).reduce(function (s, entry) {
        var id = entry[0], qty = entry[1];
        var item = MENU_ITEMS.find(function (m) { return m.id === id; });
        return s + (item ? item.price * qty : 0);
      }, 0);
    }
  
    function getCartCount() {
      return Object.values(cart).reduce(function (s, q) { return s + q; }, 0);
    }
  
    /* NAVIGATION */
    function navigateTo(page) {
      // Save scroll position when leaving the product page
      if (currentPage === 'product') {
        menuScrollY = window.scrollY;
      }
  
      // Clear cart when navigating away from confirmation
      if (currentPage === 'confirmation') {
        cart = {};
        updateCartBadges();
      }
    }  
})();

