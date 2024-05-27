import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.details}>Rating: {restaurant.rating}</Text>
      <Text style={styles.details}>Price: {restaurant.price}</Text>
      <Text style={styles.details}>Distance: {restaurant.distance} meters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default RestaurantDetails;