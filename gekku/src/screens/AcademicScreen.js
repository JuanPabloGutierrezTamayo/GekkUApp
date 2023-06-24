import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image,Button,ImageBackground} from 'react-native';

const AcademicScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.student}>
        <Image style={styles.image}  />
        <View style={styles.info_Student}>
          <Text style={styles.text}>Próximas alertas</Text>
          <Text style={styles.text}>Próximas alertas</Text>
          <Text style={styles.text}>Próximas alertas</Text>
          <Text style={styles.text}>Próximas alertas</Text>
        </View>
      </View>

      <View style={styles.promedio}>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#A5BCA7',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14,
    height: '10%',
    marginTop: 10,
    marginLeft: 10,

  },
  student: {
    borderRadius: 20,
    backgroundColor: '#2D5C44',
    width: '90%',
    height: '30%',
    margin: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    margin: 5,
    width: '20%',
    height: '30%',
    justifyContent: "center",
  },
  info_Student: {
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    opacity: '50%',
    width: '90%',
    height: '50%',
    margin: 10,
  },
  promedio: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: '15%',
    margin: 5,
  },
});


export default AcademicScreen;