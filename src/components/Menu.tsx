import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Flame, Coffee, Pizza, Sandwich, Salad, UtensilsCrossed, Utensils } from 'lucide-react';

const categories = [
  { id: 'best', name: 'Best Sellers', icon: <Flame className="w-4 h-4" /> },
  { id: 'burgers', name: 'Burgers', icon: <Utensils className="w-4 h-4" /> },
  { id: 'pizza', name: 'Pizza', icon: <Pizza className="w-4 h-4" /> },
  { id: 'sandwich', name: 'Sandwich', icon: <Sandwich className="w-4 h-4" /> },
  { id: 'chinese', name: 'Chinese', icon: <UtensilsCrossed className="w-4 h-4" /> },
  { id: 'fries', name: 'Fries & Snacks', icon: <Salad className="w-4 h-4" /> },
  { id: 'beverages', name: 'Beverages', icon: <Coffee className="w-4 h-4" /> },
];

const menuData = [
  { id: 1, category: 'best', name: 'KitKat Shake', price: 140, hook: 'Most Ordered', popular: true, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600' },
  { id: 2, category: 'best', name: 'Peri Peri Fries', price: 140, hook: 'Customer Fav', popular: true, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600' },
  { id: 3, category: 'best', name: 'Paneer Chilli', price: 220, hook: 'Top Pick', popular: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600' },
  { id: 4, category: 'best', name: 'Red Sauce Pasta', price: 210, hook: 'Must Try', popular: true, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600' },
  { id: 5, category: 'best', name: 'Veg Cheese Grill Sandwich', price: 170, hook: 'Best Value', popular: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600' },
  { id: 6, category: 'best', name: 'Sizzling Brownie', price: 210, hook: 'Legendary', popular: true, image: 'https://images.unsplash.com/photo-1624353339193-4404291ad7a2?auto=format&fit=crop&q=80&w=600' },
  { id: 7, category: 'burgers', name: 'Classic Veg Burger', price: 120, hook: 'Tasty & Filling', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600' },
  { id: 8, category: 'burgers', name: 'Supreme Cheese Burger', price: 180, hook: 'Extra Cheesy', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600' },
  { id: 9, category: 'pizza', name: 'Margherita Pizza (8")', price: 150, hook: 'Classic', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600' },
  { id: 10, category: 'pizza', name: 'Hidden Special (11")', price: 360, hook: 'Signature', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
  { id: 11, category: 'chinese', name: 'Veg Manchurian', price: 180, hook: 'Indo-Chinese', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600' },
  { id: 12, category: 'chinese', name: 'Hakka Noodles', price: 210, hook: 'Street Style', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600' },
  { id: 13, category: 'beverages', name: 'Cold Coffee Classic', price: 90, hook: 'The OG Refresh', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600' },
  { id: 14, category: 'beverages', name: 'Hazelnut Cold Coffee', price: 160, hook: 'Barista Quality', image: 'https://images.unsplash.com/photo-1461023236322-0a12cf6992d9?auto=format&fit=crop&q=80&w=600' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const EASE = "easeOut" as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('best');
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredItems = menuData.filter((item) =>
    activeCategory === 'best' ? item.category === 'best' : item.category === activeCategory
  );

  const handleTabChange = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section id="menu" className="section-padding bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="text-orange-500 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase"
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Selection
          </motion.span>
          <h2 className="mt-4 leading-none text-white font-display font-black">
            Actual <span className="text-orange-500 italic">Taste</span>
          </h2>
          <p className="text-accent-light/50 mt-6 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Premium quality items at budget prices. Everything under ₹400.
          </p>
        </motion.div>

        {/* Category Tabs — horizontal scroll, animated active indicator */}
        <div
          ref={tabsRef}
          className="flex overflow-x-auto no-scrollbar pb-4 mb-4 md:mb-12 md:justify-center gap-3 px-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`relative flex items-center space-x-2 px-6 py-4 rounded-full text-[10px] md:text-sm font-black tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'glass text-accent-light/60 border-white/5 hover:text-white'
              }`}
            >
              {/* Animated active pill */}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-orange-600 shadow-lg shadow-orange-600/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                <span className="opacity-80">{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          layout
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(234,88,12,0.15)',
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                className="group relative glass rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex md:flex-col items-center md:items-stretch cursor-pointer"
              >
                {/* Image */}
                <div className="w-24 h-24 md:w-full md:h-60 shrink-0 overflow-hidden relative m-3 md:m-0 rounded-2xl md:rounded-none">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    loading="lazy"
                  />
                  {/* Popular badge */}
                  {item.popular && (
                    <motion.div
                      className="absolute top-3 left-3 hidden md:flex bg-orange-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest items-center space-x-1 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    >
                      <Star size={8} className="fill-white" />
                      <span>{item.hook}</span>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2">
                    <h3 className="text-lg md:text-xl font-display font-black text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight mb-1 md:mb-0">
                      {item.name}
                    </h3>
                    {/* Price with pulse glow */}
                    <motion.div
                      className="text-xl md:text-2xl font-black text-orange-500"
                      animate={{ textShadow: ['0 0 0px rgba(234,88,12,0)', '0 0 12px rgba(234,88,12,0.6)', '0 0 0px rgba(234,88,12,0)'] }}
                      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    >
                      ₹{item.price}
                    </motion.div>
                  </div>

                  <p className="hidden md:block text-accent-light/40 text-xs font-light mb-5 italic leading-relaxed">
                    {item.popular ? 'A Jalgaon crowd-favorite! Highly recommended.' : 'Premium ingredients, local expertise.'}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-1 text-orange-500/60">
                      <Star size={10} className="fill-orange-500/60" />
                      <span className="text-[10px] font-black uppercase tracking-widest">4.8</span>
                    </div>
                    <motion.button
                      className="flex items-center space-x-2 bg-orange-600/10 hover:bg-orange-600 px-3 py-2 rounded-full text-orange-500 hover:text-white transition-colors duration-300 text-[10px] font-black uppercase tracking-wider"
                      whileTap={{ scale: 0.92 }}
                    >
                      <ShoppingCart size={12} />
                      <span className="hidden md:inline">Order</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-accent-light/20 mb-6 uppercase tracking-[0.3em] text-[10px] font-black">
            Explore all 50+ items in café
          </p>
          <motion.a
            href="tel:8605875107"
            className="btn-secondary w-full md:w-auto inline-flex items-center justify-center py-5 px-10"
            whileHover={{ scale: 1.04, borderColor: 'rgba(234,88,12,0.8)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Full Digital Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
