import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'

var redirect = sessionStorage.getItem('gh-pages-redirect');
if (redirect) {
    sessionStorage.removeItem('gh-pages-redirect');
    window.history.replaceState(null, '', '/Master-Fullstack-React-Projects' + redirect);
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
