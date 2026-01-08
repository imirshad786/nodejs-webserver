const http = require("http");

const server = http.createServer((req, res) => {
 
  res.writeHead(200, { "Content-Type": 'text/html' });

  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - Laundry Mart</title>
  <style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f7fa;
}

/* Navbar */
.navbar {
  background: #667eea;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-links a:hover,
.nav-links a.active {
  background: rgba(255,255,255,0.2);
}

/* Hero Section */
.hero-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: calc(100vh - 200px);
}

.hero-title {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.washing-machine {
  font-size: 15rem;
}


/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.btn-full {
  width: 100%;
}

/* Features */
.features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s;
}


.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* Content Section */
.content-section {
  min-height: calc(100vh - 200px);
  padding: 3rem 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
  text-align: center;
}

.page-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

/* About Content */
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.about-text {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.about-text h2 {
  color: #667eea;
  margin: 1.5rem 0 1rem 0;
}

.about-text h2:first-child {
  margin-top: 0;
}

.features-list {
  list-style: none;
  margin-top: 1rem;
}

.features-list li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
}

.stats-grid {
  display: grid;
  gap: 1.5rem;
}

.stat-card {
  background: #667eea;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stat-card h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.contact-info h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.contact-details {
  margin: 2rem 0;
}

.contact-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 2rem;
}

.contact-item h3 {
  color: #667eea;
  margin-bottom: 0.3rem;
}

.social-links {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  font-size: 2rem;
  text-decoration: none;
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: scale(1.2);
}

/* Contact Form */
.contact-form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.service-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #764ba2;
  margin: 1rem 0;
}

.service-features {
  list-style: none;
  margin-top: 1rem;
  text-align: left;
}

.service-features li {
  padding: 0.3rem 0;
  color: #666;
}

.cta-section {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 2rem;
  background: #667eea;
  border-radius: 12px;
  color: white;
}

.cta-section h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

/* Error Section */
.error-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-code {
  font-size: 8rem;
  color: #667eea;
  font-weight: 700;
  margin-bottom: 1rem;
}

.error-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.error-icon {
  font-size: 6rem;
  margin-top: 2rem;
}

.error-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Footer */
.footer {
  background: #2d3748;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .washing-machine {
    font-size: 8rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about-content,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .error-code {
    font-size: 5rem;
  }

  .error-title {
    font-size: 1.8rem;
  }

  .error-buttons {
    flex-direction: column;
    width: 100%;
  }
}
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="logo">🧺 LaundryMart</h1>
      <ul class="nav-links">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>`);
  
  if (req.url == "/" && req.method == "GET") {
    res.write(`

  <main class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Fresh Clothes, Zero Hassle</h1>
      <p class="hero-subtitle">
        Welcome to LaundryMart - Your trusted partner for premium laundry services.
        We provide doorstep pickup and delivery with eco-friendly cleaning solutions.
      </p>
      <div class="hero-buttons">
        <a href="/services" class="btn btn-primary">Our Services</a>
        <a href="/contact" class="btn btn-secondary">Contact Us</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="washing-machine">🧺</div>
    </div>
  </main>

  <section class="features">
    <div class="feature-card">
      <div class="feature-icon">🚚</div>
      <h3>Free Pickup & Delivery</h3>
      <p>Convenient doorstep service at your time</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Fast Turnaround</h3>
      <p>Get your clothes back within 24 hours</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🌿</div>
      <h3>Eco-Friendly</h3>
      <p>Safe cleaning products for you and planet</p>
    </div>
  </section> `);
  } else if (req.url == "/about" && req.method == "GET") {
    res.write(`
  <main class="content-section">
    <div class="content-container">
      <h1 class="page-title">About LaundryMart</h1>
      
      <div class="about-content">
        <div class="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, LaundryMart has been serving the community with 
            premium laundry services. We understand the value of your time and 
            the importance of clean, fresh clothes in your daily life.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            To provide hassle-free, eco-friendly laundry services that save our 
            customers' time while delivering exceptional quality. We're committed 
            to making laundry day the easiest part of your week.
          </p>

          <h2>Why Choose Us?</h2>
          <ul class="features-list">
            <li>✅ 2+ years of experience in laundry services</li>
            <li>✅ 250+ satisfied customers</li>
            <li>✅ Eco-friendly cleaning products</li>
            <li>✅ Professional trained staff</li>
            <li>✅ State-of-the-art equipment</li>
            <li>✅ Affordable pricing with no hidden charges</li>
          </ul>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <h3>250+</h3>
            <p>Happy Customers</p>
          </div>
          <div class="stat-card">
            <h3>15+</h3>
            <p>Services Offered</p>
          </div>
          <div class="stat-card">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat-card">
            <h3>24hr</h3>
            <p>Quick Turnaround</p>
          </div>
        </div>
      </div>
    </div>
  </main> `);
  } else if (req.url == "/contact" && req.method == "GET") {
    res.write(`
  <main class="content-section">
    <div class="content-container">
      <h1 class="page-title">Contact Us</h1>
      
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>123 Clean Street, Mumbai, IN 400001</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>info@laundrymart.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon">🕐</span>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 8AM - 8PM</p>
                <p>Sunday: 10AM - 6PM</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </main> `);

  } else {
   res.write(`
  <main class="error-section">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">
        Oops! The page you're looking for doesn't exist. 
        It might have been moved or deleted.
      </p>
      <div class="error-buttons">
        <a href="/" class="btn btn-primary">Go Home</a>
        <a href="/contact" class="btn btn-secondary">Contact Support</a>
      </div>
    </div>
    <div class="error-icon">🧺❓</div>
  </main> `);
  }
  res.write(`<footer class="footer">
    <p>&copy; 2025 LaundryMart. All rights reserved. | Built with Node.js</p>
  </footer>
</body>
</html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running....");
});
