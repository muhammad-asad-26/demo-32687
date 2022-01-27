import React, { useEffect } from "react"
import { View, StyleSheet, Image } from "react-native"

const NEXT_SCREEN_NAME = "TermsAndConditions"

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d04/eeac/8fdb9359710e9fa6d6a096aaeacb7a6c"
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  image: { width: "100%", height: '100%' }
})

export default {
  title: "SplashScreen",
  navigator: Splash
}
