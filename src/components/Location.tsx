import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const infoItems = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <p className="text-accent-light/60 font-light leading-relaxed">
        Adarsh Nagar Rd,<br />Jalgaon, Maharashtra 425001
      </p>
    ),
  },
  {
    icon: Clock,
    title: 'Open Hours',
    content: (
      <p className="text-accent-light/60 font-light leading-relaxed">
        Mon – Sun: 10:00 AM – 10:00 PM<br />
        <motion.span
          className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase block mt-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          Available Now 🔥
        </motion.span>
      </p>
    ),
  },
  {
    icon: Phone,
    title: 'Direct Call',
    content: (
      <a href="tel:8605875107" className="text-2xl md:text-3xl font-display font-black text-white hover:text-orange-500 transition-colors duration-300">
        +91 86058-75107
      </a>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
};

const Location = () => {
  return (
    <section id="location" className="section-padding bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(234,88,12,0.06) 0%, transparent 70%)' }}
      />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-14 md:gap-20">
          {/* Left side */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span
              variants={itemVariants}
              className="text-orange-500 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase"
            >
              Find Us
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-4 mb-10 leading-none text-white font-display font-black"
            >
              Visit <span className="text-orange-500 italic">Hidden</span> Café
            </motion.h2>

            <div className="space-y-10 mb-10">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex items-start space-x-5"
                  >
                    <motion.div
                      className="w-13 h-13 glass rounded-2xl flex items-center justify-center shrink-0 p-3.5"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(234,88,12,0.1)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="text-orange-500 w-6 h-6" />
                    </motion.div>
                    <div>
                      <h4 className="text-sm font-black text-white mb-2 tracking-widest uppercase">{item.title}</h4>
                      {item.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
              <motion.a
                href="https://www.google.com/maps/place/Hidden+Caf%C3%A9/@20.9922534,75.5607811,17z"
                target="_blank"
                className="btn-primary flex items-center justify-center space-x-3 w-full py-5"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(234,88,12,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div whileHover={{ rotate: [0, 15, 0] }} transition={{ duration: 0.3 }}>
                  <Navigation size={20} />
                </motion.div>
                <span className="font-black tracking-[0.15em] uppercase text-sm">Get Directions</span>
              </motion.a>
              <motion.a
                href="tel:8605875107"
                className="btn-secondary flex items-center justify-center space-x-3 w-full py-5 text-white"
                whileHover={{ scale: 1.04, borderColor: 'rgba(234,88,12,0.8)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={20} />
                <span className="font-black tracking-[0.15em] uppercase text-sm">Talk to Us</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="w-full lg:w-1/2 rounded-3xl overflow-hidden glass h-[320px] md:h-[480px]"
            initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.16782500000!2d75.5607811!3d20.9922534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f437e465a69%3A0xd37aea36a1249caf!2sHidden%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1713256000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
