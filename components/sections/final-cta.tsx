import Link from "next/link"
import { ArrowUpRight, FlaskConical } from "lucide-react"

const surveyUrl =
  "https://hcnf4puys7we.feishu.cn/share/base/form/shrcn0yAMIOszLTnUGLMSf508Ed?from=navigation"

export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="relative mx-auto max-w-[1184px] overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-center text-background md:px-12 md:py-24">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/35 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-[90px]" />
        <div className="relative mx-auto max-w-4xl">
          <FlaskConical className="mx-auto h-10 w-10 text-[#8be9ff]" />
          <h2 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            不急着找到答案，
            <span className="block text-white/55">先设计下一次验证。</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            “排除一个方向”也不是失败。每一次真实体验，都在帮助学生更诚实、更具体地认识自己。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#top" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-medium text-black transition-transform hover:-translate-y-0.5">
              返回团队首页
            </Link>
            <Link href={surveyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-medium text-white transition-colors hover:bg-white/10">
              参与学生问卷
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
