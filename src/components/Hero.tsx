import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Phone, Star, MapPin } from 'lucide-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax: background moves at 40% of scroll speed
  const bgY = useTransform(scrollY, [0, 600], ['0%', '25%']);
  const bgScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <motion.img
          src="/unnamed (7).webp"
          alt="Hidden Cafe Premium Ambience"
          className="w-full h-full object-cover brightness-[0.35]"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/20 to-black pointer-events-none" />

      {/* Orange ambient glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-48 z-[1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          background: 'radial-gradient(ellipse, rgba(234,88,12,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Live Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3 mb-6 md:mb-8"
          >
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center space-x-3 border border-orange-500/20"
              whileHover={{ scale: 1.04, borderColor: 'rgba(234,88,12,0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative w-2 h-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping absolute inset-0 opacity-75" />
                <div className="w-2 h-2 bg-orange-500 rounded-full relative" />
              </div>
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black text-white/90">
                Popular Now: Rush at Jalgaon 🔥
              </span>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              className="inline-flex items-center space-x-3 glass px-4 py-2 rounded-full border border-white/10"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex -space-x-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08, type: 'spring' }}
                  >
                    <Star size={11} className="fill-orange-500 text-orange-500" />
                  </motion.div>
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">
                4.3 Rated | 418 Reviews
              </span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4 leading-none tracking-tighter font-display font-black text-white"
          >
            Because{' '}
            <motion.span
              className="text-orange-500 italic inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            >
              Taste
            </motion.span>{' '}
            Matters
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-3xl text-accent-light/80 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Premium café experience in{' '}
            <span className="text-white font-bold">Jalgaon</span> under{' '}
            <span className="text-orange-500 font-bold">₹400</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <motion.a
              href="#menu"
              className="btn-primary w-full md:w-auto flex items-center justify-center space-x-3 group py-5 md:py-4"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(234,88,12,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <span className="text-base uppercase tracking-widest font-black">View Actual Menu</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <ChevronRight size={18} />
              </motion.div>
            </motion.a>

            <motion.a
              href="tel:8605875107"
              className="btn-secondary w-full md:w-auto flex items-center justify-center space-x-3 group py-5 md:py-4 text-white"
              whileHover={{ scale: 1.04, borderColor: 'rgba(234,88,12,0.8)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <motion.div whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }}>
                <Phone size={18} />
              </motion.div>
              <span className="text-base uppercase tracking-widest font-black">Call Now</span>
            </motion.a>
          </motion.div>

          {/* Location pill */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 text-accent-light/40 hidden md:flex items-center justify-center space-x-4 text-sm font-light uppercase tracking-widest"
          >
            <MapPin size={14} />
            <span>Adarsh Nagar Rd, Jalgaon</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Open till 10:00 PM</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
