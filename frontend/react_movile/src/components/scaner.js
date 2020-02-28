import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Escaner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    AsyncStorage.setItem('idscooter',data.toString())
    alert(`Código de barra con el tipo ${type} y la información ${data} fueron escaneados!`);
    //return this.props.history.push("/reserve");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ idscooter: "" });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View
      style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "10%",
    marginLeft:"5%",
    marginRight:"5%",
    marginBottom:"10%",
    height:"100%"
  },
})