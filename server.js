const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;
const HOST = 'localhost';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

const handleRoute = async (req, res) => {
  try {
    let filePath = '';
    let statusCode = 200;

    const url = req.url;

    switch (url) {
      case '/':
        filePath = path.join(__dirname, 'pages', 'home.html');
        break;
      
      case '/about':
        filePath = path.join(__dirname, 'pages', 'about.html');
        break;
      
      case '/contact':
        filePath = path.join(__dirname, 'pages', 'contact.html');
        break;
      
      case '/styles.css':
        filePath = path.join(__dirname, 'public', 'styles.css');
        break;
      
      default:
        filePath = path.join(__dirname, 'pages', '404.html');
        statusCode = 404;
    }

    const content = await fs.readFile(filePath, 'utf-8');
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'text/plain';

    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(content);

    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${statusCode}`);

  } catch (error) {
   
    console.error(`Error: ${error.message}`);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>500 - Internal Server Error</h1><p>Something went wrong on our end.</p>');
  }
};

const server = http.createServer(handleRoute);

server.listen(PORT, HOST, () => {
  console.log('='.repeat(50));
  console.log('Node.js Web Server is Running!');
  console.log('='.repeat(50));
  console.log(`Server: http://${HOST}:${PORT}`);
  console.log('='.repeat(50));
  console.log('Press Ctrl+C to stop the server\n');
});

process.on('SIGINT', () => {
  console.log('\n\n Shutting down server gracefully...');
  server.close(() => {
    console.log('Server closed successfully');
    process.exit(0);
  });
});


