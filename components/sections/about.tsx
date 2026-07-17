import { ArrowRight, Bot, FileCheck2, RefreshCw, Route, ScanSearch } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const steps = [
  { number: "01", title: "说出模糊兴趣", text: "AI 用分龄对话问清：真正吸引学生的是什么。", icon: ScanSearch },
  { number: "02", title: "生成轻量实验", text: "把方向拆成 1–4 周内能完成、能产出证据的小任务。", icon: Bot },
  { number: "03", title: "提交行动证据", text: "作品、完成过程和轻反思共同记录真实体验。", icon: FileCheck2 },
  { number: "04", title: "多方反馈校准", text: "AI 初步分析，教师聚焦关键变化并进行低负担确认。", icon: RefreshCw },
  { number: "05", title: "更新下一步", text: "画像随证据更新，再连接课程、活动、项目与导师。", icon: Route },
]

const valueItems = [
  ["学生", "先试再选，少一点凭想象做决定"],
  ["教师", "基于作品与连续变化看见关键转折"],
  ["学校", "让课程、活动与导师资源匹配更精准"],
]

export function About() {
  return (
    <section id="solution" className="scroll-mt-20 border-t border-black/5 bg-[#f7f8fb] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">整体方案 / SOLUTION</p>
            <SectionTitle className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              行动不是建议的终点，
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <span className="text-muted-foreground">而是判断的新起点。</span>
            </SectionTitle>
          </div>
          <div className="lg:pt-10">
            <p className="text-lg leading-8 text-zinc-600">
              当前生涯教育的主要矛盾，不是学生缺少信息，而是丰富的建议与有限的行动条件之间存在断裂。我们不另造一个大而全的平台，而是在海亮已有能力上补充“连接层”和“行动层”。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {valueItems.map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-black/5 bg-white p-5">
                  <p className="text-sm font-semibold text-[#5556d8]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.number} className="group relative rounded-[1.5rem] border border-black/5 bg-white p-5 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">{step.number}</span>
                <step.icon className="h-5 w-5 text-[#5556d8]" />
              </div>
              <h3 className="mt-10 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              {index < steps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-zinc-300 md:block" />}
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Agent 分龄对话", "飞书知识库", "多维表格", "自动化提醒", "教师人工复核", "敏感内容升级"].map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-muted-foreground">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
