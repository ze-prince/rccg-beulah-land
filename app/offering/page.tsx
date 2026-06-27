"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Offering() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied successfully!`, {
      duration: 2500,
      position: 'top-center',
      style: {
        background: '#1f2937',
        color: '#fff',
        borderRadius: '12px',
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />   {/* Toast Container */}

      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-300 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-red-200 mb-6"
          >
            Proverbs 3:9-10
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Offerings &amp; Giving
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed"
          >
            "Honor the LORD with your wealth and with the firstfruits of all your produce; 
            then your barns will be filled with plenty, and your vats will be bursting with wine."
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-red-900 mb-10"
          >
            Why We Give
          </motion.h2>

          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-8">
            <p>
              Giving is an act of worship and obedience to God. It is a way of expressing our gratitude 
              for His blessings and partnering with Him in the expansion of His Kingdom.
            </p>
            <p>
              At RCCG Beulah Land, we believe in cheerful, faith-filled giving. Whether it is tithe, 
              offering, seed faith, or special projects — every gift given with a joyful heart is 
              precious in the sight of God.
            </p>
          </div>
        </div>
      </section>

      {/* Bible Verse Highlight */}
      <section className="py-20 bg-red-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-xl"
          >
            <p className="text-2xl md:text-3xl italic leading-relaxed text-gray-700">
              “Each of you should give what you have decided in your heart to give, 
              <span className="text-red-700"> not reluctantly or under compulsion</span>, 
              for God loves a cheerful giver.”
            </p>
            <p className="mt-6 text-red-700 font-medium">— 2 Corinthians 9:7</p>
          </motion.div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-center mb-12 text-red-900"
          >
            Bank Details
          </motion.h2>

          <div className="bg-gray-50 border border-red-100 rounded-3xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-900">Bank Transfer</h3>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <p className="font-medium">Bank Name</p>
                    <p className="text-lg">Guaranty Trust Bank (GTBank)</p>
                  </div>
                  <div>
                    <p className="font-medium">Account Name</p>
                    <p className="text-lg">RCCG Beulah Land Parish</p>
                  </div>
                  <div>
                    <p className="font-medium">Account Number</p>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-2xl">
                      <p className="text-2xl font-mono tracking-wider flex-1">0123456789</p>
                      <button 
                        onClick={() => copyToClipboard("0123456789", "Account number")}
                        className="text-red-700 hover:text-red-800 p-2 hover:bg-blue-50 rounded-xl transition"
                      >
                        <Copy size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-900">Other Options</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">• Cash Offering during Service</li>
                  <li className="flex items-center gap-3">• Online Transfer via Mobile Apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}