import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LeftSidebar, RightSidebar } from '@/components/Sidebar';
import AnimatedBackground from '@/components/AnimatedBackground';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <div className="text-slate font-sans bg-navy decoration-grid min-h-screen">
      <AnimatedBackground />
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
