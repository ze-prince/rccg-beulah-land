// app/sermons/page.tsx
import { Play, Calendar, Clock } from "lucide-react";

export default function Sermons() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
       <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-500 via-red-950 to-gray-900 text-white">

  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-red-400/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  </div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.3em] text-red-200 mb-5">
      Fellowship with the brethren
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-8">
      Sermons & Live
    </h1>

    <p className="text-xl text-red-100 max-w-3xl mx-auto">
      Feed your spirit with the Word of God
    </p>

  </div>

</section>

{/* Watch Live */}
      <section className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-red-900 mb-3">Watch Live</h2>
          <p className="text-gray-600 mb-8">Every Sunday at 10:00 AM</p>

          <a 
            href="https://www.youtube.com/@beulahlandparish/live" 
            target="_blank"
          >
          <div className="aspect-video bg-black rounded-3xl overflow-hidden mb-9 shadow-2xl flex items-center justify-center hover:bg-zinc-900">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="text-white text-xl">Live Service</p>
              <p className="text-red-400 mt-2">Sunday 10:00 AM - 12:00 AM</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            Go to Live Stream →
          </div>
          </a>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12 text-red-900">
            Recent Sermons
          </h2>

          <div className="text-center text-gray-500 py-12">
            <p className="text-lg">New sermons will be added here every Sunday.</p>
            <a 
              href="https://www.youtube.com/@beulahlandparish" 
              target="_blank"
              className="mt-6 inline-block text-red-700 hover:underline font-medium"
            >
              Visit Our YouTube Channel →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}