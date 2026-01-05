import { MFE_LOADING_TEXT } from "../config/contants"


export const LoadingContent = () => {
  return <div
    style={{
      background: '#999',
      width: '600px',
      height: '300px',
      color: '#333',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      margin: '4px'
    }}
  >{MFE_LOADING_TEXT}</div>
}