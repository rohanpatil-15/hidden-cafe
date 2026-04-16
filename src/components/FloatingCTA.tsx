import { motion } from 'framer-motion';
import { Phone, Navigation, ShoppingBag } from 'lucide-react';

const actions = [
  { href: 'tel:8605875107', icon: Phone, label: 'Call', isNew: false },
  { href: 'https://www.google.com/maps/place/Hidden+Caf%C3%A9/@20.9922534,75.5607811,17z', icon: Navigation, label: 'Visit', isNew: true },
  { href: 'https://wa.me/918605875107', icon: ShoppingBag, label: 'Order', isNew: true },
];

const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 pb-5 pt-2">
        {/* Ambient glow behind bar */}
        <div
          className="absolute inset-x-4 bottom-5 h-16 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)', filter: 'blur(12px)' }}
        />
        <div className="relative bg-black/90 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex items-stretch">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <div key={action.label} className="flex-1 flex">
                {i > 0 && <div className="w-px bg-white/8 self-stretch my-3" />}
                <motion.a
                  href={action.href}
                  target={action.isNew ? '_blank' : undefined}
                  className="flex-1 flex flex-col items-center justify-center py-4 space-y-1 text-white"
                  whileTap={{ scale: 0.88 }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  <motion.div
                    animate={i === 0 ? {
                      // Subtle pulse on the Call icon to draw attention
                      scale: [1, 1.15, 1],
                    } : {}}
                    transition={{ repeat: Infinity, duration: 2.5, delay: 2, ease: 'easeInOut' }}
                  >
                    <Icon size={22} className={i === 0 ? 'text-orange-500' : 'text-orange-400'} />
                  </motion.div>
                  <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/60">
                    {action.label}
                  </span>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCTA;
