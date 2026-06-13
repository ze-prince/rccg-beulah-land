"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      {/* Optimized Hero Section */}
<section className="relative min-h-[40vh] md:min-h-[70vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden">
  
  {/* Background Image - Optimized */}
  <Image
    src="/church1.jpg"
    alt="RCCG Beulah Land Church"
    fill
    className="object-cover"
    priority
    quality={85}
    sizes="100vw"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

  {/* Decorative Blur Circles */}
  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
  <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="uppercase tracking-[0.3em] text-red-200 mb-6"
    >
      Redeemed Christian Church of God
    </motion.p>

    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="text-5xl md:text-8xl font-bold leading-tight mb-8 text-white"
    >
      Welcome To<br />
      <span className="block text-red-300">Beulah Land Parish</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-10"
    >
      Raising a people deeply rooted in Christ, empowered by the Holy Spirit, 
      and equipped to transform lives.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row justify-center gap-5"
    >
      <Link
        href="/sermons"
        className="bg-red-700 hover:bg-red-800 px-8 py-4 rounded-full text-lg font-semibold transition"
      >
        Watch Sermons
      </Link>

      <Link
        href="/contact"
        className="backdrop-blur-md bg-gray-500 border border-white/30 hover:bg-white hover:text-red-900 px-8 py-4 rounded-full text-lg font-semibold transition"
      >
        Plan Your Visit
      </Link>
    </motion.div>
  </div>
</section>

      {/* WELCOME SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-red-900 mb-6">
              Welcome Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At RCCG Beulah Land Parish, we are committed to building lives 
              through God's Word, worship, prayer, discipleship, and community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/church2.jpg"
              alt="Church congregation"
              width={800}
              height={600}
              className="w-full h-[450px] object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* PASTORS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-center mb-12 text-red-900"
          >
            Our Pastors
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pastor 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pastor-card bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="h-80 bg-gray-200 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/2" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-900">Pastor Lanre</h3>
                <p className="text-red-700 font-medium">Parish Pastor</p>
                <p className="mt-3 text-gray-600 text-sm">
                  A vessel called by God to lead His people into deeper intimacy with Christ.
                </p>
              </div>
            </motion.div>

            {/* Pastor 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pastor-card bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="h-80 bg-gray-200 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/2" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-900">Pastor Kehinde</h3>
                <p className="text-red-700 font-medium">Senior Pastor</p>
                <p className="mt-3 text-gray-600 text-sm">
                  A vessel called by God to lead His people into deeper intimacy with Christ.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-zinc-200 py-20 text-black text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-4xl font-semibold mb-4">Come Experience God With Us</h2>
          <p className="text-black-300 mb-8 text-lg">Every Sunday Morning</p>
          <p className="text-2xl font-medium mb-8">8:00 AM</p>
          
          <Link
            href="/contact"
            className="inline-block bg-white text-red-800 px-12 py-4 rounded-full font-semibold hover:bg-red-50 transition text-lg"
          >
            Join Us This Sunday
          </Link>
        </motion.div>
      </section>
    </>
  );
}