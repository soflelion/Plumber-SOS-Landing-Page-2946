import { motion } from 'framer-motion';
import { FaWrench, FaClock, FaCheck, FaPhoneAlt, FaShieldAlt, FaStar, FaWater } from 'react-icons/fa';

export default function Hero() {
  const features = [
    {
      icon: FaWrench,
      title: "Expertise Technique",
      text: "Plus de 15 ans d'expérience en plomberie. Interventions précises et efficaces pour tous vos problèmes urgents.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: FaClock,
      title: "Disponible 24h/24 et 7j/7",
      text: "Équipe mobilisable jour et nuit sur Lyon et sa métropole. Intervention en 30 minutes garantie.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: FaCheck,
      title: "Garantie Satisfaction",
      text: "Interventions garanties et devis transparent. Plus de 2000 clients satisfaits dans la région lyonnaise.",
      gradient: "from-green-500 to-teal-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Animated water drops
  const waterDrops = Array(15).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5
  }));

  return (
    <div className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.15)'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-black/70 z-1"></div>
      
      {/* Animated Water Drops */}
      {waterDrops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute z-2 rounded-full bg-blue-500/30 backdrop-blur-sm"
          style={{
            width: drop.size,
            height: drop.size * 1.5,
            left: drop.left,
            top: -100,
          }}
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 0.7, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8"
          >
            <FaWater className="text-blue-400 mr-2" />
            <span className="text-white font-medium">Service d'urgence plomberie</span>
          </motion.div>
          
          {/* Main Title with Gradient */}
          <h1 className="text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Urgence Plomberie Lyon
            </span>
            <motion.div 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h1>
          
          {/* Subtitle with Highlight */}
          <p className="text-3xl text-white/90 mb-10">
            Intervention en <span className="font-bold text-secondary">30 minutes</span>
          </p>
          
          {/* Call Button with Animation */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-full p-1 inline-block mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <motion.a
              href="tel:0628984298"
              className="flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark text-white px-12 py-6 rounded-full text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="animate-pulse" />
              06 28 98 42 98
            </motion.a>
          </motion.div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaShieldAlt className="text-secondary mr-2" />
              <span className="text-white text-sm">Intervention garantie</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="text-white text-sm">4.9/5 (2000+ avis)</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaClock className="text-blue-400 mr-2" />
              <span className="text-white text-sm">Service 24h/24</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards with Staggered Animation */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-br ${item.gradient} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}