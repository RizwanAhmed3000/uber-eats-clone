import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
    return (
        <View style={{ marginTop: 8, marginBottom: 8, backgroundColor: "#fff", paddingVertical: 5, paddingLeft: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", gap: 30, justifyContent: "space-around" }}>
                    {
                        items.map((item, index) => (
                            <View key={index} style={{ alignItems: "center", gap: 5 }}>
                                <Image source={item.image} style={{ width: 50, height: 40, resizeMode: "contain" }} />
                                <Text style={{ fontSize: 12, fontWeight: "900" }}>{item.text}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}