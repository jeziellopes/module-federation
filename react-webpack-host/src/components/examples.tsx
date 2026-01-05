import React from "react"
import { useAuth } from "host/store"
import { SignIn } from '.';
import Header from 'remote/Header';
import Content from 'remote/Content';

export const Examples: React.FC = () => {
  const { authenticated } = useAuth()

  return <div className="example">
      <Header />
      <div style={{ display: 'flex' }}>
        {authenticated ? <Content /> : <SignIn />}
      </div>
  </div>;
}

export default Examples;