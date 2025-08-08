import React from 'react';
import { Users, Award, Lightbulb, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A well-established Hungarian software company with a proven track record of delivering 
            innovative business solutions across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Experience Meets Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Platinum Soft combines deep technical expertise with modern development practices. 
              Our experienced professionals bring both strategic thinking and hands-on implementation skills 
              to every project, ensuring solutions that are both robust and forward-thinking.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in embedding our consultants, architects, and senior developers directly into 
              client teams, providing seamless collaboration and knowledge transfer throughout the entire 
              project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Experienced professionals with modern expertise</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Innovation Focus</h4>
              <p className="text-gray-600 text-sm">Cutting-edge technologies and modern practices</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Results Driven</h4>
              <p className="text-gray-600 text-sm">Measurable business outcomes and success</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Quality Focused</h4>
              <p className="text-gray-600 text-sm">Enterprise-grade solutions and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}