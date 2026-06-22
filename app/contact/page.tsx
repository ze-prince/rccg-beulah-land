// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
<section className="relative py-32 overflow-hidden bg-gradient-to-br from-red-900 via-gray-900 to-red-950 text-white">

  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-red-400/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  </div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.3em] text-red-200 mb-5">
      Speak with us
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-8">
      Contact Us
    </h1>

    <p className="text-xl text-red-100 max-w-3xl mx-auto">
      We would love to hear from you.
    </p>

  </div>

</section>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-red-900 mb-8">Get In Touch</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-lg mb-2">Address</h3>
              <p className="text-gray-700">
                RCCG Beulah Land Parish<br />
                Majek 2nd Gate Bus Stop, Abijo, Ibeju Lekki,<br />
                Lagos State, Nigeria.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Phone Numbers</h3>
              <p className="text-gray-700">
                Main Line: +234 802 649 2055<br />
                WhatsApp: +234 802 649 2055
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-2">Service Times</h3>
              <p className="text-gray-700">
                Sunday Service: 10:00 AM - 12:00 AM<br />
                Mid-week Service: Wednesday 6:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Google Maps - Optimized */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-center font-semibold text-red-900 mb-8">Find Our Location</h2>
          
          <div className="rounded-3xl overflow-hidden shadow-xl relative">
            {/* Loading Placeholder */}
            <div 
              id="map-placeholder" 
              className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading Map...</p>
              </div>
            </div>

            {/* Actual Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.420957111454!2d3.658369509734003!3d6.468238593496437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf94d698e4fe5%3A0x1d4d46b0e4b1fc59!2sRedeemed%20Christian%20Church%20of%20God%2CBeulah%20Land%20Parish!5e0!3m2!1sen!2sng!4v1781268423794!5m2!1sen!2sng" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => {
                const placeholder = document.getElementById('map-placeholder');
                if (placeholder) placeholder.style.display = 'none';
              }}
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10 text-red-900">Send Us a Message</h2>
          
          <form 
            action="https://formspree.io/f/YOUR_CODE_HERE" 
            method="POST"
            className="space-y-6"
          >
            <input 
              type="text" 
              name="name"
              placeholder="Your Full Name" 
              required
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-700" 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              required
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-700" 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={6} 
              required
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-700"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-2xl font-medium text-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}