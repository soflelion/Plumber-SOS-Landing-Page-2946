import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cities } from '../data/cities';
import { services } from '../data/services';

export default function Coverage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Zone d'Intervention</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Intervention rapide dans Lyon et sa métropole. Notre équipe de plombiers est stratégiquement répartie pour garantir une intervention en moins de 30 minutes où que vous soyez.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {cities.map((city, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg mb-3 text-primary">{city.name}</h3>
              <div className="space-y-2">
                {services.map((service, sIndex) => (
                  <Link
                    key={sIndex}
                    to={`/${city.id}/${service.id}`}
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}