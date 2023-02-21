/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-02-20 17:02:13
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-02-20 17:04:33
 * @FilePath: \nextepf\packages\app\features\sinup\screen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */


import { YStack } from '@my/ui'
import { useRouter } from "solito/router";
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn'
export function SignUpScreen() {
    const { push } = useRouter();


  const handleEmailSignInWithPress = async (emailAddress, password) => {
    // await signup.create({
    //   identifier: emailAddress,
    //   password,
    // })
    //
    await redirectIfSignedIn()
  }
  const redirectIfSignedIn = async () => {
    // if (signup.status == 'complete') {
    //   push('/')如果登录，跳转到首页
    alert('注册成功')
      push('/')
      // push('/user/2')
    // }
  }
  return (
    <YStack f={1} jc="center" ai="center" space>
      <SignUpSignInComponent type="sign-up" handleEmailWithPress={handleEmailSignInWithPress} />
    </YStack>
  )
}