import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image,Button,ImageBackground,SlidingUpPanel,ScrollView} from 'react-native';


const AcademicScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.student}>
          <Image style={styles.image} source={require("../../assets/Academic-icon.png")}  />
          <View style={styles.info_Student}>
            <Text style={styles.text}>Próximas alertas</Text>
            <Text style={styles.text}>Próximas alertas</Text>
            <Text style={styles.text}>Próximas alertas</Text>
            <Text style={styles.text}>Próximas alertas</Text>
          </View>
        </View>

        <View style={styles.promedio}>
          <View style={styles.row}>
            <Text style={styles.text}>Próximas alertas</Text>
            <Text style={styles.text}>Próximas alertas</Text>
          </View>
        </View>

        <View style={styles.papa}>

        </View>

        <View style={styles.papa}>
          <Text style={styles.text}>Próximas alertas</Text>
        </View>
      </View>
    </ScrollView>
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
    marginTop: '0.5%',
    marginLeft: 10,

  },
  row: {
    flexDirection: 'row',
  },
  student: {
    borderRadius: 20,
    backgroundColor: '#2D5C44',
    width: '90%',
    height: 250,
    margin: 5,
    marginTop: '15%',
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    margin: 5,
    width: '40%',
    height: '40%',
    justifyContent: "center",
    resizeMode: 'contain'
  },
  info_Student: {
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    opacity: 0.5,
    width: '90%',
    height: 100,
    margin: 10,
    justifyContent: "center",
  },
  promedio: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: 100,
    margin: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  papa: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: 500,
    margin: 5,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
    scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});


export default AcademicScreen;