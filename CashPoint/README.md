# CashPoint — Telegram Mini App (Local Prototype)

**সংক্ষেপ:**  
CashPoint হলো একটি ছোট Telegram Mini App / Web app প্রোটোটাইপ, যেখানে ব্যবহারকারী টাস্ক করে কয়েন আয় করে, অ্যাড দেখে রিওয়ার্ড পায় এবং পরে withdraw অনুরোধ পাঠাতে পারে। অ্যাড দেখানো Monetage (libtl) বা অন্য ad SDK ব্যবহার করে করা যায়। অ্যাডমিন প্যানেল থেকে ইউজার পরিচালনা ও withdraw অনুমোদন করা হয়।

---

## ফাইল স্ট্রাকচার (মূল)

---

## দ্রুত শুরু (Local)
1. প্রোজেক্ট ফোল্ডার খুলুন (VS Code)।  
2. যদি `fetch()`–ব্যালিডেশন বা component load সমস্যা দেখায় (file://), একটি simple HTTP server চালান:
   - Python: `python -m http.server 8000`  
   - অথবা VS Code Live Server ব্যবহার করুন।  
3. ব্রাউজারে খুলুন: `http://localhost:8000/pages/dashboard.html`

---

## কী কাজ করে (Local / Prototype)
- টাস্ক ও ইমুলেটেড রিওয়ার্ড: `database/tasks.json` থেকে লোড।  
- Monetage ad: `ads/monetage-loader.js` সার্ভ করে Ad slot রেন্ডার করা যায়।  
- Withdraw requests: LocalStorage তে `withdraws` হিসেবে জমা হয়; admin panel থেকে ম্যানেজ করবেন।  
- Simple auth: `scripts/auth.js` টেলিগ্রাম WebApp init/লগিক থেকে local user data রাখে।  

---

## ভবিষ্যত আপডেট আইডিয়া
- Backend: Node.js + Express + MongoDB বা Firebase Realtime DB/Firestore ইন্টিগ্রেট করা।  
- OAuth / Firebase Authentication পুরো করে নেওয়া।  
- Monetage event callback পেয়ে ব্যবহারকারীকে কয়েন যোগ করা (ভেরিফাইড)।  
- Admin panel → Realtime withdraw approval, transaction logs।  
- UI polish: আরও টুইক, রেসপনসিভ টেস্ট, RTL/Bengali টাইপোক্রাফি।

---

## ডেভেলপার নোট
- Components auto-load `fetch()` ব্যবহার করে — local file protocol এ কাজ নাও করতে পারে। সার্ভারে রাখলে নিখুঁত চলে।  
- `config/firebase-config.json`-এ তোমার Firebase কী রেখে `scripts/firebase-init.js` বানালে রিয়েল ডাটাবেস ব্যবহার করা সহজ হবে।  

---

**Developer:** Takidul Islam  
**Contact:** @takidulislam490  
