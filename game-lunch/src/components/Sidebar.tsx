import * as React from 'react';
import { Link } from 'react-router-dom';

const style: React.CSSProperties = {
  width: '30vmax',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  borderRadius: '4px',
  overflow:'hidden',
  backgroundColor:'white'
}

export const Sidebar: React.FC = (props) => {
  return (
    <aside style={style}>
      {props.children}
    </aside>  
  )
}

export const SidebarTitle: React.FC = ({children}) => 
  <h1 style={{
    fontSize: '10vmin',
    fontWeight:'bold',
    paddingRight: '6vmax',
  }}>
    {children}
  </h1>

interface SidebarBackButtonProps {
  to: string;
}

export const SidebarBackButton: React.FC<SidebarBackButtonProps> = ({to}) => 
  <div><Link style={{
      textDecoration: 'none',
      fontSize: '25px',
      paddingLeft: '15px',
      display: 'block',
      float: 'left'
    }}
    to={to}
    >{` << `}</Link><SidebarTitle>메뉴</SidebarTitle></div>
  