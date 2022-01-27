import React, { useEffect } from "react"
import { View, StyleSheet, Image } from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

// const NEXT_SCREEN_NAME = "TermsAndConditions"
const NEXT_SCREEN_NAME="BoastSplash"
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])

  return (
    <View style={styles.View_50_103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d04/eeac/8fdb9359710e9fa6d6a096aaeacb7a6c"
          }}
          style={styles.ImageBackground_50_104}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    View_50_103: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_50_104: {
    width: wp("43%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

export default {
  title: "SplashScreen",
  navigator: Splash
}
