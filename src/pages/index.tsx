import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import history from 'src/routes/history'

const Index: React.FC<any> = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => history.back()}>返回</Button>
    </div>
  )
}

export default Index
