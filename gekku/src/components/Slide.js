import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Slide({ data }) {
  return (
    <View style={slideStyles.container}>
      {/* <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
      ></Image> */}
      <Text style={{ fontSize: 24 }}>{data.name}</Text>
      <Text style={{ fontSize: 18 }}>{data.author}</Text>
    </View>
  );
}

const slideStyles = StyleSheet.create({
  container: {
    // height: windowHeight,
    // width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {

  },
  text: {

  }
});

export default Slide;
