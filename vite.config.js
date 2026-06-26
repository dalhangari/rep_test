import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rep_test/' // 깃허브 페이지 배포를 위한 서브디렉토리 base 경로 설정
})
