import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './Tailwind.css'
// import App from './Hook.jsx'
// import App from './form.jsx'
// import App from './classroom.jsx'
// import App from './Hook3(form).jsx'
import App from './Map.jsx'
// import App from '././Router.jsx'
// import App from './Propse.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

<BrowserRouter>    
<App />
  </BrowserRouter>,
)
