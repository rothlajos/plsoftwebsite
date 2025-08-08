import React from 'react';
import { Database, Code2, Share2, BarChart3, Cloud, Server, FileText, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Database,
      title: "Enterprise Data Warehouses",
      description: "Design and build scalable, enterprise-grade data warehouses that serve as the foundation for your business intelligence initiatives.",
      color: "blue"
    },
    {
      icon: Code2,
      title: "Custom .NET Applications",
      description: "End-to-end development of robust .NET applications using Visual Studio, tailored to your specific business requirements.",
      color: "indigo"
    },
    {
      icon: Share2,
      title: "SharePoint Solutions",
      description: "Comprehensive Microsoft SharePoint-based solutions for collaboration, document management, and business process automation.",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Power BI & Analytics",
      description: "Advanced Power BI dashboards and Power Platform applications that transform your data into actionable business insights.",
      color: "green"
    },
    {
      icon: Cloud,
      title: "Azure Cloud Services",
      description: "Build scalable, secure, and cost-effective solutions leveraging Microsoft Azure services and cloud-native architectures.",
      color: "cyan"
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "On-site and remote project support with experienced Software Architects and Senior Developers embedded in your team.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
      indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
      green: "bg-green-50 text-green-600 group-hover:bg-green-100",
      cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
      orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
      gray: "bg-gray-50 text-gray-600 group-hover:bg-gray-100",
      red: "bg-red-50 text-red-600 group-hover:bg-red-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in designing, developing, and supporting modern business intelligence 
            and custom software solutions that drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${getColorClasses(service.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              We leverage the full spectrum of Microsoft technologies to deliver comprehensive, 
              integrated solutions for enterprise clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['.NET Framework', 'Azure', 'SQL Server', 'Power BI', 'SharePoint', 'Power Platform', 'Visual Studio', 'Microsoft Fabric', 'Azure Databricks', 'Azure Synapse', 'Azure Data Factory'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}