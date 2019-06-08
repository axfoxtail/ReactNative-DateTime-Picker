/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time:"11:11",
      date:"2016-05-15"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
          <Text style={{textAlign: 'center', fontSize: 40, color: 'blue'}}>Smarty Solution</Text>
          <Text style={{textAlign: 'center', color: 'green'}}>Smarty Solution</Text>
        </View>
        <View style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
          <Text style={{textAlign: 'center'}}>React Native DatePicker component for both Android and iOS, using DatePickerAndroid, TimePickerAndroid and DatePickerIOS</Text>
        </View>
        <View>
          <Text style={{}}>Spinner Time picker</Text>
          <DatePicker
            style={{width: 70, marginLeft: 'auto', marginRight: 'auto'}}
            date={this.state.time}
            mode="time"
            placeholder="select date"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            androidMode="spinner"
            is24Hour={true}
            showIcon={false}
            customStyles={{
              dateInput: {
                marginLeft: 0,
                width: 70
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(time) => {this.setState({time: time});}}
          />
        </View>
        <View>
          <Text style={{}}>Calendar Time picker</Text>
          <DatePicker
            style={{width: 120, marginLeft: 'auto', marginRight: 'auto'}}
            date={this.state.time}
            mode="time"
            placeholder="select date"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            is24Hour={true}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(time) => {this.setState({time: time});}}
          />
        </View>
        <View>
          <Text style={{}}>Spinner Time picker</Text>
          <DatePicker
            style={{width: 170, marginLeft: 'auto', marginRight: 'auto'}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2018-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            androidMode="spinner"
            is24Hour={true}
            showIcon={false}
            customStyles={{
              dateInput: {
                marginLeft: 0,
                width: 70
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date});}}
          />
        </View>
        <View>
          <Text style={{}}>Calendar Time picker</Text>
          <DatePicker
            style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2018-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            is24Hour={true}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: 0,
                top: 4,
                marginRight: 0
              },
              dateInput: {
                marginRight: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date});}}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text>https://github.com/xgfe/react-native-datepicker</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
