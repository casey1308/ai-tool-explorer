import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToolCard from '../components/ToolCard';
import CategoryChart from './CategoryChart';  // Corrected path
import { triggerConfetti } from '../components/confetti';  // Only import the correct confetti function
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.bodyBg};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 40px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
  max-width: 1200px;
`;

const AllTools = () => {
  const [tools, setTools] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toolsRes = await axios.get('http://localhost:5000/api/tools');
        const favRes = await axios.get('http://localhost:5000/api/favorites');
        setTools(toolsRes.data);
        setFavorites(favRes.data);
      } catch (err) {
        console.error('Error fetching data:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

const handleToggleFavorite = async (tool) => {
  const isFav = favorites.some(fav => fav.id === tool.id);
  if (isFav) {
    try {
      await axios.delete(`http://localhost:5000/api/favorites/${tool.id}`);
      setFavorites(prev => prev.filter(f => f.id !== tool.id));
    } catch {
      alert('Failed to remove from favorites');
    }
  } else {
    try {
      await axios.post('http://localhost:5000/api/favorites', tool);
      setFavorites(prev => [...prev, tool]);
      triggerConfetti();  // Use triggerConfetti here
    } catch {
      alert('Failed to add to favorites');
    }
  }
};


  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (!tools.length) return <Wrapper>No tools found.</Wrapper>;

  return (
    <Wrapper>
      <Title>🚀 AI Tool Explorer</Title>
      <Subtitle>Discover and favorite your top AI tools!</Subtitle>
      <Grid>
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isFavorite={favorites.some(fav => fav.id === tool.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </Grid>

      {/* Show category chart below the grid */}
      <CategoryChart tools={tools} />
    </Wrapper>
  );
};

export default AllTools;
