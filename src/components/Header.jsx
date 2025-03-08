import { FaPhone, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center text-white/90 text-sm">
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>Disponible 24h/24 - 7j/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and company name */}
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center group hover:opacity-90 transition-opacity"
              >
                <div className="mr-4">
                  <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-lg">
                    <span className="text-2xl font-bold text-white">S</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Solybat</h1>
                  <p className="text-white/70 text-sm">
                    Société Lyonnaise du Bâtiment
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Call button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:bg-secondary/30 transition-all duration-300"></div>
              
              {/* Button content */}
              <motion.a
                href="tel:0628984298"
                className="relative flex items-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white/20 p-2 rounded-full">
                  <FaPhone className="text-white animate-pulse" />
                </div>
                <span className="text-white">06 28 98 42 98</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}