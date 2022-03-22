import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialCommunityIcons, Fontisto   } from '@expo/vector-icons';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState('00:00:00');
  const [ultimo, setUltimo] = useState(null);

  function vai(){

      //Comecar a girar o timer...
      timer = setInterval(()=>{
        ss++;

        if(ss == 60){
          ss = 0;
          mm++;
        }

        if(mm == 60){
          mm = 0;
          hh++;
        }


        let format =
        (hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss);

        setNumero(format);


      }, 1000);
      
    

    

  }

  function limpar(){
    if(timer !== null){
      //Aqui vai parar o timer
      clearInterval(timer);
      timer = null;

      
    }


setUltimo(numero)
    setNumero('00:00:00')
    ss = 0;
    mm = 0;
    hh = 0;

    
    

  };

  function pause(){
    if(timer !== null){
      //Aqui vai parar o timer
      clearInterval(timer);
      timer = null;
      

      
    }
  }

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Text style={{color:'#fff', fontSize:45, fontWeight: 'bold'}}>Cronômetro</Text>
          </View>
      
      <Image
      source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{numero}</Text>
     

      <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}><AntDesign name="caretright" size={40} color="#000" /> </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={pause}>
          <Text style={styles.btnTexto}> <Fontisto name="pause" size={30} color="black" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}> <MaterialCommunityIcons name="stop-circle" size={40} color="black" /></Text>
        </TouchableOpacity>

        
        
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>{ultimo ? 'Ultimo tempo: ' + ultimo : ''}</Text>
      </View>
      <View>
        <Text style={{color:"#fff", marginTop:90, fontStyle:'italic'}}>Desenvolvido por Carlos Junior</Text>
        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },

  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight:'bold',
    color:'#FFF'
  },
  btnArea: {
    flexDirection:'row',
    marginTop: 160,
    height: 60,
    marginLeft:10,
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    height:60,
    marginLeft: 10,
    margin:17,
    borderRadius:30,
  }, 
  btnTexto :{
    fontSize: 20,
    fontWeight:'bold',
    color:'#000'
  },

  areaUltima: {
    marginTop: 50,
  },
  textoCorrida: {
    fontSize: 23,
    color: '#fff',
    fontStyle:'italic'

  }

});
