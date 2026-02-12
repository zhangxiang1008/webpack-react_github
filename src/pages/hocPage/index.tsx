import React, { useCallback, useEffect, useRef, useState } from 'react'
import ClickListenerHOC from './hoc'

// @ClickListenerHOC
class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <p>hello，world</p>
        <button>组件内部点击</button>
        <button className='button222'>组件内部点击22</button>
      </div>
    )
  }
}
const HocIndex = ClickListenerHOC(Index)
export default () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const funcRef = useRef<any>(null)
  const increaseRef = useRef<any>(null)

  increaseRef.current = useCallback((prevCount:number) => prevCount + Number(step),[step])
  
  useEffect(()=>{
    funcRef.current = setInterval(() => {
      setCount(increaseRef.current)
    }, 1000);
    return ()=>{
      clearInterval(funcRef.current)
      funcRef.current = null
    }
  },[])
  
  
  return (
    <div className="box">
      <input value={step} onChange={(e:any)=>{
        setStep(e.target.value)
      }}/>
      <div>{count}</div>
      <HocIndex />
      <button>组件外部点击</button>
    </div>
  )
}
