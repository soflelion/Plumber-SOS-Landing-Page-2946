import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { cities } from '../data/cities';
import { services } from '../data/services';

export default function CityServicePage() {
  const { cityId, serviceId } = useParams();
  
  const city = cities.find(c => c.id === cityId);
  const service = services.find(s => s.id === serviceId);

  if (!city || !service) {
    return <div>Page non trouvée</div>;
  }

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title} à {city.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{city.description}</p>
            
            {/* Call Button */}
            <motion.div
              className="inline-block relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:bg-secondary/30 transition-all duration-300"></div>
              <motion.a
                href="tel:0628984298"
                className="relative flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="animate-pulse" />
                06 28 98 42 98
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Service Details */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Notre service</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intervention Info */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Intervention à {city.name}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaClock className="text-2xl text-primary" />
                  <div>
                    <h3 className="font-semibold">Temps d'intervention</h3>
                    <p className="text-gray-600">{city.response_time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                  <div>
                    <h3 className="font-semibold">Zone couverte</h3>
                    <p className="text-gray-600">Tout {city.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}