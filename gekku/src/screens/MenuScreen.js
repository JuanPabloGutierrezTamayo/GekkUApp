import React, { useContext,useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { UserContext } from '../context/UserContext';

const MenuScreen = ({ navigation }) => {
  const [token, setToken] = useContext(UserContext);
  const [events, setEvent] = useState([]);

  useEffect(() => {
    getEventInfo();
  }, []);

  const getEventInfo = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    };

    const response = await fetch("http://localhost:8000/api/alerts/", requestOptions)

    if(!response.ok) {
      setErrorMessage("Could not get the event information");
    } else {
      const data = await response.json();
      setEvent(data);
    }
  }
  return (
  
    <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground source={require("../../assets/MenuIcons/background_menu.png")} style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]} onPress={() => navigation.navigate("Academic Information")}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/info.png")} />
              </TouchableOpacity> 
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/calc.png")} />
              </TouchableOpacity> 
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/event.png")} />
              </TouchableOpacity> 
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/not.png")} />
              </TouchableOpacity> 
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/bus.png")} />
              </TouchableOpacity> 
              <TouchableOpacity style={[styles.item, { flexBasis: '20%' }]}>
                  <Image style={styles.image} source={require("../../assets/MenuIcons/map.png")} />
              </TouchableOpacity> 
            </View>
          
          <View style={styles.notification}>
            <Text style={styles.text}>Próximas alertas</Text>
            <View style={styles.item_notifcaciones}>

              {events.map((events) => {
                return (
                  <View style={styles.item_notifcaciones3} key={events.id}>
                    <Text style={styles.text_notificacion2}>{events.title} - {events.topic}</Text>
                    <Text style={styles.text_notificacion2}>{events.date}</Text>
                    <Text style={styles.text_notificacion}>{events.note}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.notification}>
            <Text style={styles.text}>Próximas clases</Text>

            <View style={styles.item_notifcaciones2}>
              <View style={styles.item_notifcaciones3}>
                <Text style={styles.text_notificacion2}>CCAM</Text>
                <Text style={styles.text_notificacion2}>27/06/2023</Text>
                <Text style={styles.text_notificacion}>M8-201</Text>
              </View>

              <View style={styles.item_notifcaciones3}>
                <Text style={styles.text_notificacion2}>Creación multimedia</Text>
                <Text style={styles.text_notificacion2}>27/06/2023</Text>
                <Text style={styles.text_notificacion}>M8-202</Text>
              </View>

              <View style={styles.item_notifcaciones3}>
                <Text style={styles.text_notificacion2}>Cálculo diferencial</Text>
                <Text style={styles.text_notificacion2}>28/06/2023</Text>
                <Text style={styles.text_notificacion}>12-201</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    resizeMode:'cover',
    flex:1,
    alignItems:'center',
    justifyContent:'space-between'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  text_notificacion: {
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
    marginTop: '0.5%',
  },
  text_notificacion2: {
    color: 'white',
    fontSize: 15,
    marginLeft: 5,
    marginTop: '0.5%',
  },
  image: {
    margin: 20,
    width: '80%',
    height: '80%',
    justifyContent: "center",
    resizeMode: 'contain',
  },
  menu: {
    marginTop: 40,
    width:'100%',
    alignItems: 'center',
    justifyContent: "center",
    
  },
  row: {
    marginTop: '5%',
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderRadius: 20,
    marginLeft:'5%',
    marginRight:'5%',
    height: 60,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: "center",

  },
  notification: {
    width: '90%',
    alignItems: 'center',
    margin: '5%',
  },
  item_notifcaciones: {
    borderRadius: 15,
    width: '100%',
    margin: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: "center",
  },
  item_notifcaciones2: {
    borderRadius: 15,
    width: '100%',
    margin: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
    flex:1

  },
  item_notifcaciones3: {
    borderRadius: 15,
    width: '90%',
    margin: 20,
    padding:10,
    backgroundColor: '#484848',

  },
});

export default MenuScreen;
