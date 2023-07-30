import React from "react";
import {Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  return(
    <SafeAreaView style={{backgroundColor:"#FFF8EA", flex:1}}>
      <View style={{flexDirection:"row", justifyContent:"space-between", height:windowHeight/10}}>

        <View style={{ borderBottomLeftRadius:50, borderBottomRightRadius:100, backgroundColor:"white", alignItems:"center", justifyContent:"center", width:windowWidth/3, height:"100%"}}>
          <Image source={require("../../assets/1x1/ht_hafta_sonu_siyah.png")} style={{ height:'45%', width:"100%"}} resizeMode={"contain"}/>
        </View>

        <TouchableOpacity style={{marginTop:'6%', marginRight:'6%'}}>
          <Image source={require("../../assets/1x1/list_logo.png")} resizeMode={"contain"} style={{width:30, height:30}}/>
        </TouchableOpacity>
      </View>
      <ImageBackground source={require("../../assets/1x1/Halkalar.png")} resizeMode="cover" style={{flex:1, alignItems:"center", justifyContent:"center"}}>

        <View style={{alignItems:"center"}}>
          <Image source={require("../../assets/1x1/hafta_sonu_renkli.png")} resizeMode="center" style={{width:windowWidth/1.3, height:windowHeight/4}}/>
        </View>

        <View style={{flexDirection:"row", width:windowWidth/1.3}}>

          <TouchableOpacity
              style={{backgroundColor:"#FFF8EA", borderWidth:2, borderColor:"#E9D29E", borderRadius:25, width:150, height:50, justifyContent:"center", alignItems:"center"}}
              onPress={() => props.navigation.navigate("List")}>
            <Text style={{textAlign:"center", fontWeight:"bold", color:"#000000", fontSize:21}}>görüntüle</Text>
          </TouchableOpacity>
          <View style={{width:10}}/>
          <TouchableOpacity
              style={{backgroundColor:"#FFF8EA", borderWidth:2, borderColor:"#E9D29E", borderRadius:50, width:50, height:50, justifyContent:"center", alignItems:"center"}}
              onPress={() => props.navigation.navigate("List")}>
            <Image source={require("../../assets/1x1/saga_ok_siyah.png")} resizeMode={"center"} style={{width:20, height:10}}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{height:windowHeight/15, alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontSize:10,}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
      </View>
    </SafeAreaView>
  )

}

export default HomeScreen;
