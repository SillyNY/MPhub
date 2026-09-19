import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '彼岸终曲 | BORDER OF DEATH',
  description: '弗洛洛非官方同人站',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  )
}
