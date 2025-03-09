import React from 'react';
import { motion } from 'framer-motion';
import { FaWater, FaTools, FaCheckCircle, FaPhoneAlt, FaShieldAlt, FaClock, FaMapMarkerAlt, FaWrench, FaHome, FaStar } from 'react-icons/fa';

// Nouveau composant pour l'en-tête avec animation
export const HeroAnimation = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary z-0 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative z-10 p-8 md:p-12 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.7)",
                  "0 0 0 10px rgba(255,255,255,0)",
                  "0 0 0 0 rgba(255,255,255,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaWrench className="text-3xl" />
            </motion.div>
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Service d'urgence plomberie</h2>
          <p className="text-center text-lg md:text-xl mb-6 text-white/90">
            Intervention rapide par des experts qualifiés pour réparer vos fuites d'eau
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div 
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              <FaPhoneAlt />
              <span>Disponible 24h/24</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              <FaTools />
              <span>Équipement professionnel</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              <FaHome />
              <span>Intervention à domicile</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

// Composant pour l'indicateur de temps de réponse
export const ResponseTimeIndicator = ({ time }) => {
  const [min, max] = time.split('-').map(t => parseInt(t.trim()));
  const avg = (min + max) / 2;
  const percentage = 100 - (avg / 60) * 100; // Plus rapide = plus élevé

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-50 to-primary/10 rounded-xl overflow-hidden p-6 mb-8 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaClock className="text-primary text-2xl" />
          <span className="font-bold text-xl text-gray-800">Temps d'intervention</span>
        </div>
        <span className="text-xl font-bold text-primary">{time}</span>
      </div>
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm font-medium">
        <span className="text-gray-500">60 min</span>
        <span className="text-gray-500">45 min</span>
        <span className="text-gray-600">30 min</span>
        <span className="text-primary">15 min</span>
        <span className="text-secondary font-bold">Immédiat</span>
      </div>
    </div>
  );
};

// Composant pour les services avec icônes
export const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-primary"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 shadow-md">
        <Icon className="text-2xl text-white" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Composant pour l'appel à l'action
export const EmergencyCallToAction = () => {
  return (
    <motion.div 
      className="relative bg-gradient-to-r from-secondary/80 to-primary/80 rounded-2xl p-8 my-12 overflow-hidden text-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg z-10">
        <FaPhoneAlt className="text-2xl animate-pulse" />
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Urgence fuite d'eau ?</h2>
        <p className="text-white/90 mb-6 text-lg max-w-2xl">
          Ne laissez pas une fuite d'eau endommager votre domicile. Nos plombiers sont disponibles 24h/24 pour une intervention rapide et efficace.
        </p>
        <motion.a
          href="tel:0628984298"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-md"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhoneAlt />
          Appeler maintenant
        </motion.a>
      </div>
    </motion.div>
  );
};

// Composant pour les garanties
export const Guarantees = ({ guarantees }) => {
  const defaultGuarantees = [
    { icon: FaClock, title: "Intervention rapide", description: "Nos plombiers arrivent en moins de 30 minutes", color: "from-blue-400 to-blue-600" },
    { icon: FaTools, title: "Équipement professionnel", description: "Matériel de pointe pour une réparation efficace", color: "from-primary to-primary-dark" },
    { icon: FaShieldAlt, title: "Garantie satisfaction", description: "Travail soigné et garanti", color: "from-secondary to-secondary-dark" },
    { icon: FaCheckCircle, title: "Devis transparent", description: "Prix clairs et sans surprise", color: "from-green-400 to-green-600" }
  ];

  const itemsToDisplay = guarantees || defaultGuarantees;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {itemsToDisplay.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border-t-2 border-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color || "from-primary to-primary-dark"} flex items-center justify-center mb-4 shadow-md`}>
            {React.isValidElement(item.icon) ? (
              item.icon
            ) : (
              item.icon && <item.icon className="text-2xl text-white" />
            )}
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Composant pour les témoignages
export const Testimonial = ({ name, location, quote }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 relative border-l-4 border-primary"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-serif shadow-md">
        "
      </div>
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" />
          ))}
        </div>
      </div>
      <div className="text-gray-700 italic mb-4 text-lg">{quote}</div>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-gray-800">{name}</div>
          <div className="text-sm text-primary">{location}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Nouveau composant pour les quartiers de la ville
export const CityDistricts = ({ city, districts }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-primary/10 rounded-xl p-6 my-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Intervention plombier à {city}</h2>
      <p className="mb-6 text-gray-700">Notre équipe locale intervient dans tous les quartiers de {city} avec une connaissance approfondie du terrain.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {districts.map((district, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-primary"
            whileHover={{ x: 5, backgroundColor: "#f0f9ff" }}
          >
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <h3 className="font-semibold">{district.name}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">{district.info}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Nouveau composant pour les types de fuites avec couleurs
export const LeakTypeGrid = ({ types }) => {
  const colors = [
    "bg-blue-500", "bg-primary", "bg-secondary", 
    "bg-indigo-500", "bg-purple-500", "bg-pink-500",
    "bg-red-500", "bg-orange-500"
  ];

  return (
    <div className="overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-primary/10 p-2 my-8 shadow-md">
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Types de fuites que nous réparons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {types.map((type, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                borderColor: '#3b82f6'
              }}
            >
              <div className={`w-14 h-14 mx-auto ${colors[index % colors.length]} rounded-full flex items-center justify-center mb-3 shadow-md`}>
                <FaWater className="text-2xl text-white" />
              </div>
              <p className="font-bold text-gray-800">{type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
