import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from './src/atv1/Cabecalho';
import Corpo from './src/atv1/Corpo';
import Disciplina from './src/atv1/Disciplinas';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Mirla Oliveira'curso='Design Digital'/>
      <Corpo/>
      <Disciplina nome='Marketing'/>
      <Disciplina nome='Libras'/>
      <Disciplina nome='Fotografia'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caeefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
