import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';




export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>

                    <View style={styles.container}>

                      <MapView style={styles.map}
                      
                      initialRegion={{
                      latitude: 52.4751,
                      longitude: 1.8298,
                      latitudeDelta: 0.050, 
                      longitudeDelta: 0.050,
  }}
                      />
                          </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {


    width: Dimensions.get( 'window').width,
    height: Dimensions.get('window').height,

  },
});

