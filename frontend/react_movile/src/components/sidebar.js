import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image,TouchableHighlight } from "react-native";
import { Link } from "react-router-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuDrawer from "react-native-side-drawer";



class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
      }
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
            source={require("../assets/ticket.jpg")}
          />
          <Text
            style={{
              color: "#fff",
              marginVertical: "10%",
              alignItems: "center",
              paddingHorizontal: "5%",
              marginTop:25
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
        <View
        style={{ flex: 1, flexDirection: "row", height: 100, marginTop: -5 }}
      >          
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        />   
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
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke"
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#45CCCC",
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
    borderRadius:8,
    borderColor: "#fff",
    backgroundColor: "#8DB8B8"
  },
  menu: {
    flex: 1,
    backgroundColor: "#B33992"
  }
});

export default Sidebar;
