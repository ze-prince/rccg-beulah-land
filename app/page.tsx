// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Priority Loading */}
      <section className="relative min-h-[55vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/church1.jpg"
          alt="RCCG Beulah Land Church"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-black/65 to-red-900/75" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-red-200 mb-6"
          ><br />
          Redeemed Christian Church of God
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-white">
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
            <br />
            
          </motion.div>
        </div>
      </section>

      {/* WELCOME SECTION*/}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div>
            <div className="w-24 h-1 bg-red-700 rounded-full mb-8" />
            <h2 className="text-5xl font-bold text-red-900 mb-6">
              Welcome Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At RCCG Beulah Land Parish, we are committed to building lives 
              through God's Word, worship, prayer, discipleship, and community.
            </p>

            <Link href="/about" className="inline-flex items-center text-red-800 font-semibold">
        Learn More →
      </Link>
      </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/church.jpg"
              alt="Church congregation"
              width={800}
              height={600}
              className="w-full h-[450px] object-cover"
              loading="lazy"           // Lazy load this image
              quality={90}
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
      viewport={{ once: false }}
      className="text-4xl font-semibold text-center mb-12 text-red-900"
    >
      Our Pastors
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Pastor Lanre */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
      >
        <div className="relative h-80 bg-white flex items-center justify-center p-4">
          <Image
            src="/pastor2.jpg"
            alt="Pastor Lanre"
            fill
            className="object-contain"   // Shows full image without cropping
            loading="lazy"
            quality={85}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-red-900">Pastor Lanre</h3>
          <p className="text-red-700 font-medium">Parish Pastor</p>
          <p className="mt-3 text-gray-600 text-sm">
            A vessel called by God to lead His people into deeper intimacy with Christ.
          </p>
        </div>
      </motion.div>

      {/* Pastor Kehinde */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
      >
        <div className="relative h-80 bg-white flex items-center justify-center p-4">
          <Image
            src="/pastor1.jpg"
            alt="Pastor Kehinde"
            fill
            className="object-contain"   // Shows full image without cropping
            loading="lazy"
            quality={85}
          />
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
          viewport={{ once: false }}
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