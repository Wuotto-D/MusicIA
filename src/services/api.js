import axios from 'axios';

export const getChatGPTResponse = async (messages) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            ...messages,
            { role: "user", content: "Por favor, responde en formato JSON con las claves 'genre' y 'artists'." }
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
  
      console.log("Respuesta completa de la API:", response.data);
      
      // Intenta convertir la respuesta a JSON
      const chatResponse = response.data.choices[0].message.content;
      const parsedResponse = JSON.parse(chatResponse);
  
      console.log("Respuesta parseada:", parsedResponse);
      
      return parsedResponse;
    } catch (error) {
      console.error("Error al obtener respuesta de ChatGPT", error);
      return null;
    }
  };
  
  