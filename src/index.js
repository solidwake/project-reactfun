import React from 'react'; // 1st step
import ReactDOM from 'react-dom/client'; // 2nd step
import './index.css'; // 3rd step
import Page from './Static'; // 4th step
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

// Simple staic page sample made using React and JSX
/* 
import React from 'react'
import ReactDOM from 'react-dom'

const page = (
  <div>
    <img src="./logo192.png" width="40px" />
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.render(page, document.getElementById('root'))
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
