import ravioli from '../assets/ravioli.png'

type SectionDividerProps = {
  bgColor?: string
}

export default function SectionDivider({
  bgColor = '#ffffff',
}: SectionDividerProps) {
  const items = Array.from({ length: 20 })

  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12">
        {items.map((_, index) => (
          <img
            key={index}
            src={ravioli}
            alt=""
            className="h-8 w-auto opacity-90 md:h-10 lg:h-12"
            style={{
              transform: `rotate(${index % 2 === 0 ? 12 : -12}deg)`,
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}