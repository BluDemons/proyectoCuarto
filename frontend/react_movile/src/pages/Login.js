import * as React from 'react';
import { Text, TextInput, View, StyleSheet, AsyncStorage,TouchableOpacity, ImageBackground } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import {Link} from 'react-router-native';
import axios from 'axios';
import API from '../components/API';

const imgbg = require('../assets/dark.jpg');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      correo: '',
      clave: ''
    }
  }

  usuario_correo_Handler = text => {
    this.setState({ correo: text })
  }

  usuario_clave_Handler = text => {
    this.setState({ clave: text })
  }

  static navigationOptions ={
    header: null
  }

  login = () => {
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API+'login', this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          AsyncStorage.setItem('idpersona', this.state.correo.toString());
          return this.props.history.push("reserve");
        }
      })
      .catch(error => {
        alert(error)
      })
    }
  }

  render() {
    const { correo, clave } = this.state
    return (
      <ImageBackground source={imgbg} style={{width: '100%', height: '100%'}}>
      <View style={styles.container} >

        <Text style={styles.text}>Correo</Text>
        <View style={styles.containerEmail}>
          <Icon type="font-awesome" name="user" color="black" containerStyle={styles.icon}/>
          <TextInput 
            placeholder="@gmail.com" 
            placeholderTextColor="gray" 
            name="correo" 
            value={ correo } 
            onChangeText={ this.usuario_correo_Handler }
            style={styles.textInput} /> 
        </View>

        <Text style={styles.text}>Contraseña</Text>
        <View style={styles.containerPassword}>
          <Icon type="entypo" name="key" color="black" containerStyle={styles.icon}/>
          <TextInput 
            placeholder="*******" 
            placeholderTextColor="gray" 
            name="clave" 
            value={ clave } 
            onChangeText={ this.usuario_clave_Handler }
            style={styles.textInput} secureTextEntry={true}/> 
        </View>
        <TouchableOpacity  style={styles.helpLink}>
        <Link to='/registro'>
            <Text style={styles.helpLinkText}>¿Nuevo usuario? ¡Por favor regístrate!</Text>
        </Link>
          </TouchableOpacity>

        <View style={styles.containerIngresar}>
            <Button  title="Ingresar" onPress={ this.login } />
        </View>
      </View>
      </ImageBackground>
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
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign:'center',
    fontSize: 14,
    color: '#2e78b7',
  },
  containerIngresar:{
    height: '25%',
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})