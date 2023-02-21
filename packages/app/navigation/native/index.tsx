/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 21:22:09
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 23:32:37
 * @FilePath: \nextepf\packages\app\navigation\native\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UserDetailScreen } from '../../features/user/detail-screen'
import { SignInScreen } from 'app/features/signin/screen'
import { SignUpScreen } from 'app/features/signup/screen'
import MainScreen from 'app/features/main/screen'
import ScheduleScreen from 'app/features/main/schedule/view/screen'
import ProfileScreen from 'app/features/main/profile/screen'
import ExplorScreen from 'app/features/main/explor/screen'
import TeamScreen from 'app/features/main/team/screen'
import ScheduleDScreen from 'app/features/main/schedule/view/dscreen'
import ScheduleWScreen from 'app/features/main/schedule/view/wscreen'
const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'sign-in': undefined
  'sign-up': undefined
  main: undefined
  schedule: undefined
  team: undefined
  explor: undefined
  profile: undefined
  wschedule: undefined
  dschedule: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sign-in"
        component={SignInScreen}
        options={{
          title: '登录',
        }}
      />
      <Stack.Screen
        name="sign-up"
        component={SignUpScreen}
        options={{
          title: '注册',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: '用户详情',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="main"
        component={MainScreen}
        options={{
          title: '主要',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="schedule"
        component={ScheduleScreen}
        options={{
          title: '日程(月)',
        }}
      />
      <Stack.Screen
        name="wschedule"
        component={ScheduleWScreen}
        options={{
          title: '日程(周)',
        }}
      />
      <Stack.Screen
        name="dschedule"
        component={ScheduleDScreen}
        options={{
          title: '日程(日)',
        }}
      />

      <Stack.Screen
        name="team"
        component={TeamScreen}
        options={{
          title: '团队',
        }}
      />
      <Stack.Screen
        name="explor"
        component={ExplorScreen}
        options={{
          title: '探索',
        }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: '个人资料',
        }}
      />
    </Stack.Navigator>
  )
}
