import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItem from "../Components/RestaurantItem";
import axios from "axios";

export default function Home() {

  const getRestaurantsData = async () => {
    const res = await axios.get(`/api/yelp?location=SanDiego`)
    console.log(res)
  };
  useEffect(() => {
    getRestaurantsData()
  }, [])


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/* <StatusBar style="auto" StatusBarStyle="default" /> */}
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
