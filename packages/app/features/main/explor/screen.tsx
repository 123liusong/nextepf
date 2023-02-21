import { View,useColorScheme } from 'react-native'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
export default function ExplorScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ExplorScreen</Text>
      <SizableText size="$3">SizableText</SizableText>
    </View>
  )
}
