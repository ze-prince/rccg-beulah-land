"use client";

import { Calendar, BookOpen, Users, Flame, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Programmes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-red-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-red-200 mb-5"
          >
            Worship • Word • Prayer • Fellowship
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Church Programmes
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Join us throughout the week as we grow in faith, worship together, and encounter God.
          </motion.p>
        </div>
      </section>

      {/* Main Programmes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-center mb-16 text-red-900"
          >
            Regular Programmes
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Sunday Service */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-red-100 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-red-100 rounded-xl group-hover:bg-red-700 group-hover:text-white transition-colors">
                <Calendar className="w-8 h-8 text-red-700 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sunday Service</h3>
              <p className="text-red-700 font-medium mb-4">Every Sunday • 8:00 AM</p>
              <p className="text-gray-600">
                Our main worship service filled with anointed worship, powerful teaching, 
                and life-transforming fellowship.
              </p>
            </motion.div>

            {/* Mid-week Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-red-100 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-red-100 rounded-xl group-hover:bg-red-700 group-hover:text-white transition-colors">
                <BookOpen className="w-8 h-8 text-red-700 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Mid-week Service 1</h3>
              <p className="text-red-700 font-medium mb-4">Tuesdays (Digging Deep) • 6:00 PM</p>
              <p className="text-gray-600">
                In-depth Bible study, prayer, and spiritual strengthening for the week ahead.
              </p>
            </motion.div>

            {/* Mid-week Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-red-100 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-red-100 rounded-xl group-hover:bg-red-700 group-hover:text-white transition-colors">
                <Users className="w-8 h-8 text-red-700 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Mid-week Service 2</h3>
              <p className="text-red-700 font-medium mb-4">Thursdays (Faith Clinic) • 6:00 PM</p>
              <p className="text-gray-600">
                Prayer and spiritual strengthening for the week ahead.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-center mb-12 text-red-900"
          >
            Special Programmes
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <Flame className="w-10 h-10 text-red-700" />
                <h3 className="text-2xl font-semibold text-red-900">Holy Ghost Service</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A powerful monthly encounter with God in deep worship, prayer, and the move of the Holy Spirit.
              </p>
              <p className="text-sm text-red-700 font-medium">Last Friday of every month at Redemption Camp • 6:00 PM</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-10 h-10 text-red-700" />
                <h3 className="text-2xl font-semibold text-red-900">Fasting & Prayer</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seasons of intense prayer and fasting for spiritual breakthroughs and personal growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}