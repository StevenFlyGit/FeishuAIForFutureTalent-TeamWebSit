"use client"

import Link from "next/link"
import { ExternalLink, Menu, X } from "lucide-react"
import { useEffect, useState, type MouseEvent } from "react"

const navItems = [
  { href: "#solution", label: "方案" },
  { href: "#team", label: "团队" },
  { href: "#research", label: "调研" },
  { href: "#materials", label: "材料" },
]

const surveyUrl =
  "https://hcnf4puys7we.feishu.cn/share/base/form/shrcn0yAMIOszLTnUGLMSf508Ed?from=navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#top")

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    const sections = ["top", ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(`#${visible.target.id}`)
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    )

    onScroll()
    sections.forEach((section) => observer.observe(section))
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const target = document.getElementById(href.slice(1))
    if (!target) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const top = target.getBoundingClientRect().top + window.scrollY - 79
    window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? "auto" : "smooth" })
    window.history.replaceState(null, "", href)
    setActiveSection(href)
  }

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string, closeMenu = false) => {
    event.preventDefault()
    if (closeMenu) {
      setIsMobileMenuOpen(false)
      window.setTimeout(() => scrollToSection(href), 0)
      return
    }
    scrollToSection(href)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-black/5 bg-white/82 shadow-[0_8px_32px_rgba(15,23,42,0.04)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-12">
          <Link href="#top" onClick={(event) => handleAnchorClick(event, "#top")} className="group flex items-center gap-3" aria-label="返回首页">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background transition-transform group-hover:rotate-6">
              AI
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">知之为知之，不知问AI</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="主导航">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2.5 text-sm transition-colors ${
                    isActive ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute inset-x-0 -bottom-1 mx-auto h-1 w-1 rounded-full bg-[#5556d8]" />}
                </Link>
              )
            })}
            <Link
              href={surveyUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              参与问卷
              <ExternalLink className="h-4 w-4" />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-full p-2 transition-colors hover:bg-secondary md:hidden"
            aria-label="打开菜单"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background md:hidden">
          <div className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">知之为知之，不知问AI</span>
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="rounded-full p-2 hover:bg-secondary" aria-label="关闭菜单">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-3" aria-label="移动端导航">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href, true)}
                  className={`rounded-2xl px-4 py-3 text-4xl font-semibold tracking-tight ${activeSection === item.href ? "bg-secondary text-[#5556d8]" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={surveyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-medium text-background"
            >
              打开学生调研问卷
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
