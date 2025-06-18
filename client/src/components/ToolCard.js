import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const TagList = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const VisitLink = styled.a`
  display: inline-block;
  margin-top: 14px;
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.cardBg};
    padding: 6px 10px;
    border-radius: 6px;
  }
`;

const Button = styled.button`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.buttonBg || theme.accent};
  color: ${({ theme }) => theme.buttonText || theme.bodyBg};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const ToolCard = ({ tool, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <div>
        <Title>{tool.name}</Title>
        <p>{tool.excerpt}</p>
        <p><strong>Category:</strong> {tool.category}</p>
        <p><strong>Pricing:</strong> {tool.pricing}</p>
        <TagList><strong>Tags:</strong> {tool.tags.join(', ')}</TagList>
      </div>

      <div>
        <VisitLink href={tool.url} target="_blank" rel="noopener noreferrer">
          🔗 Visit Tool →
        </VisitLink>

        <Button onClick={() => onToggleFavorite(tool)}>
          {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
        </Button>
      </div>
    </Card>
  );
};

export default ToolCard;
