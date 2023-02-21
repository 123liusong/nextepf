import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              'sign-in': '',
              'user-detail': 'user/:id',
              'sign-up': 'signup',
              main: 'main',
              schedule: 'main/schedule',
              team: 'main/team',
              explor: 'main/explor',
              profile: 'main/profile',
              wschedule: 'main/schedule/wschedule',
              dschedule: 'main/schedule/dschedule',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
