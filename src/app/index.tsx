import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Decorative Soft Green Shapes */}
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />

      <View style={styles.contentContainer}>
        {/* Leaf SVG Icon Badge */}
        <View style={styles.logoBadge}>
          <Svg height="70" width="70" viewBox="0 0 24 24" fill="#283618">
            <Path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.5,17 5,17C6.5,17 8,15.5 8,13.5C8,11.5 6.5,9.5 5,9C8.5,8.25 14.5,8 17,8Z" />
          </Svg>
        </View>

        {/* Title & Subtitles */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Plant Care &amp;{"\n"}Watering Scheduler
          </Text>
          <Text style={styles.tagline}>Happy plants, happier you!</Text>
          <Text style={styles.description}>
            Take care of your plants with simple watering schedules and a visual
            diary.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.8}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createButton}
            activeOpacity={0.8}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.createText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            Your plants, organized in one place.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

//Style for splash Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEFE9",
    position: "relative",
  },
  topCircle: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#D7E3D4",
    opacity: 0.7,
  },
  bottomCircle: {
    position: "absolute",
    bottom: 50,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#D7E3D4",
    opacity: 0.6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
    zIndex: 1,
  },
  logoBadge: {
    width: 100,
    height: 100,
    borderRadius: 40,
    backgroundColor: "#D2E0CE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    shadowColor: "#3A5A40",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#283618",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 34,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3A5A40",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: "#606C38",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 18,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#283618",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  signInText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  createButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#D4DECFC0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  createText: {
    color: "#283618",
    fontSize: 15,
    fontWeight: "bold",
  },
  footerNote: {
    fontSize: 11,
    color: "#7F8F75",
    textAlign: "center",
  },
});
