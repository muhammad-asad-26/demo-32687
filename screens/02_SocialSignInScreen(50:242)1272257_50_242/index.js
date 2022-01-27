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
      <View style={styles.View_50_243}>
        <View style={styles.View_50_244}>
          <View style={styles.View_50_245} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ac/e436/dbf05f0eb1c304268f7d96ad52d59a70"
            }}
            style={styles.ImageBackground_50_246}
          />
          <View style={styles.View_50_247} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b9/4595/68f42307b826ee0951ee7f0558f9ca8a"
          }}
          style={styles.ImageBackground_50_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8776/14c7/0b8a66e894da42e7711bfae981f20bce"
          }}
          style={styles.ImageBackground_50_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a02/5cce/9e337da173512d53547d629c39851c19"
          }}
          style={styles.ImageBackground_50_257}
        />
      </View>
      <View style={styles.View_50_258}>
        <Text style={styles.Text_50_258}>Create an account</Text>
      </View>
      <View style={styles.View_50_259}>
        <Text style={styles.Text_50_259}>Log In</Text>
      </View>
      <View style={styles.View_50_260}>
        <Text style={styles.Text_50_260}>Or Sign in with</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7149/0754/babc4927f11065d780de1f5356f6a5b1"
        }}
        style={styles.ImageBackground_50_261}
      />
      <View style={styles.View_50_264} />
      <View style={styles.View_50_265}>
        <View style={styles.View_50_266}>
          <Text style={styles.Text_50_266}>LOGIN</Text>
        </View>
      </View>
      <View style={styles.View_50_267}>
        <View style={styles.View_50_268}>
          <Text style={styles.Text_50_268}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/fb3e/155c7a2390bddb8dff80169e89955ba4"
          }}
          style={styles.ImageBackground_50_269}
        />
      </View>
      <View style={styles.View_50_270}>
        <View style={styles.View_50_271}>
          <Text style={styles.Text_50_271}>Email</Text>
        </View>
      </View>
      <View style={styles.View_50_272}>
        <Text style={styles.Text_50_272}>FORGOT PASSWORD</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/673a/c2f2/5d4abaa4586abf948a9e861832be4d39"
        }}
        style={styles.ImageBackground_50_273}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/673a/c2f2/5d4abaa4586abf948a9e861832be4d39"
        }}
        style={styles.ImageBackground_50_274}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/673a/c2f2/5d4abaa4586abf948a9e861832be4d39"
        }}
        style={styles.ImageBackground_50_275}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8a1/1604/a22db0c9f3be1e4a6ce8b672f47f8a6b"
        }}
        style={styles.ImageBackground_50_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be4b/eb82/29522e7283d0013c2a924401ac230267"
        }}
        style={styles.ImageBackground_50_277}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d05f/8ef5/e6f16aa582ff6da416832686f9dc4077"
        }}
        style={styles.ImageBackground_50_278}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 243, 230, 1)" },
  View_2: { height: hp("123%") },
  View_50_243: {
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
  View_50_244: {
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
  View_50_245: {
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
  ImageBackground_50_246: {
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
  View_50_247: {
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
  ImageBackground_50_248: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_50_252: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_50_257: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_258: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_50_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "uppercase"
  },
  View_50_259: {
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
  Text_50_259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "capitalize"
  },
  View_50_260: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_50_260: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  ImageBackground_50_261: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  View_50_264: {
    width: wp("33%"),
    height: hp("1%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_50_265: {
    width: wp("93%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%"),
    backgroundColor: "rgba(246, 216, 86, 1)",
    overflow: "hidden"
  },
  View_50_266: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_50_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_50_267: {
    width: wp("93%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_50_268: {
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
  Text_50_268: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  ImageBackground_50_269: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_50_270: {
    width: wp("93%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_50_271: {
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
  Text_50_271: {
    color: "rgba(129, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "capitalize"
  },
  View_50_272: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_50_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.22,
    textTransform: "uppercase"
  },
  ImageBackground_50_273: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("83%")
  },
  ImageBackground_50_274: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("83%")
  },
  ImageBackground_50_275: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("83%")
  },
  ImageBackground_50_276: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_50_277: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_50_278: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
