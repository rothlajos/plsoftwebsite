import React from 'react';
import { ArrowRight, Code, Database, Cloud, Users } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight">
                Enterprise 
                <span className="block text-gray-600">Solutions</span>
                <span className="block text-gray-600">That Scale with</span>
                <span className="block text-gray-900">Platinum Soft</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We deliver cutting-edge business intelligence and custom software solutions 
                that transform how enterprises manage data and drive digital innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Business Intelligence</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade data warehouses and analytics solutions</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Code className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">.NET Development</h3>
                <p className="text-gray-600 text-sm">Custom applications built with modern .NET technologies</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Cloud className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
                <p className="text-gray-600 text-sm">Scalable Azure architectures and cloud migrations</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Solution Architecture</h3>
                <p className="text-gray-600 text-sm">Expert architectural guidance and strategic planning for your projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}