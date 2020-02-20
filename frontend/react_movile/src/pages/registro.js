import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "react-native-elements";
import axios from "axios";

const API_REGISTRO = "http://192.168.0.112:5000/server/registro";

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: "",
      apellidos: "",
      direccion: "",
      correo: "",
      clave: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  registro = () => {
    if (
      this.state.nombres === "" ||
      this.state.apellidos === "" ||
      this.state.direccion === "" ||
      this.state.correo === "" ||
      this.state.clave === ""
    ) {
      alert("Complete todos los datos para continuar...");
    } else {
      axios
        .post(API, this.state)
        .then(response => {
          if (response.data.mensaje === "found") {
            AsyncStorage.setItem(
              "id",
              this.state.estudiante_cedula.toString()
            );
            return this.props.history.push("login");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  }

  render() {
    const { estudiante_correo, estudiante_cedula } = this.state
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Correo Intitucional</Text>
        <View style={styles.containerEmail}>
          <Icon type="font-awesome" name="user" color="black" containerStyle={styles.icon}/>
          <TextInput 
            placeholder="@yavirac.edu.ec" 
            placeholderTextColor="gray" 
            name="estudiante_correo" 
            value={ estudiante_correo } 
            onChangeText={ this.estudiante_correo_Handler }
            style={styles.textInput}/> 
        </View>

        <Text style={styles.text}>Contraseña</Text>
        <View style={styles.containerPassword}>
          <Icon type="entypo" name="key" color="black" containerStyle={styles.icon}/>
          <TextInput 
            placeholder="*******" 
            placeholderTextColor="gray" 
            name="estudiante_cedula" 
            value={ estudiante_cedula } 
            onChangeText={ this.estudiante_cedula_Handler }
            style={styles.textInput} secureTextEntry={true}/> 
        </View>

        <View style={styles.containerIngresar}>
            <Button title="Ingresar" onPress={ this.login } />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: '#4fd1c5',
  },
  containerIngresar:{
    height: 60,
    marginLeft:'25%',
    marginRight:'25%',
    paddingTop:'10%',
  },
  containerEmail:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginRight:'10%',
  },
  icon:{
    flex:1,
    paddingTop: '5%',
  },
  text:{
    color:'#ffffff',
    paddingLeft:'25%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: 17,
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    paddingLeft:'15%',
  },
  button: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
