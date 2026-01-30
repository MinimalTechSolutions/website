'use client';

import { useState } from 'react';
import { Code, Shield, Server, Gamepad, Network, ArrowRight, Github, Menu, X, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const divisions = [
    {
      id: 1,
      name: 'Minimal Byte',
      tagline: 'SaaS & Software Development',
      description: 'We offer premium software solutions for your contentment with technology. Web applications, mobile, IoT solutions, and indie games—our selective development team delivers excellence.',
      icon: Code,
      color: '#3b82f6',
      status: 'Active',
      link: '/divisions/byte',
      features: ['Custom SaaS Platforms', 'Mobile Applications', 'IoT Solutions', 'Indie Game Development']
    },
    {
      id: 2,
      name: 'Minimal Sec',
      tagline: 'AI & Cybersecurity',
      description: 'Enterprise-grade AI security solutions for the agentic era. Featuring ART-T—our flagship open-core AI red teaming platform protecting 500+ AI systems worldwide.',
      icon: Shield,
      color: '#ef4444',
      status: 'Active',
      link: '/divisions/sec',
      features: ['AI Red Teaming (ART-T)', 'Security Audits', 'Penetration Testing', 'Incident Response'],
      highlight: true,
      badge: 'Featured Product'
    },
    {
      id: 3,
      name: 'Minimal Infra',
      tagline: 'Infrastructure as a Service',
      description: 'Comprehensive IaaS solutions tailored to your needs. Computing resources, storage, networking, and robotics hardware—scalable infrastructure without management overhead.',
      icon: Server,
      color: '#8b5cf6',
      status: 'Coming Soon',
      link: '/divisions/infra',
      features: ['Cloud Computing', 'Storage Solutions', 'Network Infrastructure', 'Robotics Hardware']
    },
    {
      id: 4,
      name: 'Minimal Games',
      tagline: 'Game Development',
      description: 'Engaging and immersive gaming experiences across platforms. From mobile to VR/AR—we craft games that captivate and inspire.',
      icon: Gamepad,
      color: '#10b981',
      status: 'Coming Soon',
      link: '/divisions/games',
      features: ['Mobile Games', 'Console Development', 'VR/AR Experiences', 'Social Simulations']
    },
    {
      id: 5,
      name: 'Minimal Chain',
      tagline: 'Decentralized Solutions',
      description: 'Pioneering minimalistic decentralization with DAOs and blockchain. Token-based governance, smart contract integration, and intuition-driven development.',
      icon: Network,
      color: '#f59e0b',
      status: 'Coming Soon',
      link: '/divisions/chain',
      features: ['DAO Development', 'Smart Contracts', 'Token Economics', 'Blockchain Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/img/minimal-wide-logo-trans.png" 
                alt="Minimal Tech Solutions" 
                className="h-8"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#divisions" className="text-gray-600 hover:text-gray-900 transition-colors">
                Divisions
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="https://github.com/MinimalTechSolutions" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3">
              <a href="#divisions" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Divisions
              </a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="https://github.com/MinimalTechSolutions" className="block text-gray-600 hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a 
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                5 Specialized Divisions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
                Your Simple Way to
                <span className="block text-gray-900 font-semibold">Solve Technology Problems</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Minimal Technology Solutions brings together five specialized divisions to deliver cutting-edge innovation—from AI security to decentralized systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#divisions"
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
                >
                  Explore Our Divisions
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/MinimalTechSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: 'Software Dev', color: 'blue' },
                { icon: Shield, label: 'AI Security', color: 'red' },
                { icon: Server, label: 'Infrastructure', color: 'purple' },
                { icon: Gamepad, label: 'Gaming', color: 'green' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-${item.color}-50 to-white p-6 rounded-2xl border border-${item.color}-200 hover:scale-105 transition-transform`}
                >
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Specialized Divisions', value: '5' },
              { label: 'AI Systems Protected', value: '500+' },
              { label: 'Active Projects', value: '50+' },
              { label: 'Customer Satisfaction', value: '90%' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: ART-T Highlight */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Featured Product
                </div>
                
                <h2 className="text-4xl font-light text-gray-900 mb-4">
                  Introducing <span className="font-semibold text-red-600">ART-T</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  The Open-Core Enterprise AI Security Platform for the Agentic Era
                </p>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  ART-T is the first AI security platform built specifically for agentic AI systems. 
                  Using LangGraph-based adaptive attack engines, it automatically discovers vulnerabilities 
                  in LLMs, RAG systems, and AI agents—from prompt injection to data poisoning.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>500+ AI systems protected worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>10,000+ vulnerabilities discovered</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>Open-source core (AGPLv3)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>Enterprise features available</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/divisions/sec"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-medium"
                  >
                    Learn More About ART-T
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/lucasmulato/AI-Red_Teaming-Toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-900 p-12 flex items-center justify-center">
                <div className="w-full">
                  <div className="text-sm font-mono text-green-400 mb-4">$ art-t scan --live</div>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-gray-400">Analyzing AI deployment...</div>
                    <div className="text-yellow-400">⚠ Prompt injection detected</div>
                    <div className="text-red-400">✗ PII leakage in RAG output</div>
                    <div className="text-orange-400">⚠ Jailbreak successful</div>
                    <div className="text-green-400">✓ Vector DB secure</div>
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div className="text-white">Risk Score: <span className="text-red-400 font-bold">67/100</span></div>
                      <div className="text-gray-400 text-xs mt-2">12 critical vulnerabilities found</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-gray-400">Tests Run</div>
                      <div className="text-white font-semibold">10,247</div>
                    </div>
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-gray-400">Success Rate</div>
                      <div className="text-green-400 font-semibold">94.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold">Specialized Divisions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five focused divisions working together to deliver comprehensive technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division) => (
              <div
                key={division.id}
                className={`group relative rounded-2xl border-2 transition-all hover:scale-105 ${
                  division.highlight 
                    ? 'border-red-300 bg-gradient-to-br from-red-50 to-white' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {division.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                    {division.badge}
                  </div>
                )}
                
                <div className="p-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${division.color}15` }}
                  >
                    <division.icon 
                      className="w-7 h-7" 
                      style={{ color: division.color }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {division.name}
                    </h3>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        division.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {division.status}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {division.tagline}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {division.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {division.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: division.color }}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={division.link}
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      division.highlight 
                        ? 'text-red-600 hover:text-red-700' 
                        : 'text-gray-900 hover:text-gray-700'
                    }`}
                  >
                    {division.status === 'Active' ? 'Explore Division' : 'Coming Soon'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                About <span className="font-semibold">Minimal Technology Solutions</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that technology is the key to unlocking new possibilities and transforming 
                industries. Our philosophy: <strong>Make it simple and direct.</strong>
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our diverse team of experts brings together years of experience in software engineering, 
                cybersecurity, game development, and decentralized technologies. With a strong commitment 
                to excellence, we deliver top-notch solutions tailored to your needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Innovation First</h3>
                    <p className="text-sm text-gray-600">
                      Cutting-edge solutions that drive growth and improve security
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Security by Design</h3>
                    <p className="text-sm text-gray-600">
                      Enterprise-grade security embedded in every solution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Open Collaboration</h3>
                    <p className="text-sm text-gray-600">
                      Open-source foundations with enterprise capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                To empower individuals, businesses, and communities by providing innovative technology 
                solutions that drive growth, improve security, and foster collaboration in an ever-evolving 
                digital landscape.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leadership</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-600">LM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lucas H. Mulato</div>
                    <div className="text-sm text-gray-600">CEO & Founder</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://github.com/MinimalTechSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our specialized divisions can help solve your challenges
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:minimalsolucoestecnologicas@gmail.com"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#divisions"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              Explore Divisions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/img/minimal-wide-logo-trans.png" 
                alt="Minimal Tech Solutions" 
                className="h-8 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Your simple way to solve technology problems
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Divisions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/divisions/byte" className="hover:text-white transition-colors">Minimal Byte</a></li>
                <li><a href="/divisions/sec" className="hover:text-white transition-colors">Minimal Sec</a></li>
                <li><a href="/divisions/infra" className="hover:text-white transition-colors">Minimal Infra</a></li>
                <li><a href="/divisions/games" className="hover:text-white transition-colors">Minimal Games</a></li>
                <li><a href="/divisions/chain" className="hover:text-white transition-colors">Minimal Chain</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/MinimalTechSolutions" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://github.com/lucasmulato/AI-Red_Teaming-Toolkit" className="hover:text-white transition-colors">ART-T</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:minimalsolucoestecnologicas@gmail.com" className="hover:text-white transition-colors">
                    minimalsolucoestecnologicas@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Minimal Technology Solutions. All rights reserved.</p>
            <p className="mt-2">CEO: Lucas H. Mulato</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
