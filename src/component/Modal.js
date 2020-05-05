import React, {Component} from 'react';
import {Modal, Share, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Content,
  Header,
  Title,
  Body,
  Left,
  Icon,
  Right,
  Button,
} from 'native-base';
const webViewHeight = Dimensions.get('window').height - 56;
export default class NewsModal extends Component {
  handleShare = () => {
    const {url, title} = this.props.articleData;
    var message = `${title}\n\nRead More @ ${url}\n\n Share via Dammyayans News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };
  render() {
    const {showModal, articleData, onClose} = this.props;
    const {url} = articleData;
    return (
      <Modal
        animated="slide"
        visible={showModal}
        transparent
        onRequestClose={onClose}>
        <Container
          style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
          <Header style={{backgroundColor: '#009387'}}>
            <Left>
              <Button transparent onPress={onClose}>
                <Icon name="close" style={{color: 'white', fontSize: 24}} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{color: '#fff'}} />
            </Body>
            <Right>
              <Button transparent onPress={this.handleShare}>
                <Icon name="share" style={{color: 'white', fontSize: 24}} />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={{height: webViewHeight}}>
            <WebView
              source={{uri: url}}
              style={{flex: 1}}
              onError={onClose}
              scalesPageToFit
              startInLoadingState
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}
