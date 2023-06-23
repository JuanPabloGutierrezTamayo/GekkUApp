import React, { useState } from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />
      <Image style={loginStyles.image} source={require("../../assets/icon.png")} />
      <Text style={loginStyles.name}>GekkU</Text>
      <Text style={loginStyles.text}>Inicia sesión con tu cuenta del SIA</Text>
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Usuario (sin @unal.edu.co)"
          placeholderTextColor="#b5b3b3"
          onChangeText={(user) => setUser(user)}
        /> 
      </View> 
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Contraseña"
          placeholderTextColor="#b5b3b3"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={loginStyles.text}>¿Olvidaste tu contraseña?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={loginStyles.loginBtn}>
        <Text style={loginStyles.loginText}>Iniciar sesión</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={loginStyles.login2Btn}>
        <Text style={loginStyles.loginText}>Iniciar sin conexión</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 20,
    width: '35%',
    height: '15%',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '10%'
  },
  inputView: {
    backgroundColor: "#c0ffc2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
  },
  text: {
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4ea545",
  },
  login2Btn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2a4826",
  },
});

export default LoginScreen;
