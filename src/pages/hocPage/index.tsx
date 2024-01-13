import React, { useEffect, useRef } from 'react'
import ClickListenerHOC from './hoc'

@ClickListenerHOC
class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <p>hello，world</p>
        <button>组件内部点击</button>
      </div>
    )
  }
}
export default () => {
  return (
    <div className="box">
      <Index />
      <button>组件外部点击</button>
    </div>
  )
}
