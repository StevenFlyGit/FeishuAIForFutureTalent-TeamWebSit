import Link from "next/link"
import { ArrowUpRight, ClipboardList, Clock3, School, UserRoundCheck } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const surveyUrl =
  "https://hcnf4puys7we.feishu.cn/share/base/form/shrcn0yAMIOszLTnUGLMSf508Ed?from=navigation"

const findings = [
  {
    icon: Clock3,
    role: "学生侧",
    title: "愿意尝试，但时间与反思负担必须足够低",
    text: "调研显示，部分学生每周只愿投入 30 分钟以内；长篇书写反思容易影响持续使用。因此任务需要短、小、可选，反馈可用标签、选择或语音完成。",
    tone: "bg-blue-50 text-blue-700",
  },
  {
    icon: School,
    role: "教师侧",
    title: "一次性体验很多，体验之后的持续行动很少",
    text: "学校已有讲座、测评、夏令营和职业体验，但活动结束后往往缺少后续任务、作品沉淀与持续反馈，难以形成可复用的成长证据。",
    tone: "bg-violet-50 text-violet-700",
  },
  {
    icon: UserRoundCheck,
    role: "实施侧",
    title: "核心原则：不能给普通教师增加大量运营工作",
    text: "班主任可以提供观察和简单确认，但完整的任务设计、批改与跟进应由 AI 和生涯服务教师承担，关键变化再升级给教师判断。",
    tone: "bg-cyan-50 text-cyan-700",
  },
]

const principles = [
  ["短时任务", "30 分钟也能完成一次有产出的探索"],
  ["课程内嵌", "优先进入活动课或专门课程，不额外挤占学业时间"],
  ["结果可见", "把作品、感受与反馈转成可解释的成长记录"],
  ["人机协同", "AI 规模化支持，关键判断由专业人员把关"],
]

export function Testimonials() {
  return (
    <section id="research" className="scroll-mt-20 bg-[#f7f8fb] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">实际调研 / RESEARCH</p>
            <SectionTitle className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              先听见真实阻力，再设计行动闭环
            </SectionTitle>
          </div>
          <Link href={surveyUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
            <ClipboardList className="h-4 w-4" />
            查看学生问卷
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {findings.map((finding) => (
            <article key={finding.title} className="rounded-[1.5rem] border border-black/5 bg-white p-6 md:p-8">
              <div className={`grid h-11 w-11 place-items-center rounded-2xl ${finding.tone}`}>
                <finding.icon className="h-5 w-5" />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{finding.role}</p>
              <h3 className="mt-3 text-xl font-semibold leading-7">{finding.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{finding.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-[1.75rem] bg-foreground p-6 text-background md:p-10">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">调研转译 / DESIGN RESPONSE</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">四条落地原则</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">访谈不只用于证明需求，也直接约束产品如何被学校接受。</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {principles.map(([title, text], index) => (
                <div key={title} className="border-t border-white/15 pt-4">
                  <p className="text-sm font-semibold"><span className="mr-3 text-white/40">0{index + 1}</span>{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
