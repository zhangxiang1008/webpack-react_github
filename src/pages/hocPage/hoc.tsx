import React, { useEffect, useRef } from 'react'

export default function ClickListenerHOC(Component: any): any {
  return function wrap(props: any): any {
    const domRef: any = useRef(null)
    useEffect(() => {
      const hanleClick = () => console.log('添加点击监听-----')
      domRef.current?.addEventListener('click', hanleClick)
      return () => {
        domRef.current?.removeEventListener('click', hanleClick)
      }
    }, [])
    return (
      <div ref={domRef}>
        <Component {...props} />
      </div>
    )
  }
}
