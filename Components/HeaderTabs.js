import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeState, setActiveState] = useState('Delivery')
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 5 }}>
            <HeaderButton text={'Delivery'} activeState={activeState} setActiveState={setActiveState} />
            <HeaderButton text={'Pick up'} activeState={activeState} setActiveState={setActiveState} />
        </View>
    )
}

const HeaderButton = ({ text, activeState, setActiveState }) => (
    <TouchableOpacity
        style={{ backgroundColor: activeState === text ? 'black' : 'white', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 30, marginTop: 5 }}
        onPress={() => setActiveState(text)}
    >
        <Text style={{ color: activeState === text ? 'white' : 'black', fontSize: 15, fontWeight: 900 }}>{text}</Text>
    </TouchableOpacity>
)