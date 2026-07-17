import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = [
  { href: "#solution", label: "整体方案" },
  { href: "#team", label: "团队成员" },
  { href: "#research", label: "调研证据" },
  { href: "#materials", label: "材料目录" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#f7f8fb]">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">AI</span>
              <span className="font-semibold">知之为知之，不知问AI</span>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              我们不替学生决定未来，只帮助他们设计下一次验证。让模糊兴趣经过真实行动，变成可以被看见、被反思、被修正的成长证据。
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 md:justify-self-end" aria-label="页脚导航">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>飞书AI未来人才大赛 · 团队补充材料</p>
          <p>© {new Date().getFullYear()} 知之为知之，不知问AI</p>
        </div>
      </div>
    </footer>
  )
}
