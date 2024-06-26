import React from 'react'
import { Button, Input } from 'antd'
import history from 'src/routes/history'
import { fetchData } from './data'
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
  const albums = use(fetchData(`/the-beatles/albums`))

  return (
    <div className={styles.page}>
      <Input value={albums.length}></Input>
      <Button onClick={() => history.back()}>返回</Button>
      <div className={styles.flexOuter}>
        <div className={styles.flexItem}>
          <div className={styles.inner}>
            <div className={styles.content}>我会保持比例哦</div>
          </div>
        </div>
        <div className={styles.flexItem}></div>
        <div className={styles.flexItem}></div>
        <div className={styles.flexItem}></div>
      </div>
      <div className={styles.twoCol1}>
        <div className={styles.left}></div>
        <div className={styles.main}>float overflow: auto</div>
      </div>
      <div className={styles.twoCol2}>
        <div className={styles.main}>圣杯单边 float + 位移left</div>
        <div className={styles.left}></div>
      </div>
      <div className={styles.twoCol3}>
        <div className={styles.left}></div>
        <div className={styles.main}>margin float</div>
      </div>
    </div>
  )
}

export default Index
