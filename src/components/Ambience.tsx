import { motion } from 'framer-motion';

const images = [
  { url: '/unnamed (5).webp', title: 'Luxury Vibe', desc: 'Premium interior for elite gatherings.' },
  { url: '/unnamed (6).webp', title: 'Celebrate Life', desc: 'The perfect hub for your special moments.' },
  { url: '/unnamed (7).webp', title: 'Artisan Seating', desc: 'Comfort meets high-end aesthetics.' },
  { url: '/unnamed (8).webp', title: 'Gourmet Corner', desc: 'Where the magic happens.' },
  { url: '/unnamed (10).webp', title: 'Hidden Escape', desc: 'A serene space in the heart of Jalgaon.' },
  { url: '/unnamed (9).webp', title: 'Minimalist Elite', desc: 'Clean lines for a focused experience.' },
];

const Ambience = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-black overflow-hidden">
      <motion.div
        className="container-custom mb-12 md:mb-16"
        initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 tracking-[0.5em] text-[10px] font-black uppercase">The Space</span>
            <h2 className="mt-4 leading-none text-white font-display font-black">
              Experience the <span className="text-orange-500 italic">Vibe</span>
            </h2>
            <p className="text-accent-light/50 mt-4 font-light leading-relaxed text-sm md:text-base">
              Step into a world where premium ambience meets pocket-friendly pricing.
              Our space is designed for comfort, celebration, and the love of food.
            </p>
          </div>
          <motion.div
            className="hidden md:flex items-center space-x-3 text-accent-light/30 text-xs font-black uppercase tracking-[0.2em]"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span>Drag to explore</span>
            <div className="w-10 h-px bg-white/10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        <motion.div 
          className="flex space-x-6 px-6 md:px-[10vw] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1500, right: 0 }}
        >
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative min-w-[300px] md:min-w-[500px] h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{img.title}</h3>
                <p className="text-accent-light/70 text-sm font-light">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-orange-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 -right-12 w-32 h-32 bg-accent/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

export default Ambience;
