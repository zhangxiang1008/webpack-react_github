import React from 'react'
import { Button, Input } from 'antd'
import history from 'src/routes/history'
import { fetchData } from './data'

function use(promise: any) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(
      (result: any) => {
        promise.status = 'fulfilled'
        promise.value = result
      },
      (reason: any) => {
        promise.status = 'rejected'
        promise.reason = reason
      }
    )
    throw promise
  }
}
const Index: React.FC<any> = () => {
  const albums = use(fetchData(`/the-beatles/albums`))

  return (
    <div>
      <Input value={albums.length}></Input>
      <Button onClick={() => history.back()}>返回</Button>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
      >
        阿昆达黄金卡圣诞节啊是滴哦哈斯哦的hi哦啊是对啊首都阿睡哈is好滴哦哈斯东海哦好滴哦撒好滴哦啊是滴哈斯达还哦好嗲是哈
      </div>
    </div>
  )
}

export default Index
