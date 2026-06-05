<<<<<<< HEAD
import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet, } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");



export default function GalleryScreen() {
  const route = useRoute();
  
  const { sport: sportString } = route.params || {};
  
  let sport = null;
  try {
   
    sport = sportString ? JSON.parse(sportString) : null;
  } catch (erur) {
    console.log("Error parsing sport data", erur);
  }

 

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.centerItems}>
      
      <Stack.Screen 
        options={{ 
          title: sport?.name ? ` ${sport?.name}` : "Galerie", 
          headerShown: true,
          headerStyle: { backgroundColor: '#09122C' },
          headerTintColor: '#fff',
        }} 
      />

      <Text style={styles.mainTitle}>{sport?.name}</Text>

     
      {sport?.gallery && sport.gallery.length > 0 ? (
        sport.gallery.map((imageUrl, index) => (
          <Image
            key={index}
            source={{ uri: imageUrl }}
            style={styles.image}
          />
        ))
      ) : (
        <Text style={styles.noImages}>Aucune image disponible</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09122C", 
  },
  centerItems: {
    alignItems: "center",
    paddingVertical: 20,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: width * 0.9, 
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  noImages: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 50,
  }
});
=======
>>>>>>> e599f17fae495e0c02b2d311e15f286b3bd4b5df
