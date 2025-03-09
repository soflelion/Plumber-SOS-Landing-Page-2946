import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaCheck, FaTools, FaShieldAlt, FaStar, FaWrench, FaWater } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { cities } from '../data/cities';
import { services } from '../data/services';
import { HeroAnimation, ResponseTimeIndicator, ServiceCard, EmergencyCallToAction, Guarantees, Testimonial, CityDistricts, LeakTypeGrid } from './WaterLeakComponents';

// Composants personnalisés pour le MDX
const components = {
  h1: props => <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" {...props} />,
  h2: props => <h2 className="text-2xl font-semibold mb-4 mt-8 relative inline-block" {...props}>
    {props.children}
    <div className="absolute -bottom-1 left-0 h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
  </h2>,
  h3: props => <h3 className="text-xl font-semibold mb-3 mt-4 text-primary" {...props} />,
  ul: props => <ul className="list-none pl-0 mb-4 space-y-2" {...props} />,
  li: props => <li className="flex items-start text-gray-700 mb-2">
    <span className="mr-2 mt-1 text-primary">•</span>
    <span>{props.children}</span>
  </li>,
  ol: props => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  p: props => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
  a: props => <a className="text-secondary hover:text-primary transition-colors underline" {...props} />,
  HeroAnimation,
  ResponseTimeIndicator,
  ServiceCard,
  EmergencyCallToAction,
  Guarantees,
  Testimonial,
  CityDistricts,
  LeakTypeGrid
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CityServicePage() {
  const { cityId, serviceId } = useParams();
  const [MDXContent, setMDXContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const city = cities.find(c => c.id === cityId);
  const service = services.find(s => s.id === serviceId);

  // Background elements for visual interest
  const bubbles = Array(8).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10
  }));

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const module = await import(`../data/content/${serviceId}.mdx`);
        setMDXContent(() => module.default);
        setError(null);
      } catch (err) {
        console.error('Erreur de chargement du contenu MDX:', err);
        setError('Contenu non disponible pour ce service');
      } finally {
        setLoading(false);
      }
    };
    
    if (serviceId) {
      loadContent();
    }
  }, [serviceId]);

  if (!city || !service) {
    return (
      <div className="pt-[104px] min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <FaMapMarkerAlt className="text-3xl text-red-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Page non trouvée</h1>
          <p className="text-gray-600 mb-6">Désolé, nous n'avons pas pu trouver la page que vous recherchez.</p>
          <Link to="/" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient and bubbles */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-100/20 to-secondary/10"></div>
        
        {/* Animated bubbles */}
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-primary/5 backdrop-blur-sm"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              zIndex: 1
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Service badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <FaWrench className="text-primary mr-2" />
              <span className="text-gray-700 font-medium">{service.title}</span>
            </motion.div>
            
            {/* Title with gradient */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {service.title} à {city.name}
              </span>
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{city.description}</p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaClock className="text-primary mr-2" />
                <span className="text-gray-700 text-sm font-medium">Intervention en {city.response_time}</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaShieldAlt className="text-secondary mr-2" />
                <span className="text-gray-700 text-sm font-medium">Garantie satisfaction</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaStar className="text-yellow-500 mr-2" />
                <span className="text-gray-700 text-sm font-medium">4.9/5 (2000+ avis)</span>
              </div>
            </div>
            
            {/* Call Button with glow effect */}
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
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Service Details */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4 shadow-md">
                  <FaTools className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Notre service</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-primary text-sm" />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Intervention Info */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Intervention à {city.name}</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaClock className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Temps d'intervention</h3>
                    <p className="text-gray-600">
                      Notre équipe arrive en moins de <span className="font-bold text-primary">{city.response_time}</span> sur site
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Zone couverte</h3>
                    <p className="text-gray-600">
                      Intervention dans tous les quartiers de {city.name} et ses environs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center">
                    <FaWater className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Disponibilité</h3>
                    <p className="text-gray-600">
                      Service d'urgence disponible 24h/24 et 7j/7
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MDX Content Section */}
      <section className={`py-16 ${serviceId === 'fuite-d-eau-urgente' ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}>
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-primary/5"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-secondary/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-6xl mx-auto ${serviceId === 'fuite-d-eau-urgente' ? '' : 'bg-white p-8 rounded-2xl shadow-lg border border-gray-100'}`}>
            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Chargement du contenu...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 bg-red-50 rounded-xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTools className="text-red-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Erreur de chargement</h3>
                <p className="text-red-600">{error}</p>
              </div>
            ) : MDXContent ? (
              <MDXProvider components={components}>
                <MDXContent 
                  ville={city.name}
                  response_time={city.response_time}
                  service={service.title}
                />
              </MDXProvider>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}