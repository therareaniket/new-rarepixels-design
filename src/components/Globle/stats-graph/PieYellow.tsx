import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Pie, PieChart } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const chartData = [
  { browser: "Web / Digital", visitors: 8, fill: "var(--color-chrome)" },
  { browser: "UI / UX", visitors: 6, fill: "var(--color-safari)" },
  { browser: "Product", visitors: 5, fill: "var(--color-firefox)" },
  { browser: "Branding", visitors: 4, fill: "var(--color-edge)" },
  { browser: "Strategy", visitors: 4, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: { color: "#E8DB7D" },
  safari: { color: "#E8DB7D" },
  firefox: { color: "#E8DB7D" },
  edge: { color: "#E8DB7D" },
  other: { color: "#E8DB7D" },
} satisfies ChartConfig

export default function PieYellow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "top 20%",
      once: true,
      onEnter: () => {
        setIsInView(true)
        gsap.to(element, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <Card className="impact-1 flex flex-col shadow-none t p-0 border-0 ring-0">
      <CardContent className="flex-1 p-0 flex items-center justify-center">
        {/* Added h-[200px] and w-full directly to ensure dimensions are never 0 on mount */}
        <div ref={containerRef} className="opacity-0 w-full stast-card-image h-[200px] p-0">
          <ChartContainer config={chartConfig} className="custom-pie-container w-full h-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel className="bg-white border-none" />} />

              <Pie
                key={isInView ? "in-view" : "hidden"}
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius="50%"
                outerRadius="90%"
                paddingAngle={2}
                cornerRadius={2}
                isAnimationActive={isInView}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}