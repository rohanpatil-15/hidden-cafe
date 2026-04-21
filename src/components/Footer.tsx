import { motion } from 'framer-motion';
import { Instagram, Globe, Phone, MessageCircle } from 'lucide-react';

const LOGO_URL = "https://yeybeegdfejcniqhwbbd.supabase.co/storage/v1/object/sign/CAFE%20HIDDEN/hidden-cafe-and-resto-navi-peth-jalgaon-fast-food-6lb9fgr-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMWU1Nzc2Ny1lYmM0LTQ0MzgtYTE5Ny1hZTcyMTIxNGEzZGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDQUZFIEhJRERFTi9oaWRkZW4tY2FmZS1hbmQtcmVzdG8tbmF2aS1wZXRoLWphbGdhb24tZmFzdC1mb29kLTZsYjlmZ3ItcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzYzMjgyODUsImV4cCI6MTg2MjY0MTg4NX0.2o8uMIiCCuKaLKkY6qTQELTAewGdlpjz6QPCp1VqOgo";

const links = ['Digital Menu', 'Why Hidden?', 'Social Proof', 'Visit Us'];
const anchors = ['#menu', '#about', '#reviews', '#location'];

const socialLinks = [
  { href: '#', icon: Instagram },
  { href: '#', icon: Globe },
  { href: 'https://wa.me/918605875107', icon: MessageCircle, target: '_blank' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-36 md:pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }}
      />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16 text-center md:text-left"
        >
          {/* Brand col */}
          <motion.div variants={colVariants} className="flex flex-col items-center md:items-start">
            <motion.a
              href="#"
              className="flex items-center space-x-3 mb-6 group"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={LOGO_URL}
                alt="Hidden Café Logo"
                className="h-10 w-auto object-contain brightness-110 transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-white font-display font-black text-sm leading-none tracking-wider uppercase">Hidden</span>
                <span className="text-orange-500 font-display font-black text-[10px] leading-none tracking-[0.3em] uppercase">Café</span>
              </div>
            </motion.a>
            <p className="text-accent-light/40 font-light leading-relaxed max-w-xs text-sm">
              Because Taste Matters.<br />
              Premium café experience in Jalgaon.<br />
              Luxury meets affordability.
            </p>
          </motion.div>

          {/* Quick Links col */}
          <motion.div variants={colVariants} className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-black text-white mb-7 tracking-[0.3em] uppercase">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              {links.map((label, i) => (
                <motion.a
                  key={label}
                  href={anchors[i]}
                  className="text-accent-light/50 font-bold tracking-widest uppercase text-[10px] hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group w-fit mx-auto md:mx-0"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <motion.span
                    className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"
                  />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social col */}
          <motion.div variants={colVariants} className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-black text-white mb-7 tracking-[0.3em] uppercase">Connect</h4>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map(({ href, icon: Icon, target }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={target}
                  className="w-11 h-11 glass rounded-full flex items-center justify-center text-accent-light/60 hover:text-white border border-white/5"
                  whileHover={{ scale: 1.12, backgroundColor: 'rgba(234,88,12,1)', borderColor: 'rgba(234,88,12,0)' }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Direct call link */}
            <motion.a
              href="tel:8605875107"
              className="text-sm font-black text-white/60 hover:text-orange-500 transition-colors flex items-center gap-2 mb-8"
              whileHover={{ x: 3 }}
            >
              <Phone size={14} className="text-orange-500" />
              +91 86058-75107
            </motion.a>

            <p className="text-accent-light/25 text-[9px] font-bold tracking-[0.15em] uppercase">
              © {new Date().getFullYear()} Hidden Café.<br />Premium Jalgaon Experience.
            </p>
            <p className="text-accent-light/15 text-[8px] font-bold tracking-[0.1em] uppercase mt-3">
              Designed and developed by{' '}
              <motion.span
                className="text-orange-500/40"
                whileHover={{ color: 'rgba(234,88,12,0.8)' }}
              >
                skimmers
              </motion.span>{' '}❤️
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom divider line */}
        <motion.div
          className="h-px w-full bg-white/5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Desktop floating action buttons — only show on md+ */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col space-y-3 z-50">
        <motion.a
          href="https://wa.me/918605875107"
          target="_blank"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
          whileHover={{ scale: 1.12, boxShadow: '0 16px_40px_rgba(34,197,94,0.5)' }}
          whileTap={{ scale: 0.92 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }, scale: { type: 'spring', stiffness: 400 } }}
        >
          <MessageCircle size={26} />
        </motion.a>
        <motion.a
          href="tel:8605875107"
          className="w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(234,88,12,0.35)]"
          whileHover={{ scale: 1.12, boxShadow: '0 16px 40px rgba(234,88,12,0.5)' }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Phone size={26} />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
