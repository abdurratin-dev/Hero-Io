import Image from "next/image";
import HeroImage from "@/assets/hero.png";

export default function Hero() {
  return (
    <section className="py-10">
      {/* Top Heading Section */}
      <div className="container mx-auto text-center flex flex-col justify-center items-center gap-10 px-3">
        <h1 className="md:text-5xl text-4xl font-bold text-slate-900">
          We Build <br /><span className="text-violet-600">Productive Apps</span>
        </h1>
        <p className="text-slate-600 lg:px-90 px-8">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-800">
            Google Play
          </button>
          <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-100">
            App Store
          </button>
        </div>
        <div className="px-5">
          <Image src={HeroImage} alt="Hero Img" className="" />
        </div>
        {/* Floating Icons - can be mapped from an array */}
      </div>

      {/* Stats Section */}
      <div className="bg-violet-600  py-12 px-8 text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                label: "Total Downloads",
                value: "29.6M",
                sub: "21% More Than Last Month",
              },
              {
                label: "Total Reviews",
                value: "906K",
                sub: "46% More Than Last Month",
              },
              {
                label: "Active Apps",
                value: "132+",
                sub: "31 More Will Launch",
              },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-sm opacity-80 uppercase tracking-wide">
                  {stat.label}
                </p>
                <h3 className="text-4xl font-bold my-2">{stat.value}</h3>
                <p className="text-xs opacity-70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
