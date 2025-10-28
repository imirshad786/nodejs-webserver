# 🧺 LaundryMart - Node.js Web Server

A professional web server built with Node.js HTTP module, featuring a complete laundry service website with multiple routes, custom error handling, and modern responsive design.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 👨‍💻 Author

**Arshad**
- GitHub: [@arshad](https://github.com/imirshad786)
- Assignment: Node.js Custom Web Server

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [Usage](#usage)
- [Routes](#routes)
- [Screenshots](#screenshots)
- [Assignment Requirements](#assignment-requirements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

This is a custom web server built from scratch using Node.js's built-in `http` module (no frameworks like Express). The server handles multiple routes, serves HTML pages with CSS styling, implements proper error handling, and features a complete laundry service website.

**Assignment Objective:** Create a simple web server with Node.js that handles different routes and serves corresponding HTML pages with proper HTTP status codes and error handling.

---

## ✨ Features

- ✅ **Pure Node.js** - Built with native HTTP module (no Express)
- ✅ **Multiple Routes** - Home, About, Contact, Services pages
- ✅ **Custom 404 Page** - Beautiful error page for invalid routes
- ✅ **HTTP Status Codes** - Proper implementation (200, 404, 500)
- ✅ **Asynchronous Code** - Uses async/await with fs.promises
- ✅ **Modular Structure** - Clean, maintainable code
- ✅ **CSS Styling** - Modern responsive design
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Console Logging** - Request logging with timestamps
- ✅ **Graceful Shutdown** - Proper server cleanup on exit
- ✅ **MIME Type Support** - Handles HTML, CSS, and other file types
- ✅ **Responsive Design** - Mobile-friendly layout

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (v14.0.0 or higher)
- **Core Modules:**
  - `http` - Web server creation
  - `fs/promises` - Asynchronous file operations
  - `path` - File path handling
- **Frontend:**
  - HTML5
  - CSS3 (with Flexbox & Grid)
  - Vanilla JavaScript

---

## 📁 Project Structure

```
nodejs-web-server/
│
├── server.js              # Main server file
│
├── pages/                 # HTML pages directory
│   ├── home.html         # Home page
│   ├── about.html        # About page
│   ├── contact.html      # Contact page
│   └── 404.html          # 404 Error page
│
├── public/               # Static assets directory
│   └── styles.css        # Main stylesheet
│
├── package.json          # Project metadata
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have Node.js installed on your system.

```bash
# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/arshad/nodejs-webserver.git
cd nodejs-webserver
```

2. **Create folder structure** (if not exists)

```bash
mkdir pages public
```

3. **Initialize npm** (optional)

```bash
npm init -y
```

### Running the Server

1. **Start the server**

```bash
node server.js
```

2. **Expected Output**

```
==================================================
🚀 Node.js Web Server is Running!
==================================================
📍 Server: http://localhost:3000
🏠 Home: http://localhost:3000
ℹ️  About: http://localhost:3000/about
📞 Contact: http://localhost:3000/contact
==================================================
Press Ctrl+C to stop the server
```
---

## 💻 Usage

### Accessing Routes

Once the server is running, you can access different pages:

| Route | Description | URL |
|-------|-------------|-----|
| Home | Main landing page | `http://localhost:3000/` or `` |
| About | About us page with company info | `http://localhost:3000/about` |
| Contact | Contact form and details | `http://localhost:3000/contact` |
| 404 | Error page (any invalid route) | `http://localhost:3000/invalid` |

### Server Logs

The server logs all incoming requests:

```
[2025-01-15T10:30:45.123Z] GET  - 200
[2025-01-15T10:30:50.456Z] GET /about - 200
[2025-01-15T10:31:00.789Z] GET /invalid-route - 404
```

### Stopping the Server

Press `Ctrl+C` in the terminal to gracefully shutdown the server.

---

## 🛣️ Routes

### Available Routes

#### 1. **Home Page** (`/` or ``)
- Landing page with hero section
- Service features
- Call-to-action buttons
- **Status Code:** 200

#### 2. **About Page** (`/about`)
- Company story and mission
- Statistics and achievements
- Team information
- **Status Code:** 200

#### 3. **Contact Page** (`/contact`)
- Contact form
- Address and contact details
- Working hours
- Social media links
- **Status Code:** 200

#### 5. **404 Error Page** (Any invalid route)
- Custom error message
- Navigation options
- **Status Code:** 404

#### 6. **CSS Route** (`/styles.css`)
- Serves main stylesheet
- **Status Code:** 200

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

### About Page
![About Page](https://via.placeholder.com/800x400?text=About+Page+Screenshot)

### Contact Page
![Contact Page](https://via.placeholder.com/800x400?text=Contact+Page+Screenshot)

### 404 Error Page
![404 Page](https://via.placeholder.com/800x400?text=404+Error+Page+Screenshot)

---

## ✅ Assignment Requirements

This project fulfills all the assignment requirements:

### Basic Requirements
- [x] Create Node.js project with main file (server.js)
- [x] Use HTTP module to create server
- [x] Implement routing for different HTML pages
- [x] Create at least three HTML pages
- [x] Server listens on port 3000
- [x] Routes for , /about, /contact
- [x] Appropriate HTTP status codes (200, 404, 500)
- [x] Asynchronous and modular code
- [x] Error handling with custom 404 page

### Enhanced Requirements
- [x] CSS styling on all pages
- [x] Additional routes (Services page)
- [x] Meaningful content (Complete laundry website)
- [x] Responsive design
- [x] Professional UI/UX
- [x] Console logging
- [x] Graceful shutdown handling

---

## 🎨 Design Features

- **Modern Gradient Theme** - Purple/Blue gradient design
- **Responsive Layout** - Mobile, tablet, and desktop friendly
- **Grid & Flexbox** - Modern CSS layout techniques
- **Smooth Animations** - Hover effects and transitions
- **Professional Typography** - Clean, readable fonts
- **Card-Based Design** - Organized content sections
- **Accessible Navigation** - Easy-to-use menu

---

## 🔧 Configuration

### Changing Port

Edit `server.js`:

```javascript
const PORT = 3000; // Change to your desired port
```

### Adding New Routes

1. Create HTML file in `pages/` directory
2. Add route case in `server.js`:

```javascript
case '/your-route':
  filePath = path.join(__dirname, 'pages', 'your-page.html');
  break;
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** Change PORT in server.js or kill the process using port 3000

**2. Cannot Find Module**
```bash
Error: Cannot find module './pages.html'
```
**Solution:** Ensure folder structure is correct and files exist

**3. CSS Not Loading**
```bash
Stylesheet not applied
```
**Solution:** Check if `/styles.css` route is properly configured

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is created for educational purposes as part of a Node.js assignment.

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

**Arshad**

- GitHub: [@arshad](https://github.com/imirshad786)
- Email: irshadofficial5@gmail.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/md-irshad-ansari)

**Project Link:** [https://github.com/arshad/nodejs-web-server](https://github.com/imirshad786/nodejs-webserver)

---

## 🙏 Acknowledgments

- Assignment by: [Course/Institution Name]
- Inspired by: Modern web design principles
- Built with: Pure Node.js (No frameworks)
- Icons: Unicode Emoji
- Design: Custom CSS with Gradient themes

---

## 📚 Learning Resources

If you want to learn more about Node.js web servers:

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [HTTP Module Guide](https://nodejs.org/api/http.html)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 🎯 Future Enhancements

Potential features to add:

- [ ] Add database integration (MongoDB/MySQL)
- [ ] Implement session management
- [ ] Add user authentication
- [ ] Create booking system
- [ ] Add email notification service
- [ ] Implement payment gateway
- [ ] Add admin dashboard
- [ ] Real-time chat support

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

Made with ❤️ by **Arshad**

</div>