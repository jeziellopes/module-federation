import { MFE_LOADING_TEXT } from "../config/contants"

export const LoadingHeader = () => {
  return <div
    style={{
      background: '#999',
      height: '80px',
      color: '#333',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      paddingLeft: '15px',
      margin: '4px'
    }}
  >{MFE_LOADING_TEXT}</div>
}