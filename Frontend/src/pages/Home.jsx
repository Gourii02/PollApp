import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    
    <div className="relative w-full bg-transparent overflow-hidden">
      


      {/* ---------------- HERO SECTION ---------------- */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Create{" "}
              <span className="text-blue-600">Beautiful Interactive Polls</span>{" "}
              in Seconds
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-md">
              Designed to engage your audience with real-time, dynamic visualizations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/create"
                className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Create Poll
              </Link>

              <Link
                to="/signup"
                className="px-8 py-3 bg-white border border-gray-300 text-lg rounded-xl hover:bg-gray-100 transition shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* HERO ILLUSTRATION */}
          <img
            src="/hero.svg" // <- Replace with your own hero image
            alt="Hero Illustration"
            className="w-full max-w-lg mx-auto drop-shadow-xl animate-fadeInUp"
          />
        </div>
      </section>

      {/* ---------------- FEATURES WITH SVG ICONS ---------------- */}
      <section className="w-full bg-transparent py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Everything you need to create engaging polls.
          </p>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-16">

            {/* Feature 1 */}
            <div className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center cursor-pointer">
              <img src="/f1.svg" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Ranking Questions
              </h3>
              <p className="mt-3 text-gray-600">Let users prioritize options.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center cursor-pointer">
              <img src="/f2.svg" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Scale Ratings
              </h3>
              <p className="mt-3 text-gray-600">Collect opinions with scales.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center cursor-pointer">
              <img src="/f3.svg" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Grid Layouts
              </h3>
              <p className="mt-3 text-gray-600">
                Perfect for comparing ideas visually.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center cursor-pointer">
              <img src="/f4.svg" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Points Distribution
              </h3>
              <p className="mt-3 text-gray-600">
                Let users allocate 100 points creatively.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS SECTION ---------------- */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600">
            Create, share, and visualize — it’s that simple.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-14">

            {/* Step 1 */}
            <div className="text-center">
              <img
                src="/How1.svg" // <- Add your custom SVG here
                className="w-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold">1. Create a Poll</h3>
              <p className="text-gray-600 mt-2">
                Add questions and customize options easily.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <img
                src="/How2.svg" // <- Add your SVG
                className="w-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold">2. Share the Link</h3>
              <p className="text-gray-600 mt-2">
                Share a simple link with your audience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <img
                src="/How3.svg" // <- Add your SVG
                className="w-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold">3. View Live Results</h3>
              <p className="text-gray-600 mt-2">
                Watch responses update in real time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- POLL PREVIEW MOCKUP ---------------- */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Poll Preview Image */}
          <img
            src="/Part3.svg"  // <- Add your image here
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              See Your Polls Come Alive
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Clean charts, smooth animations, and real-time insights give users
              a memorable experience.
            </p>

            <Link
              to="/create"
              className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
            >
              Try It Now
            </Link>
          </div>

        </div>
      </section>

      {/* ---------------- TESTIMONIALS SECTION ---------------- */}
      <section className="w-full py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            What Users Say
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic">
                “QuickPolls made my online class so interactive! Students loved participating.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-900">— Aditi, Teacher</h4>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic">
                “Perfect for meetings! Real-time results helped us make quick decisions.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-900">— Rahul, Manager</h4>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
              <p className="text-gray-700 italic">
                “Very easy to use and incredibly effective in events and webinars.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-900">— Sneha, Event Host</h4>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- STATS SECTION (UNCHANGED) ---------------- */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Loved by Users Worldwide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 mt-16">
            <div>
              <h3 className="text-6xl font-extrabold text-blue-600">15K+</h3>
              <p className="text-lg text-gray-700 mt-2">Polls Created</p>
            </div>

            <div>
              <h3 className="text-6xl font-extrabold text-purple-600">65K+</h3>
              <p className="text-lg text-gray-700 mt-2">Votes Submitted</p>
            </div>

            <div>
              <h3 className="text-6xl font-extrabold text-green-600">12K+</h3>
              <p className="text-lg text-gray-700 mt-2">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION (UNCHANGED) ---------------- */}
      <section className="w-full py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Start Your First Poll Today
        </h2>
        <p className="text-gray-600 mt-3">Fast. Simple. No setup required.</p>

        <Link
          to="/create"
          className="inline-block mt-8 px-10 py-4 bg-blue-600 text-white text-xl rounded-xl shadow-md hover:bg-blue-700"
        >
          Create Poll
        </Link>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="w-full bg-gray-900 text-gray-300 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-bold text-white">QuickPolls</h3>
            <p className="mt-3 text-gray-400">
              Create stunning interactive polls with real-time results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/create" className="hover:text-white">Create Poll</Link></li>
              <li><Link to="/mypolls" className="hover:text-white">My Polls</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-gray-400">pollapp@support.com</p>
            <p className="text-gray-400">India</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 PollApp — All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
