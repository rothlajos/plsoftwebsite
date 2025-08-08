import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@plsoft.hu</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Phone</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">+36305512004</p>
                  <p className="text-gray-600">+36305881582</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Locations</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Budapest, Hungary</p>
                  <p className="text-gray-600">Debrecen, Hungary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}