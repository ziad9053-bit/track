// config.js

// إعدادات الشكل (تتغير حسب الكافيه)
const SETTINGS = {
  brandName: "RITZY ROAST COFFEE CO.",
  logoUrl: "logo.png", // ضع مسار الشعار هنا
  primaryColor: "#d4af37", // Gold
  backgroundColor: "#050505",
  languageDefault: "ar", // "ar" أو "en"
};

// الأصناف (تتغير حسب طلب الزبون)
const PRODUCTS = [
  {
    id: 1,
    name_ar: "لاتيه ساخن",
    name_en: "Hot Latte",
    price: 18,
    category: "hot",
    image: "latte-hot.jpg",
    active: true,
  },
  {
    id: 2,
    name_ar: "آيس لاتيه",
    name_en: "Iced Latte",
    price: 20,
    category: "cold",
    image: "latte-iced.jpg",
    active: true,
  },
  {
    id: 3,
    name_ar: "تشيز كيك",
    name_en: "Cheesecake",
    price: 22,
    category: "dessert",
    image: "cheesecake.jpg",
    active: true,
  },
];

