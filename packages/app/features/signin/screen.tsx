/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 21:24:36
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 22:02:36
 * @FilePath: \nextepf\packages\app\features\signin\screen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { YStack } from '@my/ui'
import { useRouter } from "solito/router";
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn'
export function SignInScreen() {
    const { push } = useRouter();


  const handleEmailSignInWithPress = async (emailAddress, password) => {
    // await signIn.create({
    //   identifier: emailAddress,
    //   password,
    // })
    //注册成功后跳转到登录
    await redirectIfSignedIn()
  }
  const redirectIfSignedIn = async () => {
    // if (signIn.status == 'complete') {
    //   push('/')如果注册成功，跳转到登录
      push('/main')
    // }
  }
  return (
    <YStack f={1} jc="center" ai="center" space>
      <SignUpSignInComponent type="sign-in" handleEmailWithPress={handleEmailSignInWithPress} />
    </YStack>
  )
}
