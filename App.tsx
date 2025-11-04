import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonSample from './src/components/ButtonSample';
import PressableSample from './src/components/PressableSample';
import TouchableOpacitySample from './src/components/TouchableOpacitySample';
import TouchableHighlightSample from './src/components/TouchableHighlightSample';
import TouchableWithoutFeedbackSample from './src/components/TouchableWithoutFeedbackSample';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tugas Day 5 React Native</Text>
      <Text style={styles.childText}>Tugas 1 (Button Component)</Text>
      <ButtonSample />
      <Text style={styles.childText}>Tugas 2 (Pressable)</Text>
      <PressableSample />
      <Text style={styles.childText}>Tugas 3 (TouchableOpacity)</Text>
      <TouchableOpacitySample />
      <Text style={styles.childText}>Tugas 4 (TouchableHighlight)</Text>
      <TouchableHighlightSample />
      <Text style={styles.childText}>Tugas 5 (TouchableWithoutFeedback)</Text>
      <TouchableWithoutFeedbackSample />
      <Text style={styles.childText}>Tugas 6 (TouchableNativeFeedback)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  childText: {
    fontSize: 20,
    color: 'green',
    margin: 10,
  },
});

export default App;
