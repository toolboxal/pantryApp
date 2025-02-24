import { Text, View } from 'react-native'

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="font-poppins">Regular Poppins Text</Text>
      <Text className="font-poppins-bold">Bold Poppins Text</Text>
      <Text className="font-poppins-black bg-primary-700">
        Black Poppins Text
      </Text>
      <Text className="font-bitter text-primary-500">Regular Bitter Text</Text>
    </View>
  )
}
