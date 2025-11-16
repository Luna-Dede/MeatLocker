import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const message = 'hello cock suck';
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Meat_pic.png')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Login screen test {message}</ThemedText>
        <Link href="/login">
          <ThemedText type="defaultSemiBold" style={{ textDecorationLine: 'underline' }}>
            Go to Login
          </ThemedText>
        </Link>
      </ThemedView>
      {/* 👆 up to here */}

      {/* ...rest of your existing code */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 52,
    borderRadius: 70,
    overflow: 'hidden'
  },
});
