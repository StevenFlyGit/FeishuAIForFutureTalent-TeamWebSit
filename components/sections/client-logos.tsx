const evidenceSources = ["中学生问卷", "一线教师访谈", "海亮服务老师访谈", "8个海外平台", "国内智慧教育平台", "海亮产品矩阵"]

export function ClientLogos() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-foreground py-7 text-background" aria-label="调研证据来源">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...evidenceSources, ...evidenceSources].map((source, index) => (
          <div key={`${source}-${index}`} className="flex min-w-max items-center gap-6 px-7 md:px-10">
            <span className="text-lg font-medium whitespace-nowrap md:text-xl">{source}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7394ff] to-[#78f3ff]" />
          </div>
        ))}
      </div>
    </section>
  )
}
