import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ToolCard from '../components/ToolCard';

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Message = styled.p`
  margin-top: 50px;
  font-size: 1.2rem;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/favorites')
      .then(res => {
        setFavorites(res.data);
        setLoading(false);
      })
      .catch(() => {
        setFavorites([]);
        setLoading(false);
      });
  }, []);

  const handleToggleFavorite = (tool) => {
    axios.delete(`http://localhost:5000/api/favorites/${tool.id}`)
      .then(() => {
        setFavorites(prev => prev.filter(t => t.id !== tool.id));
      })
      .catch(() => alert('Failed to remove favorite'));
  };

  if (loading) return <Message>Loading favorites...</Message>;
  if (favorites.length === 0) return <Message>No favorite tools found</Message>;

  return (
    <Container>
      <h1>Your Favorites</h1>
      <Grid>
        {favorites.map(tool => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isFavorite={true}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Favorites;
