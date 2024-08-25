const fs = require('fs');
const path = require('path');

// Define the folder structure
const folders = [
  'src/components/Auth',
  'src/components/Navigation',
  'src/pages',
];

const files = [
  { path: 'src/components/Auth/Login.js', content: '' },
  { path: 'src/components/Auth/Register.js', content: '' },
  { path: 'src/components/Navigation/Navbar.js', content: '' },
  { path: 'src/pages/Home.js', content: '' },
  { path: 'src/pages/Dashboard.js', content: '' },
  { path: 'src/App.js', content: `import React from 'react';\nimport { BrowserRouter as Router, Route, Switch } from 'react-router-dom';\nimport Register from './components/Auth/Register';\nimport Login from './components/Auth/Login';\n\nconst App = () => {\n  return (\n    <Router>\n      <div>\n        <Switch>\n          <Route path="/register" component={Register} />\n          <Route path="/login" component={Login} />\n          <Route path="/" exact component={() => <h1>Home Page</h1>} />\n        </Switch>\n      </div>\n    </Router>\n  );\n};\n\nexport default App;\n` },
  { path: 'src/index.js', content: `import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport 'bootstrap/dist/css/bootstrap.min.css';\n\nReactDOM.render(<App />, document.getElementById('root'));\n` },
];

// Create folders
folders.forEach(folder => {
  const dir = path.join(__dirname, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created folder: ${folder}`);
  }
});

// Create files
files.forEach(file => {
  const filePath = path.join(__dirname, file.path);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.content);
    console.log(`Created file: ${file.path}`);
  }
});

console.log('Folder structure setup complete!');
