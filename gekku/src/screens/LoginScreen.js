import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <View class="main" style={colorScheme === 'light' ? loginStyles.containerLight : loginStyles.containerDark}>
      <StatusBar />
      <Image
        source={'././assets/icon.png'}
      />
    </View>
  );
}

const loginStyles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#dbdad7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;