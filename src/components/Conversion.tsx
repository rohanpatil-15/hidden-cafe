import { motion } from 'framer-motion';
import { Wallet, Coffee, Clock, Heart, CheckCircle2 } from 'lucide-react';

const reasons = [
  { icon: Wallet, title: '₹200–400 = Budget-Friendly', desc: 'Premium quality at prices that won\'t bite your pocket.' },
  { icon: Coffee, title: 'Premium Ambience', desc: 'Luxury interiors designed for your aesthetic Instagram shots.' },
  { icon: Clock, title: 'Lightning Fast Service', desc: 'Fresh gourmet food served within minutes, every time.' },
  { icon: Heart, title: '50+ Menu Options', desc: 'From Italian to Chinese, we have every craving covered.' },
];

const stats = [
  { value: '100%', label: 'Hygienic Kitchen' },
  { value: '50+', label: 'Artisan Dishes' },
  { value: '10+', label: 'Daily Offers' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: "easeOut" } },
};

const Conversion = () => {
  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

          {/* Left — Image Block */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl shadow-orange-600/10 group cursor-pointer"
            >
              <motion.img
                src="/unnamed (6).webp"
                alt="Hidden Cafe Interior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-2xl font-display font-black">The Vibe.</div>
                <div className="text-xs font-light text-accent-light/60 tracking-widest uppercase mt-1">Designed for enthusiasts.</div>
              </div>
            </motion.div>

            {/* Floating rating badge */}
            <motion.div
              initial={{ x: -40, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="absolute -top-6 -left-4 md:-top-8 md:-left-8 z-20 glass p-5 md:p-7 rounded-2xl border border-orange-500/20 shadow-xl"
            >
              <motion.div
                className="text-4xl md:text-5xl font-display font-black text-orange-500 mb-0.5 leading-none"
                animate={{ textShadow: ['0 0 0px rgba(234,88,12,0)', '0 0 20px rgba(234,88,12,0.5)', '0 0 0px rgba(234,88,12,0)'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                4.3<span className="text-base">⭐</span>
              </motion.div>
              <div className="text-[9px] uppercase tracking-widest text-accent-light/50 font-black whitespace-nowrap">
                Local Favorite in Jalgaon
              </div>
            </motion.div>
          </div>

          {/* Right — Content */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={itemVariants} className="text-orange-500 tracking-[0.5em] text-[10px] font-black uppercase">
              Why choose us?
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-4 mb-10 leading-none text-white font-display font-black"
            >
              Why People <span className="text-orange-500 italic">Love</span> Hidden Café
            </motion.h2>

            <div className="space-y-7">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-5 group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-14 h-14 glass rounded-2xl flex items-center justify-center shrink-0 border border-white/5 transition-all duration-300 group-hover:bg-orange-600 group-hover:border-orange-500"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1 flex items-center gap-2">
                        {r.title}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="text-orange-500"
                        >
                          <CheckCircle2 size={14} />
                        </motion.div>
                      </h4>
                      <p className="text-accent-light/50 font-light leading-relaxed text-sm">{r.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-8 pt-10 border-t border-white/5"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
                >
                  <span className="text-3xl font-display font-black text-white">{s.value}</span>
                  <span className="text-[9px] uppercase font-black text-accent-light/30 tracking-[0.2em] mt-1">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
