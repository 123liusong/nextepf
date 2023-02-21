/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 21:46:05
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 23:33:02
 * @FilePath: \nextepf\packages\app\features\main\schedule\view\screen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
import ScheduleLayout from '../layout'
import { useColorScheme } from 'react-native'
export default function ScheduleScreen() {
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
  const workout = { key: 'workout', color: 'green' }
  const scheme = useColorScheme()
  return (
    <ScheduleLayout>

      <Calendar
        theme={{
          calendarBackground: scheme === 'dark' ? '#000' : '#fff',
        }}
        markingType={'multi-dot'}
        markedDates={{
          '2020-10-25': {
            dots: [vacation, massage, workout],
          },
          '2020-10-26': { dots: [massage, workout], disabled: true },
        }}
      />
    </ScheduleLayout>
  )
}
