import { cn } from '@/lib/utils'
import type { Brand } from './types'

const BRANDS: Brand[] = [
  { name: 'Nestlé' },
  { name: 'Danone' },
  { name: 'Fonterra' },
  { name: 'FrieslandCampina' },
  { name: 'Arla' },
  { name: 'Lactalis' },
  { name: 'Saputo' },
  { name: 'Amul' },
  { name: 'Müller' },
  { name: 'Yili' },
  { name: 'Mengniu' },
  { name: 'Parmalat' },
]

function BrandWordmark(props: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        'min-w-[180px] h-14 px-7 grid place-items-center select-none group cursor-pointer',
        'text-slate-600 hover:text-emerald-700 transition-all duration-500 ease-out',
        'font-semibold tracking-wide text-base',
        'bg-white/70 hover:bg-white/95 backdrop-blur-md',
        'rounded-2xl border border-slate-200/40 hover:border-emerald-200/60',
        'shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-emerald-200/25',
        'transform hover:scale-[1.02] hover:-translate-y-0.5',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
        'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
        props.className,
      )}
    >
      <span className="group-hover:font-bold transition-all duration-300 relative z-10">
        {props.name}
      </span>
    </div>
  )
}

function MarqueeRow({ items }: { items: Brand[] }) {
  return (
    <div className="relative mask-fade-x overflow-hidden">
      <div className={cn('flex gap-8 w-max will-change-transform marquee')} style={{ animationDuration: '45s' }}>
        {items.map((b) => (
          <BrandWordmark key={`a-${b.name}`} name={b.name} />
        ))}
        {items.map((b) => (
          <BrandWordmark key={`b-${b.name}`} name={b.name} />
        ))}
      </div>
    </div>
  )
}

export function TrustedBrands() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50/50 via-white to-emerald-50/20 border-y border-slate-200/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border border-emerald-200/30 shadow-sm backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm" />
            <span className="text-sm font-semibold text-emerald-800 tracking-wide">Global Partnership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Trusted by Leading Global Brands
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            Delivering excellence to dairy industry leaders worldwide through premium quality and innovation
          </p>
        </div>

        <MarqueeRow items={BRANDS} />
      </div>
    </section>
  )
}



