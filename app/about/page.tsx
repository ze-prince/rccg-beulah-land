"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
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
            About RCCG Beulah Land
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            The Bride<br />
            <span className="block text-red-200">Of Christ</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Building lives, transforming communities, and raising disciples who passionately follow Jesus Christ.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-semibold text-red-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
                <p>
                  RCCG Beulah Land is a growing parish of the Redeemed Christian Church of God, 
                  established with a clear mandate to win souls, build lives, and expand the Kingdom of God.
                </p>
                <p>
                  We are a family of believers passionate about genuine worship, sound biblical teaching, 
                  and impactful fellowship. Our desire is to see every member grow into the fullness of Christ.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 h-96 rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-red-900 mb-3">What We Believe</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Core truths that shape our faith and guide our living
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "The Holy Bible is the inspired, infallible, and authoritative Word of God",
              "There is one God, existing eternally in three Persons: Father, Son and Holy Spirit",
              "Jesus Christ is the Son of God, who died for our sins and rose again for our justification",
              "Salvation is by grace through faith in Jesus Christ alone",
              "The Holy Spirit indwells, empowers and equips every believer for holy living and service",
              "Healing, deliverance, and miracles are available to us today through the power of the Holy Spirit",
              "Water baptism and the Lord’s Supper are ordinances to be observed by the Church",
              "The Second Coming of Jesus Christ is real, imminent, and our blessed hope",
            ].map((belief, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-red-100 hover:border-red-300 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-700 flex items-center justify-center font-semibold text-sm mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-gray-700 text-[17px] leading-relaxed">
                    {belief}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 p-10 rounded-3xl"
            >
              <h3 className="text-4xl font-bold mb-8 text-red-900">Our Vision</h3>
              <ul className="space-y-5 text-lg text-gray-700">
                <li><b>✓</b> To make Heaven.</li>
                <li><b>✓</b> To take as many people with us.</li>
                <li><b>✓</b> To have a member of RCCG in every family of all nations.</li>
              </ul>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-red-50 text-white p-10 rounded-3xl"
            >
              <h3 className="text-4xl font-bold mb-8 text-red-900">Our Mission</h3>
              <ul className="space-y-5 text-lg text-gray-700">
                <li><b>✓</b> Holiness will be the lifestyle of members to ensure they make Heaven.</li>
                <li><b>✓</b> Church Planting: Churches will be established within a 5-minute walking distance in developing countries, and a 15-minute driving distance in developed countries.</li>
                <li><b>✓</b> The church will pursue these goals until every nation in the world is reached for the Lord Jesus Christ.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center text-red-900 mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Worship", desc: "Loving God wholeheartedly." },
              { title: "Prayer", desc: "Depending on God daily." },
              { title: "Excellence", desc: "Honoring God with our best." },
              { title: "Evangelism", desc: "Reaching the lost for Christ." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl hover:bg-red-50 transition-colors"
              >
                <h3 className="font-bold text-2xl mb-4 text-red-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}