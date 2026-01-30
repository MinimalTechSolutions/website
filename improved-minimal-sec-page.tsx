'use client';

import { useState } from 'react';
import { Shield, AlertTriangle, Lock, Zap, Github, ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import WaitlistModal from '../../components/WaitlistModal';

export default function MinimalSecPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/img/minimal-wide-logo-trans.png" 
                alt="Minimal Tech Solutions" 
                className="h-8"
              />
              <span className="text-gray-400">/</span>
              <span className="font-semibold text-gray-900">Minimal Sec</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/#divisions" className="text-gray-600 hover:text-gray-900 transition-colors">
                All Divisions
              </a>
              <a 
                href="mailto:minimalsolucoestecnologicas@gmail.com"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                AI Security Division
              </div>
              
              <h1 className="text-5xl font-light text-gray-900 mb-6">
                Secure Your AI Before
                <span className="block text-red-600 font-semibold">Attackers Find Your Vulnerabilities</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade AI security solutions for the agentic era. From automated red teaming to compliance-ready governance, we protect your AI deployments at every layer.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-medium"
                >
                  Request ART-T Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://github.com/lucasmulato/AI-Red_Teaming-Toolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Open-source core (AGPLv3)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Enterprise features available
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 border border-red-200">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Live Threat Detection</div>
                      <div className="text-2xl font-semibold text-gray-900">94 Risks Found</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { severity: 'Critical', count: 12, color: 'red' },
                      { severity: 'High', count: 28, color: 'orange' },
                      { severity: 'Medium', count: 35, color: 'yellow' },
                      { severity: 'Low', count: 19, color: 'blue' }
                    ].map((risk) => (
                      <div key={risk.severity} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-${risk.color}-500`}></div>
                          <span className="text-sm font-medium text-gray-700">{risk.severity}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{risk.count}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">OWASP LLM Top 10 Coverage</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">87% Compliance Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'AI Systems Protected', value: '500+' },
              { icon: AlertTriangle, label: 'Vulnerabilities Found', value: '10K+' },
              { icon: Users, label: 'Enterprise Customers', value: '50+' },
              { icon: TrendingUp, label: 'Incident Response Time', value: '<4hrs' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ART-T Flagship Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Flagship Product
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Meet <span className="font-semibold">ART-T</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Open-Core Enterprise AI Security Platform for the Agentic Era
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Automated Red Teaming That Scales
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ART-T is the first AI security platform built specifically for agentic AI systems. 
                Using LangGraph-based adaptive attack engines, it automatically discovers vulnerabilities 
                that traditional security tools miss—from prompt injection to RAG poisoning.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Tri-Stage PII Auditing</div>
                    <div className="text-sm text-gray-600">Deterministic Regex + NER + LLM reasoning for comprehensive data protection</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">CI/CD Integration</div>
                    <div className="text-sm text-gray-600">Ship AI features confidently with continuous security validation</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Compliance Ready</div>
                    <div className="text-sm text-gray-600">OWASP LLM Top 10, NIST AI RMF, SOC 2, ISO 42001 reporting</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Self-Hosted Option</div>
                    <div className="text-sm text-gray-600">Deploy on your infrastructure—no vendor lock-in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="text-sm font-mono text-green-400 mb-4">$ art-t scan --target production</div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="text-gray-400">Scanning 3 AI applications...</div>
                <div className="text-yellow-400">⚠ Prompt injection vulnerability detected</div>
                <div className="text-red-400">✗ PII leakage in RAG output (SSN: ***-**-1234)</div>
                <div className="text-orange-400">⚠ Jailbreak attempt successful via base64</div>
                <div className="text-green-400">✓ Vector DB poisoning test passed</div>
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="text-white">Security Score: <span className="text-red-400 font-bold">67/100</span></div>
                  <div className="text-gray-400 text-xs mt-2">12 critical issues require immediate attention</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Get Enterprise Access
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Choose Your Security Level
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Open Source',
                  price: 'Free Forever',
                  description: 'Perfect for developers and research',
                  features: [
                    'Core CLI toolkit',
                    'Basic prompt injection testing',
                    'Regex-based PII scanning',
                    'Community support',
                    'AGPLv3 license'
                  ],
                  cta: 'View on GitHub',
                  ctaLink: 'https://github.com/lucasmulato/AI-Red_Teaming-Toolkit',
                  highlighted: false
                },
                {
                  name: 'Professional',
                  price: '$15K-$50K/year',
                  description: 'For AI-first startups and teams',
                  features: [
                    'Everything in Open Source',
                    'Advanced NER + LLM PII detection',
                    'RAG poisoning simulation',
                    'Jailbreak benchmarking',
                    'CI/CD integrations',
                    'Email + Slack support'
                  ],
                  cta: 'Request Demo',
                  highlighted: true
                },
                {
                  name: 'Enterprise',
                  price: '$50K-$500K+/year',
                  description: 'For large-scale AI deployments',
                  features: [
                    'Everything in Professional',
                    'LangGraph adaptive attack engine',
                    'Vector DB stress testing',
                    'Custom attack scenarios',
                    'SOC 2, ISO 42001 compliance',
                    'SSO, RBAC, audit logs',
                    'Dedicated security engineer'
                  ],
                  cta: 'Contact Sales',
                  highlighted: false
                }
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-6 ${
                    tier.highlighted
                      ? 'bg-red-600 text-white ring-4 ring-red-200 transform scale-105'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h4 className={`text-xl font-semibold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h4>
                    <div className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {tier.price}
                    </div>
                    <p className={`text-sm ${tier.highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                          tier.highlighted ? 'text-red-200' : 'text-green-600'
                        }`} />
                        <span className={`text-sm ${tier.highlighted ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {tier.ctaLink ? (
                    <a
                      href={tier.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full px-6 py-3 rounded-lg text-center font-medium transition-colors ${
                        tier.highlighted
                          ? 'bg-white text-red-600 hover:bg-red-50'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowWaitlist(true)}
                      className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                        tier.highlighted
                          ? 'bg-white text-red-600 hover:bg-red-50'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {tier.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Comprehensive <span className="font-semibold">Security Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond ART-T, we offer full-spectrum cybersecurity consulting for your entire AI stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'AI Security Audits',
                description: 'Comprehensive assessments of your AI systems, from model training to production deployment. We identify risks across the entire AI lifecycle.',
                features: ['Model vulnerability testing', 'Training data security review', 'Deployment architecture audit', 'Access control analysis']
              },
              {
                icon: Zap,
                title: 'Penetration Testing',
                description: 'Simulated attacks on your AI applications to uncover exploitable weaknesses before malicious actors do.',
                features: ['Adversarial attack simulation', 'API security testing', 'Authentication bypass attempts', 'Data exfiltration testing']
              },
              {
                icon: AlertTriangle,
                title: 'Incident Response',
                description: 'Rapid response to AI security incidents with expert guidance and remediation. Available 24/7 for critical situations.',
                features: ['<4hr response time', 'Forensic analysis', 'Containment strategies', 'Recovery planning']
              },
              {
                icon: Lock,
                title: 'Web3 & Blockchain Security',
                description: 'Specialized security for decentralized AI systems, smart contracts, and blockchain-based ML models.',
                features: ['Smart contract audits', 'Consensus mechanism review', 'Cryptographic validation', 'DAO security assessment']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-300 transition-colors group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Why <span className="font-semibold">Minimal Sec?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Native Security Expertise</h3>
                    <p className="text-gray-600">
                      We don't just retrofit traditional security tools for AI. Our team has deep expertise in 
                      LLMs, agentic systems, and RAG architectures—we understand AI threats from the inside out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Open-Source Transparency</h3>
                    <p className="text-gray-600">
                      Our flagship ART-T platform has an open-source core, meaning you can audit our code, 
                      contribute improvements, and avoid vendor lock-in while maintaining enterprise-grade security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
                    <p className="text-gray-600">
                      When seconds matter, our team responds in under 4 hours to critical security incidents. 
                      We've helped companies contain breaches, analyze threats, and recover systems without data loss.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Research-Backed Approach</h3>
                    <p className="text-gray-600">
                      We publish original research on arXiv, contribute to OWASP, and stay ahead of emerging 
                      threats. Our security recommendations are grounded in academic rigor and real-world testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trusted By</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-gray-900">AI-First SaaS</div>
                      <div className="text-xs text-gray-600">Series B, 250 employees</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "ART-T found 12 critical vulnerabilities in our RAG system that we never would have caught. 
                    Saved us from a potential data breach."
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-gray-900">FinTech Platform</div>
                      <div className="text-xs text-gray-600">Enterprise, 2K+ employees</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Minimal Sec's incident response team contained our LLM breach in under 3 hours. 
                    Their expertise in AI security is unmatched."
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-gray-900">Healthcare AI</div>
                      <div className="text-xs text-gray-600">Series C, 800 employees</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "The tri-stage PII auditing caught patient data leaks we didn't know existed. 
                    Essential for HIPAA compliance."
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">90%+</div>
                <div className="text-sm text-gray-400">Customer Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to Secure Your AI?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join 50+ enterprises protecting their AI deployments with Minimal Sec
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowWaitlist(true)}
              className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center gap-2"
            >
              Request ART-T Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="mailto:minimalsolucoestecnologicas@gmail.com"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors font-medium"
            >
              Schedule Consultation
            </a>
          </div>

          <div className="mt-8 text-red-100 text-sm">
            Response within 24 hours • Enterprise-grade security • No vendor lock-in
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li><a href="https://github.com/lucasmulato/AI-Red_Teaming-Toolkit" className="hover:text-white transition-colors">ART-T on GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
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
                <li>
                  <a href="https://github.com/MinimalTechSolutions" className="hover:text-white transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub Organization
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2026 Minimal Technology Solutions. All rights reserved.
            </div>
            <div>
              CEO: Lucas H. Mulato
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <WaitlistModal onClose={() => setShowWaitlist(false)} />
      )}
    </div>
  );
}
