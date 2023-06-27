import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image,Button,ImageBackground,SlidingUpPanel,ScrollView} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
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
            <Image margin={'10%'} source={require("../../assets/AcademicIcons/Line1.png")}  />
            <Text style={styles.text}>Próximas alertas</Text>
          </View>
        </View>

        <View style={styles.creditos}>
          <Text style={styles.text_p_avance}>Porcentaje de avance</Text>
          <CircularProgress
            value={50}
            radius={100}
            inActiveStrokeColor={'#FFFFFF'}
            activeStrokeColor={'#97C593'}
            activeStrokeWidth={30}
            inActiveStrokeWidth={30}
            inActiveStrokeOpacity={0.2}
            progressValueColor={'#000000'}
            valueSuffix={'%'}
          />

          <View width={'100%'} alignItems={'baseline'}>
            <Text style={styles.text_creditos}>Porcentaje de avance</Text>
            <Text style={styles.text_creditos2}>Porcentaje de avance</Text>
            <Text style={styles.text_creditos2}>Porcentaje de avance</Text>
            <Text style={styles.text_creditos2}>Porcentaje de avance</Text>
            <Text style={styles.text_creditos2}>Porcentaje de avance</Text>
            <Text style={styles.text_creditos2}>Porcentaje de avance</Text>
            <View justifyContent={'flex-end'}>
              <Text style={styles.text_creditos}>Porcentaje de avance</Text>
            </View>
          </View>
        </View>

        <View style={styles.asignaturas}>
          <View style={styles.row} margin={'10%'}>
            <Text style={styles.text_asignaturas}>Semestre 2023-1</Text>
            <Image marginLeft={'5%'} source={require("../../assets/AcademicIcons/select.png")}  />
          </View>
            <Text style={styles.text_creditos}>Créditos inscritos: </Text>

          <View style={styles.asignaturas2} flexDirection={'row'}>
            <View alignItems={'baseline'}>
              <Text style={styles.text_asignaturas2}>Créditos inscritos:  asdasdadasdasd asdasd as</Text>
              <Text style={styles.text_asignaturas2}>Créditos inscritos: </Text>
            </View>
              <View style={styles.nota_asignatura} >
                <Text style={styles.text_asignaturas2}> 3.5 </Text>
              </View>
          </View>


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
  text_p_avance: {
    color: 'black',
    fontSize: 20,
    margin: '5%',
  },
  text_creditos: {
    color: 'black',
    fontSize: 20,
    margin: '2%',
    marginLeft: 20
  },
  text_creditos2: {
    color: 'black',
    fontSize: 20,
    margin: '0%',
    marginLeft: 40
  },
  text_asignaturas: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  text_asignaturas2: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
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
    // height: 100,
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
  creditos: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    // height: 500,
    margin: 5,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'flex-start'
  },
  asignaturas: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    // height: 500,
    margin: 5,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'flex-start'
  },
  asignaturas2: {
    borderRadius: 30,
    backgroundColor: '#696969',
    width: '90%',
    height: 100,
    margin: 5,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nota_asignatura: {
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    width:70,
    height:'100%',
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent: 'center'
  },
    scrollView: {
    marginHorizontal: 20,
  },
});


export default AcademicScreen;