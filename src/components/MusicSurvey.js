import React, { useState } from 'react';
import styled from 'styled-components';
import { simulateMusicPreference } from '../services/FApi';
import MusicResult from './MusicResult';
import Header from './Header';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 40px;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #333333;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-bottom: 30px;
`;

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.label`
  color: #666666;
  font-size: 1em;
  flex: 1;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px 12px;
  font-size: 1em;
  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #fafafa;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #555555;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
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

const MusicSurvey = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    "¿Qué género musical escuchas más frecuentemente?",
    "¿Qué tipo de energía buscas en la música?",
    "¿Cuál es tu canción o artista favorito en este momento?",
    "¿Qué prefieres en la música: letra, ritmo o ambos?",
    "¿Escuchas música en idiomas diferentes al tuyo?",
    "¿Prefieres canciones con voces o solo instrumentales?",
    "¿Te gusta escuchar música nueva regularmente o prefieres tus canciones favoritas de siempre?",
    "¿Hay alguna década musical que te guste especialmente?",
    "¿Usualmente escuchas música para actividades específicas?"
  ];

  const handleInputChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    const preferences = { genre: answers[0] || "pop" };
    const prediction = simulateMusicPreference(preferences);
    setResult(prediction);
  };

  return (
    <PageContainer>
      <Header />
      <SurveyContainer>
        <Title>Encuesta Musical</Title>
        <QuestionContainer>
          {questions.map((question, index) => (
            <QuestionRow key={index}>
              <QuestionText>{question}</QuestionText>
              <InputField
                type="text"
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder="Escribe tu respuesta"
              />
            </QuestionRow>
          ))}
        </QuestionContainer>
        <SubmitButton onClick={handleSubmit}>Obtener Predicción</SubmitButton>
        {result && <MusicResult result={result} />}
      </SurveyContainer>
    </PageContainer>
  );
};

export default MusicSurvey;
