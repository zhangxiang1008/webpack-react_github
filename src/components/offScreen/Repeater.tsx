import { useRef, useEffect, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import React from 'react'

export const Repeater: FC<{
  mode: 'visible' | 'hidden'
  children: ReactNode
}> = (props) => {
  // props
  const { mode, children } = props
  // refs
  const resolveRef = useRef<() => void>()
  // methods
  const resolvePromise = () => {
    if (resolveRef.current && mode === 'visible') {
      resolveRef.current()
      resolveRef.current = void 0
      console.log('Repeter', mode)
    } else if (resolveRef.current && mode === 'hidden') {
      console.log('Repeter', mode)
    }
  }
  resolvePromise()
  useEffect(() => {
    resolvePromise()
  }, [])

  if (mode === 'hidden') {
    throw new Promise<void>((resolve) => (resolveRef.current = resolve))
  }
  return <Suspense fallback={<h2>🌀 Loading...</h2>}>{children}</Suspense>
}
