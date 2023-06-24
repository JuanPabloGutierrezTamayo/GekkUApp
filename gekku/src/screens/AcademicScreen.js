import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image,Button,ImageBackground} from 'react-native';

const MenuScreen = () => {
  return (
    <View style={styles.container}>

      <ImageBackground source={require("../../assets/MenuIcons/background_menu.png")} resizeMode="cover" style={styles.container}>

        <View style={styles.menu}>
          <View style={styles.row}>
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/info.png")} />
            </View>
            </TouchableOpacity> 
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/calc.png")} />
            </View>
            </TouchableOpacity> 
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/event.png")} />
            </View>
            </TouchableOpacity> 
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/not.png")} />
            </View>
            </TouchableOpacity> 
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/bus.png")} />
            </View>
            </TouchableOpacity> 
            <TouchableOpacity>
            <View style={styles.item} >
              <Image style={styles.image} source={require("../../assets/MenuIcons/map.png")} />
            </View>
            </TouchableOpacity> 
          </View>
          
        </View>

      <View style={styles.notification}>
        <Text style={styles.text}>Próximas alertas</Text>
        <View style={styles.item_notifcaciones}>

          <View style={styles.item_notifcaciones3}>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion}>Próximas alertas</Text>
            </View>
            <View style={styles.item_notifcaciones3}>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion}>Próximas alertas</Text>
            </View>
            
        </View>
        <Text style={styles.text}>Próximas clases</Text>
        <View style={styles.item_notifcaciones2}>

          <View style={styles.item_notifcaciones3}>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion2}>Próximas alertas</Text>
            <Text style={styles.text_notificacion}>Próximas alertas</Text>
            </View>

        </View>
      </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  text_notificacion: {
    color: 'white',
    fontSize: 12,
    height: '10%',
    margin: 5,
    marginTop:13
    
  },
  text_notificacion2: {
    color: 'white',
    fontSize: 15,
    height: '10%',
    margin: 5
    
  },
  image: {
    margin: 20,
    width: '75%',
    height: '80%',
    justifyContent: "center",
  },
  menu: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderRadius: 20,
    width: 55,
    height: 55,
    margin: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: "center",
  },
  notification: {
    width: '90%',
    height: '65%',
    alignItems: 'center',
    justifyContent: "center",
    margin: '5%',
    
  },
  item_notifcaciones: {
    borderRadius: 15,
    width: '100%',
    height: '50%',
    margin: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: "center",

  },
  item_notifcaciones2: {
    borderRadius: 15,
    width: '100%',
    height: '30%',
    margin: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: "center",

  },
  item_notifcaciones3: {
    borderRadius: 15,
    width: '90%',
    height: 75,
    margin: 20,
    backgroundColor: '#484848',
    alignItems: 'left',
    justifyContent: "top",

  },
});

export default MenuScreen;