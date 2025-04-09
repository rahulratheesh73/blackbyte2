import { title } from "@/components/primitives";

export default function AboutPage() {
  // app/about/page.tsx or wherever you're placing this

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M18 16.98h-6m6-6H8m12 12H4V4h16v18.98Z" />
        </svg>
      ),
      title: "Scalable Solutions",
      description:
        "Our web applications are designed to grow with your business, ensuring seamless scalability as your needs evolve.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m7 9 2 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2m0 4v-4" />
        </svg>
      ),
      title: "User-Centered Design",
      description:
        "We prioritize user experience, ensuring our applications are intuitive, easy to use, and designed to solve real-world problems.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: "Responsive & Adaptive",
      description: "Our web applications are built to work seamlessly across all devices, ensuring a consistent experience for your users.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M16.5 9.4 7.55 4.24M18.98 12.96 7.5 19.75M16.5 20H7.5m9-15h-9m3.75 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      ),
      title: "Robust Architecture",
      description: "Our applications are built with a solid foundation that ensures high performance, reliability, and maintainability.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
          <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
        </svg>
      ),
      title: "End-to-End Support",
      description: "From development to deployment, we provide comprehensive support at every stage to ensure your application succeeds.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      title: "Security-First Approach",
      description: "We implement the latest security protocols to protect your data and ensure that your application is safe and secure.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Tailored Solutions",
      description: "We understand that every business is unique. Our web applications are built to meet your specific needs and requirements.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="m12 19-7-7 3-3 4 4 8-8 3 3-11 11z" />
        </svg>
      ),
      title: "Innovative Designs",
      description: "Our team focuses on creating modern and visually appealing designs that enhance user experience and engagement.",
    },
  ]

  return (
    <div>
      <section className="w-full ">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Why <span className="text-green-600">choose</span>
              <br />
              us <span className="text-sky-700">for your web applications.</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-xl">Your trusted partner for powerful web applications.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="rounded-full bg-purple-950 w-10 h-10 flex items-center justify-center text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
