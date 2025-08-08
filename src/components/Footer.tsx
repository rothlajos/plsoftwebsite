import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Platinum Soft</h4>
            <p className="text-gray-400 leading-relaxed">
              Delivering innovative business intelligence and custom software solutions 
              that drive digital transformation and business success.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Business Intelligence</li>
              <li>.NET Development</li>
              <li>SharePoint Solutions</li>
              <li>Power BI & Analytics</li>
              <li>Azure Cloud Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Budapest, Hungary</p>
              <p>Debrecen, Hungary</p>
              <p>info@plsoft.hu</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Platinum Soft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}