"use client"

import { useState } from "react"
import { BriefcaseBusiness, ChevronDown, Download, GraduationCap, Trophy } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

type DetailGroup = {
  title: string
  items: string[]
  featured?: boolean
}

const members: Array<{
  id: string
  name: string
  role: string
  initials: string
  gradient: string
  intro: string
  focus: string[]
  downloadHref: string
  detailGroups: DetailGroup[]
  icon: typeof GraduationCap
}> = [
  {
    id: "01",
    name: "涂春宏",
    role: "队长 · 项目统筹",
    initials: "TC",
    gradient: "from-[#1d4ed8] via-[#5053e8] to-[#8b5cf6]",
    intro:
      "华东师范大学计算机科学与技术硕士在读，负责项目整体统筹规划、方案撰写与任务审核，具备企业应用 AI 化改造的实战经验。",
    focus: ["企业应用 AI 化", "整体规划", "方案撰写", "任务审核"],
    downloadHref: "/download/涂春宏.md",
    detailGroups: [
      {
        title: "企业应用 AI 化改造",
        featured: true,
        items: [
          "具备从企业真实业务问题出发识别 AI 机会点、拆解场景并推进应用落地的实战经验。",
          "关注 AI 能力与既有业务流程、知识数据和人员协作方式的结合，而非停留在单次模型演示。",
          "能够围绕业务价值、技术可行性、数据边界与实施成本共同判断方案优先级。",
          "重视从小范围可验证场景切入，通过效果反馈持续修正方案并逐步扩大应用范围。",
        ],
      },
      {
        title: "项目统筹与方案能力",
        items: [
          "负责团队整体节奏、任务拆分、材料整合与交付质量控制。",
          "统筹“人生实验室”从命题洞察、产品机制到飞书技术落地的整体叙事。",
          "审核竞品研究、用户调研与方案文本之间的证据一致性，避免产品表达与真实材料脱节。",
        ],
      },
      {
        title: "在本项目中的贡献",
        items: [
          "将企业 AI 改造中的“小场景验证—证据反馈—持续迭代”思路迁移到学生生涯探索场景。",
          "推动方案聚焦最小闭环，明确 AI 负责规模化支持、教师负责关键判断的协作边界。",
          "围绕可实施性审查 Agent、知识库、多维表格、自动化提醒与人工复核的组合方案。",
        ],
      },
    ],
    icon: GraduationCap,
  },
  {
    id: "02",
    name: "楼婧怡",
    role: "队员 · 教育研究",
    initials: "LJ",
    gradient: "from-[#7c3aed] via-[#c026d3] to-[#ec4899]",
    intro:
      "华东师范大学教育学研究生在读，负责学生与教师调查访谈，并为方案提供教育学理念、实证研究方法与学校实践案例。",
    focus: ["用户访谈", "教育学研究", "实证分析", "案例研究"],
    downloadHref: "/download/楼婧怡.md",
    detailGroups: [
      {
        title: "教育实践",
        items: [
          "2023 年 3 月在杭州市海创小学实习。",
          "2024 年 3—4 月、9—11 月在杭州行知小学实习。",
        ],
      },
      {
        title: "科研课题",
        featured: true,
        items: [
          "参与国家社科基金项目“民办教育培训机构的评价与监测研究”，撰写相关书籍第一章与第七章。",
          "参与国家社科基金项目“数字时代教育督导赋能民办高校高质量发展的路径和测度研究”，参与民办高校高质量发展督导测度指标体系建设。",
          "完成国家级大创项目：“双减”政策下公共图书馆儿童阅读推广活动的实践探究。",
          "完成国家级大创项目：小学科技类课后服务课程质量评估与效果追踪研究。",
        ],
      },
      {
        title: "论文研究（Under Review）",
        items: [
          "《智能时代 STEM 教育的中国进路》（第一作者）。",
          "《人口变动形势下如何缓解职前教师职业焦虑》（通讯作者）。",
          "Career outcome expectations among pre-service teachers in the digital age（通讯作者）。",
          "Closed-Book Drawing Enhances Learning Despite Prior-Knowledge Differences（第二作者）。",
          "《全球非标准就业浪潮下大学生的灵活就业力：概念界定、分析框架与培养路径》（第二作者）。",
          "Beyond Recall and Comprehension: Seductive Details, Achievement Goals, and Logical Reasoning（第三作者）。",
          "《超越“认知减负”：“理想困难”视角下的认知负荷再思考》（第四作者）。",
        ],
      },
      {
        title: "代表性实证研究",
        featured: true,
        items: [
          "围绕主动性人格、求职清晰度、职业结果预期与职业决策中的 AI 使用开展研究，样本量为 650 名师范生。",
          "采用 SPSS 完成描述统计、信效度与相关分析，并使用 Mplus 开展验证性因素分析、潜变量中介分析和多组结构方程模型分析。",
          "研究发现求职清晰度在主动性人格与职业结果预期间发挥部分中介作用。",
          "AI 使用能够为主动性较弱的学生提供信息与决策支持，降低职业结果预期对个体主动性的依赖。",
        ],
      },
      {
        title: "竞赛经历",
        items: [
          "第十四届“挑战杯”大学生创业计划竞赛国家级金奖。",
          "中国大学生服务外包创新创业大赛国家级二等奖。",
          "美国大学生数学建模竞赛国家级二等奖。",
          "第九届国际“互联网＋”大学生创新创业大赛国家级铜奖。",
          "第十届“创青春”中国青年创新创业大赛乡村振兴专项国家级优秀奖。",
        ],
      },
    ],
    icon: Trophy,
  },
  {
    id: "03",
    name: "王鹏飞",
    role: "队员 · AI 与竞品",
    initials: "WP",
    gradient: "from-[#0891b2] via-[#0ea5e9] to-[#2563eb]",
    intro:
      "华东师范大学 AI 专业研究生在读，具备企业级 Java 研发与 Coding Agent 实战经验，熟悉 Agent 应用的工具调用、数据连接、上下文组织和失败降级等底层技术原理。",
    focus: ["Coding Agent", "Agent 底层原理", "企业级研发", "竞品调研"],
    downloadHref: "/download/王鹏飞.md",
    detailGroups: [
      {
        title: "Coding Agent 实战",
        featured: true,
        items: [
          "使用 Coding Agent 在短周期内完成数据处理、后端服务、Next.js 前端、Electron 桌面应用与 AI 集成，并持续核对真实状态与工程边界。",
          "AWS NBA Draft Agent：构建数据管道、FastAPI 服务、Next.js 看板和工具调用型 AI Agent，以 9 个工具支持榜单、球员查询、历史模板匹配与可解释预测。",
          "LearnFlow：构建 AI 学习规划与复习工作流，覆盖知识树生成、节点拆分、容量排期、Markdown 笔记、间隔复习、RSS 与 Notion 同步。",
          "MBTI Assistant：构建本地优先的 Electron 桌面助手，将行为片段、非诊断性 AI 分析、聚合画像和成长微行动串成闭环。",
        ],
      },
      {
        title: "Agent 应用底层技术理解",
        featured: true,
        items: [
          "熟悉 OpenAI-compatible Function Calling / Tool Calling：以明确的输入输出契约封装工具，让模型负责理解问题、选择工具和组织回答。",
          "理解 Agent 可靠性不只取决于 Prompt，还取决于事实数据层、工具边界、上下文组织、调用可观测性与结果解释。",
          "能够将模型能力与确定性逻辑分离：结构化计算、权限校验和业务规则由代码承担，模型用于意图理解与非结构化内容处理。",
          "具备 API、缓存与本地数据多级回退设计经验，在工具服务不可用时保留核心流程与关键问答能力。",
          "关注隐私、安全 IPC、显式触发、用户确认和非诊断性表达等 AI 产品治理边界。",
          "理解 Coding Agent 的价值是加速“提出假设—构建原型—验证状态—修正实现”的循环，而非一次性生成代码。",
        ],
      },
      {
        title: "企业研发经历",
        items: [
          "2021—2022：浦东华宇信息技术有限公司；2023—2025：菜鸟网络科技有限公司；2025：酷澎网络科技（上海）有限公司。",
          "参与浙江高院平台化改造、智能提押提讯辅助系统与智慧建造管理平台，覆盖分布式系统、消息解耦、权限安全、数据一致性和现场联调。",
          "作为菜鸟客服工单平台核心开发参与 DDD 升级，支撑日均百万级工单；通过异步化、幂等与分布式锁使平均处理时长降低约 40%。",
          "参与菜鸟物流调度中台与数据运营看板建设，基于 DataWorks 完成多维聚合分析，帮助运营决策优化并降低约 25% 运营成本。",
          "参与企业薪酬管理平台计算引擎、批处理与 Excel 导入链路建设，将十万级数据查询接口从数十秒优化至 1 秒以内。",
        ],
      },
      {
        title: "工程技术栈",
        items: [
          "后端与分布式：Java、Spring Boot、Spring Cloud、HSF、MyBatis、DDD、RocketMQ / RabbitMQ、Redis。",
          "数据与服务：MySQL、PostgreSQL、OTS、OpenSearch、DataWorks、FastAPI、结构化数据管道。",
          "AI 与应用：OpenAI-compatible API、Function Calling / Tool Calling、Agent 工具设计、Next.js、Electron。",
          "工程方法：权限与安全、幂等控制、分布式锁、服务降级、缓存策略、监控告警、性能优化与可解释交互。",
        ],
      },
      {
        title: "在本项目中的贡献",
        items: [
          "负责国内外竞品调研、资料收集与信息整理，定位“建议—行动—证据—画像更新”链路中的产品空白。",
          "从 Agent 工程视角审查分龄对话、任务生成、证据提取与下一步推荐的工具边界和失败路径。",
          "将企业系统中的可靠性、数据一致性和人工确认机制迁移到教育 AI 场景，避免自动化替代关键教育判断。",
        ],
      },
    ],
    icon: BriefcaseBusiness,
  },
]

export function SelectedWorks() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  return (
    <section id="team" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14">
          <p className="eyebrow">团队成员 / TEAM</p>
          <SectionTitle className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:whitespace-nowrap md:text-5xl lg:text-6xl">
            三个视角，一个目标
          </SectionTitle>
          <p className="mt-6 text-sm leading-7 text-muted-foreground md:whitespace-nowrap md:text-base">
            技术、教育研究与产品调研相互校验，让方案既能讲清教育价值，也能落到真实流程。
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {members.map((member) => (
            <article key={member.id} className="relative">
              <div className="grid overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[.82fr_1.18fr]">
                <div className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${member.gradient} p-7 text-white md:min-h-[360px] md:p-10`}>
                  <div className="absolute -bottom-20 -right-14 h-64 w-64 rounded-full border border-white/20" />
                  <div className="absolute -bottom-10 -right-2 h-44 w-44 rounded-full border border-white/25" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/70">MEMBER / {member.id}</span>
                      <member.icon className="h-6 w-6 text-white/80" />
                    </div>
                    <div>
                      <div className="text-[84px] font-semibold leading-none tracking-[-0.08em] text-white/95 md:text-[128px]">{member.initials}</div>
                      <p className="mt-4 text-sm text-white/75">知之为知之，不知问AI</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{member.name}</h3>
                      <span className="text-sm font-medium text-[#5556d8]">{member.role}</span>
                    </div>
                    <p className="mt-7 text-base leading-8 text-zinc-600 md:text-lg">{member.intro}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {member.focus.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 border-t border-black/8 pt-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        aria-expanded={expandedMember === member.id}
                        aria-controls={`member-details-${member.id}`}
                        onClick={() => setExpandedMember((current) => (current === member.id ? null : member.id))}
                        className="flex min-h-11 flex-1 items-center justify-between rounded-full px-1 text-left font-medium text-[#4546c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5556d8]"
                      >
                        {expandedMember === member.id ? "收起完整成员经历" : "展开完整成员经历"}
                        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${expandedMember === member.id ? "rotate-180" : ""}`} />
                      </button>
                      <a
                        href={member.downloadHref}
                        download
                        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[#5556d8]/25 bg-[#f1f2ff] px-5 text-sm font-semibold text-[#4546c9] transition-colors hover:border-[#5556d8] hover:bg-[#e8e9ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5556d8] focus-visible:ring-offset-2"
                      >
                        <Download className="h-4 w-4" />
                        下载个人介绍
                      </a>
                    </div>
                    {expandedMember === member.id && (
                      <div id={`member-details-${member.id}`} className="mt-5 space-y-4">
                        {member.detailGroups.map((group) => (
                          <section key={group.title} className={`rounded-2xl border p-5 ${group.featured ? "border-[#5556d8]/20 bg-[#5556d8]/[0.045]" : "border-black/5 bg-secondary/60"}`}>
                            <h4 className={`text-sm font-semibold ${group.featured ? "text-[#4d4ec7]" : "text-foreground"}`}>{group.title}</h4>
                            <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                              {group.items.map((item) => (
                                <li key={item} className="flex gap-2.5">
                                  <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${group.featured ? "bg-[#5556d8]" : "bg-zinc-400"}`} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
