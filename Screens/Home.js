import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItem from "../Components/RestaurantItem";
import axios from "axios";

export default function Home() {
  const [city, setCity] = useState("San Francisco");
  const [restaurantData, setRestaurantData] = useState([])

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //   },
    // };
    // fetch(`/api/yelp?location=${city}&sort_by=best_match&limit=10`, options)
    //   .then((res) => res.json()).then((json) => setRestaurantData(json.businesses))
    // getRestaurantsData()
    // async function getRestaurantsData() {
    //   const res = await axios.get(`http://localhost:8001/api/yelp?location=${city}&sort_by=best_match&limit=10`)
    //   console.log(res)
    //   setRestaurantData(res)
    // }
    // getRestaurantsData()
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        const response = await fetch(`http://192.168.3.107:8081/api/yelp?location=${city}&sort_by=best_match&limit=10`, options);

        const json = await response.json();

        // Filter and update state
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLocaleLowerCase())
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error.stack);
      }
    };
    fetchData()
  }, [city])


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
