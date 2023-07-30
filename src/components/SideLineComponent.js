import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SideLineComponent = () => {
  return(
      <View style={styles.sideLineBox}>
        <View style={styles.sideLine}/>
        <View style={styles.sideLine}/>
      </View>
  )


}

const styles = StyleSheet.create({

  sideLineBox: {
    width:windowWidth,
    height:windowHeight-800,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    position:"absolute",
    zIndex:2
  },
  sideLine: {
    height:2,
    width:50,
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
