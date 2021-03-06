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
import API from '../components/API';

export default class Reserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserva: [],
      scooter:[],
      horario:[],
      persona:[],
      open: false,
      descripcion: "",
      precio_total: "",
      idpersona: '',
      idscooter: "",
      idhorario: ""
    };
  }

  componentDidMount() {
    this.asyncstorageGet()
  }
  
  getData = () => {
    axios.get(API+"scooters_disponibles?estado=1")
    .then( response => {
      this.setState({ scooter: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })

    axios.get(`${API}getlogin?correo=${ this.state.idpersona }`)
    .then( response => {
      this.setState({ persona: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(API+'horario')
    .then( response => {
      this.setState({ horario: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  asyncstorageGet = async () => {
    try {
      const id = await AsyncStorage.getItem('idpersona')
      this.setState({ idpersona: id})
      const qrcode = await AsyncStorage.getItem('idscooter')
      this.setState({idscooter:qrcode})
      //alert(qrcode)
      //alert(`Bienvenido: ${id}`)
      this.getData()
    } catch (e) {
      alert(e)
    }
  }

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ idpersona: "" });
    } catch (e) {
      alert(e);
    }
  };

  descripcion_Handler = text => {
    this.setState({ descripcion: text });
  };

  precio_Handler = text => {
    this.setState({ precio_total: text });
  };

  persona_Handler = text => {
    this.setState({ idpersona: text });
  };

  scooter_Handler = text => {
    this.setState({ idscooter: text });
  };

  horario_Handler = text => {
    this.setState({ idhorario: text });
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  registroScooter = e => {
    e.preventDefault();
    this.post = {
      datos: {
        descripcion: `Se realizo la reserva del scooter: ${this.idscooter} a la persona ${this.idpersona}`,
        precio_total: this.state.precio_total,
        idpersona: this.state.idpersona,
        idscooter: this.state.idscooter,
        idhorario: this.state.idhorario
      }
    };

    //console.log(this.post.datos);
    if (
      this.post.datos.descripcion === "" ||
      this.post.datos.precio_total === "" ||
      this.post.datos.idpersona === "" ||
      this.post.datos.idscooter === "" ||
      this.post.datos.idhorario === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios
        .post(API + "reserva", this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Compra correctamente");
            return this.props.history.push("/scooters");
          }
        })
        .catch(error => {
          alert(error);
        });
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
            <Link to="/" onPress={() => this.asyncstorageClear()}>
              <Text style={{ color: "#fff" }}>Cerrar Sesión</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  render() {
    const { reserva } = this.state;
    const {
      scooter,
      horario,
      descripcion,
      precio_total,
      idpersona,
      idscooter,
      persona,
      idhorario
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
            <Text style={styles.text}>Reservaciones Realizadas.</Text>
            <ScrollView alwaysBounceVertical style={styles.containerScrool}>
              <View style={styles.formulario}>
                <Text style={styles.text}>descripcion</Text>
                <View style={styles.containerEmail}>                  
                  <TextInput
                    placeholder="descripcion"
                    placeholderTextColor="white"
                    name="descripcion"
                    value={descripcion}
                    onChangeText={this.descripcion_Handler}
                    style={styles.textInput}
                  />
                </View>
                <Text style={styles.text}>Precio</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="precio"
                    placeholderTextColor="white"
                    name="precio_total"
                    defaultValue={precio_total}
                    autoCompleteType={"cc-number"}
                    keyboardType={"numbers-and-punctuation"}
                    onChangeText={this.precio_Handler}
                    style={styles.textInput}
                  />
                </View>
                {/* <Text style={styles.text}>Usuario</Text>
                <View style={styles.containerEmail}>
                  <TextInput
                    placeholder="usuario"
                    placeholderTextColor="white"
                    name="idpersona"
                    value={idpersona}
                    onChangeText={this.persona_Handler}
                    style={styles.textInput}
                  />
                </View> */}
                <Picker
                  selectedValue={this.state.idpersona}
                  style={styles.picker}
                  onValueChange={(itemValue) =>
                    this.setState({ idpersona: itemValue })
                  }
                >
                  <Picker.Item label="Usuario" />
                  {persona.map(item=>(
                  <Picker.Item key={item.id} label={item.nombres+' '+item.apellidos} value={item.id}></Picker.Item>
                  ))} 
                </Picker>               
                <Picker
                  selectedValue={this.state.idhorario}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ idhorario: itemValue })
                  }
                >
                  <Picker.Item label="Seleccione tiempo" />
                  {horario.map(item=>(
                  <Picker.Item key={item.id} label={item.hora+' '+item.precio} value={item.id}>{" "}{item.precio}{" "}</Picker.Item>
                  ))} 
                </Picker>
                              
                <Picker
                  selectedValue={this.state.idscooter}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ idscooter: itemValue })
                  }
                >
                  <Picker.Item label="Seleccione dispositivo" />
                  {scooter.map(item=>(
                  <Picker.Item key={item.id} label={item.descripcion} value={item.id}>{item.descripcion}</Picker.Item>
                  ))} 
                </Picker> 
                <View style={styles.containerIngresar}>
                  <Button title="Reservar" onPress={this.registroScooter} />
                </View>
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
  formulario:{
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    marginTop:40,
    padding:10
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
  picker:{
    marginLeft: "10%",
    marginRight: "10%",
  },
  textInput: {
    backgroundColor: "#008080",
    flex: 5,
    textDecorationColor: "white",
    paddingLeft: "15%",
    opacity:0.5
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
