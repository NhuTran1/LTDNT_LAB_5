// components/XylophoneKey.js
import { useAudioPlayer } from 'expo-audio';
import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function XylophoneKey({ colors, soundFile, label }) {
  // ⬇️ Hook tạo player RIÊNG cho key này — preload khi mount
  const player = useAudioPlayer(soundFile);

  const handlePress = () => {
    // Chỉ cần 2 dòng — không có replace() nữa!
    player.seekTo(0);
    player.play();
  };

  return (
    <Pressable
      onPressIn={handlePress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
      ]}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.key}
      >
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // marginHorizontal: 12,
    // marginVertical: 4,
    // borderRadius: 14,
    overflow: 'hidden',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  key: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 14,
    // borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  label: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});