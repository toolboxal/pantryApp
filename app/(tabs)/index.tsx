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
      <Text style={{ fontFamily: 'Bitter_400Regular' }}>
        This is a test passage. hahahahahahah
      </Text>
      <Text className="text-red-500">
        This is a test passage. hahahahahahah
      </Text>
    </View>
  )
}
