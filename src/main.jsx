import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// 개발 모드에서는 루트(/)를 기준 삼고, 깃허브 배포본에서는 서브디렉토리(/rep_test)를 기본 경로로 자동 지정합니다.
const basename = import.meta.env.DEV ? '/' : '/rep_test';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
