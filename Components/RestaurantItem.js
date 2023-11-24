import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'

export default function RestaurantItem() {
    return (
        <View style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: "white",
            marginVertical: 5,
        }}>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    )
}

const RestaurantImage = () => (
    <>
        <Image
            source={{ uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" }}
            style={{ width: '100%', height: 180 }} />
        <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 15 }}
        >
            <Ionicons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)
const RestaurantInfo = () => (
    <View style={{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    }}>
        <View>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "bold"
                }}
            >The Restaurant</Text>
            <Text style={{
                color: "grey",
                fontSize: 12,
                fontWeight: 700
            }}>
                20 - 30 min
            </Text>
        </View>
        <Text style={{
            color: "black",
            fontSize: 14,
            fontWeight: 700,
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 50
        }}>
            4.5
        </Text>
    </View>
)