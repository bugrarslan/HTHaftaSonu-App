import React from "react";
import {StyleSheet, View} from "react-native";


const SideLineComponent = () => {
  return(
      <View style={styles.sideLineBox}>
        <View style={styles.sideLine}/>
        <View style={styles.sideLine}/>
      </View>
  )


}

const styles = StyleSheet.create({

  page: {
    backgroundColor:"#FFFFFF",
    flex:1,
    marginLeft:20,
    marginRight:20,
    zIndex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  sideLineBox: {
    width:windowWidth,
    height:windowHeight-276,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    position:"absolute",
    zIndex:2
  },
  sideLine: {
    height:2,
    width:35,
    backgroundColor:"#E9D29E"
  },
  number: {
    width:windowWidth,
    alignItems:"center",
    position: "relative",
    zIndex:0,
    marginTop:-50
  }
})

export default SideLineComponent;
