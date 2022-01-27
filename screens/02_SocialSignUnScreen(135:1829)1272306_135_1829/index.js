import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_135_1830}>
        <View style={styles.View_135_1831}>
          <View style={styles.View_135_1832} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ac/e436/dbf05f0eb1c304268f7d96ad52d59a70"
            }}
            style={styles.ImageBackground_135_1833}
          />
          <View style={styles.View_135_1834} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b9/4595/68f42307b826ee0951ee7f0558f9ca8a"
          }}
          style={styles.ImageBackground_135_1835}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8776/14c7/0b8a66e894da42e7711bfae981f20bce"
          }}
          style={styles.ImageBackground_135_1839}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f25d/cff4/5877b9fad7846cb4be69b9884418abcf"
          }}
          style={styles.ImageBackground_135_1844}
        />
      </View>
      <View style={styles.View_135_1845}>
        <Text style={styles.Text_135_1845}>Already have an account? Login</Text>
      </View>
      <View style={styles.View_135_1846}>
        <Text style={styles.Text_135_1846}>Sign Up</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7149/0754/babc4927f11065d780de1f5356f6a5b1"
        }}
        style={styles.ImageBackground_135_1848}
      />
      <View style={styles.View_135_1851} />
      <View style={styles.View_135_1852}>
        <View style={styles.View_135_1853}>
          <Text style={styles.Text_135_1853}>SIGN UP</Text>
        </View>
      </View>
      <View style={styles.View_135_1854}>
        <View style={styles.View_135_1855}>
          <Text style={styles.Text_135_1855}>Email</Text>
        </View>
      </View>
      <View style={styles.View_135_1867}>
        <View style={styles.View_135_1868}>
          <Text style={styles.Text_135_1868}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9842/6263/be7233420dd86e4e3ed882c3d89793ea"
          }}
          style={styles.ImageBackground_135_1856}
        />
      </View>
      <View style={styles.View_135_1869}>
        <View style={styles.View_135_1870}>
          <Text style={styles.Text_135_1870}>Confirm Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9842/6263/be7233420dd86e4e3ed882c3d89793ea"
          }}
          style={styles.ImageBackground_135_1871}
        />
      </View>
      <View style={styles.View_135_1857}>
        <View style={styles.View_135_1858}>
          <Text style={styles.Text_135_1858}>Full Name</Text>
        </View>
      </View>
      <View style={styles.View_135_1872}>
        <Text style={styles.Text_135_1872}>
          I have read Terms and Conditions and Privacy Policy
        </Text>
      </View>
      <View style={styles.View_135_1873} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 243, 230, 1)" },
  View_2: { height: hp("123%") },
  View_135_1830: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_135_1831: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%")
  },
  View_135_1832: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(26, 24, 25, 1)",
    borderWidth: 1
  },
  ImageBackground_135_1833: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_135_1834: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 24, 25, 1)"
  },
  ImageBackground_135_1835: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_135_1839: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_135_1844: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_1845: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_135_1845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "uppercase"
  },
  View_135_1846: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_135_1846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "capitalize"
  },
  ImageBackground_135_1848: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  View_135_1851: {
    width: wp("33%"),
    height: hp("1%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_135_1852: {
    width: wp("92%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81%"),
    backgroundColor: "rgba(246, 216, 86, 1)",
    overflow: "hidden"
  },
  View_135_1853: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_135_1853: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_135_1854: {
    width: wp("92%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_135_1855: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_135_1855: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  View_135_1867: {
    width: wp("92%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_135_1868: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_135_1868: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  ImageBackground_135_1856: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_135_1869: {
    width: wp("92%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_135_1870: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_135_1870: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  ImageBackground_135_1871: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_135_1857: {
    width: wp("92%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_135_1858: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_135_1858: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  View_135_1872: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_135_1872: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "uppercase"
  },
  View_135_1873: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("69%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
