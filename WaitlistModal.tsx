'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, AlertCircle, CheckCircle2, Building2, Shield } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUSINESS_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
  'aol.com', 'icloud.com', 'mail.com', 'protonmail.com'
];

const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const PRIMARY_CONCERNS = [
  'PII Leakage',
  'Prompt Injection',
  'EU AI Act Compliance',
  'Training Data Extraction',
  'Model Inversion Attacks',
  'Other'
];

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companySize: '',
    primaryConcern: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): string | null => {
    if (!email) return 'Email is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (BUSINESS_DOMAINS.includes(domain)) {
      return 'Please use a business email address';
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const emailError = validateEmail(formData.workEmail);
    if (emailError) {
      newErrors.workEmail = emailError;
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Please select your company size';
    }

    if (!formData.primaryConcern) {
      newErrors.primaryConcern = 'Please select your primary concern';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log to console (in production, this would send to your backend)
    console.log('Waitlist Submission:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        fullName: '',
        workEmail: '',
        companySize: '',
        primaryConcern: ''
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border-4 border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="p-8 pb-6 border-b-2 border-black">
                    <div className="flex items-center space-x-4 mb-6">
                      <Shield className="w-12 h-12" strokeWidth={2} />
                      <div>
                        <h2 className="text-3xl font-black">PRIVATE BETA</h2>
                        <p className="text-sm font-bold mt-1">
                          LIMITED SPOTS FOR ENTERPRISE TEAMS
                        </p>
                      </div>
                    </div>

                    <div className="border-2 border-black p-4 bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-bold">
                          EARLY ACCESS BENEFITS: Priority onboarding, dedicated security consultant, and 90-day free enterprise tier.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-black mb-2 tracking-wide">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.fullName ? 'border-red-500' : 'border-black'
                        } font-bold focus:outline-none`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm font-bold text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-sm font-black mb-2 tracking-wide">
                        WORK EMAIL
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => handleChange('workEmail', e.target.value)}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.workEmail ? 'border-red-500' : 'border-black'
                        } font-bold focus:outline-none`}
                        placeholder="john@company.com"
                      />
                      {errors.workEmail && (
                        <p className="mt-2 text-sm font-bold text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.workEmail}</span>
                        </p>
                      )}
                      {!errors.workEmail && formData.workEmail && !BUSINESS_DOMAINS.includes(formData.workEmail.split('@')[1]?.toLowerCase()) && (
                        <p className="mt-2 text-sm font-bold text-green-600 flex items-center space-x-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>BUSINESS DOMAIN VERIFIED</span>
                        </p>
                      )}
                    </div>

                    {/* Company Size */}
                    <div>
                      <label className="block text-sm font-black mb-2 tracking-wide">
                        COMPANY SIZE
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => handleChange('companySize', e.target.value)}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.companySize ? 'border-red-500' : 'border-black'
                        } font-bold focus:outline-none appearance-none cursor-pointer bg-white`}
                      >
                        <option value="">SELECT COMPANY SIZE</option>
                        {COMPANY_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      {errors.companySize && (
                        <p className="mt-2 text-sm font-bold text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.companySize}</span>
                        </p>
                      )}
                    </div>

                    {/* Primary Concern */}
                    <div>
                      <label className="block text-sm font-black mb-2 tracking-wide">
                        PRIMARY SECURITY CONCERN
                      </label>
                      <select
                        value={formData.primaryConcern}
                        onChange={(e) => handleChange('primaryConcern', e.target.value)}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.primaryConcern ? 'border-red-500' : 'border-black'
                        } font-bold focus:outline-none appearance-none cursor-pointer bg-white`}
                      >
                        <option value="">SELECT PRIMARY CONCERN</option>
                        {PRIMARY_CONCERNS.map((concern) => (
                          <option key={concern} value={concern}>
                            {concern.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      {errors.primaryConcern && (
                        <p className="mt-2 text-sm font-bold text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.primaryConcern}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-black text-white font-black disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white"
                            />
                            <span>SUBMITTING...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-5 h-5" />
                            <span>REQUEST BETA ACCESS</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-xs font-bold text-center text-gray-600">
                      BY SUBMITTING, YOU AGREE TO RECEIVE PRODUCT UPDATES. WE RESPECT YOUR PRIVACY.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="p-16 text-center">
                  <div className="inline-block p-8 border-4 border-black mb-8">
                    <CheckCircle2 className="w-24 h-24" strokeWidth={3} />
                  </div>
                  
                  <h3 className="text-4xl font-black mb-6">
                    YOU'RE ON THE LIST!
                  </h3>
                  
                  <p className="font-bold mb-8 max-w-md mx-auto">
                    WE'VE RECEIVED YOUR REQUEST FOR ART-T ENTERPRISE. OUR TEAM WILL REACH OUT WITHIN 48 HOURS.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-8 text-sm font-bold">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>CHECK YOUR INBOX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>BETA POSITION: #{Math.floor(Math.random() * 50) + 150}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
