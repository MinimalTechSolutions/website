'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye,
  FileSearch,
  Users,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Github
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MinimalSec() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'ART-T Enterprise',
      subtitle: 'AI Red Teaming Toolkit',
      description: 'Our flagship product: Enterprise-grade AI security framework detecting training data extraction and PII leakage in real-time.',
      icon: Shield,
      features: [
        'Training Data Extraction Detection',
        'Real-time PII Leakage Prevention',
        'MCP Protocol Integration',
        'EU AI Act Compliance'
      ],
      link: '/divisions/sec/art-t',
      badge: 'Flagship Product'
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities in your infrastructure, applications, and processes.',
      icon: FileSearch,
      features: [
        'Infrastructure Security Review',
        'Application Security Testing',
        'Compliance Gap Analysis',
        'Detailed Remediation Reports'
      ]
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking services to test your defenses against real-world attack scenarios.',
      icon: Lock,
      features: [
        'Network Penetration Testing',
        'Web Application Testing',
        'Social Engineering Assessments',
        'Red Team Exercises'
      ]
    },
    {
      title: 'Incident Response',
      description: 'Rapid response planning and execution to minimize damage from security incidents.',
      icon: AlertTriangle,
      features: [
        'Incident Response Planning',
        '24/7 Emergency Response',
        'Forensics Investigation',
        'Post-Incident Analysis'
      ]
    },
    {
      title: 'Web3 Security',
      description: 'Specialized security services for blockchain, smart contracts, and decentralized applications.',
      icon: Eye,
      features: [
        'Smart Contract Audits',
        'DApp Security Review',
        'Token Economics Analysis',
        'DAO Security Consulting'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-40 h-8">
                <Image
                  src="/img/minimal-wide-logo-trans.png"
                  alt="Minimal Technology Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <a
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-red-50 rounded-lg">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h1 className="text-5xl font-semibold mb-2">Minimal Sec</h1>
                <p className="text-xl text-gray-600">Cybersecurity Consulting Division</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <span className="px-4 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                Active Division
              </span>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Top-notch cybersecurity consulting services that protect your organization from 
              evolving threats in the digital landscape. From AI security to Web3, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/divisions/sec/art-t"
                className="px-6 py-3 border-2 border-red-600 text-red-600 rounded hover:bg-red-50 transition-colors"
              >
                Explore ART-T
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Security Audits Completed', value: '50+' },
              { label: 'Vulnerabilities Found', value: '200+' },
              { label: 'Incident Response Time', value: '<1hr' },
              { label: 'Client Satisfaction', value: '100%' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl font-bold mb-1 text-red-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive cybersecurity solutions for modern threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border-2 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer ${
                  idx === 0 ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-white'
                }`}
                onClick={() => setActiveService(idx)}
              >
                {service.badge && (
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-4">
                    {service.badge}
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-red-100' : 'bg-gray-100'}`}>
                      <service.icon className={`w-6 h-6 ${idx === 0 ? 'text-red-600' : 'text-gray-700'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-500">{service.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? 'text-red-600' : 'text-gray-600'}`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Why Choose Minimal Sec?</h2>
            <p className="text-gray-600 text-lg">
              Expert team with proven track record in cybersecurity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research-Driven',
                description: 'Our security practices are based on peer-reviewed research and latest threat intelligence.',
                icon: FileSearch
              },
              {
                title: 'Rapid Response',
                description: 'Sub-1-hour incident response time with 24/7 availability for critical security events.',
                icon: AlertTriangle
              },
              {
                title: 'Cutting Edge',
                description: 'Specialized expertise in emerging areas like AI security, Web3, and decentralized systems.',
                icon: Shield
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-lg border border-gray-200"
              >
                <div className="inline-flex p-4 bg-red-50 rounded-lg mb-4">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              Secure Your Digital Assets Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a free security consultation with our expert team
            </p>
            <a
              href="mailto:minimalsolucoestecnologicas@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-4">
            © 2026 Minimal Technology Solutions. Minimal Sec Division.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <a 
              href="https://github.com/MinimalTechSolutions" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:minimalsolucoestecnologicas@gmail.com"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
