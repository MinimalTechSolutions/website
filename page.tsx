'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cloud,
  Gamepad2,
  Code,
  Link as LinkIcon,
  Menu, 
  X,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  Github,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const divisions = [
    {
      id: 1,
      name: 'Minimal Byte',
      tagline: 'SaaS & Software Development',
      description: 'Better content for your contentment with technology. Web applications, mobile apps, IoT solutions, and independent game ideas brought to life by our selective team.',
      icon: Code,
      color: '#3b82f6',
      status: 'Active',
      link: '/divisions/byte',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'IoT Solutions',
        'Custom Software Engineering'
      ]
    },
    {
      id: 2,
      name: 'Minimal Sec',
      tagline: 'Cybersecurity Consulting',
      description: 'Top-notch consulting services that protect your organization from evolving threats. Security audits, penetration testing, incident response, and Web3 security solutions.',
      icon: Shield,
      color: '#ef4444',
      status: 'Active',
      link: '/divisions/sec',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Incident Response Planning',
        'Web3 Security Solutions'
      ],
      highlight: 'ART-T Enterprise Edition Available'
    },
    {
      id: 3,
      name: 'Minimal Infra',
      tagline: 'Infrastructure as a Service',
      description: 'Comprehensive IaaS solutions tailored to your needs. Computing resources, storage, networking capabilities, and hardware solutions for robotics projects.',
      icon: Cloud,
      color: '#8b5cf6',
      status: 'Expanding',
      link: '/divisions/infra',
      features: [
        'Cost-effective Scalability',
        'Enhanced Security & Compliance',
        'Reduced Management Overhead',
        'Robotics Hardware Solutions'
      ]
    },
    {
      id: 4,
      name: 'Minimal Games',
      tagline: 'Game Development',
      description: 'Engaging and immersive gaming experiences across various platforms. Mobile devices, consoles, and emerging technologies like VR and AR.',
      icon: Gamepad2,
      color: '#10b981',
      status: 'In Development',
      link: '/divisions/games',
      features: [
        'Mobile Game Development',
        'Console Game Development',
        'VR/AR Experiences',
        'Cross-platform Solutions'
      ]
    },
    {
      id: 5,
      name: 'Minimal Chain',
      tagline: 'Decentralized Autonomous Organizations',
      description: 'Pioneers in the decentralized space. Creating DAOs that foster collaboration, transparency, and innovation with a minimalistic approach.',
      icon: LinkIcon,
      color: '#f59e0b',
      status: 'Research',
      link: '/divisions/chain',
      features: [
        'Token-based Governance',
        'Smart Contract Integration',
        'Intuition-driven Development',
        'Open Source Solutions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/divisions" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Divisions
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <a 
                href="https://github.com/MinimalTechSolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
              >
                CONTACT US
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-6 space-y-4"
            >
              <Link href="/divisions" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Divisions
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <a 
                href="https://github.com/MinimalTechSolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="block px-4 py-2 bg-gray-900 text-white text-center rounded hover:bg-gray-800 transition-colors"
              >
                CONTACT US
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-700">Minimal Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Your <span className="font-semibold">simple way</span> to solve technology problems
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering the future and present of technology through five specialized divisions. 
              From SaaS to DAOs, we deliver innovation with minimalistic precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/MinimalTechSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Active Divisions', value: '5' },
              { label: 'Years of Experience', value: '3+' },
              { label: 'Open Source Projects', value: '4' },
              { label: 'GitHub Followers', value: '2+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">Our <span className="font-semibold">Five Divisions</span></h2>
            <p className="text-gray-600 text-lg">
              Specialized expertise across technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900 text-white text-xs rounded-full z-10">
                  {division.status}
                </div>

                {/* Icon & Header */}
                <div className="p-8 border-b border-gray-100">
                  <div 
                    className="inline-flex p-4 rounded-lg mb-4"
                    style={{ backgroundColor: `${division.color}15` }}
                  >
                    <division.icon 
                      className="w-8 h-8" 
                      style={{ color: division.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{division.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{division.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {division.description}
                  </p>

                  {division.highlight && (
                    <div className="mt-4 px-3 py-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 font-medium">
                      {division.highlight}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="space-y-3 mb-6">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <ChevronRight 
                          className="w-4 h-4 mt-0.5 flex-shrink-0" 
                          style={{ color: division.color }}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={division.link}
                    className="block w-full py-3 text-center rounded border-2 transition-all duration-300 font-medium text-sm group-hover:shadow-md"
                    style={{ 
                      borderColor: division.color,
                      color: division.color
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = division.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = division.color;
                    }}
                  >
                    Learn More
                  </Link>
                </div>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: division.color }}
                />
              </motion.div>
            ))}

            {/* Coming Soon Placeholder for 6th spot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">More Coming Soon</h3>
              <p className="text-sm text-gray-500">
                We're constantly expanding our capabilities to serve you better
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower individuals, businesses, and communities by providing innovative 
              technology solutions that drive growth, improve security, and foster collaboration 
              in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-6">Ready to <span className="font-semibold">Start Your Project?</span></h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how Minimal Technology Solutions can transform your vision into reality
            </p>
            <a
              href="mailto:minimalsolucoestecnologicas@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* About */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-sm tracking-wider">MINIMAL TECHNOLOGY SOLUTIONS</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                A cutting-edge technology solutions provider committed to driving innovation 
                and growth across multiple domains. Make it simple and direct.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/MinimalTechSolutions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-sm tracking-wider">CONTACT</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:minimalsolucoestecnologicas@gmail.com" 
                  className="flex items-start space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">minimalsolucoestecnologicas@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="font-semibold mb-4 text-sm tracking-wider">LEADERSHIP</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>CEO: Lucas H. Mulato</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p className="mb-2">© 2026 Minimal Technology Solutions. All rights reserved.</p>
            <p className="text-xs">Licensed under MIT License</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
