import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import Boton from '../components/Boton';
import {globalStyles} from '../theme/globalStyles';
import {useCalculadora} from '../hooks/useCalculadora';

const HomeScreen = () => {
  const {
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
  } = useCalculadora();
  return (
    <View style={globalStyles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={globalStyles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text
        style={globalStyles.resultado}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {numero}
      </Text>
      <View style={globalStyles.botonFila}>
        <Boton texto={'C'} color="#9B9B9B" accion={limpiar} />
        <Boton texto={'+/-'} color="#9B9B9B" accion={positivoNegativo} />
        <Boton texto={'del'} color="#9B9B9B" accion={eliminarNumero} />
        <Boton texto={'/'} color="#FF9427" accion={dividir} />
      </View>
      <View style={globalStyles.botonFila}>
        <Boton texto={'7'} accion={armarNumero} />
        <Boton texto={'8'} accion={armarNumero} />
        <Boton texto={'9'} accion={armarNumero} />
        <Boton texto={'X'} color="#FF9427" accion={multiplicar} />
      </View>
      <View style={globalStyles.botonFila}>
        <Boton texto={'4'} accion={armarNumero} />
        <Boton texto={'5'} accion={armarNumero} />
        <Boton texto={'6'} accion={armarNumero} />
        <Boton texto={'-'} color="#FF9427" accion={restar} />
      </View>
      <View style={globalStyles.botonFila}>
        <Boton texto={'1'} accion={armarNumero} />
        <Boton texto={'2'} accion={armarNumero} />
        <Boton texto={'3'} accion={armarNumero} />
        <Boton texto={'+'} color="#FF9427" accion={sumar} />
      </View>
      <View style={globalStyles.botonFila}>
        <Boton texto={'0'} accion={armarNumero} ancho />
        <Boton texto={'.'} accion={armarNumero} />
        <Boton texto={'='} color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default HomeScreen;
