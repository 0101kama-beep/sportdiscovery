import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { Stack, useRouter } from "expo-router"; 

export default function Details() {
  const route = useRoute();
  const router = useRouter(); 
  
  const { sport } = route.params || {};
 
  return (
    <ScrollView style={styles.container}>
      
      <Stack.Screen 
        options={{ 
          title: sport?.name, 
          headerShown: true,
          headerStyle: { backgroundColor: '#09122C' },
          headerTintColor: '#fff',
        }} 
      />

      <Image
        source={{ uri: sport?.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {sport?.name}
        </Text>

        <Text style={styles.category}>
          {sport.category}
        </Text>

        <Text style={styles.description}>
          {sport.shortDescription}
        </Text>
        <TouchableOpacity 
          style={styles.galleryButton}
          onPress={() => {
            
            router.push({
              pathname: "/gallery", 
              params: { sport: JSON.stringify(sport) } 
            });
          }}
        >
          <Text style={styles.galleryButtonText}>Voir la Galerie</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          About this sport
        </Text>

        <Text style={styles.longDescription}>
          {sport.description}
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09122C",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    color: "#FFB703",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
  description: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  longDescription: {
    color: "#aaa",
    fontSize: 15,
    lineHeight: 24,
  },
  galleryButton:{
    
  backgroundColor: "#FFB703",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    marginBottom: 20,
    width:200,



  },
  galleryButtonText:{
  color: "#09122C",
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center"
    

  },
 
});