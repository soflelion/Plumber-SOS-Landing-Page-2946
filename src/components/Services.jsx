import { FaShower, FaSink, FaToilet, FaWater } from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: FaShower, title: "Fuite d'eau" },
    { icon: FaSink, title: "Débouchage" },
    { icon: FaToilet, title: "WC bouchés" },
    { icon: FaWater, title: "Robinetterie" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services d'Urgence</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <service.icon className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}