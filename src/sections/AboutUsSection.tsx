import aboutImage from '../assets/hero-pasta.jpg'

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="bg-white px-4 pb-4 pt-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-[1550px] overflow-hidden rounded-[32px] bg-[#fab838] px-4 py-16 text-white md:px-8 md:py-20 lg:px-16 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/75 md:text-sm">
              Our Story
            </p>

            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              How Pasta Fasta
              <br />
              started
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-black/88 md:text-lg md:leading-9">
              <p>
                Pasta Fasta began with a simple idea: create a pasta brand that feels
                premium, modern, and instantly recognizable. From the beginning, the
                vision was not only about product quality, but also about building a
                brand people would remember the moment they saw it.
              </p>

              <p>
                What started as a bold concept quickly grew into a clear identity.
                The focus became combining strong design, clean presentation, and a
                product experience that feels both approachable and elevated.
              </p>

              <p>
                Today, Pasta Fasta continues to grow as a brand shaped by quality,
                character, and the ambition to stand out in every vity and every customer experience.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
            <img
              src={aboutImage}
              alt="Pasta Fasta story"
              className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent_45%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}