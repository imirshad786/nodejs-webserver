const http = require("http");

const server = http.createServer((req, res) => {
 
  res.writeHead(200, { "Content-Type": 'text/html' });

  res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laundry Wallah / Laundry Mart Hero</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html{
        scroll-behavior: smooth;
      }

      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 5%;
        flex-wrap: wrap;
        gap: 20px;
      }

      .logo {
        color: #434343;
        letter-spacing: 0.025rem;
        font-size: 24px;
      }

    
      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        z-index: 1000;
      }


      .hamburger span {
        width: 25px;
        height: 3px;
        background-color: #434343;
        transition: all 0.3s ease;
      }

      .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }

      .hamburger.active span:nth-child(2) {
        opacity: 0;
      }

      .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }

      nav ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      nav ul li {
        position: relative;
        list-style: none;
        padding-bottom: 5px;
      }
      nav ul li a{
        text-decoration: none;
        color: #434343;
        font-size: 16px;
        font-weight: 500;
      }

      .nav-items::before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 2px;
        border-radius: 2px;
        background-color: #1985de;
        transition: width 0.3s ease;
        transform: translateX(-100%);
      }

      .nav-items::after {
        content: "";
        display: block;
        position: absolute;
        left: 49%;
        bottom: 0;
        width: 0;
        height: 2px;
        border-radius: 2px;
        background-color: #1985de;
        transition: width 0.3s ease;
        transform: translateX(0);
      }

      .nav-items:hover::before,
      .nav-items:hover::after {
        width: 50%;
      }

      .user-btn {
        border: none;
        outline: none;
        padding: 12px 20px;
        background-color: #19c4de25;
        color: #1985de;
        font-weight: 600;
        letter-spacing: 0.02rem;
        border-radius: 10px;
        cursor: pointer;
        white-space: nowrap;
      }

      .hero-section {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #f8f6f6;
        min-height: calc(100vh - 80px);
        padding: 5%;
        gap: 40px;
        flex-wrap: wrap;
      }

      .left-side {
        flex: 1;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .left-side h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        color: #434343;
        line-height: 1.2;
      }

      .left-side h1 span {
        color: #1985de;
      }

      .left-side p {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        color: #666666;
        line-height: 1.6;
      }

      .cta-btn {
        width: fit-content;
        padding: 15px 25px;
        border: none;
        outline: none;
        background-color: #1985de;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(25, 133, 222, 0.3);
      }

      .right-side {
        flex: 1;
        min-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .laundy-image {
        width: 100%;
        max-width: 500px;
        height: auto;
      }

      #our-archivements {
        display: flex;
        align-items: center;
        background-color: #1985de;
        color: white;
        padding: 40px 5%;
      }

      #our-archivements h2 {
        text-align: center;
        font-size: clamp(1.5rem, 4vw, 2rem);
        margin-bottom: 30px;
      }

      .archivements-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .archive-items {
        text-align: center;
      }

      .archive-items h3 {
        font-size: clamp(2rem, 4vw, 2.5rem);
        margin-bottom: 10px;
      }

      .archive-items p {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
      }

      #about {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 30px;
        padding: 50px 5%;
        max-width: 1200px;
        margin: 0 auto;
      }

      
.footer {
  background: #2d3748;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

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
  color: #1985de;
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
  color: #1985de;
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
  border-color: #1985de;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
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
  color: #1985de;
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

      @media (max-width: 768px) {
        .hamburger {
          display: flex;
        }

        nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          height: 100vh;
          background: white;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          z-index: 999;
          padding: 80px 20px 20px;
        }

        nav.active {
          right: 0;
        }

        nav ul {
          flex-direction: column;
          gap: 2rem;
          align-items: flex-start;
        }

        nav ul li {
          font-size: 18px;
        }

        .user-btn {
          margin-top: 20px;
        }

        .hero-section {
          flex-direction: column;
          text-align: center;
          padding: 10% 5%;
        }

        .left-side {
          align-items: center;
        }

        .cta-btn {
          align-self: center;
        }

        #book-services {
          grid-template-columns: 1fr;
          padding: 2rem 3%;
        }

        table {
          font-size: 12px;
        }

        th,
        td {
          padding: 8px 4px;
        }

        .service-item {
          flex-direction: column;
          align-items: flex-start;
        }

        .service-btn {
          align-self: flex-end;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        header {
          padding: 15px 3%;
        }

        .hero-section {
          padding: 5% 3%;
        }

        #book-services {
          padding: 2rem 3%;
        }
      }

      @media (max-width: 480px) {
        .logo {
          font-size: 20px;
        }

        .user-btn {
          display: none;
        }

        .left-side h1 {
          font-size: 1.8rem;
        }

        #our-archivements {
          flex-direction: column;
        }

        .archivements-list {
          grid-template-columns: 1fr;
        }

        #about {
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

  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

  </head>

  <body>
    <header>
      <h2 class="logo">LaundryMart</h2>

      <div class="hamburger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav id="navMenu">
        <ul class="nav-list">
          <li class="nav-items"><a href="/">Home</a></li>
          <li class="nav-items"><a href="about">About Us</a></li>
          <li class="nav-items"><a href="contact">Contact Us</a></li>
        </ul>
      </nav>
      <button type="button" class="user-btn">Username</button>
    </header>`);
  
  if (req.url == "/" && req.method == "GET") {
    res.write(`
<section class="hero-section" id="home">
      <div class="left-side">
        <h1>
          Fresh Clothes Zero Hassle Every Time <span>Laundry Services</span>
        </h1>
        <p>
          Experience premium laundry care with Laundry Wallah / Laundry Mart —
          your one-stop solution for washing, dry cleaning, and ironing. Enjoy
          doorstep pickup and delivery, eco-friendly cleaning, and fast
          turnaround — all at affordable prices. Save time, stay fresh, and let
          us handle the laundry while you focus on what matters most.
        </p>
        <button type="button" onclick="window.location.href = '#book-services'" class="cta-btn">Book a Service Today</button>
      </div>
      <div class="right-side">
        <img
          src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-cartoon-style-blue-washing-machine-3d-render-on-transparent-background-png-image_21138860.png"
          alt="laundy-image"
          class="laundy-image"
        />
      </div>
    </section>

    <section id="our-archivements">
      <h2>Our Achievements</h2>
      <div class="archivements-list">
        <div class="archive-items">
          <h3>15+</h3>
          <p>laundry services</p>
        </div>
        <div class="archive-items">
          <h3>250+</h3>
          <p>happy customers</p>
        </div>
        <div class="archive-items">
          <h3>2+</h3>
          <p>years of experience</p>
        </div>
      </div>
    </section>
  `);
  } else if (req.url == "/about" && req.method == "GET") {
    res.write(`
  <section id="about">
      <div class="service-box">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/wired/64/washing-machine.png"
          alt="washing-machine"
        />
        <h3>Premium Services</h3>
        <p>Professional washing services for all types of fabrics.</p>
      </div>
      <div class="service-box">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/?size=100&id=47806&format=png&color=000000"
          alt="dry-cleaning--v1"
        />
        <h3>Quick Support</h3>
        <p>Expert customer support to keep your clothes looking their best.</p>
      </div>
      <div class="service-box">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/?size=100&id=44361&format=png&color=000000"
          alt="ironing"
        />
        <h3>Hassle Free Delivery</h3>
        <p>Professional delivery for a crisp and polished appearance.</p>
      </div>
      <div class="service-box">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/?size=100&id=siKebiDAvcub&format=png&color=000000"
          alt="affordable"
        />
        <h3>Affordable Price</h3>
        <p>Affordable price for cleaning and drying clothes in our company.</p>
      </div>
    </section> `);
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
              <span class="contact-icon"></span>
              <div>
                <h3>Address</h3>
                <p>123 Clean Street, Mumbai, IN 400001</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon"></span>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon"></span>
              <div>
                <h3>Email</h3>
                <p>info@laundrymart.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <span class="contact-icon"></span>
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
              <a href="#" title="Facebook"></a>
              <a href="#" title="Instagram"></a>
              <a href="#" title="Twitter"></a>
              <a href="#" title="LinkedIn"></a>
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
            
            <button type="submit" class="cta-btn btn-full">Send Message</button>
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
    <div class="error-icon"></div>
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
