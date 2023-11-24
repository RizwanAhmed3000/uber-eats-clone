import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from 'react-native-vector-icons'

export default function SearchBar() {
    return (
        <View
            style={{ marginTop: 13, flexDirection: "row" }}
        >
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                        borderRadius: 20,
                        marginTop: 7,
                        fontWeight: "700",
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    },
                }}

                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{ marginRight: 10, flexDirection: 'row', alignItems: "center" }}>
                        {/* <Ionicons name='close-circle-outline' size={15} style={{ marginRight: 4 }} /> */}
                        <View style={{ padding: 8, backgroundColor: "white", borderRadius: 20, flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name='time' size={15} style={{ marginRight: 6 }} />
                            <Text>Search</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}