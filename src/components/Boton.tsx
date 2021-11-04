import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../theme/globalStyles';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const Boton = ({texto, color = '#2D2D2D', ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => accion(texto)}
      style={{
        ...globalStyles.boton,
        backgroundColor: color,
        width: ancho ? 180 : 80,
      }}>
      <Text
        style={{
          ...globalStyles.botonTexto,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default Boton;
