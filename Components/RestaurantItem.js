import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Dubai's Grill",
        image_url:
            "https://www.timeoutdubai.com/cloud/timeoutdubai/2023/06/06/HTPbhCYv-Sushisamba-1200x897.jpg",
        categories: ["Dubai", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItem() {
    return (
        <>
            {
                localRestaurants.map((item, index) => (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View key={index} style={{
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            backgroundColor: "white",
                            marginVertical: 5,
                        }}>
                            <RestaurantImage itemImage={item?.image_url} />
                            <RestaurantInfo item={item} />
                        </View>
                    </TouchableOpacity>
                ))
            }
        </>
    )
}

const RestaurantImage = ({ itemImage }) => (
    <>
        <Image
            source={{ uri: itemImage }}
            style={{ width: '100%', height: 180 }} />
        <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 15 }}
        >
            <Ionicons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)
const RestaurantInfo = ({ item }) => (
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
            >{item?.name}</Text>
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
            {item?.rating}
        </Text>
    </View>
)