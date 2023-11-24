import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/* <StatusBar style="auto" StatusBarStyle="default" /> */}
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
