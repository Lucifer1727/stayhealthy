import { Navbar } from "@/components/ui/navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  //open.spotify.com/track/4tHJc5agHg9LVsijAwtooy
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans">
        {/* Hero Section with Background Image */}
        <section
          className="flex-1 flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat relative min-h-[500px]"
          style={{
            backgroundImage: "url('/navbar-bg.jpg')",
          }}
        >
          {/* Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div> */}

          <div className="relative max-w-7xl mx-auto px-4 py-20 z-10 w-full">
            <div className="flex justify-end">
              <div className="max-w-xl text-right">
                <h1 className="text-6xl font-bold text-zinc-900 mb-4">
                  Plan Well
                  <br />
                  Eat Well
                </h1>
                <p className="text-zinc-600 mb-8 ml-auto max-w-md">
                  Daily meal plans to help you stay on track and thrive. Smart
                  meal planning for a healthier, balanced lifestyle.
                </p>
                <div className="flex justify-end">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
                  >
                    <span className="flex items-center gap-2">
                      Schedule Now
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </HoverBorderGradient>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="why-choose-us" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-zinc-900 mb-6">
                  About
                  <br />
                  StayHealthy
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-zinc-600 leading-relaxed">
                  At StayHealthy, we believe that healthy eating should be
                  simple, enjoyable, and accessible to everyone. Our mission is
                  to help you nourish your body and mind by providing
                  personalized meal plans, delicious recipes, and practical
                  tools that fit your lifestyle.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Whether you&apos;re a busy professional, a health enthusiast,
                  or just starting your wellness journey, VitalPlate makes it
                  easy to plan, prepare, and enjoy nutritious meals that fuel
                  your day. We are passionate about helping you find balance and
                  thrive with wholesome, real food.
                </p>
                <button className="text-zinc-900 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  About Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 bg-[#f5f1ed]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              <div className="text-2xl font-bold text-zinc-800">HERBALIFE</div>
              <div className="text-2xl font-bold text-zinc-800">fitbit</div>
              <div className="text-2xl font-bold text-zinc-800">nutreco</div>
              <div className="text-2xl font-bold text-zinc-800">
                Atrium Health
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-zinc-400">
              © 2026 StayHealthy. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
