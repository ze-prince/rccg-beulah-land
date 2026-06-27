// components/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="RCCG Beulah Land Logo" 
                width={55} 
                height={55}
                className="rounded-full"
                priority
              />
              <div>
                <h3 className="font-semibold text-lg">RCCG Beulah Land</h3>
                <p className="text-red-500 text-sm">Redeemed Christian Church of God</p>
              </div>
            </div>
            <p className="text-white text-sm">
              Bride of Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/programmes" className="hover:text-red-400 transition-colors">Programmes</Link></li>
              <li><Link href="/sermons" className="hover:text-red-400 transition-colors">Sermons</Link></li>
              <li><Link href="/offering" className="hover:text-red-400 transition-colors">Offerings</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Service Times</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-1" size={18} />
                <div>
                  <p>Sunday Service</p>
                  <p className="text-red-300">8:00 AM - 12:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1" size={18} />
                <div>
                  <p>Mid-week Service</p>
                  <p className="text-red-300">Tuesday 6:00 PM - 7:00 PM</p>
                  <p className="text-red-300">Thursday 6:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & YouTube */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+234 802 649 2055</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <p>Majek 2nd Gate Bus Stop, Abijo, Ibeju Lekki, Lagos.</p>
              </div>
            </div>

            {/* YouTube Link */}
            <div className="mt-6">
              <p className="text-red-400 text-sm mb-2">Watch us Live on YouTube</p>
              <a 
                href="https://youtube.com/@beulahlandparish" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 transition-colors px-5 py-2.5 rounded-lg text-sm"
              >
                ▶️ Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900 mt-12 pt-6 text-center text-sm text-white">
          © {new Date().getFullYear()} RCCG Beulah Land. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}