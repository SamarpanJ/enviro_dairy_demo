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
        'min-w-[160px] h-12 px-6 grid place-items-center select-none group',
        'text-gray-500 hover:text-green-700 transition-all duration-300',
        'font-semibold tracking-wide cursor-pointer',
        'bg-white/50 hover:bg-white/80 backdrop-blur-sm',
        'rounded-xl border border-gray-100/50 hover:border-green-200',
        'shadow-sm hover:shadow-md transform hover:scale-105',
        props.className,
      )}
    >
      <span className="group-hover:font-bold transition-all duration-300">{props.name}</span>
    </div>
  )
}

function MarqueeRow({ items }: { items: Brand[] }) {
  return (
    <div className="relative mask-fade-x">
      <div className={cn('flex gap-6 w-max will-change-transform marquee')} style={{ animationDuration: '40s' }}>
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
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30 border-y border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100/60 to-emerald-100/60 border border-green-200/40 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-800">Global Partnership</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Leading Global Brands</h2>
          <p className="text-gray-600 max-w-md mx-auto">Delivering excellence to dairy industry leaders worldwide</p>
        </div>

        <MarqueeRow items={BRANDS} />
      </div>
    </section>
  )
}



