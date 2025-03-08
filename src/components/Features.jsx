import { motion } from 'framer-motion';
import { FaTools, FaEuroSign, FaShieldAlt, FaCertificate } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: FaTools,
      title: "Équipement Professionnel",
      description: "Matériel de dernière génération pour un diagnostic précis"
    },
    {
      icon: FaEuroSign,
      title: "Devis Gratuit",
      description: "Tarification claire et transparente sans surprise"
    },
    {
      icon: FaShieldAlt,
      title: "Garantie Intervention",
      description: "Tous nos travaux sont garantis"
    },
    {
      icon: FaCertificate,
      title: "Plombiers Certifiés",
      description: "Équipe qualifiée et expérimentée"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <feature.icon className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}