import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView>
            {/* <StatusBar style="auto" /> */}
            <HeaderTabs />
        </SafeAreaView>
    )
}

