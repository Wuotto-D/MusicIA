import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ResultTitle = styled.h3`
  color: #333333;
  margin-bottom: 10px;
`;

const GenreText = styled.p`
  font-size: 1.2em;
  color: #666666;
  margin-bottom: 8px;
`;

const ArtistsText = styled.div`
  font-size: 1em;
  color: #444444;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const LinkButton = styled.button`
  padding: 10px 15px;
  font-size: 1em;
  color: #ffffff;
  background-color: #333333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555555;
  }
`;

const MusicResult = ({ result }) => {
  const navigate = useNavigate();

  if (!result) return null;

  return (
    <ResultContainer>
      <ResultTitle>Tu recomendación musical</ResultTitle>
      <GenreText>Género sugerido: {result.genre}</GenreText>
      <ArtistsText>Artistas recomendados: {result.artists.join(', ')}</ArtistsText>

      <ButtonContainer>
        <LinkButton onClick={() => navigate("/agriculture-ai")}>
          IA en Agricultura
        </LinkButton>
        <LinkButton onClick={() => navigate("/renewable-energy-ai")}>
          IA en Energía Renovable
        </LinkButton>
      </ButtonContainer>
    </ResultContainer>
  );
};

export default MusicResult;
