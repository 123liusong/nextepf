/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 23:31:12
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-21 17:52:40
 * @FilePath: \nextepf\packages\app\features\main\schedule\view\dscreen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import TimelineCalendarScreen from '@my/ui/src/components/TimelineSchedule'
import { View } from 'react-native'
import { ExpandableCalendar } from 'react-native-calendars'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
import ScheduleLayout from '../layout'
export default function ScheduleDScreen() {
    
  return (
    <ScheduleLayout>
      <Paragraph size="$2" fow="800">
        D
      </Paragraph>
      {/* <TimelineCalendarScreen></TimelineCalendarScreen> */}
    </ScheduleLayout>
  )
}
