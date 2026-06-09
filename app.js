(function () {
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
})();
