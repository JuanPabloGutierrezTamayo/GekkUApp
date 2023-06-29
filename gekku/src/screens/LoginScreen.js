import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Login from "../components/Login";

const functions = [
  "Consultar tu historia académica",
  "Visualizar de manera interactiva tu progreso académico",
  "Llevar registro de tus notas",
  "Asignar recordatorios y alertas",
  "Visualizar los horarios de las rutas intercampus"
]

const LoginScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const changeText = () => count >= functions.length - 1 ? setCount(0) : setCount(count + 1);

  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />

      <Image style={loginStyles.image} source={require("../../assets/icon.png")} />
      <Text style={loginStyles.name}>GekkU</Text>
      <Text style={loginStyles.description}>
        ¡Bienvenido a GekkU! Tu aplicación de confianza para el manejo de tu
        información académica y otra información relevante. Aquí podrás:
      </Text>

      <TouchableOpacity onPress={changeText} style={loginStyles.card}>
        <Text style={loginStyles.textCard}>{functions[count]}</Text>
      </TouchableOpacity>

      <View style={loginStyles.line} />

      <Text style={loginStyles.text}>Inicia sesión con tu cuenta del SIA</Text>
      
      <Login navigation={navigation} />
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 10,
    width: "35%",
    height: "16%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "2%"
  },
  description: {
    width: "85%",
    marginBottom: "2%",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  card: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    backgroundColor: "#2D5C44",
    borderRadius: 10,
  },
  textCard: {
    width: "100%",
    margin: "1%",
    padding: "2%",
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
  },
  line: {
    width: "85%",
    margin: "2%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    // marginBottom: 4,
    textAlign: "center",
  },
});

export default LoginScreen;
