import { useRef, useState, useEffect } from "react"
import { useAnimationFrame } from "framer-motion"

interface Product {
  name: string
  image: string
}
 
const products: Product[] = [
  {
    name: "Engraved Wooden Keepsake",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Acrylic LED Signage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Custom Trophy Awards",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Branded Apparel",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Custom Printed Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Die-Cut Sticker Packs",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Large Format Banners",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Engraved Photo Frames",
    image: "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?q=80&w=800&auto=format&fit=crop",
  },
]

const triple = <T,>(arr: T[]) => [...arr, ...arr, ...arr]

function AnimatedCounter({
  target,
  suffix = "",
  duration = 3000,
  shouldStart,
}: {
  target: number
  suffix?: string
  duration?: number
  shouldStart: boolean
}) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafRef = useRef<number>(0)
  const started = useRef(false)

  useEffect(() => {
    if (!shouldStart || started.current) return
    started.current = true
    startTime.current = null

    const animate = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp
      const elapsed = timestamp - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [shouldStart, target, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

function InfiniteRow({ items }: { items: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pos = useRef(0)

  const cloned = triple(items)
  const width = items.length * (320 + 24)

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return
    pos.current += (delta / 1000) * 50
    if (pos.current > width) pos.current -= width
    trackRef.current.style.transform = `translateX(${-pos.current}px)`
  })

  return (
    <div className="fp-row">
      <div ref={trackRef} className="fp-track">
        {cloned.map((p, i) => (
          <div key={i} className="fp-card">
            <img src={p.image} alt={p.name} />
            <div className="fp-overlay" />
            <div className="fp-content">
              <h3>{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`featured${inView ? " featured--visible" : ""}`}
    >
      {/* ── INTRO — full width, background image edge to edge ── */}
      <div className="featured__intro">
        <div className="featured__eyebrow-wrap">
          <p className="featured__eyebrow">WHAT WE DO</p>
          <div className="featured__eyebrow-underline" />
        </div>

        <h2 className="featured__title">
          We Create Products That Make Brands Stand Out
        </h2>

        <p className="featured__desc">
          From precision laser engraving to large-scale print solutions, we
          deliver high-quality custom products that elevate your brand presence.
        </p>
      </div>

      {/* ── STATS BAND — full width, dark red, no image ── */}
      <div className="featured__stats-band">
        <div className="featured__stats">
          <div>
            <h3>
              <AnimatedCounter target={500} suffix="+" duration={3500} shouldStart={inView} />
            </h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3>
              <AnimatedCounter target={100} suffix="+" duration={3000} shouldStart={inView} />
            </h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3>
              <AnimatedCounter target={5} suffix="★" duration={2500} shouldStart={inView} />
            </h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* ── SCROLL HEADING — buttons flank "Our Work" as gateway ── */}
      <div className="featured__scroll-heading">
        <a href="/contact" className="btn-primary">
          Start a Project
        </a>
        <span
          style={{
            color: "#888",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Our Work
        </span>
        <a href="/portfolio" className="btn-secondary">
          View Work
        </a>
      </div>

      <InfiniteRow items={products} />
    </section>
  )
}