import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {consumido:0, status:'ruim', pct:0};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
    let s = this.state;  
    s.pct = Math.round(((s.consumido/2000)*100)); 
 
    if(s.pct < 70){
      s.status = 'Ruim';
    } else if (70 < s.pct){
      s.status = 'Bom';
    } if (100 < s.pct){
      s.status = 'Muito Bom!' 
    } if (120 < s.pct){
      s.status = 'Cuidado..'
    }


    this.setState(s);
  }

  addCopo() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>

            <View style={styles.infoArea}> 
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Minha Meta</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Até agora</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>  
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctTexto}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btnBg} onPress={this.addCopo}>
                <Text style={styles.btnTxt}>Add 200ml</Text>
              </TouchableOpacity>
            </View>
  
          </View>  
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    paddingTop:20
  },
  bgimage:{
    flex: 1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:70
  },
  area:{
    flex:1,
    alignItems:'center'
  },
  areaTitulo:{
    color:'#45b2fc',
    fontSize:15
  },
  areaDado:{
    color:'#2b4274',
    fontSize:18,
    fontWeight:'bold'
  },
  pctArea:{
    marginTop:150,
    alignItems:'center'
  },
  pctTexto:{
    fontSize:100,
    fontWeight:'bold',
    color:'#FFFFFF',
    backgroundColor:'transparent'
  },
  btnArea:{
    marginTop:30,
    alignItems:'center'
  },
  btnBg:{
    padding:10,
    backgroundColor:'#FFFFFF'
  },
  btnTxt:{
   borderWidth: 1, 
   borderColor:'#FFFFFF', 
   color:'#45b2fc',
   fontSize:20
  } 
});
