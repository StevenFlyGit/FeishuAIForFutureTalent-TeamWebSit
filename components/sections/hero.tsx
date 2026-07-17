"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, FlaskConical, Sparkles } from "lucide-react"

const heroStats = [
  { value: "3", label: "位跨学科成员" },
  { value: "1–4周", label: "低成本真实体验" },
  { value: "5步", label: "认知更新闭环" },
]

const experimentSteps = ["兴趣假设", "微任务", "行动证据", "反馈校准", "下一步"]

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-20">
      <div className="pointer-events-none absolute -right-40 top-12 -z-10 h-[620px] w-[620px] scale-125 md:-right-48 md:top-10 md:h-[840px] md:w-[840px]">
        <Image src="/images/orb.png" alt="" fill className="object-contain opacity-90" priority />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1280px] items-center gap-y-14 gap-x-0 px-6 py-16 md:px-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-x-8 lg:py-24">
        <div className="max-w-4xl lg:pr-4">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#5b5cf0]" />
            飞书AI未来人才大赛 · 团队补充材料
          </div>
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-muted-foreground">TEAM / 2026</p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[86px]">
            知之为知之，
            <span className="block bg-gradient-to-r from-[#203eec] via-[#8b5cf6] to-[#00a7c7] bg-clip-text text-transparent">
              不知问AI
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl md:leading-9">
            <strong className="font-semibold text-foreground">人生实验室：</strong>
            帮助学生把模糊兴趣变成可验证假设，通过一次低成本真实体验获得新证据，再修正下一步判断。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="#solution" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 font-medium text-background transition-transform hover:-translate-y-0.5">
              了解方案
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link href="#materials" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 font-medium backdrop-blur transition-colors hover:bg-white">
              浏览完整材料
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-black/10 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:pl-4">
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-blue-300/20 via-purple-300/15 to-cyan-300/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/80 bg-white/78 p-5 shadow-[0_30px_100px_rgba(32,62,236,0.13)] backdrop-blur-xl md:p-7">
            <div className="flex items-center justify-between border-b border-black/8 pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#203eec] to-[#7c3aed] text-white">
                  <FlaskConical className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">最小生涯实验</p>
                  <p className="text-sm text-muted-foreground">不是替你下结论，而是陪你验证</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">可开始</span>
            </div>
            <div className="py-6">
              <p className="text-sm text-muted-foreground">学生说</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">“我好像对机器人感兴趣。”</p>
              <div className="mt-6 rounded-2xl bg-[#f4f5fb] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#5556d8]">本周实验</p>
                <p className="mt-2 font-medium">完成一次简单程序调试，记录投入感、困难点与是否愿意继续。</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-[#203eec] to-[#00bcd4]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>预计 30 分钟</span>
                  <span>产出：作品 + 轻反思</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {experimentSteps.map((step, index) => (
                <div key={step} className="text-center">
                  <span className={`mx-auto grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${index < 2 ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"}`}>
                    {index + 1}
                  </span>
                  <span className="mt-2 block text-[10px] leading-4 text-muted-foreground sm:text-xs">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
