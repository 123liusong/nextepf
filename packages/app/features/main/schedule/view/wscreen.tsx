/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 22:33:29
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 23:42:36
 * @FilePath: \nextepf\packages\app\features\main\schedule\view\wscreen.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { View } from 'react-native'
import { Calendar, ExpandableCalendar } from 'react-native-calendars'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
import ScheduleLayout from '../layout'
export default function ScheduleWScreen() {
  return (
    <ScheduleLayout>
      <Paragraph size="$2" fow="800">
        W
      </Paragraph>
      <Calendar
       markingType="multi-period"
       markedDates={{
         '2023-02-14': {
           periods: [
             {startingDay: false, endingDay: true, color: '#5f9ea0'},
             {startingDay: false, endingDay: true, color: '#ffa500'},
             {startingDay: true, endingDay: false, color: '#f0e68c'}
           ]
         },
         '2023-02-15': {
           periods: [
             {startingDay: true, endingDay: false, color: '#ffa500'},
             {color: 'transparent'},
             {startingDay: false, endingDay: false, color: '#f0e68c'}
           ]
         }
       }}
      />
    </ScheduleLayout>
  )
}
