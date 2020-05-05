import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import {StyleSheet} from 'react-native';

const TabsScreen = () => {
  return (
    <Container>
      <Header style={styles.header}>
        <Left />
        <Body style={styles.center}>
          <Title>News App</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          heading="General"
          activeTextStyle={{color: 'white'}}>
          <Tab1 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          heading="Sport"
          activeTextStyle={{color: 'white'}}>
          <Tab2 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: '#009387'}}
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          heading="Technology"
          activeTextStyle={{color: 'white'}}>
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
};
const styles = StyleSheet.create({
  center: {
    position: 'absolute',
    left: '40%',
  },
  header: {
    backgroundColor: '#009387',
  },
});
export default TabsScreen;
