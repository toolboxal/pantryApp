import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="recordsPage" />
    </Tabs>
  )
}
export default TabsLayout
const styles = StyleSheet.create({})
