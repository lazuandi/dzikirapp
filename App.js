import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Header, Body, Title, Button, Text, Content} from 'native-base';

export default class App extends React.Component {

  state={
    number:0
  }
  
  dClick(mulai){
    if(this.state.number<33){
      this.setState({
        number:this.state.number+1
      })  
    }else{
      alert("Dzikir sudah 33x.")
      this.setState({number:0})
    }
  }

  render(){
    const mulai='0';
    return(
      <Container>
        <Header>
          <Body style={styles.bd}>
            <Title>Dzikir App</Title>
          </Body>
        </Header>
        <Content style={{marginTop:50}}>
        <View style={styles.container}>
          <Text style={{fontSize:50}}>سُبْحَانَ اللّهُ</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.tt}>{this.state.number}</Text>
        </View>
        <View style={styles.container}>
          <Button block rounded bordered large onPress={()=>this.dClick(mulai)} style={{margin:100}}>
            <Text>+</Text>
          </Button>
        </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bd:{
    alignItems: 'center',
  },
  tt:{
    fontSize:150,
  },
});