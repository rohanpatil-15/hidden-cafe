import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Ambience from './components/Ambience';
import Conversion from './components/Conversion';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <motion.main
      className="bg-background min-h-screen text-accent-light overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <Hero />
      <div className="relative z-10 pb-24 md:pb-0">
        <Reviews />
        <Menu />
        <Ambience />
        <Conversion />
        <Location />
        <Footer />
        <FloatingCTA />
      </div>
    </motion.main>
  );
}

export default App;
