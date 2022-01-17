// routes
import Router from './routes';

// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import Navbar from './components/Navbar';

// ----------------------------------------------------------------------


export default function App() {

  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <ScrollToTop />
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}
