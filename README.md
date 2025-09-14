# 🏕️ YelpCamp
[Live Demo](https://yelpcamp-wvky.onrender.com/)

YelpCamp is a full-stack web application inspired by Yelp, where users can create, view, review, and manage campgrounds.  
It was built while following **Colt Steele’s Web Developer Bootcamp**, with additional features and improvements.

---

## ✨ Features

- 🔑 **Authentication & Authorization**
  - User registration & login
  - Secure password hashing with Passport & bcrypt
  - Authorization checks (only authors can edit/delete their campgrounds & reviews)

- 🏕️ **Campground Management**
  - Add, edit, and delete campgrounds
  - Upload multiple images with **Multer** + **Cloudinary**
  - Store location data with **MapTiler Maps SDK**

- ⭐ **Reviews System**
  - Leave reviews on campgrounds
  - Edit or delete your reviews

- 🗺️ **Maps Integration**
  - Interactive maps powered by **MapTiler**
  - Show campground locations with markers

- ⚡ **Other Features**
  - Flash messages for success/error handling
  - Responsive design with Bootstrap 5
  - Session management with `express-session`

---

## 🛠️ Tech Stack

**Frontend**
- EJS templating
- Bootstrap 5

**Backend**
- Node.js
- Express.js
- Passport.js (authentication)

**Database**
- MongoDB Atlas with Mongoose

**Cloud Services**
- Cloudinary (image hosting)
- MapTiler (maps & geocoding)

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/yelpcamp.git
   cd yelpcamp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add:
   ```env
   SESSION_SECRET=your-random-secret
   DB_URL=your-mongodb-connection-string
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_KEY=your-cloudinary-key
   CLOUDINARY_SECRET=your-cloudinary-secret
   MAPTILER_API_KEY=your-maptiler-key
   ```

4. **Run the app**
   ```bash
   node app.js
   ```
   or (if you have nodemon):
   ```bash
   nodemon app.js
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🚀 Deployment

The app can be deployed to platforms like:
- [Render](https://render.com/)
- [Heroku](https://heroku.com/) (legacy)
- [Railway](https://railway.app/)

Make sure to set the environment variables in your hosting platform.

---

## 🙌 Acknowledgements

- **Colt Steele** for the Web Developer Bootcamp course  
- **MapTiler** for maps  
- **Cloudinary** for image hosting  

---

## 📄 License

This project is for learning purposes. Feel free to fork and experiment!
