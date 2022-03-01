import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native"
import Produit from "./components/produit"
import { FAB } from "react-native-elements"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{ paddingVertical: 10 }} />
      <ScrollView>
        <View style={{ paddingVertical: 30 }}>
          <Produit />
          <Produit />
          <Produit />
          <Produit />
        </View>
      </ScrollView>
      <FAB
        visible={true}
        placement="right"
        title=""
        icon={{ name: "camera", color: "white" }}
        color="green"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
