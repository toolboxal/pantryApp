import Form from '@/components/Form'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const formPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-100">
      <Text>formPage</Text>
      <Form />
    </SafeAreaView>
  )
}
export default formPage
