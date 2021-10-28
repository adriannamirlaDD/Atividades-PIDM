import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Aluno from './src/atv1/Aluno';
import Corpo from './src/atv1/Corpo';

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo/>
      <Aluno nome='Mirla Oliveira'
      curso='Design Digital'
      cidade='Morada Nova'
      idade='21 anos'/>
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
