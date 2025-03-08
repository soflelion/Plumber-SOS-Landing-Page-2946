import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie L.",
      location: "Paris 15e",
      text: "Intervention rapide en pleine nuit pour une fuite urgente. Très professionnel !",
      rating: 5
    },
    {
      name: "Pierre D.",
      location: "Boulogne",
      text: "Excellent service, sont arrivés en 20 minutes pour déboucher mes canalisations.",
      rating: 5
    },
    {
      name: "Sophie M.",
      location: "Neuilly",
      text: "Équipe réactive et efficace. Prix transparent, je recommande !",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Avis Clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}