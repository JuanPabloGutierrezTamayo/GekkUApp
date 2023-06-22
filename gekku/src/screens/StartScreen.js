import {
  Appearance,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const StartScreen = ({ navigation }) => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <View class="main" style={colorScheme === 'light' ? startStyles.containerLight : startStyles.containerDark}>
      <StatusBar />
      <Text>Hola</Text>
    </View>
  );
}

const startStyles = StyleSheet.create({
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

export default StartScreen;