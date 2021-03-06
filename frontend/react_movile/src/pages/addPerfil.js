import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AsyncStorage,
  TextInput,
  Button,
  Picker
} from "react-native";
import { Card } from "react-native-elements";
import MenuDrawer from "react-native-side-drawer";
import { Link } from "react-router-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import API from "../components/API";

export default class AddPerfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: [],
      open: false,
      idpersona: "",
      id: AsyncStorage.getItem("id"),
      nombres: AsyncStorage.getItem("nombres"),
      apellidos: AsyncStorage.getItem("apellidos"),
      direccion: AsyncStorage.getItem("direccion"),
      correo: AsyncStorage.getItem("idpersona"),
      calve: AsyncStorage.getItem("clave")
    };
  }

  componentDidMount() {
    this.asyncstorageGet();
  }

  getData = () => {
    axios
      .get(`${API}getlogin?correo=${this.state.idpersona}`)
      .then(response => {
        this.setState({
          nombre_persona:
            response.data.datos.nombres + " " + response.data.datos.apellidos
        });
        AsyncStorage.setItem("", this.state.nombre_persona.toString());
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateData = e => {
    e.preventDefault();
    this.update = {
      datos: [
        {
          id: this.state.id,
          nombres: this.state.nombres,
          apellidos: this.state.apellidos,
          direccion: this.state.direccion,
          correo: this.state.correo,
          clave: this.state.clave
        }
      ]
    };

    if (
      this.update.datos[0].id === "" ||
      this.update.datos[0].nombres === "" ||
      this.update.datos[0].apellidos === "" ||
      this.update.datos[0].direccion === "" ||
      this.update.datos[0].correo === "" ||
      this.update.datos[0].clave === ""
    ) {
      alert("Complete todos los campos para continuar!!");
    } else {
      axios
        .put(`${API}persona?correo=` + this.state.id, this.update)
        .then(response => {
          if (response.data.ok === true) {
            alert("Actualizado correctamente!").then(() =>
              this.props.history.push("/perfil")
            );
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  asyncstorageGet = async () => {
    try {
      const datoPersona = await AsyncStorage.getItem("idpersona");
      this.setState({ idpersona: datoPersona });
      this.getData();
    } catch (e) {
      alert(e);
    }
  };

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

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
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
            <Link to="/mapa" style={styles.menuButton}>
              <Text style={{ color: "#fff" }}>Mapa</Text>
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
    const {
      nombres,
      apellidos,
      direccion,
      correo,
      clave,
      idpersona
    } = this.state;
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
            <Text style={styles.header1}>Actualizar Perfil</Text>
            <ScrollView alwaysBounceVertical style={styles.containerScrool}>
              <View style={styles.container1}>
                <Text style={styles.text}>Nombres</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="nombres"
                    placeholderTextColor="white"
                    name="nombres"
                    value={nombres}
                    onChangeText={this.usuario_nombre_Handler}
                    style={styles.textInput}
                  />
                </View>
                <Text style={styles.text}>Apellidos</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="apellidos"
                    placeholderTextColor="white"
                    name="apellidos"
                    value={apellidos}
                    onChangeText={this.usuario_apellidos_Handler}
                    style={styles.textInput}
                  />
                </View>
                <Text style={styles.text}>Dirección</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="García Moreno S4-35 y Ambato"
                    placeholderTextColor="white"
                    name="direccion"
                    value={direccion}
                    onChangeText={this.usuario_direccion_Handler}
                    style={styles.textInput}
                  />
                </View>
                <Text style={styles.text}>Correo Electrónico</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="example@gmail.com"
                    placeholderTextColor="white"
                    name="correo"
                    value={idpersona}
                    onChangeText={this.usuario_correo_Handler}
                    style={styles.textInput}
                  />
                </View>

                <Text style={styles.text}>Contraseña</Text>
                <View style={styles.containerPassword}>
                  <TextInput
                    placeholder="*******"
                    placeholderTextColor="white"
                    name="clave"
                    value={clave}
                    onChangeText={this.usuario_clave_Handler}
                    style={styles.textInput}
                    secureTextEntry={true}
                  />
                </View>
                <Link onPress={this.registroUser}>
                  <Text style={styles.containerCancelar}>Guardar</Text>
                </Link>
                <Link to="/perfil">
                  <Text style={styles.containerCancelar}>Cancelar</Text>
                </Link>
              </View>
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
  container1: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "50%",
    height: "100%"
  },
  containerScrool: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    marginTop: "10%"
  },
  header1: {
    marginTop: "10%",
    fontSize: 25,
    color: "#000",
    textAlign: "center"
  },
  containerIngresar: {
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
  containerCancelar: {
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
    marginBottom: 20,
    marginTop: 10
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
  },
  formulario: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
    padding: 10
  },
  containerIngresar: {
    height: "25%",
    marginLeft: "25%",
    marginRight: "25%",
    paddingTop: "10%"
  },
  containerEmail: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "10%",
    marginRight: "10%"
  },
  text: {
    color: "#fff",
    paddingLeft: "25%",
    paddingBottom: "5%",
    paddingTop: "5%",
    fontSize: 17
  },
  picker: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  textInput: {
    backgroundColor: "#008080",
    flex: 5,
    color: "black",
    paddingLeft: "15%",
    opacity: 0.5
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "10%",
    marginRight: "10%"
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
