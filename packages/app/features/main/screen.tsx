/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 21:46:53
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 22:51:21
 * @FilePath: \nextepf\packages\app\features\main\screen.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExplorScreen from './explor/screen'
import ProfileScreen from './profile/screen'
import ScheduleScreen from './schedule/view/screen'
import TeamScreen from './team/screen'

export default function MainScreen() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: '日程',
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          tabBarLabel: '团队',
        }}
      />
      <Tab.Screen
        name="Explor"
        component={ExplorScreen}
        options={{
          tabBarLabel: '发现',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  )
}
