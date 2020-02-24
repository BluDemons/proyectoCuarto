import * as React from 'react';
import { Text, TextInput, View, StyleSheet, AsyncStorage } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import axios from 'axios';

const API = 'http://192.168.0.112:5000/server/login'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      clave: '',
    }
  }

  correo_Handler = text => {
    this.setState({ correo: text })
  }

  clave_Handler = text => {
    this.setState({ clave: text })
  }

  static navigationOptions ={
    header: null
  }

  login = () => {
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          return this.props.history.push("library");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  }

  render() {
    const { correo, clave } = this.state
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Correo Electrónico</Text>
        <View style={styles.containerEmail}>
          <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/>
          <TextInput placeholder="@gmail.com" placeholderTextColor="gray" name="correo" value={ correo } onChangeText={ this.correo_Handler }
          style={styles.textInput}/> 
        </View>

        <Text style={styles.text}>Contraseña</Text>
        <View style={styles.containerPassword}>
          <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/>
          <TextInput placeholder="*******" placeholderTextColor="gray" name="clave" value={ clave } onChangeText={ this.clave_Handler }
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