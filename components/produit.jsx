import { Text, Card, Button, Icon } from "react-native-elements"
export default function Produit() {
  return (
    <Card>
      <Card.Title>Titre</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
        }}
      />
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Button
        icon={
          <Icon name="delete" color="#ffffff" iconStyle={{ marginRight: 10 }} />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Supprimer"
      />
    </Card>
  )
}
