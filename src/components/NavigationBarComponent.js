import React from "react";
import {Dimensions, Image, Text, Touchable, TouchableOpacity, View} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NavigationBarComponent = (props) => {
  return(
      <View style={{width:windowWidth, height:windowHeight/13, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", backgroundColor:"#FFFFFF"}}>
        <TouchableOpacity style={{height:windowHeight/13,width:windowWidth/5, justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:windowWidth/15, height:windowHeight/25}} source={require("../../assets/1x1/home.png")} resizeMode={"contain"}/>
          <Text style={{fontSize:10}}>Ana Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:windowHeight/13,width:windowWidth/5, justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:windowWidth/15, height:windowHeight/25}} source={require("../../assets/1x1/font.png")} resizeMode={"contain"}/>
          <Text style={{fontSize:10}}>Yazı Boyutu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:windowHeight/13,width:windowWidth/5, justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:windowWidth/15, height:windowHeight/25}} source={require("../../assets/1x1/speaker.png")} resizeMode={"contain"}/>
          <Text style={{fontSize:10}}>Sesli Dinle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:windowHeight/13,width:windowWidth/5, justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:windowWidth/15, height:windowHeight/25}} source={require("../../assets/1x1/share.png")} resizeMode={"contain"}/>
          <Text style={{fontSize:10}}>Paylaş</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:windowHeight/13,width:windowWidth/5, justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:windowWidth/15, height:windowHeight/25}} source={require("../../assets/1x1/save.png")} resizeMode={"contain"}/>
          <Text style={{fontSize:10}}>Kaydet</Text>
        </TouchableOpacity>
      </View>
  )
}

export default NavigationBarComponent;
