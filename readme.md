# **Node.js MVC Web Application**

This project is built based on the book **"Node.js Web Development For Beginners" by Nathan Sebhastian**. It follows the MVC (Model-View-Controller) architecture and uses **Node.js, Express, and MongoDB** to develop a simple web application.

## **Features**

- 🌐 Web server using **Express.js**
- 🖥️ Templating engine with **EJS**
- 🎨 Styling with **Tailwind CSS & DaisyUI**
- 🛢️ Database integration using **MongoDB & Mongoose**
- 🔐 User authentication with **Express Session & Bcrypt**
- 📝 CRUD functionalities for managing customers and invoices
- 📊 Dashboard with **Chart.js**
- 🔍 Search feature for customers & invoices
- 🚀 Deployment on **Railway**

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- [Node.js (LTS)](https://nodejs.org/)
- [MongoDB (Atlas or Local)](https://www.mongodb.com/atlas)

### **Installation**

1. Clone this repository:

   ```sh
   git clone https://github.com/danangamw/finly.git
   cd nodejs-mvc-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up your environment variables in a `.env` file:

   ```ini
   MONGODB_URI=your_mongodb_connection_string
   AUTH_SECRET=your_secret_key
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## **Project Structure**

```
📂 nodejs-mvc-app
 ├── 📂 controllers   # Handles business logic
 ├── 📂 models        # Database schemas (Mongoose)
 ├── 📂 routes        # API routes
 ├── 📂 views         # EJS templates
 ├── 📂 public        # Static files (CSS, JS, images)
 ├── 📂 libs          # Utility functions & DB connection
 ├── .env.example     # Example environment variables
 ├── package.json     # Project dependencies
 ├── server.js        # Entry point
```

## **Usage**

- **User Authentication**
  - Sign up & log in with session-based authentication
- **CRUD Operations**
  - Manage customers & invoices
- **Dashboard**
  - View revenue & latest invoices
- **Search Feature**
  - Search customers & invoices

## **Deployment**

1. Push code to **GitHub**:
   ```sh
   git push origin main
   ```
2. Deploy to **Railway**:
   - Create a new Railway project
   - Connect your GitHub repository
   - Set environment variables
   - Deploy 🚀

## **License**

This project is open-source under the MIT License.
