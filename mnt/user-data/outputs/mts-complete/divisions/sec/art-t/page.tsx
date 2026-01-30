'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Terminal, 
  Activity,
  Eye,
  Database,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  FileText,
  TrendingUp,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WaitlistModal from '../components/WaitlistModal';

export default function ARTTProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interceptLogs, setInterceptLogs] = useState([
    { id: 1, type: 'pii', severity: 'high', content: 'SSN: ***-**-1234 blocked', time: '2.3s ago' },
    { id: 2, type: 'injection', severity: 'critical', content: 'Prompt injection detected: "Ignore previous..."', time: '5.1s ago' },
    { id: 3, type: 'pii', severity: 'medium', content: 'Email: j***@company.com redacted', time: '8.7s ago' },
    { id: 4, type: 'extraction', severity: 'high', content: 'Training data extraction attempt blocked', time: '12.4s ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: Date.now(),
        type: ['pii', 'injection', 'extraction'][Math.floor(Math.random() * 3)],
        severity: ['high', 'critical', 'medium'][Math.floor(Math.random() * 3)],
        content: [
          'Credit card number detected and masked',
          'SQL injection attempt neutralized',
          'API key exposure prevented',
          'Model inversion attack blocked',
          'PII extraction via RAG bypass stopped'
        ][Math.floor(Math.random() * 5)],
        time: 'just now'
      };
      setInterceptLogs(prev => [newLog, ...prev.slice(0, 5)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
                  alt="MinimalByte"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <Link 
              href="/"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
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
              <div className="p-4 bg-blue-50 rounded-lg">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h1 className="text-5xl font-semibold mb-2">ART-T</h1>
                <p className="text-xl text-gray-600">AI Red Teaming Toolkit</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                Private Beta
              </span>
              <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                Enterprise Edition
              </span>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Enterprise-grade AI security framework that detects training data extraction and 
              PII leakage in real-time using agentic red teaming. Built on peer-reviewed research, 
              hardened for production environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <span>Request Beta Access</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
              <a
                href="mailto:byteminimal@gmail.com"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Threats Blocked', value: '2.4M+', icon: Shield },
              { label: 'Detection Accuracy', value: '99.7%', icon: TrendingUp },
              { label: 'Response Time', value: '<50ms', icon: Zap }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Dashboard Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Real-Time Threat Intelligence</h2>
            <p className="text-gray-600 text-lg">
              Full visibility into your AI attack surface
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Risk Score Gauge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Model Vulnerability Score</h3>
                </div>
              </div>

              <div className="relative w-64 h-64 mx-auto mb-6">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="#f3f4f6"
                    strokeWidth="20"
                    fill="none"
                  />
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="#10b981"
                    strokeWidth="20"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 628" }}
                    animate={{ strokeDasharray: "188.4 628" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-green-600">30</div>
                  <div className="text-sm text-gray-500 mt-2">LOW RISK</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">PII Exposure Risk</span>
                  <span className="font-mono text-green-600">12%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Injection Vulnerability</span>
                  <span className="font-mono text-yellow-600">38%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Data Extraction Risk</span>
                  <span className="font-mono text-green-600">15%</span>
                </div>
              </div>
            </motion.div>

            {/* Live Threat Feed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Live Threat Feed</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-500 font-mono">ACTIVE</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                <div className="space-y-3 max-h-80 overflow-hidden">
                  {interceptLogs.map((log, idx) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-start space-x-3 p-3 rounded ${
                        log.severity === 'critical' ? 'bg-red-50 border border-red-200' :
                        log.severity === 'high' ? 'bg-yellow-50 border border-yellow-200' :
                        'bg-blue-50 border border-blue-200'
                      }`}
                    >
                      {log.type === 'pii' && <Eye className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />}
                      {log.type === 'injection' && <XCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />}
                      {log.type === 'extraction' && <Database className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-1">{log.time}</div>
                        <div className="text-gray-900 truncate">{log.content}</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">47</div>
                  <div className="text-xs text-gray-500">Blocked Today</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                  <div className="text-xs text-gray-500">High Severity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">99.2%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Foundation */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Built on Peer-Reviewed Science</h2>
            <p className="text-gray-600 text-lg">
              Every detection technique validated against published vulnerabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono">
                  arXiv:2012.09673
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Extracting Training Data from LLMs
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Foundational research demonstrating that LLMs memorize and leak training data. 
                ART-T automates detection of these extraction patterns.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                <span>Carlini et al.</span>
                <span>•</span>
                <span>USENIX Security 2021</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Implemented in ART-T Core</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono">
                  MCP Protocol
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Model Context Protocol Integration
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Leverages MCP for real-time interception of agent-to-model communication. 
                Detect PII leakage and prompt injection at the protocol level.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                <span>Anthropic</span>
                <span>•</span>
                <span>2024</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Native MCP Support</span>
                </div>
              </div>
            </motion.div>
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
              Secure Your AI Agents Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 200+ security teams in the private beta
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Request Beta Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2026 MinimalByte. ART-T is an Enterprise Edition product.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <span className="font-mono text-xs">AGPLv3 Core</span>
          </div>
        </div>
      </footer>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
