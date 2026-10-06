// App.js
import { View, StyleSheet, StatusBar } from 'react-native';
import XylophoneKey from './components/XylophoneKey';
import { NOTES } from './constants/notes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.keysContainer}>
        {NOTES.map((note, index) => (
          <XylophoneKey
            key={index}
            label={note.label}
            soundFile={note.soundFile}
            colors={note.colors}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    // paddingTop: 40,
    // paddingBottom: 20,
    // paddingHorizontal: 12,
  },
  keysContainer: {
    flex: 1,
    gap: 0,
  },
});