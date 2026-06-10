(function () {
 /* DATA */
  var MENU_ITEMS = [
    // A La Carte
    { id: 'kingfish-nigiri',    name: 'Kingfish Nigiri',        price: 5.8,  sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Delicate slices of premium kingfish over hand-pressed vinegared rice. Clean, buttery, and distinctly oceanic.',                                                                                                                                img: 'image/IMG_6564.JPG',      color: '#ddd5c8' },
    { id: 'hotate-nigiri',      name: 'Hotate Nigiri',          price: 8,    sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH'],                  desc: 'Hokkaido scallop nigiri — sweet, tender, and lightly seared. A seasonal highlight from the northern waters.',                                                                                                                                    img: 'image/IMG_6565.JPG',        color: '#e2ddd5' },
    { id: 'ama-ebi-nigiri',     name: 'Ama Ebi Nigiri',         price: 7.5,  sub: 'A la carte', category: 'A La Carte',    tags: ['SHELLFISH', 'HIGH PROTEIN'],  desc: 'Sweet shrimp nigiri served raw, with a delicate sweetness and firm texture that melts on the palate.',                                                                                                                                              img: 'image/ama-ebi.svg',       color: '#e8ddd0' },
    { id: 'toro-nigiri',        name: 'Toro Nigiri',            price: 12,   sub: 'A la carte', category: 'A La Carte',    tags: ['HIGH PROTEIN'],               desc: 'Fatty tuna belly nigiri — rich, buttery, and deeply flavoured. One of the most prized cuts in Japanese cuisine.',                                                                                                                                    img: 'image/toro.png',          color: '#e0d8cc' },
    // Sushi Pack
    { id: 'sushi-pack-8',       name: 'Sushi Pack 8',           price: 38,   sub: '8 pieces',   category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Eight pieces of seasonal nigiri, selected by our chef each morning. A balanced introduction to the Hinoki style.',                                                                                                                                    img: 'image/IMG_6504.JPG',    color: '#e8e0d4' },
    { id: 'sushi-pack-16',      name: 'Sushi Pack 16',          price: 72,   sub: '16 pieces',  category: 'Sushi Pack',    tags: ['HIGH PROTEIN'],               desc: 'Sixteen pieces of premium nigiri — ideal for sharing. Includes seasonal fish, scallop, and prawn selections.',                                                                                                                                      img: 'image/IMG_7883.JPG', color: '#ddd0c4' },
    // Nigiri Pack
    { id: 'nigiri-pack-classic',name: 'Classic Nigiri Pack',    price: 48,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN', 'GLUTEN FREE'],desc: 'Ten pieces of Edomae-style nigiri. Salmon, tuna, kingfish, scallop, and prawn — each pressed by hand over seasoned rice.',                                                                                                                          img: 'image/IMG_7865.JPG',   color: '#e4dcd0' },
    { id: 'nigiri-pack-premium',name: 'Premium Nigiri Pack',    price: 78,   sub: '10 pieces',  category: 'Nigiri Pack',   tags: ['HIGH PROTEIN'],               desc: 'Ten pieces featuring premium cuts: toro, uni, wagyu, and seasonal specials. The definitive Hinoki nigiri experience.',                                                                                                                               img: 'image/IMG_7864.JPG',color: '#d8d0c4' },
    // Hoso Maki Pack
    { id: 'hoso-maki-salmon',   name: 'Salmon Hoso Maki',       price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Thin rolls of fresh salmon wrapped in seasoned rice and nori. Clean, simple, and deeply satisfying.',                                                                                                                                              img: 'image/IMG_7860.JPG',   color: '#e8ddd4' },
    { id: 'hoso-maki-tuna',     name: 'Tuna Hoso Maki',         price: 14,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['HIGH PROTEIN'],               desc: 'Classic tuna hosomaki — lean, savoury, and precise. A staple of the Japanese sushi tradition.',                                                                                                                                                   img: 'image/IMG_7862.JPG',     color: '#e0d4cc' },
    { id: 'hoso-maki-cucumber', name: 'Cucumber Hoso Maki',     price: 10,   sub: '6 pieces',   category: 'Hoso Maki Pack',tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Crisp cucumber wrapped in vinegared rice and nori. Light, refreshing, and a perfect palate cleanser.',                                                                                                                                              img: 'image/IMG_7861.JPG', color: '#d8e0d4' },
    // Deka Maki Pack
    { id: 'deka-maki-futomaki',    name: 'Futomaki',   price: 22,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['HIGH PROTEIN', 'SPICY'],      desc: 'Prawn, anago, takuan, kanpyo, shiitake mushroom, cucumber, tamago, sakura denbu',                                                                                                                                         img: 'image/IMG_7879.JPG',    color: '#e4d8cc' },
    { id: 'deka-maki-california',    name: 'California Roll',price: 24,   sub: '8 pieces',   category: 'Deka Maki Pack',tags: ['SHELLFISH'],                  desc: 'Salmon, avocado, cucumber, crab, mayonnaise, tamago, tobikko',                                                                                                                                       img: 'image/IMG_7878.JPG',    color: '#ece0d4' },
    // Vegan
    { id: 'vegan-pack',         name: 'Vegan Sushi Pack',        price: 32,   sub: '10 pieces',  category: 'Vegan',         tags: ['VEGAN', 'GLUTEN FREE'],       desc: 'Ten pieces of plant-based nigiri and maki — avocado, pickled daikon, cucumber, and seasonal vegetables over seasoned rice.',                                                                                                                          img: 'image/IMG_7881.JPG',    color: '#d4ddd0' },
    { id: 'vegan-inari',        name: 'Inari Sushi',             price: 18,   sub: '10 pieces',   category: 'Vegan',         tags: ['VEGAN'],                      desc: 'Sweet tofu pouches filled with seasoned rice. A beloved Japanese classic — soft, subtly sweet, and deeply comforting.',                                                                                                                             img: 'image/IMG_7880.JPG',         color: '#e0dcc8' },
    // Platter
    { id: 'platter-small',      name: 'Hinoki Platter (Small)',  price: 85,   sub: 'Serves 2',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'A curated selection for two: nigiri, hosomaki, and sashimi. Composed by our chef to showcase the breadth of the Hinoki menu.',                                                                                                                      img: 'image/IMG_7863.JPG',    color: '#e8e0d4' },
    { id: 'platter-large',      name: 'Hinoki Platter (Large)',  price: 155,  sub: 'Serves 4',   category: 'Platter',       tags: ['HIGH PROTEIN'],               desc: 'The full Hinoki experience for four. Premium nigiri, deka maki, sashimi, and seasonal specials — a complete Japanese feast.',                                                                                                                     img: 'image/IMG_7882.JPG',    color: '#ddd0c4' }
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

    // Mobile
    var mImg = $('detail-hero-img-mobile');
    if (mImg) mImg.style.cssText = 'background-color:' + item.color + ';background-image:url(' + item.img + ')';
    var mTags = $('detail-tags-mobile');
    if (mTags) mTags.innerHTML = tagsHtml;
    var mTitle = $('detail-title-mobile');
    if (mTitle) mTitle.textContent = item.name;
    var mPrice = $('detail-price-mobile');
    if (mPrice) mPrice.textContent = formatPrice(item.price);
    var mDesc = document.querySelector('#page-product-page .detail-mobile .detail-desc');
    if (mDesc) mDesc.textContent = item.desc;
    var mBarPrice = $('detail-bar-price-mobile');
    if (mBarPrice) mBarPrice.textContent = formatPrice(item.price);

    // Desktop
    var dImg = $('detail-hero-img-desktop');
    if (dImg) dImg.style.cssText = 'background-color:' + item.color + ';background-image:url(' + item.img + ')';
    var dTags = $('detail-tags-desktop');
    if (dTags) dTags.innerHTML = tagsHtml;
    var dTitle = $('detail-title-desktop');
    if (dTitle) dTitle.textContent = item.name;
    var dPrice = $('detail-price-desktop');
    if (dPrice) dPrice.textContent = formatPrice(item.price);
    var dDesc = document.querySelector('#page-product-page .detail-desktop .detail-desc');
    if (dDesc) dDesc.textContent = item.desc;
    var dBarPrice = $('detail-bar-price-desktop');
    if (dBarPrice) dBarPrice.textContent = formatPrice(item.price);
    var dBread = $('detail-breadcrumb-name');
    if (dBread) dBread.textContent = item.name.toUpperCase();
    updateDetailPageControls();
  }
  
  /* RENDER CART */
  function renderCart() {
    renderCartMobile();
    renderCartDesktop();
  }

  function renderCartMobile() {
    var container = $('cart-items-mobile');
    if (!container) return;
    var items = Object.entries(cart);
    if (items.length === 0) {
      container.innerHTML = '<p style="padding:32px;font-family:Manrope,sans-serif;color:var(--text-mid)">Your cart is empty.</p>';
      renderCartSummary('cart-summary-rows-mobile', 'cart-summary-total-mobile');
      return;
    }
    var html = '';
    items.forEach(function (entry) {
      var id = entry[0], qty = entry[1];
      var item = MENU_ITEMS.find(function (m) { return m.id === id; });
      if (!item) return;
      html += '<div class="cart-item">';
      html += '<div class="cart-item-img" style="background-color:' + item.color + ';background-image:url(' + item.img + ')"></div>';
      html += '<div class="cart-item-info">';
      html += '<div class="cart-item-name">' + item.name + '</div>';
      html += '<div class="cart-item-sub">' + item.sub + '</div>';
      html += '<div class="cart-item-price">' + formatPrice(item.price * qty) + '</div>';
      html += '<div class="cart-item-controls">';
      html += '<div class="cart-qty-border">';
      html += '<button class="cart-qty-btn" data-dec="' + id + '">−</button>';
      html += '<span class="cart-qty-num">' + String(qty).padStart(2,'0') + '</span>';
      html += '<button class="cart-qty-btn" data-inc="' + id + '">+</button>';
      html += '</div>';
      html += '<button class="cart-remove-btn" data-remove="' + id + '">REMOVE</button>';
      html += '</div></div></div>';
    });
    container.innerHTML = html;
    renderCartSummary('cart-summary-rows-mobile', 'cart-summary-total-mobile');
  }

  function renderCartDesktop() {
    var container = $('cart-items-desktop');
    if (!container) return;
    var items = Object.entries(cart);
    if (items.length === 0) {
      container.innerHTML = '<p style="padding:32px 0;font-family:Manrope,sans-serif;color:var(--text-mid)">Your cart is empty.</p>';
      renderCartSummary('cart-summary-rows-desktop', 'cart-summary-total-desktop');
      return;
    }
    var html = '';
    items.forEach(function (entry) {
      var id = entry[0], qty = entry[1];
      var item = MENU_ITEMS.find(function (m) { return m.id === id; });
      if (!item) return;
      html += '<div class="cart-item">';
      html += '<div class="cart-item-img" style="background-color:' + item.color + ';background-image:url(' + item.img + ')"></div>';
      html += '<div class="cart-item-info">';
      html += '<div class="cart-item-name">' + item.name + '</div>';
      html += '<div class="cart-item-sub">' + item.sub + '</div>';
      html += '<div class="cart-item-price">' + formatPrice(item.price * qty) + '</div>';
      html += '<div class="cart-item-controls">';
      html += '<div class="cart-qty-border">';
      html += '<button class="cart-qty-btn" data-dec="' + id + '">−</button>';
      html += '<span class="cart-qty-num">' + String(qty).padStart(2,'0') + '</span>';
      html += '<button class="cart-qty-btn" data-inc="' + id + '">+</button>';
      html += '</div>';
      html += '<button class="cart-remove-btn" data-remove="' + id + '">REMOVE</button>';
      html += '</div></div></div>';
    });
    container.innerHTML = html;
    renderCartSummary('cart-summary-rows-desktop', 'cart-summary-total-desktop');
  }

  function renderCartSummary(rowsId, totalId) {
    var subtotal = getCartTotal();
    var tax = +(subtotal * 0.04).toFixed(2);
    var total = subtotal + tax;
    var rowsEl = $(rowsId);
    if (rowsEl) {
      rowsEl.innerHTML =
        '<div class="cart-summary-row"><span>SUBTOTAL</span><span>' + formatPrice(subtotal) + '</span></div>' +
        '<div class="cart-summary-row"><span>ESTIMATE taxes</span><span>' + formatPrice(tax) + '</span></div>';
    }
    var totalEl = $(totalId);
    if (totalEl) {
      totalEl.innerHTML =
        '<span class="cart-total-label">Total</span>' +
        '<span class="cart-total-val">' + formatPrice(total) + '</span>';
    }
  }

  /* RENDER CHECKOUT */
  function renderCheckout() {
    var items = Object.entries(cart);
    var subtotal = getCartTotal();
    var tax = +(subtotal * 0.04).toFixed(2);
    var total = subtotal + tax;

    function itemsHtml() {
      return items.map(function (entry) {
        var id = entry[0], qty = entry[1];
        var item = MENU_ITEMS.find(function (m) { return m.id === id; });
        if (!item) return '';
        return '<div class="checkout-item-row">' +
          '<div><div class="checkout-item-name">' + item.name + '</div>' +
          '<div class="checkout-item-sub">' + item.sub + '</div></div>' +
          '<div class="checkout-item-price">' + formatPrice(item.price * qty) + '</div></div>';
      }).join('');
    }

    function totalsHtml() {
      return '<div class="checkout-total-row"><span>Subtotal</span><span>' + formatPrice(subtotal) + '</span></div>' +
        '<div class="checkout-total-row"><span>TAXES & FEES</span><span>' + formatPrice(tax) + '</span></div>' +
        '<div class="checkout-total-final"><span class="checkout-total-label">Total</span><span class="checkout-total-val">' + formatPrice(total) + '</span></div>';
    }

    var mItems = $('checkout-items-mobile');
    if (mItems) mItems.innerHTML = itemsHtml();
    var mTotals = $('checkout-totals-mobile');
    if (mTotals) mTotals.innerHTML = totalsHtml();

    var dItems = $('checkout-items-desktop');
    if (dItems) dItems.innerHTML = itemsHtml();
    var dTotals = $('checkout-totals-desktop');
    if (dTotals) dTotals.innerHTML = totalsHtml();
  }

  /* RENDER CONFIRMATION */
  function renderConfirmation() {
    var sub = $('confirmation-sub');
    if (sub) sub.textContent = 'Order #HNK-' + Math.floor(10000 + Math.random() * 90000) + ' • Estimated pick up time ' + selectedTime;

    var container = $('confirmation-items');
    if (!container) return;

    // Show snapshotted order — cart may already be cleared
    var html = '';
    orderSnapshot.forEach(function (entry) {
      var id = entry[0], qty = entry[1];
      var item = MENU_ITEMS.find(function (m) { return m.id === id; });
      if (!item) return;
      html += '<div class="confirmation-item">';
      html += '<span class="confirmation-item-name">' + item.name + '</span>';
      html += '<span class="confirmation-item-qty">' + qty + 'x</span>';
      html += '</div>';
    });
    container.innerHTML = html || '<p style="font-family:Manrope,sans-serif;color:var(--text-mid);padding:16px 0">No items.</p>';
  }

  /* CART STATE */
  function addToCart(itemId) {
    cart[itemId] = (cart[itemId] || 0) + 1;
    updateCartBadges();
    updateCardControls(itemId);
  }

  function incCart(itemId) {
    cart[itemId] = (cart[itemId] || 0) + 1;
    updateCartBadges();
    updateCardControls(itemId);
    if (currentPage === 'cart') renderCart();
  }

  function decCart(itemId) {
    if (!cart[itemId]) return;
    cart[itemId]--;
    if (cart[itemId] <= 0) delete cart[itemId];
    updateCartBadges();
    updateCardControls(itemId);
    if (currentPage === 'cart') renderCart();
  }

  // Surgically update the qty controls on both mobile and desktop cards for one item
  function updateCardControls(itemId) {
    var qty = cart[itemId] || 0;

    // Mobile card
    var mCard = document.querySelector('#menu-list-mobile .menu-item-card[data-item="' + itemId + '"]');
    if (mCard) {
      var mCtrl = mCard.querySelector('.menu-item-qty-ctrl, .menu-item-add-btn');
      if (mCtrl) {
        if (qty === 0) {
          mCtrl.outerHTML = '<button class="menu-item-add-btn" data-add="' + itemId + '" aria-label="Add to cart">' +
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>' +
            '</button>';
        } else {
          mCtrl.outerHTML = '<div class="menu-item-qty-ctrl">' +
            '<button class="qty-btn" data-dec="' + itemId + '">−</button>' +
            '<span class="qty-num">' + qty + '</span>' +
            '<button class="qty-btn" data-inc="' + itemId + '">+</button>' +
            '</div>';
        }
      }
    }

    // Desktop card
    var dCard = document.querySelector('#menu-grid-desktop .menu-card-desktop[data-item="' + itemId + '"]');
    if (dCard) {
      var dImg = dCard.querySelector('.menu-card-img');
      if (dImg) {
        var dCtrl = dImg.querySelector('.menu-card-qty-ctrl, .menu-card-add-btn');
        if (dCtrl) {
          if (qty === 0) {
            dCtrl.outerHTML = '<button class="menu-card-add-btn" data-add="' + itemId + '" aria-label="Add to cart">' +
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>' +
              '</button>';
          } else {
            dCtrl.outerHTML = '<div class="menu-card-qty-ctrl">' +
              '<button class="menu-card-qty-btn" data-dec="' + itemId + '">−</button>' +
              '<span class="menu-card-qty-num">' + qty + '</span>' +
              '<button class="menu-card-qty-btn" data-inc="' + itemId + '">+</button>' +
              '</div>';
          }
        }
      }
    }
  }

  function removeFromCart(itemId) {
    delete cart[itemId];
    updateCartBadges();
    if (currentPage === 'cart') renderCart();
  }

  function updateDetailPageControls() {
    if (!selectedItem) return;
    var qty = cart[selectedItem.id] || 0;
    var price = formatPrice(selectedItem.price);

    // Mobile add bar
    var mBar = document.querySelector('.detail-add-bar');
    if (mBar) {
      if (qty === 0) {
        mBar.innerHTML = '<button class="btn-add-to-cart">' +
          '<span>ADD TO CART</span>' +
          '<div class="add-bar-divider"></div>' +
          '<span class="add-bar-price">' + price + '</span>' +
          '</button>';
      } else {
        mBar.innerHTML = '<div class="detail-qty-bar">' +
          '<button class="detail-qty-btn" data-detail-dec="1">−</button>' +
          '<span class="detail-qty-num">' + qty + '</span>' +
          '<button class="detail-qty-btn" data-detail-inc="1">+</button>' +
          '<div class="add-bar-divider"></div>' +
          '<span class="detail-qty-total">' + formatPrice(selectedItem.price * qty) + '</span>' +
          '</div>';
      }
    }

    // Desktop add section
    var dAdd = document.querySelector('.detail-desktop-add');
    if (dAdd) {
      if (qty === 0) {
        dAdd.innerHTML = '<button class="btn-add-to-cart">' +
          '<span>ADD TO CART</span>' +
          '<div class="add-bar-divider"></div>' +
          '<span class="add-bar-price">' + price + '</span>' +
          '</button>' +
          '<span class="prices-note">PRICES EXCLUDE LOCAL TAXES</span>';
      } else {
        dAdd.innerHTML = '<div class="detail-qty-bar">' +
          '<button class="detail-qty-btn" data-detail-dec="1">−</button>' +
          '<span class="detail-qty-num">' + qty + '</span>' +
          '<button class="detail-qty-btn" data-detail-inc="1">+</button>' +
          '<div class="add-bar-divider"></div>' +
          '<span class="detail-qty-total">' + formatPrice(selectedItem.price * qty) + '</span>' +
          '</div>' +
          '<button class="btn-outline" data-nav="cart">VIEW CART</button>' +
          '<span class="prices-note">PRICES EXCLUDE LOCAL TAXES</span>';
      }
    }
  }

  function updateCartBadges() {
    var count = getCartCount();
    var badges = $$('.cart-badge');
    badges.forEach(function (b) {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
    var fab = $('cart-fab');
    var fabBadge = $('cart-fab-badge');
    if (fab) {
      if (count > 0) { fab.classList.add('visible'); }
      else { fab.classList.remove('visible'); }
    }
    if (fabBadge) fabBadge.textContent = count;
  }
    /* EVENT DELEGATION */
    document.addEventListener('click', function (e) {
      var t = e.target;
  
      /* add AI Chef customized item — registers a virtual item then adds it */
      var bundleBtn = t.closest('[data-bundle]');
      if (bundleBtn) {
        var customId = 'aichef-seasonal-harmony';
        // Register virtual item if not already present
        if (!MENU_ITEMS.find(function (m) { return m.id === customId; })) {
          MENU_ITEMS.push({
            id: customId,
            name: 'The Seasonal Harmony',
            price: 185,
            sub: 'AI Chef · Customized Set',
            category: 'AI Chef',
            tags: ['CURATED'],
            desc: 'A composed set built around balance and seasonality — 12-piece Edomae nigiri, sashimi, and a refined handroll finish.',
            img: 'assets/images/result-bg.png',
            color: '#e8e0d4'
          });
        }
        addToCart(customId);
        navigateTo('cart');
        return;
      }
  
      /* navigation */
      var navBtn = t.closest('[data-nav]');
      if (navBtn) {
        e.preventDefault();
        navigateTo(navBtn.dataset.nav);
        return;
      }
  
      /* add to cart (menu page add button) */
      var addBtn = t.closest('[data-add]');
      if (addBtn) {
        e.stopPropagation();
        addToCart(addBtn.dataset.add);
        return;
      }
  
      /* increment */
      var incBtn = t.closest('[data-inc]');
      if (incBtn) {
        e.stopPropagation();
        incCart(incBtn.dataset.inc);
        return;
      }
  
      /* decrement */
      var decBtn = t.closest('[data-dec]');
      if (decBtn) {
        e.stopPropagation();
        decCart(decBtn.dataset.dec);
        return;
      }
  
      /* remove */
      var removeBtn = t.closest('[data-remove]');
      if (removeBtn) {
        removeFromCart(removeBtn.dataset.remove);
        return;
      }
  
      /* open product detail on card click */
      var menuCard = t.closest('.menu-item-card, .menu-card-desktop');
      if (menuCard && menuCard.dataset.item) {
        renderDetail(menuCard.dataset.item);
        navigateTo('product-page');
        return;
      }
  
      /* add to cart from detail page */
      var addDetailBtn = t.closest('.btn-add-to-cart');
      if (addDetailBtn && selectedItem) {
        addToCart(selectedItem.id);
        updateDetailPageControls();
        return;
      }
  
      /* qty controls on detail page */
      var detailInc = t.closest('[data-detail-inc]');
      if (detailInc && selectedItem) {
        incCart(selectedItem.id);
        updateDetailPageControls();
        return;
      }
      var detailDec = t.closest('[data-detail-dec]');
      if (detailDec && selectedItem) {
        decCart(selectedItem.id);
        updateDetailPageControls();
        return;
      }
  
      /* category filter (mobile) */
      var catBtn = t.closest('.cat-btn');
      if (catBtn) {
        catBtn.blur();
        var cat = catBtn.dataset.cat;
        var anchor = $('cat-anchor-mobile-' + encodeURIComponent(cat));
        if (anchor) {
          var stickyH = (document.querySelector('.product-mobile-sticky') || {offsetHeight: 0}).offsetHeight;
          var top = anchor.getBoundingClientRect().top + window.scrollY - stickyH - 8;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        return;
      }
  
      /* category tab (desktop) */
      var catTab = t.closest('.cat-tab');
      if (catTab) {
        catTab.blur();
        var cat2 = catTab.dataset.cat;
        var anchor2 = $('cat-anchor-desktop-' + encodeURIComponent(cat2));
        if (anchor2) {
          var navWrap = document.querySelector('.product-desktop-nav-wrap');
          var navH = navWrap ? navWrap.getBoundingClientRect().bottom : 160;
          var top2 = anchor2.getBoundingClientRect().top + window.scrollY - navH - 8;
          window.scrollTo({ top: top2, behavior: 'smooth' });
        }
        return;
      }
  
      /* payment method toggle */
      var payBtn = t.closest('[data-payment]');
      if (payBtn) {
        var scope = payBtn.closest('.checkout-section, .checkout-desktop-left');
        if (scope) {
          scope.querySelectorAll('[data-payment]').forEach(function (b) { b.classList.remove('active'); });
        } else {
          $$('[data-payment]').forEach(function (b) { b.classList.remove('active'); });
        }
        payBtn.classList.add('active');
        return;
      }
  
      /* time slot toggle */
      var timeBtn = t.closest('[data-time]');
      if (timeBtn) {
        var wrap = timeBtn.closest('.time-slot-options');
        if (wrap) wrap.querySelectorAll('.time-slot').forEach(function (b) { b.classList.remove('active'); });
        timeBtn.classList.add('active');
        selectedTime = timeBtn.dataset.time;
        return;
      }
  
      /* ai chef option single-select */
      var aichefOpt = t.closest('.aichef-opt');
      if (aichefOpt) {
        var qGroup = aichefOpt.dataset.q;
        $$('[data-q="' + qGroup + '"]').forEach(function (b) { b.classList.remove('active'); });
        aichefOpt.classList.add('active');
        return;
      }
  
      var aichefPill = t.closest('.aichef-opt-pill');
      if (aichefPill) {
        var qGroup2 = aichefPill.dataset.q;
        $$('[data-q="' + qGroup2 + '"]').forEach(function (b) { b.classList.remove('active'); });
        aichefPill.classList.add('active');
        return;
      }
  
      var styleCard = t.closest('.aichef-style-card');
      if (styleCard) {
        var qGroup3 = styleCard.dataset.q;
        $$('[data-q="' + qGroup3 + '"]').forEach(function (b) { b.classList.remove('active'); });
        styleCard.classList.add('active');
        return;
      }
    });
  
    /* SEARCH */
    var searchInput = $('search-input-mobile');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = this.value.toLowerCase().trim();
        if (!q) { renderMenu(); return; }
        var filtered = MENU_ITEMS.filter(function (item) {
          return item.name.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q);
        });
        var container = $('menu-list-mobile');
        if (!container) return;
        if (filtered.length === 0) {
          container.innerHTML = '<p style="padding:32px;font-family:Manrope,sans-serif;color:var(--text-mid)">No results found.</p>';
          return;
        }
        var html = '';
        filtered.forEach(function (item) {
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
        container.innerHTML = html;
      });
    }
  
    /* DESKTOP SEARCH */
    var desktopSearchInput = $('search-input-desktop');
    if (desktopSearchInput) {
      desktopSearchInput.addEventListener('input', function () {
        var q = this.value.toLowerCase().trim();
        if (!q) { renderMenuDesktop(); return; }
        var filtered = MENU_ITEMS.filter(function (item) {
          return item.name.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q);
        });
        var container = $('menu-grid-desktop');
        if (!container) return;
        if (filtered.length === 0) {
          container.innerHTML = '<p style="padding:40px 0;font-family:Manrope,sans-serif;color:var(--text-mid)">No results found.</p>';
          return;
        }
        var html = '<div class="menu-section-grid">';
        filtered.forEach(function (item) {
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
        container.innerHTML = html;
      });
    }
  
    /* HASH ROUTING */
    window.addEventListener('hashchange', handleHash);
  
    /* INIT */
    renderMenu();
    handleHash();
})();
