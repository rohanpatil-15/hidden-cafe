import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Happy Customer',
    review: 'Amazing food quality 😋 Pleasant environment. Awesome service. Will definitely come back!',
    rating: 5,
    tag: 'Regular Visitor',
  },
  {
    name: 'Local Foodie',
    review: 'Budget friendly with exceptional service. The best café experience in all of Jalgaon hands down.',
    rating: 5,
    tag: 'Verified Review',
  },
  {
    name: 'Café Lover',
    review: 'Best café in Jalgaon with great ambience. The KitKat Shake is an absolute must-try!',
    rating: 4.5,
    tag: 'Food Blogger',
  },
  {
    name: 'Rohit S.',
    review: 'Paneer Chilli and Sizzling Brownie were outstanding. Great vibe for friends and dates!',
    rating: 5,
    tag: 'Google Review',
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.94,
    filter: 'blur(6px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.94,
    filter: 'blur(6px)',
  }),
};

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-100px' });

  // Auto-scroll
  useEffect(() => {
    if (paused || !inView) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [paused, inView]);

  const navigate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-surface/20 relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(234,88,12,0.04) 0%, transparent 70%)'
      }} />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-orange-500 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase">
            Social Proof
          </span>
          <h2 className="mt-4 text-white font-display font-black leading-none">
            Loved by <span className="text-orange-500 italic">Jalgaon</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="glass p-8 md:p-12 rounded-3xl relative"
              >
                <Quote className="absolute top-6 right-6 text-orange-500/10 w-10 h-10 md:w-14 md:h-14" />

                {/* Stars */}
                <div className="flex mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <motion.div
                      key={s}
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: s * 0.06, type: 'spring', stiffness: 400 }}
                    >
                      <Star
                        size={16}
                        className={`fill-orange-500 text-orange-500 ${s > reviews[index].rating ? 'opacity-25' : ''}`}
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-accent-light leading-relaxed mb-8 italic font-light">
                  "{reviews[index].review}"
                </p>

                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-11 h-11 rounded-full bg-orange-600/20 flex items-center justify-center font-black text-orange-500"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(234,88,12,0.3)' }}
                  >
                    {reviews[index].name[0]}
                  </motion.div>
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase text-white">
                      {reviews[index].name}
                    </h4>
                    <p className="text-[9px] text-orange-500/60 tracking-widest uppercase mt-0.5">
                      {reviews[index].tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <motion.button
              onClick={() => navigate(-1)}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className="rounded-full bg-white/20"
                  animate={{
                    width: i === index ? 24 : 8,
                    backgroundColor: i === index ? 'rgba(234,88,12,1)' : 'rgba(255,255,255,0.2)',
                  }}
                  style={{ height: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => navigate(1)}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center space-x-8 glass px-8 py-5 rounded-full">
            <div className="flex flex-col items-center border-r border-white/10 pr-8">
              <motion.span
                className="text-3xl font-display font-black text-orange-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
                viewport={{ once: true }}
              >
                4.3
              </motion.span>
              <span className="text-[9px] uppercase tracking-widest text-accent-light/50 mt-1">
                Overall Rating
              </span>
            </div>
            <div className="flex flex-col items-center">
              <motion.span
                className="text-3xl font-display font-black text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
                viewport={{ once: true }}
              >
                418+
              </motion.span>
              <span className="text-[9px] uppercase tracking-widest text-accent-light/50 mt-1">
                Google Reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
