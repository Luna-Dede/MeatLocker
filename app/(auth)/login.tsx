import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleSignUp = () => {
    Alert.alert("Sign Up", `Email: ${email}\nPhone: ${phone}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top logo + tagline */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/Meat_pic.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <Text style={styles.appName}>MeatLocker</Text>
        <Text style={styles.subtitle}>Never get flaked on again.</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Create your account</Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Phone (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="(555) 123-4567"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Text style={styles.toggleText}>{secure ? "Show" : "Hide"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing, you agree to not be a flaky little cunt.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617", // very dark slate
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#F9FAFB",
  },
  subtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: "#0B1120", // dark card
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#E5E7EB",
    marginBottom: 20,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1F2937",
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#F9FAFB",
    backgroundColor: "#020617",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1F2937",
    paddingHorizontal: 12,
    backgroundColor: "#020617",
    height: 46,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: "#F9FAFB",
  },
  toggleText: {
    color: "#60A5FA",
    fontWeight: "600",
    marginLeft: 10,
    fontSize: 13,
  },
  button: {
    marginTop: 18,
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F9FAFB",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    marginTop: 12,
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
  },
});
