import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaTools, FaWrench, FaHome, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cities } from '../data/cities';
import { services } from '../data/services';

const CityCard = ({ city, index }) => {
  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-primary to-secondary',
    'from-purple-500 to-pink-400',
    'from-green-500 to-teal-400',
    'from-orange-500 to-yellow-400'
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden group"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
        <div className={`h-3 bg-gradient-to-r ${gradient} rounded-t-xl`}></div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-3 shadow-md`}>
              <FaMapMarkerAlt className="text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-800">{city.name}</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">Intervention en <span className="font-bold text-primary">{city.response_time}</span></p>
          
          <div className="space-y-2">
            {services.map((service, sIndex) => (
              <Link
                key={sIndex}
                to={`/${city.id}/${service.id}`}
                className="flex items-center p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Coverage() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-secondary/5"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-blue-400/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Zone d'Intervention
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Intervention rapide dans Lyon et sa métropole. Notre équipe de plombiers est stratégiquement répartie 
            pour garantir une intervention en moins de <span className="font-bold text-primary">30 minutes</span> où que vous soyez.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
              <FaTools className="text-primary mr-2" />
              <span className="text-sm font-medium">Équipe disponible 24/7</span>
            </div>
            <div className="flex items-center bg-secondary/10 px-4 py-2 rounded-full">
              <FaWrench className="text-secondary mr-2" />
              <span className="text-sm font-medium">Techniciens qualifiés</span>
            </div>
            <div className="flex items-center bg-blue-400/10 px-4 py-2 rounded-full">
              <FaHome className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">Intervention à domicile</span>
            </div>
            <div className="flex items-center bg-green-400/10 px-4 py-2 rounded-full">
              <FaPhoneAlt className="text-green-500 mr-2" />
              <span className="text-sm font-medium">Assistance téléphonique</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cities.map((city, index) => (
            <CityCard key={index} city={city} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}