import Head from 'next/head';
import ExchangeRateDisplay from './Componentes/ExchangeRateDisplay';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <Head>
        <title>Tipo de Cambio - App</title>
        <meta name="description" content="Consulta el tipo de cambio en tiempo real" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl px-8 py-12 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800">Tipo de Cambio en Tiempo Real</h1>
        <ExchangeRateDisplay />
      </main>
    </div>
  );
}

