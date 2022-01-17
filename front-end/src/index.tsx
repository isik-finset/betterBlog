// mock api
import './api/index';

// scroll bar
import 'simplebar/src/simplebar.css';

// router
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// app
import App from './App';

// providers
import AuthProvider from './providers'

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);
