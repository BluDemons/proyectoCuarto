import React from 'react';
import MapView, { PROVIDER_GOOLE } from 'react-native-maps';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "react-router-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default class Mapa extends React.Component {
  constructor(props) {
    super(props)

    // Estado inicial de los componentes
    this.state = {
      // Tendrá las coordenadas del marcador
      latLng: {
        latitude: 0,
        longitude: 0,
      },

      // Configuración del mapa
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords
      this.setState({
        latLng: { latitude, longitude },
        region: {
          ...this.state.region,
          latitude,
          longitude
        }
      })
    })
  }
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
            <Link to="/">
              <Text style={{ color: "#fff" }}>Cerrar Sesión</Text>
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  render() {
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
            <Link to="/reserve" >
              <Icon
                style={styles.openButton}
                name="navicon"
                size={30}
                color="#fff"
              />
              </Link>
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
                    <MapView style={styles.mapStyle}
                      provider={PROVIDER_GOOLE}
                      region={this.state.region}
                      showsUserLocation
                      loadingEnabled />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
    backgroundColor: '#fff',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#2c7a7b',
  },
  header: {
    flex: 2, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  body: {
    flex: 6,
  },
  text:{
    color:'#000',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '8%',
    fontSize: 18,
  },
  textHeader:{
    color:'white',
    paddingLeft:'10%',
    paddingBottom: '5%',
    paddingTop: '15%',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  menu: {
    flex: 0.5, 
    height: 75, 
    backgroundColor: '#2c7a7b',
  },
  openButton: {
    marginTop: '50%',
    marginHorizontal: '15%',
  },  
  closeButton: {
    marginTop: '15%',
    marginBottom: '20%',
    marginLeft: '5%',
    marginRight: '60%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  containerTable: {
    marginHorizontal: 20
  },
  item: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 30,
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemText: {
    color: '#fff'
  },
  itemContent: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: 30,
  },
  mapStyle: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
});
