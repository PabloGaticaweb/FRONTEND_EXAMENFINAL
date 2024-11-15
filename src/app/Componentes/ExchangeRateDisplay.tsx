import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExchangeRateDisplay = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tipo-cambio/consultar');
        const { tipoCambio } = response.data;

        setExchangeRate(tipoCambio);
        setLastUpdated(new Date().toLocaleString()); // Guarda la fecha y hora actual
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60000); 

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Tipo de Cambio</h2>
      {exchangeRate ? (
        <div className="text-center">
          <p className="text-4xl font-semibold text-green-600">{exchangeRate}</p>
          <p className="text-gray-500 mt-2">Última actualización: {lastUpdated}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando...</p>
      )}
    </div>
  );
};

export default ExchangeRateDisplay;
