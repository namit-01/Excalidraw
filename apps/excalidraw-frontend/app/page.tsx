import Link from "next/link";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== Page Heading ===== */}
      <header className="py-8 text-center border-b border-gray-800">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Excalidraw Pro
          </span>
        </h1>
        <p className="text-slate-400 mt-3 text-lg">
          Next-generation collaborative whiteboard for creators and teams
        </p>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Sign In / Sign Up Buttons at top */}
          <div className="flex justify-end gap-4 mb-12">
            <Link href="/signin">
              <button className="px-6 py-3 bg-transparent text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition-all text-lg font-medium">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-6 py-3 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-all text-lg font-medium">
                Sign Up
              </button>
            </Link>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Draw, Collaborate, &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Share
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Real-time collaborative whiteboard for teams, educators, and
            creators. Build ideas faster with intuitive drawing tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl flex items-center gap-2 text-lg font-medium">
              Start Drawing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl font-bold">120K+</div>
              <div className="text-sm text-slate-400 mt-1">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500K+</div>
              <div className="text-sm text-slate-400 mt-1">
                Drawings Created
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-slate-400 mt-1">
                Active Collaborations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="py-20 px-6 bg-gray-900 rounded-t-3xl">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Drawing Tools
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to create, collaborate, and share your ideas
            visually.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="group p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Real-time Collaboration
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Work together with your team on the same canvas, live and in
                sync.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infinite Canvas</h3>
              <p className="text-slate-300 leading-relaxed">
                No limits to your creativity—zoom, pan, and expand as your ideas
                grow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Export</h3>
              <p className="text-slate-300 leading-relaxed">
                Export your drawings as PNG, SVG, or shareable links instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Drawing?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join thousands of creators already using Excalidraw to visualize
            their ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-10 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-2xl flex items-center gap-3 text-lg font-medium">
              Start Drawing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link href="/signin">
              <button className="px-10 py-5 bg-transparent text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition-all text-lg font-medium">
                Sign In
              </button>
            </Link>

            <Link href="/signup">
              <button className="px-10 py-5 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-all text-lg font-medium">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
