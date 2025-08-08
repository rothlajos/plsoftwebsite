import React from 'react';
import { TrendingUp, Zap, Shield, Handshake } from 'lucide-react';

export default function Approach() {
  const principles = [
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We're passionate about growth—both ours and yours. Our team constantly evolves by keeping pace with cutting-edge technologies and industry best practices."
    },
    {
      icon: Zap,
      title: "Modern Development",
      description: "We adopt modern development practices and tools to ensure quality, scalability, and maintainability in every solution we deliver."
    },
    {
      icon: Shield,
      title: "Enterprise Quality",
      description: "We maintain the highest standards of technical excellence and enterprise-grade quality in every solution we deliver."
    },
    {
      icon: Handshake,
      title: "True Partnership",
      description: "We believe technology should enable business success, and we partner with our clients to turn digital challenges into measurable results."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our approach combines technical excellence with business acumen, ensuring every solution 
            we deliver drives real value for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}