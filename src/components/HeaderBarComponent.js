import React from "react";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderBarComponent = (props) => {
  return(
      <View style={{flexDirection:"row", justifyContent:"space-between", height:windowHeight/10, backgroundColor:"#FFF8EA"}}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={{ borderBottomLeftRadius:50, borderBottomRightRadius:100, backgroundColor:"white", alignItems:"center", justifyContent:"center", width:windowWidth/3, height:"100%"}}>
          <Image source={require("../../assets/1x1/ht_hafta_sonu_siyah.png")} style={{ height:'45%', width:"100%"}} resizeMode={"contain"}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => props.navigation.navigate("List")}
            style={{marginTop:'6%', marginRight:'6%'}}>
          <Image source={require("../../assets/1x1/list_logo.png")} resizeMode={"contain"} style={{width:30, height:30}}/>
        </TouchableOpacity>
      </View>
  )
}

export default HeaderBarComponent;
