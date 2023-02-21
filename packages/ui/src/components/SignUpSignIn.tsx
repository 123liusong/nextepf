import { useState } from 'react'
import { Button, Input, Paragraph, XStack, YStack } from 'tamagui'
import { Link } from "solito/link";
export const SignUpSignInComponent: React.FC<Props> = ({ type ,handleEmailWithPress}) => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  return (
    <YStack
      borderRadius="$10"
      space
      px="$7"
      py="$6"
      w={350}
      shadowColor={'#00000020'}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
      bg="$background"
    >
      {/* email sign up option */}
      <Input
        placeholder="邮箱"
        onChangeText={(text) => {
          setEmailAddress(text)
        }}
      />
      <Input
        placeholder="密码"
        onChangeText={(text) => {
          setPassword(text)
        }}
        textContentType="password"
        secureTextEntry
      />

      {/* sign up button */}
      <Button
        themeInverse
        onPress={() => {
          handleEmailWithPress(emailAddress, password)
        }}
        hoverStyle={{ opacity: 0.8 }}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        focusStyle={{ scale: 0.975 }}
      >
        {type === 'sign-up' ? '注册' : '登录'}
      </Button>

      {/* or sign in, in small and less opaque font */}
      <XStack>
        <Paragraph size="$2" mr="$2" opacity={0.4}>
          {type === 'sign-up' ? '已经拥有账号？  ' : '还为拥有账号？'}
        </Paragraph>
        <Link href={type === 'sign-up' ? '/' : '/signup'}>
          <Paragraph
            cursor={'pointer'}
            size="$2"
            fontWeight={'700'}
            opacity={0.5}
            hoverStyle={{ opacity: 0.4 }}
          >
            {type === 'sign-up' ? '登录' : '注册'}
          </Paragraph>
        </Link>
      </XStack>
    </YStack>
  )
}
