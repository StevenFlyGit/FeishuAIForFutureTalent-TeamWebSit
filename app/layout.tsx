import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "知之为知之，不知问AI｜团队材料",
  description: "飞书AI未来人才大赛团队补充材料：人生实验室，让学生用一次低成本真实体验验证兴趣。",
  keywords: ["飞书AI未来人才大赛", "人生实验室", "生涯教育", "AI", "团队材料"],
  authors: [{ name: "知之为知之，不知问AI" }],
  openGraph: {
    title: "知之为知之，不知问AI｜人生实验室",
    description: "把模糊兴趣变成可验证假设，让每一次行动都成为认识自己的新证据。",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${interTight.variable} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
