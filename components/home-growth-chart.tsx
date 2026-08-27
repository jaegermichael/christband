"use client"

import { curveMonotoneX } from "@visx/curve"
import { AreaChart, Area } from "@/components/charts/area-chart"
import { Grid } from "@/components/charts/grid"
import { XAxis } from "@/components/charts/x-axis"

const demoData = [
  { date: "2026-01-01", connections: 18 },
  { date: "2026-02-01", connections: 26 },
  { date: "2026-03-01", connections: 32 },
  { date: "2026-04-01", connections: 41 },
  { date: "2026-05-01", connections: 49 },
  { date: "2026-06-01", connections: 61 },
]

export function HomeGrowthChart() {
  return (
    <section className="border-y border-secondary/20 bg-[#4F1A74] py-16 md:py-20" aria-labelledby="growth-preview-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">A living platform</p>
          <h2 id="growth-preview-heading" className="mt-4 max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">Built to grow with the community.</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-white/75">A small glimpse of the kind of community story ChristBand can help make visible: more connections, more shared moments, more ways to serve.</p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/55">Illustrative preview data · not live reporting</p>
        </div>

        <div className="rounded-xl border border-secondary/30 bg-[#3A0353] p-5 md:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-semibold text-white">Community connections</p>
              <p className="mt-1 text-xs text-white/55">Example monthly interactions</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70"><span className="h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden="true" />Connections</div>
          </div>
          <div className="mt-5 min-h-[260px]" role="img" aria-label="Illustrative area chart showing example community connections increasing from 18 to 61 between January and June 2026">
            <AreaChart data={demoData} xDataKey="date" aspectRatio="2.3 / 1" margin={{ top: 18, right: 16, bottom: 36, left: 16 }}>
              <Grid horizontal stroke="rgba(248,210,153,0.18)" />
              <Area dataKey="connections" curve={curveMonotoneX} fill="#F8D299" fillOpacity={0.28} stroke="#F8D299" strokeWidth={3} gradientToOpacity={0.02} showMarkers markers={{ fill: "#FFFFFF", stroke: "#F8D299", radius: 3 }} />
              <XAxis numTicks={4} tickMode="domain" />
            </AreaChart>
          </div>
        </div>
      </div>
    </section>
  )
}
