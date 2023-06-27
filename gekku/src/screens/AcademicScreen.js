import React, { useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';

import ErrorMessage from '../components/ErrorMessage';
import { UserContext } from '../context/UserContext';

const a = [3, 4, 3, 3, 2];

const AcademicScreen = () => {
  const [token, ] = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [pa, setPA] = useState(0);
  const [papa, setPAPA] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getStudentInfo();
    getGrades();
  }, []);

  const getStudentInfo = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    };

    const response = await fetch("http://localhost:8000/api/students/me", requestOptions)

    if(!response.ok) {
      setErrorMessage("Could not get the profile information");
    } else {
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setUniversity(data.university);
    }
  }
  
  const getGrades = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    };

    const response = await fetch("http://localhost:8000/api/academic", requestOptions)

    if(!response.ok) {
      setErrorMessage("Could not get the information");
    } else {
      const data = await response.json();
      setPA(data.pa);
      setPAPA(data.papa);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.student}>
          <Image style={styles.image} source={require("../../assets/Academic-icon.png")}  />
          
          <View style={styles.info_Student}>
            {errorMessage != "" ? 
              <ErrorMessage message={errorMessage}/>
            :
              <>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{university}</Text>
                <Text style={styles.text}>Ingenieria de sistemas</Text>
              </>
            }
            
          </View>
        </View>

        <View style={styles.promedio}>
            <View >
              <Text style={{fontSize:40,textAlign:'center',fontWeight: 'bold'}}>{parseFloat(papa)}</Text>
              <Text style={{fontSize:30,textAlign:'center'}}>P.A.P.A</Text> 
            </View>

            <View>
              <Text style={{fontSize:40,textAlign:'center',fontWeight: 'bold'}}>{pa}</Text>
              <Text style={{fontSize:30,textAlign:'center'}}>P.A</Text> 
            </View>
        </View>

        <View style={styles.creditos}>
          <View width={'100%'} alignItems={'center'}>
            <Text style={styles.text_p_avance}>Porcentaje de avance</Text>
            <Text style={{fontSize:40,textAlign:'center'}}>45%</Text> 
          </View>

          {/* <View width={'100%'} alignItems={'center'}>
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
          </View> */}

          <View style={{flexShrink:1,padding:10}}>
            <Text style={styles.text_creditos}>Créditos cursados:</Text>
            <Text style={styles.text_creditos2}>Fundamentación obligatoria:</Text>
            <Text style={styles.text_creditos2}>Fundamentación optativas:</Text>
            <Text style={styles.text_creditos2}>Disciplinar obligatoria:</Text>
            <Text style={styles.text_creditos2}>Disciplinar optativa:</Text>
            <Text style={styles.text_creditos2}>trabajo de grado:</Text>
            
            <View justifyContent={'flex-end'}>
              <Text style={styles.text_creditos}>Créditos faltantes</Text>
            </View>
          </View>
        </View>

        <View style={styles.asignaturas}>
          <View style={styles.row} margin={'10%'}>
            <Text style={styles.text_asignaturas}>Semestre 2023-1</Text>

          </View>
            <Text style={styles.text_creditos}>Créditos inscritos: </Text>

          {React.Children.toArray(a.map((creditos) => {
            return (
              <View style={styles.asignaturas2}>
                <View style={{flexShrink:1,padding:10}} >
                  <Text style={styles.text_asignaturas2}>Ciencias de la computacion y aplicaciones </Text>
                  <Text style={styles.text_asignaturas2} keys={creditos}>Créditos: {creditos} </Text>
                </View>
                <View style={styles.nota_asignatura} >
                  <Text style={styles.text_asignaturas}> 3.5 </Text>
                </View>
              </View>
            );
          }))}
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
    textAlign:'center'
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
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
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
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
  promedio: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    padding: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex:1,
    flexDirection: 'row',
  },
  creditos: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
    margin: 5,
    marginBottom: 10,
    
    justifyContent: 'flex-start'
  },
  asignaturas: {
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    width: '90%',
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
    flex: 1,
  },
  nota_asignatura: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width:'20%',
    height:'100%',
    backgroundColor: '#8BE189',
    alignItems:'center',
    justifyContent: 'center'
  },
    scrollView: {
    marginHorizontal: 20,
  },
});

export default AcademicScreen;
