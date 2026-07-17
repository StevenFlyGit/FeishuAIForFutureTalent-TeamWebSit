import { ArrowDown, Check, Minus } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const reports = [
  {
    number: "01",
    title: "海外竞品核心功能梳理",
    scope: "8 个平台",
    names: "Naviance / Xello / Cialfo / YouScience / BigFuture / SchooLinks / Kuder / Tallo",
    insight: "成熟产品普遍把建议拆成目标、任务、课程、作品、认证与机会，但“低成本实验—证据—画像修正”的闭环仍可加强。",
  },
  {
    number: "02",
    title: "海外竞品调研报告",
    scope: "闭环机制",
    names: "任务化 / 清单化 / 作品化 / 顾问跟进",
    insight: "任务系统不是附属功能，而是从建议走向行动的核心引擎；行动结果应继续参与下一次推荐。",
  },
  {
    number: "03",
    title: "国内生涯与智慧教育平台调研",
    scope: "国内市场",
    names: "科大讯飞 / 好未来 / 希沃 / Youth-Pi 等",
    insight: "国内平台强在测、评、教、学、管，较弱在真实世界体验与行动后的证据回流；Youth-Pi 更偏项目履历。",
  },
  {
    number: "04",
    title: "海亮教育科技产品矩阵调研",
    scope: "生态补位",
    names: "星学伴 / 星动力 / 星未来 / 课程、活动与导师资源",
    insight: "不替代现有矩阵，而是补充连接层和行动层：先验证真实兴趣，再提升现有资源的匹配与转化。",
  },
]

const comparison = [
  ["传统方案", "一次测评", "给出方向", "结果式档案", "建议后结束"],
  ["人生实验室", "持续证据", "推荐实验", "行动式档案", "反馈后再推荐"],
]

export function Awards() {
  return (
    <section id="competition" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">竞品调研 / LANDSCAPE</p>
            <SectionTitle className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">我们不是再做一份测评报告</SectionTitle>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              四份研究共同指向一个机会：已有产品能“看见学生”或“推荐资源”，但仍缺少让学生用真实行动修正判断的最小闭环。
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-black/8">
              <div className="grid grid-cols-5 bg-secondary px-3 py-3 text-[11px] font-medium text-muted-foreground sm:text-xs">
                <span>模式</span><span>画像</span><span>推荐</span><span>档案</span><span>闭环</span>
              </div>
              {comparison.map((row, rowIndex) => (
                <div key={row[0]} className={`grid grid-cols-5 items-center px-3 py-4 text-[11px] sm:text-xs ${rowIndex === 1 ? "bg-foreground text-background" : "bg-white"}`}>
                  {row.map((cell, cellIndex) => <span key={cell} className={cellIndex === 0 ? "font-semibold" : "opacity-75"}>{cell}</span>)}
                </div>
              ))}
            </div>
          </div>

          <div className="divide-y divide-black/8 border-t border-black/8">
            {reports.map((report) => (
              <details key={report.number} className="group py-6">
                <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5556d8]">
                  <span className="text-xs font-semibold text-muted-foreground">{report.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold md:text-xl">{report.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{report.scope}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 transition-colors group-open:bg-foreground group-open:text-background">
                    <ArrowDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </span>
                </summary>
                <div className="ml-8 mt-5 rounded-2xl bg-secondary p-5 md:ml-12">
                  <p className="text-sm font-medium">覆盖：{report.names}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{report.insight}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {[
            [Check, "差异化", "推荐的不是答案，而是下一次可验证实验"],
            [Check, "核心资产", "作品、感受、过程与反馈构成动态证据画像"],
            [Minus, "边界意识", "AI 提供依据和建议，不替代学生与教师判断"],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof Check
            return (
              <div key={String(title)} className="flex gap-4 rounded-2xl bg-secondary p-5">
                <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#5556d8]" />
                <div><p className="font-semibold">{String(title)}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{String(text)}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
