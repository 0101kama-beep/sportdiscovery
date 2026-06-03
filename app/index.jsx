import React from "react";
import  { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { DrawerActions } from "@react-navigation/native";
import { useSportStore } from "../store/useSportStore";
import { ScrollView } from "react-native";
import { Image } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { sports, loading, fetchSports } = useSportStore();

  useEffect(() => {
    fetchSports();
  }, []);
  return (
  
    <SafeAreaView style={styles.container}>
      
  <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />

      <View style={styles.containericone}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.welcomesection}>
        <Text style={styles.welcometext}>welcome👋 </Text>
        <Text style={styles.subWelcomeText}>
          Discover your next
          <Text style={styles.highlightText}> passion </Text>
        </Text>
      </View>
      <View style={styles.headercart}>
        <Text style={styles.headercarttitel}>Sport of the Day🔥 </Text>
        <Text style={styles.headercartbudg}>Cycling </Text>
        <Text style={styles.headercartdescption}>
          High-endurance sport on road or track{" "}
        </Text>
        <TouchableOpacity>
          <Text style={styles.exploreButton}>Explore →</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sport}>
        <TouchableOpacity style={styles.allsport}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamsport}>
          <Text>Team Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individullesport}>
          <Text>Individual Sports</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>6 Sports to explore</Text>

    



    {loading ? (
  <Text style={{ color: "white" }}>Loading...</Text>
) : (
  sports.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.card}
      onPress={() =>
        navigation.navigate("details", {
          sport: item,
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
      />

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.sportName}>
            {item.name}
          </Text>

          <Ionicons
            name="heart-outline"
            size={20}
            color="#666"
          />
        </View>

        <Text style={styles.sportDesc}>
          {item.shortDescription}
        </Text>
      </View>
    </TouchableOpacity>
  ))
)}
    </ScrollView>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09122C",
  },
  containericone: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  welcomesection: {
    marginTop: 15,
    marginLeft: 23,
    marginBottom: 10,
  },
  welcometext: {
    color: "#ffb703",
    fontSize: 20,
    fontWeight: "bold",
  },
  subWelcomeText: {
    color: "#fff",
    fontSize: 29,
    fontWeight: "bold",
    marginTop: 4,
  },
  highlightText: {
    color: "#ffb703",
  },
  headercart: {
    LinearGradient: ["#4c669f", "#3b5998"],

    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#464242",
  },
  headercarttitel: {
    color: "#ffb703",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
  },
  headercartbudg: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  headercartdescption: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 15,
  },
  exploreButton: {
    backgroundColor: "#007bef",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  sport: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  allsport: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4e4a4a",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  teamsport: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4e4a4a",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  individullesport: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    borderWidth: 1,

    marginRight: 10,
    backgroundColor: "#fff",
  },

  sectionTitle: {
    color: "#ffb703",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#09122C",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#ffb703",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1E2A5E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sportName: { 
    color: "#fff",
     fontSize: 18,
      fontWeight: "bold"
     },
  sportDesc: {
     color: "#ccc",
      fontSize: 14,
       marginTop: 5 },
       card: {
  backgroundColor: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  marginBottom: 20,
},

cardImage: {
  width: "100%",
  height: 180,
},

cardContent: {
  padding: 12,
},

cardHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

sportName: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#111",
},

sportDesc: {
  color: "#666",
  marginTop: 6,
},
});
