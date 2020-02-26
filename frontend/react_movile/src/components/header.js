import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserva: [],
      open: false,
      id_estudiante: ""
    };
  }
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", height: 100, marginTop: -5 }}
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
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: "#B33992"
  },
  menu: {
    flex: 0.5,
    backgroundColor: "#B33992"
  }
});

export default Header;
