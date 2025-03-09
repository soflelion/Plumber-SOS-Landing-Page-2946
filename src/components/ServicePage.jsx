import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import cities from './cities';
import services from './services';

// Composants personnalisés pour le MDX
const components = {
  h1: props => <h1 className="text-3xl font-bold mb-6" {...props} />,
  h2: props => <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />,
  ul: props => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  li: props => <li className="text-gray-700" {...props} />,
};

function ServicePage() {
  const { cityId, serviceId } = useParams();
  const city = cities.find((c) => c.id === cityId);
  const service = services.find((s) => s.id === serviceId);
  const [MDXContent, setMDXContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const module = await import(`./content/${serviceId}.mdx`);
        setMDXContent(() => module.default);
        setError(null);
      } catch (err) {
        console.error('Erreur de chargement du contenu MDX:', err);
        setError('Contenu non disponible pour ce service');
      }
    };
    loadContent();
  }, [serviceId]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!MDXContent || !city || !service) return <div className="p-4">Chargement...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <MDXProvider components={components}>
        <MDXContent
          ville={city.name}
          response_time={city.response_time}
          service={service.title}
        />
      </MDXProvider>
    </div>
  );
}

export default ServicePage;
