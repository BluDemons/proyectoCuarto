import * as React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { Icon, Button } from "react-native-elements";
import { Link } from "react-router-native";
import axios from "axios";
import API from "../components/API";
import { ScrollView } from "react-native-gesture-handler";

const imgbg = require("../assets/dark.jpg");

export default class RegistroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: "",
      apellidos: "",
      direccion: "",
      correo: "",
      clave: "",
      idTipoPersona: 2
    };
  }

  usuario_nombre_Handler = text => {
    this.setState({ nombres: text });
  };

  usuario_apellidos_Handler = text => {
    this.setState({ apellidos: text });
  };

  usuario_direccion_Handler = text => {
    this.setState({ direccion: text });
  };

  usuario_correo_Handler = text => {
    this.setState({ correo: text });
  };

  usuario_clave_Handler = text => {
    this.setState({ clave: text });
  };

  static navigationOptions = {
    header: null
  };

  registroUser = e => {
    e.preventDefault();
    this.post = {
      datos: {
        nombres: this.state.nombres,
        apellidos: this.state.apellidos,
        direccion: this.state.direccion,
        correo: this.state.correo,
        clave: this.state.clave,
        idTipoPersona: this.state.idTipoPersona
      }
    };

    //console.log(this.post.datos);
    if (
      this.post.datos.nombres === "" ||
      this.post.datos.apellidos === "" ||
      this.post.datos.direccion === "" ||
      this.post.datos.correo === "" ||
      this.post.datos.clave === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios
        .post(API + "persona", this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Usuario registrado correctamente");
            return this.props.history.push("/");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { nombres, apellidos, direccion, correo, clave } = this.state;
    return (
      <ImageBackground source={imgbg} style={{ width: "100%", height: "100%" }}>    
        <Text style={styles.header}>Registro</Text>
        <ScrollView alwaysBounceVertical style={styles.containerScrool}>
          <View style={styles.container}>
            <Text style={styles.text}>Nombres</Text>
            <View style={styles.containerEmail}>
              <Icon
                type="font-awesome"
                name="wpforms"
                color="black"
                containerStyle={styles.icon}
              />
              <TextInput
                placeholder="nombres"
                placeholderTextColor="gray"
                name="nombres"
                value={nombres}
                onChangeText={this.usuario_nombre_Handler}
                style={styles.textInput}
              />
            </View>
            <Text style={styles.text}>Apellidos</Text>
            <View style={styles.containerEmail}>
              <Icon
                type="font-awesome"
                name="wpforms"
                color="black"
                containerStyle={styles.icon}
              />
              <TextInput
                placeholder="apellidos"
                placeholderTextColor="gray"
                name="apellidos"
                value={apellidos}
                onChangeText={this.usuario_apellidos_Handler}
                style={styles.textInput}
              />
            </View>
            <Text style={styles.text}>Dirección</Text>
            <View style={styles.containerEmail}>
              <Icon
                type="MaterialIcons"
                name="add-location"
                color="black"
                containerStyle={styles.icon}
              />
              <TextInput
                placeholder="García Moreno S4-35 y Ambato"
                placeholderTextColor="gray"
                name="direccion"
                value={direccion}
                onChangeText={this.usuario_direccion_Handler}
                style={styles.textInput}
              />
            </View>
            <Text style={styles.text}>Correo Electrónico</Text>
            <View style={styles.containerEmail}>
              <Icon
                type="Entypo"
                name="email"
                color="black"
                containerStyle={styles.icon}
              />
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor="gray"
                name="correo"
                value={correo}
                onChangeText={this.usuario_correo_Handler}
                style={styles.textInput}
              />
            </View>

            <Text style={styles.text}>Contraseña</Text>
            <View style={styles.containerPassword}>
              <Icon
                type="entypo"
                name="key"
                color="black"
                containerStyle={styles.icon}
              />
              <TextInput
                placeholder="*******"
                placeholderTextColor="gray"
                name="clave"
                value={clave}
                onChangeText={this.usuario_clave_Handler}
                style={styles.textInput}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.containerIngresar}>
              <Button title="Guardar" onPress={this.registroUser} />
            </View>
            <View style={styles.containerCancelar}>
              <Button title="Cancelar" onPress={()=>{this.props.history.push('/')}} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "30%",
    height:"100%"
  },
  containerScrool: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    marginTop: "20%"
  },
  header: {
    marginTop: "10%",
    marginLeft: "2%",
    fontSize: 25,
    color: "#fff"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: "center",
    fontSize: 14,
    color: "#2e78b7"
  },
  containerIngresar: {
    height: "25%",
    marginLeft: "25%",
    marginRight: "25%",
    paddingTop: "15%"
  },
  containerCancelar: {
    height: "25%",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop:"-5%"
  },
  containerEmail: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "10%",
    marginRight: "10%"
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "10%",
    marginRight: "10%"
  },
  icon: {
    flex: 1,
    paddingTop: "5%"
  },
  text: {
    color: "#ffffff",
    paddingLeft: "25%",
    paddingBottom: "5%",
    paddingTop: "5%",
    fontSize: 17
  },
  textInput: {
    backgroundColor: "transparent",
    flex: 5,
    color: "black",
    paddingLeft: "15%"
  },
  button: {
    position: "relative",
    bottom: "0%",
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
