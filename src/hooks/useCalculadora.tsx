import {useState, useRef} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacionRef = useRef<Operadores>();
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const armarNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  const eliminarNumero = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  const cambiarAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };
  const dividir = () => {
    cambiarAnterior();
    ultimaOperacionRef.current = Operadores.dividir;
  };
  const multiplicar = () => {
    cambiarAnterior();
    ultimaOperacionRef.current = Operadores.multiplicar;
  };
  const restar = () => {
    cambiarAnterior();
    ultimaOperacionRef.current = Operadores.resta;
  };
  const sumar = () => {
    cambiarAnterior();
    ultimaOperacionRef.current = Operadores.suma;
  };
  const calcular = () => {
    const numero1 = Number(numero);
    const numero2 = Number(numeroAnterior);
    switch (ultimaOperacionRef.current) {
      case Operadores.suma:
        setNumero(`${numero1 + numero2}`);
        break;
      case Operadores.resta:
        setNumero(`${numero2 - numero1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${numero1 * numero2}`);
        break;
      case Operadores.dividir:
        setNumero(`${numero2 / numero1}`);
        break;
    }
    setNumeroAnterior('0');
  };
  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    sumar,
    restar,
    dividir,
    multiplicar,
    calcular,
    eliminarNumero,
    cambiarAnterior,
  };
};
