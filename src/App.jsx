import { LayoutGroup } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import SmoothScroll from './components/ui/SmoothScroll';
import GradientMesh from './components/ui/GradientMesh';
import Home from './pages/Home';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <GradientMesh />
        <LayoutGroup>
          <Home />
        </LayoutGroup>
      </SmoothScroll>
    </LanguageProvider>
  );
}
