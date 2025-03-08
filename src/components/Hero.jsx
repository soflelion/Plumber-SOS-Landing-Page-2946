import { motion } from 'framer-motion';
import { FaWrench, FaClock, FaCheck } from 'react-icons/fa';

export default function Hero() {
  const features = [
    {
      icon: FaWrench,
      title: "Expertise Technique",
      text: "Plus de 15 ans d'expérience en plomberie. Interventions précises et efficaces pour tous vos problèmes urgents."
    },
    {
      icon: FaClock,
      title: "Disponible 24h/24 et 7j/7",
      text: "Équipe mobilisable jour et nuit sur Lyon et sa métropole. Intervention en 30 minutes garantie."
    },
    {
      icon: FaCheck,
      title: "Garantie Satisfaction",
      text: "Interventions garanties et devis transparent. Plus de 2000 clients satisfaits dans la région lyonnaise."
    }
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.1)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-black/50 z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-6">
            Urgence Plomberie Lyon
          </h2>
          <p className="text-3xl text-white/90 mb-10">
            Intervention en 30 minutes
          </p>
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
              <FaClock className="animate-pulse" />
              06 28 98 42 98
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-secondary to-secondary-dark p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}