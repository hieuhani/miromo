import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
