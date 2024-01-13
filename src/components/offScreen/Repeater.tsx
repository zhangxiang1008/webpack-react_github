import { useRef, useEffect, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import { lastRouter, currentRouter } from 'src/routes/index'

export const Repeater: FC<{
  mode: 'visible' | 'hidden'
  children: ReactNode
}> = (props) => {
  const location = useLocation()
  // props
  const { mode, children } = props
  // refs
  const resolveRef = useRef<() => void>()
  // methods
  const resolvePromise = () => {
    if (resolveRef.current && mode === 'hidden') {
      console.log('hidden', lastRouter)
    } else if (resolveRef.current && mode === 'visible') {
      resolveRef.current()
      resolveRef.current = void 0
      console.log('show', location.pathname)
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
