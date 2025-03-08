import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaPhone } from 'react-icons/fa';

export default function Emergency() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.15)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-black/50 z-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto border border-white/20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-secondary to-secondary-dark p-4 rounded-full mr-4">
              <FaExclamationTriangle className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Urgence Plomberie ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Nous intervenons pour :</h3>
              <ul className="space-y-4">
                {[
                  "Fuite d'eau urgente",
                  "Canalisation bouchée",
                  "WC bouché",
                  "Dégât des eaux",
                  "Panne de chauffe-eau"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-lg text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-secondary-light mr-3">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="text-xl mb-6 text-center font-medium text-white">
                Disponible 24h/24 et 7j/7
              </p>
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-full p-1 w-full"
                whileHover={{ scale: 1.02 }}
              >
                <motion.a
                  href="tel:0628984298"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone className="animate-pulse" />
                  06 28 98 42 98
                </motion.a>
              </motion.div>
              <p className="mt-6 text-white/80">
                Intervention en 30 minutes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}