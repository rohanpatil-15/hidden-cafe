import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

const LOGO_URL = "https://yeybeegdfejcniqhwbbd.supabase.co/storage/v1/object/sign/CAFE%20HIDDEN/hidden-cafe-and-resto-navi-peth-jalgaon-fast-food-6lb9fgr-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMWU1Nzc2Ny1lYmM0LTQ0MzgtYTE5Ny1hZTcyMTIxNGEzZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDQUZFIEhJRERFTi9oaWRkZW4tY2FmZS1hbmQtcmVzdG8tbmF2aS1wZXRoLWphbGdhb24tZmFzdC1mb29kLTZsYjlmZ3ItcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzYzMjgyODUsImV4cCI6MTg2MjY0MTg4NX0.2o8uMIiCCuKaLKkY6qTQELTAewGdlpjz6QPCp1VqOgo";

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'Ambience' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Visit' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <img
              src={LOGO_URL}
              alt="Hidden Café Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-display font-black text-sm md:text-base leading-none tracking-wider uppercase">
                Hidden
              </span>
              <span className="text-orange-500 font-display font-black text-[10px] leading-none tracking-[0.3em] uppercase">
                Café
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[10px] font-black tracking-[0.3em] text-accent-light/60 uppercase hover:text-white transition-colors relative group"
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-orange-500 w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/918605875107"
              className="btn-primary flex items-center space-x-2 text-xs py-3 px-6"
              whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(234,88,12,0.4)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <Phone size={13} />
              <span>Order Now</span>
            </motion.a>
          </motion.div>

          {/* Mobile Header */}
          <div className="flex md:hidden items-center space-x-3">
            <motion.a
              href="https://wa.me/918605875107"
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest"
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 14px rgba(234,88,12,0.35)' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Order
            </motion.a>
            <motion.button
              className="text-white w-9 h-9 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.85 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <MenuIcon size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 bg-black/96 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col items-center space-y-6 px-8 text-center"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-orange-500 tracking-[0.4em] text-[9px] font-black uppercase mb-4"
              >
                Navigation
              </motion.span>
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display font-black text-white hover:text-orange-500 transition-colors"
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="w-full pt-10 border-t border-white/5 mt-4"
              >
                <motion.a
                  href="tel:8605875107"
                  className="btn-primary w-full py-5 text-base flex items-center justify-center space-x-3"
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(234,88,12,0.4)' }}
                >
                  <Phone size={20} />
                  <span>Call to Order</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
