import { BookOpenText, Download, FileText, ListChecks, MessagesSquare } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const materials = [
  {
    title: "开题方案 V2",
    type: "核心方案",
    description: "包含开题报告 Part 1 命题洞察、Part 2 整体解决方案，以及调研分析和技术设想。",
    href: "/download/飞书AI先锋赛-方案V2.md",
    icon: BookOpenText,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "海外竞品核心功能梳理",
    type: "竞品研究",
    description: "逐项梳理 8 个海外平台的画像、推荐、任务、作品与反馈能力。",
    href: "/download/海外竞品核心功能梳理.md",
    icon: ListChecks,
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "海外竞品调研报告",
    type: "竞品研究",
    description: "围绕“从建议到行动”的闭环机制，提炼产品切入点与可借鉴能力。",
    href: "/download/海外竞品调研报告.md",
    icon: FileText,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "国内生涯与智慧教育平台调研",
    type: "竞品研究",
    description: "对比国内平台与 Youth-Pi，判断“真实行动证据”的差异化空间。",
    href: "/download/国内生涯与智慧教育平台竞品调研.md",
    icon: FileText,
    accent: "bg-orange-50 text-orange-700",
  },
  {
    title: "海亮教育科技产品矩阵调研",
    type: "生态研究",
    description: "从中学生成长视角识别现有能力与缺口，明确连接层和行动层定位。",
    href: "/download/海亮教育科技产品矩阵调研.md",
    icon: FileText,
    accent: "bg-rose-50 text-rose-700",
  },
  {
    title: "用户访谈提纲 V1",
    type: "调研方法",
    description: "覆盖中学生、教师与在线教育规划平台负责人的分角色访谈问题。",
    href: "/download/用户访谈提纲-V1.md",
    icon: MessagesSquare,
    accent: "bg-fuchsia-50 text-fuchsia-700",
  },
]

export function Insights() {
  return (
    <section id="materials" className="scroll-mt-20 bg-[#f7f8fb] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">材料下载 / DOWNLOADS</p>
            <SectionTitle className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">所有论证，均可带走</SectionTitle>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-right">
            团队成员详细经历已直接嵌入上方个人卡片。此处仅保留方案、竞品与调研原始材料，点击卡片即可下载对应文件。
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <a
              key={material.title}
              href={material.href}
              download
              className="group flex min-h-[260px] flex-col rounded-[1.5rem] border border-black/5 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              aria-label={`下载${material.title}`}
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${material.accent}`}>
                  <material.icon className="h-5 w-5" />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-black/8 text-muted-foreground transition-all group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
                  <Download className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-auto pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{material.type}</p>
                <h3 className="mt-3 text-xl font-semibold md:text-2xl">{material.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{material.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#5556d8]">
                  直接下载
                  <Download className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
