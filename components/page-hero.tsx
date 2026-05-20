type PageHeroProps = {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/kalahari-desert-landscape-africa.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold">{title}</h1>
        <p className="text-xl text-gray-200">{description}</p>
      </div>
    </div>
  )
}
