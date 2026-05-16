import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-blue-100 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            DEBO
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <Link
             to="/login"
              className="px-5 py-2 rounded-xl border border-blue-200 hover:bg-blue-50 transition"
          >
               Login
             </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-8 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Fullstack Project Management Platform
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Manage Projects & Tasks
            <span className="text-blue-600 block mt-2">
              Smarter and Faster
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            Organize your projects,
            track progress with Kanban boards, and manage
            tasks efficiently in one modern workspace.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link
  to="/register"
  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition"
>
  Start Free
</Link>

            <button className="border border-blue-200 hover:bg-blue-50 px-8 py-4 rounded-2xl text-lg font-semibold transition">
              Watch Demo
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                10K+
              </h2>
              <p className="text-gray-500 mt-2">
                Active Users
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                5K+
              </h2>
              <p className="text-gray-500 mt-2">
                Projects Managed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                99%
              </h2>
              <p className="text-gray-500 mt-2">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* HERO CARD */}
        <div className="relative">
          <div className="bg-white rounded-[32px] shadow-2xl border border-blue-100 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">
                  Personal Workspace
                </h2>
                <p className="text-gray-500 mt-1">
                  Productivity Dashboard
                </p>
              </div>

              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-semibold">
                Live
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">
                      Mobile App Design
                    </h3>
                    <p className="text-gray-500 mt-1">
                      UI/UX Team
                    </p>
                  </div>

                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm font-semibold">
                    DONE
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">
                      API Development
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Backend Team
                    </p>
                  </div>

                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-lg text-sm font-semibold">
                    IN PROGRESS
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">
                      Deployment Pipeline
                    </h3>
                    <p className="text-gray-500 mt-1">
                      DevOps Team
                    </p>
                  </div>

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-semibold">
                    TODO
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 lg:px-20 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Everything you need to manage projects, and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Kanban Boards",
              desc: "Drag and drop tasks between workflow stages easily.",
            },
            {
              title: "Authentication",
              desc: "Secure JWT-based login and protected routes.",
            },
            {
              title: "Task Management",
              desc: "Create, update, delete, and organize tasks efficiently.",
            },
            {
              title: "Project Dashboard",
              desc: "Track project progress and monitor active and completed tasks.",
            },
            {
              title: "Responsive UI",
              desc: "Clean and modern interface optimized for desktop and responsive layouts.",
            },
            {
              title: "Fullstack Architecture",
              desc: "Structured frontend, backend, database, and API integration for scalable development.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 lg:px-20 py-24 bg-blue-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Built For Better Productivity
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-relaxed">
              
Debo helps users organize projects, manage tasks, and stay productive using a clean and modern workspace.

            </p>

            <div className="space-y-5 mt-10">
              <div className="bg-white p-5 rounded-2xl border border-blue-100">
                Task and project tracking
              </div>

              <div className="bg-white p-5 rounded-2xl border border-blue-100">
                Secure JWT authentication
              </div>

              <div className="bg-white p-5 rounded-2xl border border-blue-100">
                Modern fullstack architecture
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] border border-blue-100 shadow-2xl p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold text-blue-600">
                  24/7
                </h3>
                <p className="text-gray-500 mt-2">
                  Availability
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold text-blue-600">
                  50+
                </h3>
                <p className="text-gray-500 mt-2">
                  Debo Members
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold text-blue-600">
                  100+
                </h3>
                <p className="text-gray-500 mt-2">
                  Tasks Daily
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold text-blue-600">
                  99%
                </h3>
                <p className="text-gray-500 mt-2">
                  Performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-20 py-24">
        <div className="bg-blue-500 rounded-[40px] text-white p-12 lg:p-20 text-center shadow-2xl">
          <h2 className="text-5xl font-bold leading-tight">
            Ready To Boost Your Productivity?
          </h2>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Start organizing your projects and tasks using a
            modern collaborative workspace today.
          </p>

          <Link
           to="/register"
               className="mt-10 inline-block bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-2xl text-lg font-bold transition shadow-lg"
             >
             Get Started Now
              </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-blue-100 px-8 lg:px-20 py-10 bg-white"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              Debo
            </h2>

            <p className="text-gray-500 mt-2">
              Project Management Made Simple.
            </p>
          </div>

          <div className="flex gap-8 text-gray-600 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
