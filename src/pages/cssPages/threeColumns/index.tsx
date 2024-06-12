import React from 'react'
import { Button, Input } from 'antd'
import history from 'src/routes/history'
import styles from './index.module.scss'

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
  return (
    <div className={styles.page}>
      <div className={styles.threeCol1}>
        <div className={styles.main}>双飞翼</div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.threeCol2}>
        <div className={styles.main}>圣杯单边 float + 位移left</div>
        <div className={styles.left}></div>
      </div>
      <div className={styles.threeCol3}>
        <div className={styles.left}></div>
        <div className={styles.main}>margin float</div>
      </div>
    </div>
  )
}

export default Index
