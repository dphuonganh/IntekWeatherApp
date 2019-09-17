import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

import WeatherInform from './WeatherInform';
import PickerList from './PickerList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>

        <Text style={styles.appTitle}>Weather Statistics</Text>

        <View style={styles.fbBtn}>
          <TouchableOpacity
            style={styles.fbBlock}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            <Image
              style={styles.fbLogo}
              source={require('./assets/fbLogo.jpg')}
            />
            <Text style={styles.fbText}>   Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerBlock}>
        <PickerList />
        </View>

        <View style={styles.pic}>
        <WeatherInform />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },

  header: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#0097D6',
    paddingTop: 20,
    color: 'white',
  },

  appTitle: {
    margin: 10,
    fontSize: 24,
  },

  fbBtn: {
    alignSelf: 'flex-star',
    marginLeft: 75,
    height: 50,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    marginBottom: 20,
  },

  fbBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  fbLogo: {
    width: 17,
    height: 18,
  },

  fbText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },

  pickerBlock: {
    marginBottom: 65,
  },

  pic: {
    marginVertical: 50,
  },
});
