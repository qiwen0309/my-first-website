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

    // Snapshot cart when placing order (navigating to confirmation from checkout)
    if (page === 'confirmation' && currentPage === 'checkout') {
      orderSnapshot = Object.entries(cart).map(function(e) { return [e[0], e[1]]; });
    }

    $$('.page').forEach(function (p) { p.classList.remove('active'); });
    var el = $('page-' + page);
    if (!el) return;
    el.classList.add('active');
    currentPage = page;
    window.location.hash = page;

    // Remove scroll handlers when leaving product page
    if (page !== 'product') {
      if (window._mobileScrollHandler) window.removeEventListener('scroll', window._mobileScrollHandler);
      if (window._desktopScrollHandler) window.removeEventListener('scroll', window._desktopScrollHandler);
    }

    if (page === 'cart') { window.scrollTo(0, 0); renderCart(); return; }
    if (page === 'checkout') { window.scrollTo(0, 0); renderCheckout(); return; }
    if (page === 'confirmation') { window.scrollTo(0, 0); renderConfirmation(); return; }

    if (page === 'product') {
      // Restore saved scroll position after the menu renders and paints
      renderMenu();
      requestAnimationFrame(function () {
        window.scrollTo(0, menuScrollY);
      });
      return;
    }

    window.scrollTo(0, 0);
  }

  function handleHash() {
    var page = window.location.hash.slice(1) || 'home';
    navigateTo(page);
  }

  /* RENDER MENU */
  function renderMenu() {
    renderMenuMobile();
    renderMenuDesktop();
  }

  function renderMenuMobile() {
    var container = $('menu-list-mobile');
    if (!container) return;
    var html = '';
    CATEGORIES_MOBILE.forEach(function (cat) {
      var items = MENU_ITEMS.filter(function (m) { return m.category === cat; });
      if (!items.length) return;
      var anchorId = 'cat-anchor-mobile-' + encodeURIComponent(cat);
      html += '<div class="menu-section-header" id="' + anchorId + '">';
      html += '<span class="menu-section-label">' + cat.toUpperCase() + '</span>';
      html += '</div>';
      items.forEach(function (item) {
        var qty = cart[item.id] || 0;
        html += '<div class="menu-item-card" data-item="' + item.id + '">';
        html += '<div class="menu-item-img" style="background-color:' + item.color + ';background-image:url(' + item.img + ')"></div>';
        html += '<div class="menu-item-info">';
        html += '<div class="menu-item-name">' + item.name + '</div>';
        html += '<div class="menu-item-sub">' + item.sub + '</div>';
        html += '<div class="menu-item-bottom">';
        html += '<div class="menu-item-price">' + formatPrice(item.price) + '</div>';
        if (qty === 0) {
          html += '<button class="menu-item-add-btn" data-add="' + item.id + '" aria-label="Add to cart">';
          html += '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>';
          html += '</button>';
        } else {
          html += '<div class="menu-item-qty-ctrl">';
          html += '<button class="qty-btn" data-dec="' + item.id + '">−</button>';
          html += '<span class="qty-num">' + qty + '</span>';
          html += '<button class="qty-btn" data-inc="' + item.id + '">+</button>';
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
    });
    container.innerHTML = html;
    registerMobileScrollHighlight();
  }

  function renderMenuDesktop() {
    var container = $('menu-grid-desktop');
    if (!container) return;
    var html = '';
    CATEGORIES_DESKTOP.forEach(function (cat) {
      var items = MENU_ITEMS.filter(function (m) { return m.category === cat; });
      if (!items.length) return;
      var anchorId = 'cat-anchor-desktop-' + encodeURIComponent(cat);
      html += '<div class="menu-section-header desktop" id="' + anchorId + '">';
      html += '<span class="menu-section-label">' + cat.toUpperCase() + '</span>';
      html += '</div>';
      html += '<div class="menu-section-grid">';
      items.forEach(function (item) {
        var qty = cart[item.id] || 0;
        html += '<div class="menu-card-desktop" data-item="' + item.id + '">';
        html += '<div class="menu-card-img" style="background-color:' + item.color + ';background-image:url(' + item.img + ')">';
        if (qty === 0) {
          html += '<button class="menu-card-add-btn" data-add="' + item.id + '" aria-label="Add to cart">';
          html += '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>';
          html += '</button>';
        } else {
          html += '<div class="menu-card-qty-ctrl">';
          html += '<button class="menu-card-qty-btn" data-dec="' + item.id + '">−</button>';
          html += '<span class="menu-card-qty-num">' + qty + '</span>';
          html += '<button class="menu-card-qty-btn" data-inc="' + item.id + '">+</button>';
          html += '</div>';
        }
        html += '</div>';
        html += '<div class="menu-card-body">';
        html += '<div class="menu-card-name">' + item.name + '</div>';
        html += '<div class="menu-card-sub">' + item.sub + '</div>';
        html += '<div class="menu-card-price">' + formatPrice(item.price) + '</div>';
        html += '</div></div>';
      });
      html += '</div>';
    });
    container.innerHTML = html;
    registerDesktopScrollHighlight();
  }

  /* SCROLL-DRIVEN CATEGORY HIGHLIGHT */
  // Mobile: page scrolls, sticky bar is at top. We watch window scroll and find
  // which section header is closest to (but still below) the sticky bar bottom.
  function registerMobileScrollHighlight() {
    if (window._mobileScrollHandler) {
      window.removeEventListener('scroll', window._mobileScrollHandler);
    }
    window._mobileScrollHandler = function () {
      var stickyBar = document.querySelector('.product-mobile-sticky');
      if (!stickyBar) return;
      var threshold = stickyBar.getBoundingClientRect().bottom + 2;
      var headers = document.querySelectorAll('#menu-list-mobile .menu-section-header');
      var activeCat = null;
      for (var i = headers.length - 1; i >= 0; i--) {
        if (headers[i].getBoundingClientRect().top <= threshold) {
          activeCat = decodeURIComponent(headers[i].id.replace('cat-anchor-mobile-', ''));
          break;
        }
      }
      if (!activeCat && headers.length) {
        activeCat = decodeURIComponent(headers[0].id.replace('cat-anchor-mobile-', ''));
      }
      if (activeCat) {
        $$('.cat-btn').forEach(function (b) {
          b.classList.toggle('active', b.dataset.cat === activeCat);
        });
      }
    };
    window.addEventListener('scroll', window._mobileScrollHandler, { passive: true });
    // rAF ensures the page is painted and getBoundingClientRect is accurate
    requestAnimationFrame(window._mobileScrollHandler);
  }

  // Desktop: page scrolls, sticky nav is at top: 108px (topnav) + nav-wrap height.
  function registerDesktopScrollHighlight() {
    if (window._desktopScrollHandler) {
      window.removeEventListener('scroll', window._desktopScrollHandler);
    }
    window._desktopScrollHandler = function () {
      var navWrap = document.querySelector('.product-desktop-nav-wrap');
      if (!navWrap) return;
      var threshold = navWrap.getBoundingClientRect().bottom + 2;
      var headers = document.querySelectorAll('#menu-grid-desktop .menu-section-header');
      var activeCat = null;
      for (var i = headers.length - 1; i >= 0; i--) {
        if (headers[i].getBoundingClientRect().top <= threshold) {
          activeCat = decodeURIComponent(headers[i].id.replace('cat-anchor-desktop-', ''));
          break;
        }
      }
      if (!activeCat && headers.length) {
        activeCat = decodeURIComponent(headers[0].id.replace('cat-anchor-desktop-', ''));
      }
      if (activeCat) {
        $$('.cat-tab').forEach(function (b) {
          b.classList.toggle('active', b.dataset.cat === activeCat);
        });
      }
    };
    window.addEventListener('scroll', window._desktopScrollHandler, { passive: true });
    requestAnimationFrame(window._desktopScrollHandler);
  }

  /* RENDER PRODUCT DETAIL */
  function renderDetail(itemId) {
    var item = MENU_ITEMS.find(function (m) { return m.id === itemId; });
    if (!item) return;
    selectedItem = item;

    var tagsHtml = item.tags.map(function (t) {
      return '<span class="detail-tag">' + t + '</span>';
    }).join('');
  }
}());
