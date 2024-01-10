import React, { ReactNode, useEffect, useState } from 'react'
import { Outlet, useLocation, useOutlet } from 'react-router-dom'
import { Offscreen } from '../offScreen'

const Index: React.FC<any> = (props) => {
  const { mode, children } = props
  const location = useLocation()
  const locationPathname = location.pathname
  const locationKey = location.key
  const outlet = useOutlet()

  const [outlets, setOutlets] = useState<any[]>([])
  useEffect(() => {
    const result = outlets.some((o: any) => {
      if (o.pathname === locationPathname) {
        return true
      }
    })

    if (!result) {
      setOutlets([
        ...outlets,
        {
          key: locationKey,
          pathname: locationPathname,
          outlet
        }
      ])
    }
  }, [locationPathname])
  return (
    <>
      {outlets.map((o: any) => {
        return (
          <Offscreen
            key={o.key}
            mode={locationPathname === o.pathname ? 'visible' : 'hidden'}
          >
            <Outlet></Outlet>
          </Offscreen>
        )
      })}
    </>
  )
}

export default Index
