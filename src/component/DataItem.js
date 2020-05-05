import React, {Component} from 'react';
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import Time from './Time';
import {View} from 'react-native';
export class DataItem extends Component {
  state = {
    data: this.props.data,
  };
  handlePress = () => {
    const {url, title} = this.state.data;
    this.props.onPress({url, title});
  };
  render() {
    return (
      <>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri:
                  this.state.data.urlToImage != null
                    ? this.state.data.urlToImage
                    : 'https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
            />
          </Left>
          <Body>
            <Text numberOfLines={2}> {this.state.data.title} </Text>
            <Text note numberOfLines={2}>
              {this.state.data.description}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 8,
                marginLeft: 0,
              }}>
              <Text note>{this.state.data.source.name}</Text>
              <Time time={this.state.data.publishAt} />
            </View>
          </Body>
          <Right>
            <Button transparent onPress={this.handlePress}>
              <Text> View </Text>
            </Button>
          </Right>
        </ListItem>
      </>
    );
  }
}

export default DataItem;
