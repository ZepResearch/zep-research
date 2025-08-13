import Image from "next/image"

export function FlagAnimation() {
  return (
    <div className="fixed md:bottom-12 bottom-20  left-4 z-50 pointer-events-none">
      <div className="relative">
        <Image
          src="/flag.gif"
          alt="Indian Flag Animation"
          width={80}
          height={60}
          className="w-16 h-12 sm:w-20 sm:h-15 md:w-28 md:h-44 object-contain "
          unoptimized // Required for GIF animations
        />
      </div>
    </div>
  )
}
