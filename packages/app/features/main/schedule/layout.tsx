import {
  CalendarDays,
  CalendarPlus,
  Share,
  StretchHorizontal,
  StretchVertical,
} from '@tamagui/lucide-icons'
import React from 'react'
import { useRouter } from "solito/router";
import { View } from 'react-native'
import { Button, XGroup, XStack, YStack,Separator } from 'tamagui'
export default function ScheduleLayout({ children }) {
  const { push } = useRouter();
  return (
    <View >
      <XStack justifyContent="space-between" mt={4}>
        <Button iconAfter={CalendarPlus} theme="yellow">
          新增日程
        </Button>
        <XGroup>
          <Button  iconAfter={CalendarDays} />
          <Button onPress={()=>(push('/main/schedule/wschedule'))} iconAfter={StretchVertical} />
          <Button iconAfter={StretchHorizontal} />
          <Separator als="stretch" vertical mx={1} />
          <Button iconAfter={Share} />
        </XGroup>
        
      </XStack>
      {children}
    </View>
  )
}
