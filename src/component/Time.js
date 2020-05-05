import React, {Component} from 'react';
import {Text} from 'react-native';
import moment from 'moment';
export default class Time extends Component {
  data = this.props.time;
  render() {
    const time = moment(this.data || moment.now()).fromNow();
    return <Text note>{time}</Text>;
  }
}
