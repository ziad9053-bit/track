<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>RITZY ROAST COFFEE CO.</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="config.js"></script>
    <script defer src="app.js"></script>
  </head>
  <body>
    <div class="page">
      <!-- الهيدر -->
      <header class="header">
        <div class="brand">
          <img src="logo.png" alt="Logo" class="logo" />
          <div class="brand-text">
            <h1 id="brandName">RITZY ROAST COFFEE CO.</h1>
            <span id="brandTagline">Premium Coffee Experience</span>
          </div>
        </div>
        <div class="header-actions">
          <button id="langToggle" class="btn-ghost">EN</button>
          <a href="staff.html" class="btn-ghost small">صفحة العامل</a>
        </div>
      </header>

      <!-- خلفية فخمة -->
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h2 id="heroTitle">قائمة القهوة الفاخرة</h2>
          <p id="heroSubtitle">اختر مشروبك، امسح الكيو آر، واستلم طلبك بكل سلاسة.</p>
        </div>
      </section>

      <!-- أقسام المنيو -->
      <main class="menu">
        <nav class="menu-tabs">
          <button class="tab active" data-category="hot" id="tabHot">
            المشروبات الساخنة
          </button>
          <button class="tab" data-category="cold" id="tabCold">
            المشروبات الباردة
          </button>
          <button class="tab" data-category="dessert" id="tabDessert">
            الحلويات
          </button>
        </nav>

        <section id="menuList" class="menu-grid">
          <!-- يتم تعبئتها من app.js -->
        </section>
      </main>

      <!-- شريط سفلي -->
      <footer class="footer">
        <div class="footer-left">
          <span id="footerText">
            RITZY ROAST COFFEE CO. — Crafted with passion.
          </span>
        </div>
        <div class="footer-right">
          <a href="#" class="footer-link">Terms</a>
          <span class="dot"></span>
          <a href="#" class="footer-link">Privacy</a>
        </div>
      </footer>
    </div>
  </body>
</html>

