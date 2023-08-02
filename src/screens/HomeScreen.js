import React from "react";
import {Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from 'react-native';
import HeaderBarComponent from "../components/HeaderBarComponent";
import FooterBarComponent from "../components/FooterBarComponent";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  return(
      <SafeAreaView style={{backgroundColor:"#FFF8EA", flex:1}}>
        <StatusBar/>
        <HeaderBarComponent navigation={props.navigation}/>
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
        <FooterBarComponent/>
      </SafeAreaView>
  )

}

export default HomeScreen;
