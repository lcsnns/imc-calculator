import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    if (!altura || !peso) return;

    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <form onSubmit={calcularIMC}>
          <div>
            <label>Altura (cm):</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div>
            <label>Peso (kg):</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <button type="submit">Calcular</button>
        </form>
        {imc && (
          <div>
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
