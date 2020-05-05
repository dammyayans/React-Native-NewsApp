import React, {Component} from 'react';
import {Container, Content, List, Button, Text} from 'native-base';
import {Alert, View, ActivityIndicator} from 'react-native';
import {getArticles} from '../../service/news';
import DataItem from '../../component/DataItem';
import Modal from '../../component/Modal';

export default class tab2 extends Component {
  state = {
    isLoading: true,
    data: null,
    reload: false,
    animating: true,
    setModalVisible: false,
    modalArticleData: {},
  };
  handleDataonPressed = articleData => {
    this.setState({setModalVisible: true, modalArticleData: articleData});
  };
  handleDataonClosed = () => {
    this.setState({setModalVisible: false, modalArticleData: {}});
  };
  componentDidMount() {
    this.reload();
  }
  reload() {
    getArticles('sport').then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
          reload: false,
        });
      },
      error => {
        this.setState({reload: true});
        Alert.alert("Error, 'Something went wrong'" + error);
      },
    );
  }
  render() {
    let view = this.state.isLoading ? (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
        {this.state.reload && (
          <Button bordered danger onPress={() => this.reload()}>
            <Text>Reload</Text>
          </Button>
        )}
        <ActivityIndicator animating={this.state.isLoading} />
      </View>
    ) : (
      <List
        keyExtractor={item => item.url}
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem data={item} onPress={this.handleDataonPressed} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleDataonClosed}
        />
      </Container>
    );
  }
}
