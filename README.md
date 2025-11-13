#  Freelance MarketPlace

### 🌐 Live Site:
 [https://your-live-site-url.netlify.app](https://your-live-site-url.netlify.app)  
### 💻 Server (API) Live URL:
 [https://your-server.vercel.app](https://your-server.vercel.app)  

---

## 🧩 Project Overview (প্রকল্প সারসংক্ষেপ)
**Freelance MarketPlace** হলো একটি পূর্ণাঙ্গ ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন যেখানে ব্যবহারকারীরা জব বা টাস্ক **Add, Read, Update, Delete (CRUD)** করতে পারে।  
অন্য ব্যবহারকারীরা তাদের পোস্ট করা জব “Accept” করতে পারবে এবং সেই জব `My Accepted Tasks` পেজে প্রদর্শিত হবে।  
এটি তৈরি করা হয়েছে **React (Vite)**, **Node.js + Express.js**, **MongoDB Atlas**, এবং **Firebase Authentication** ব্যবহার করে।

---

##  Key Features 

1.  **User Authentication (Firebase)** — Email/Password ও Google Login সাপোর্ট।  
2.  **CRUD Operations** — Add, Read, Update, Delete Jobs.  
3.  **Accept Job System** — অন্য ইউজারের জব অ্যাকসেপ্ট করে “My Accepted Tasks” পেজে দেখা যাবে।  
4.  **Responsive UI** — Mobile, Tablet, Desktop – সব স্ক্রিনে সম্পূর্ণ রেস্পন্সিভ।  
5.  **Dark/Light Theme Toggle** — লাইট ও ডার্ক মোডে স্যুইচ করা যাবে।  
6.  **Protected Routes** — `/addJob`, `/myAddedJobs`, `/updateJob/:id`, `/my-accepted-tasks` শুধুমাত্র লগইন করা ইউজারের জন্য।  
7.  **Toast Notifications (react-toastify)** — সফল বা ব্যর্থ অ্যাকশনে সুন্দর টোস্ট মেসেজ।  
8.  **MongoDB + Express API Integration** — ডেটা সরাসরি ডাটাবেস থেকে ফেচ ও আপডেট হয়।  
9.  **Netlify + Vercel Hosting** — SPA রাউটিং সহ কোনো reload error ছাড়া smooth deployment।

---

##  Data Structure (MongoDB Collection Example)

```json
{
  "_id": "6915d53227bd65ebcb4556c9",
  "title": "Web Design",
  "postedBy": "John Doe",
  "category": "Web Development",
  "summary": "This is a very popular freelance job",
  "coverImage": "https://i.ibb.co/example.jpg",
  "userEmail": "john@example.com",
  "postedAt": "2025-11-13T12:53:59.472Z",
  "accepted": false
}
