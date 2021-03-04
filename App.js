import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';


function waitFor(destino) {
  setTimeout(() => Linking.openURL(destino), 3000);
}

export default function App() {
  let destino = '';

  if (Math.random() * 10 <= 7) {
    destino = 'https://code.jquery.com/jquery-3.6.0.min.js';
  } else {
    destino = 'https://stackoverflow.com/questions/46498522/html-redirect-on-page-load';
  }

  return (
    <View style={styles.container}>
      <Text>Redirigiendo a test de Your Europe</Text>
      <Text>Por favor, espera un momento</Text>
      <Image source={require('./loading.gif')}
        style={{ width: 100, height: 100 }} />
      {
        waitFor(destino)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
