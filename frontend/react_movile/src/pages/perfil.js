import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Button
} from "react-native";
import { Card } from "react-native-elements";
import MenuDrawer from "react-native-side-drawer";
import { Link } from "react-router-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import API from "../components/API";
import { ListItem } from 'react-native-elements'

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: [],
      open: false,
      idpersona: "",
      nombre_persona:"",
    };
  }

  getData = () => {    
    axios.get(`${API}getlogin?correo=${ this.state.idpersona }`)
    .then( response => {
      this.setState({ persona: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  };

  editarPerfil = (p_id, p_nombres,p_apellidos, p_direccion,p_correo,p_clave) => {
    AsyncStorage.setItem('id', p_id);
    AsyncStorage.setItem('nombres',p_nombres );
    AsyncStorage.setItem('apellidos', p_apellidos);
    AsyncStorage.setItem('direccion', p_direccion);
    AsyncStorage.setItem('correo', p_correo);
    AsyncStorage.setItem('clave', p_clave);
    this.props.history.push('/update')
  }

  componentDidMount() {
    this.asyncstorageGet();
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  asyncstorageGet = async () => {
    try {
      const id = await AsyncStorage.getItem("idpersona");
      this.setState({ idpersona: id });
      //alert(this.state.idpersona)
      this.getData();
    } catch (e) {
      alert(e);
    }
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity onPress={this.toggleOpen}>
          <Icon
            style={styles.closeButton}
            name="close"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>

        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              marginHorizontal: "15%",
              borderRadius: 100
            }}
            source={require("../assets/scooter.jpg")}
          />
          <Text
            style={{
              color: "#fff",
              marginVertical: "10%",
              alignItems: "center",
              paddingHorizontal: "5%",
              marginTop: 25
            }}
          >
            T H W S
          </Text>
          <TouchableHighlight>
            <Link to="/perfil" style={styles.menuButton}>
              <Text style={{ color: "#fff" }}>Perfil</Text>
            </Link>
          </TouchableHighlight>
        </View>      
        <View>
          <TouchableHighlight>
            <Link to="/scooters" style={styles.menuButton}>
              <Text style={{ color: "#fff" }}>Scooters</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View>          
          <TouchableHighlight>
            <Link to="/mapa" style={styles.menuButton}>
              <Text style={{ color: "#fff" }}>Mapa</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight>
            <Link to="/reserve" style={styles.menuButton}>
              <Text style={{ color: "#fff" }}>Reservaciones</Text>
            </Link>
          </TouchableHighlight>
        </View>        
        <View>
          <TouchableHighlight style={styles.menuButton}>
            <Link to="/scaner">
              <Text style={{ color: "#fff" }}>Escanear Código</Text>
            </Link>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={styles.menuButton}>
            <Link to="/">
              <Text style={{ color: "#fff" }}>Cerrar Sesión</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  render() {
    const { persona} = this.state;
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              height: 100,
              marginTop: -5
            }}
          >
            <TouchableOpacity onPress={this.toggleOpen} style={styles.menu}>
              <Icon
                style={styles.openButton}
                name="navicon"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Travel Healtly with Scooter</Text>
            </View>
          </View>
            <View style={styles.body}>
          <ScrollView alwaysBounceVertical>
            {persona.map(item => (
                  <View key={item.id}>
                  <ListItem
                    title={item.nombres}
                    subtitle={item.correo}
                    leftAvatar={{ source: { uri: item.correo } }}
                    bottomDivider
                    chevron
                  />
                    <Link to="/update" onPress={()=>{this.editarPerfil(item.id, item.nombres, item.apellidos, item.direccion, item.correo,item.clave)}}>
                    <Text style={styles.btnBack}>Editar</Text>
                  </Link>
                  </View>
            ))}
          </ScrollView>          
          </View>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#45CCCC",
    marginTop: -5
  },
  header: {
    flex: 2,
    marginTop: -5,
    backgroundColor: "#B33992"
  },
  body: {
    flex: 6
  },
  btnBack: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#f3b667",
    fontSize: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    borderRadius: 100,
    paddingVertical: 10,
    marginHorizontal: 50,
    marginBottom: 20
  },
  text: {
    color: "#000",
    paddingLeft: "10%",
    paddingBottom: "5%",
    paddingTop: "8%",
    fontSize: 18
  },
  textHeader: {
    color: "white",
    paddingLeft: "10%",
    paddingBottom: "5%",
    paddingTop: "15%",
    fontSize: 18
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  menu: {
    flex: 0.5,
    backgroundColor: "#B33992"
  },
  openButton: {
    marginTop: "50%",
    marginHorizontal: "15%"
  },
  closeButton: {
    marginTop: "15%",
    marginBottom: "20%",
    marginLeft: "5%",
    marginRight: "60%",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  menuButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#fff",
    backgroundColor: "#8DB8B8"
  },
  containerTable: {
    marginHorizontal: 20
  },
  item: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: 30
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  },
  itemContent: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: 30
  }
});
