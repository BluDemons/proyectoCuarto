import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AsyncStorage
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

export default class ScooterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scooter: [],
      open: false,
      id_persona: ""
    };
  }

  componentDidMount() {
    axios.get(API+"scooters_disponibles?estado=1")
    .then( response => {
      this.setState({ scooter: response.data.datos })
      if (!scooter){
        alert("Lo sentimos por el momento no hay dispositivos disponibles")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  asyncstorageSave = async idscooter => {
    try {
      await AsyncStorage.setItem("idscooter", idscooter.toString());
    } catch (err) {
      alert(err);
    }
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
            <Link to="/">
              <Text style={{ color: "#fff" }}>Cerrar Sesión</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  render() {
    const { scooter } = this.state;
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
            <View style={styles.container}>
        <ScrollView alwaysBounceVertical contentContainerStyle={styles.contentContainer}>            
          <View style={styles.getStartedContainer}>              
            <ScrollView vertical={true}>
            {scooter.map(element => (
                <Card key={element.id} image={{uri:`${element.imagen}`}}>
                  <Text
                    style={{
                      marginBottom: 10,
                      fontSize: 15,
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                  >
                    {element.titulo}
                  </Text>
                  <Text style={{ marginBottom: 10 }}>
                    {element.descripcion}
                  </Text>
                  <Text style={{ marginBottom: 10 }}>
                    Código: {element.codigo}
                  </Text>
                  <Text style={{ marginBottom: 10 }}>
                    {element.estado}
                  </Text>
                </Card>
            ))}
          </ScrollView>
          </View>
        </ScrollView>
      </View>
          </View>
        </MenuDrawer>
      </View>
    );
  }
}
function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
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
