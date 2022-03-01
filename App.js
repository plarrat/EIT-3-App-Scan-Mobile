import { useState, useEffect } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native"
import Produit from "./components/produit"
import { FAB } from "react-native-elements"
import axios from "axios"

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [mode, setMode] = useState("produits")
  const [produits, setProduits] = useState([])

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  useEffect(() => {
    setScanned(false)
  }, [mode])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    if (data.length === 13) {
      axios
        .get(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
        .then((datas) => {
          const infos = datas.data

          let produit = {
            id: infos.product.id,
            nom: infos.product.generic_name_fr,
            marque: infos.product.brands,
            image: infos.product.image_url,
            nutriscore: infos.product.nutriscore_grade,
          }

          let tmp = [...produits]
          tmp.push(produit)
          setProduits(tmp)

          setScanned(false)
          setMode("produits")
        })
    }
  }

  const displayProduits = produits.map((produit, indice) => {
    return <Produit key={indice} produit={produit} />
  })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{ paddingVertical: 10 }} />
      {mode === "produits" && (
        <>
          <ScrollView>
            <View style={{ paddingVertical: 30 }}>{displayProduits}</View>
          </ScrollView>
          <FAB
            visible={true}
            placement="right"
            onPress={() => setMode("scan")}
            title=""
            icon={{ name: "camera", color: "white" }}
            color="green"
          />
        </>
      )}

      {mode === "scan" && (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          <FAB
            visible={true}
            placement="right"
            onPress={() => setMode("produits")}
            title=""
            icon={{ name: "camera", color: "white" }}
            color="green"
          />
        </>
      )}
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
