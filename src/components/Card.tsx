import React, { useEffect, useState } from 'react';

// Define the props interface
interface CardProps {
  apiUrl: string; // URL to fetch data from
}

// Define the structure of the data you expect from the API
interface CardData {
  title: string;
  content: string;
  imageUrl?: string; // Optional property
}

// Card component
const Card: React.FC<CardProps> = ({ apiUrl }) => {
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: CardData = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card">
      {data?.imageUrl && <img src={data.imageUrl} alt={data.title} className="card-image" />}
      <h2 className="card-title">{data.title}</h2>
      <p className="card-content">{data.content}</p>
    </div>
  );
};

export default Card;