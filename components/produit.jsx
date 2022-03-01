import { Text, Card, Button, Icon } from "react-native-elements"
export default function Produit(props) {
  // const produit = props.produit
  const { produit } = props

  return (
    <Card>
      <Card.Title>{produit.marque}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: produit.image,
        }}
      />
      <Text style={{ marginBottom: 10, marginTop: 10 }}>{produit.nom}</Text>
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
