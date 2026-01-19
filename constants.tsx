
import React from 'react';
import { 
  User, 
  Home, 
  Car, 
  GraduationCap, 
  Coins, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  CreditCard,
  Zap,
  Percent,
  FileText,
  Gem
} from 'lucide-react';
import { LoanType, FeatureType, PartnerType } from './types.ts';

export const PERSONAL_LOANS: LoanType[] = [
  { id: 'personal', title: 'Personal Loan', description: 'Quick funds for salaried & self-employed', icon: <User className="w-8 h-8" />, category: 'personal' },
  { id: 'home', title: 'Home Loan', description: 'Buy or build your dream house with ease', icon: <Home className="w-8 h-8" />, category: 'personal' },
  { id: 'car', title: 'Car Loan', description: 'New & used vehicle purchase financing', icon: <Car className="w-8 h-8" />, category: 'personal' },
  { id: 'gold-car', title: 'Gold Car Loan', description: 'Special gold-backed car loans for salaried', icon: <Gem className="w-8 h-8" />, category: 'personal' },
  { id: 'gold', title: 'Gold Loan', description: 'Instant cash against your gold jewelry', icon: <Coins className="w-8 h-8" />, category: 'personal' },
];

export const BUSINESS_LOANS: LoanType[] = [
  { id: 'business', title: 'Business Loan', description: 'Unsecured loans to expand your reach', icon: <Briefcase className="w-8 h-8" />, category: 'business' },
  { id: 'msme', title: 'MSME / SME Loan', description: 'Dedicated support for small enterprises', icon: <Building2 className="w-8 h-8" />, category: 'business' },
  { id: 'working-capital', title: 'Working Capital', description: 'Maintain healthy cash flow for operations', icon: <TrendingUp className="w-8 h-8" />, category: 'business' },
  { id: 'overdraft', title: 'Overdraft / CC', description: 'Flexible credit limits for business needs', icon: <CreditCard className="w-8 h-8" />, category: 'business' },
];

export const FEATURES: FeatureType[] = [
  { title: 'Fast Approval', description: 'Get your loan approved within 24-48 hours with our automated digital workflow.', icon: <Zap className="w-10 h-10 text-brand-green" /> },
  { title: 'Competitive Rates', description: 'Enjoy low interest rates and zero hidden charges on your loan products.', icon: <Percent className="w-10 h-10 text-brand-green" /> },
  { title: 'Easy Process', description: 'Minimal documentation required with completely digital onboarding support.', icon: <FileText className="w-10 h-10 text-brand-green" /> },
];

export const PARTNERS: PartnerType[] = [
  { name: 'SBI', logo: 'SBI' },
  { name: 'HDFC Bank', logo: 'HDFC' },
  { name: 'ICICI Bank', logo: 'ICICI' },
  { name: 'Axis Bank', logo: 'AXIS' },
  { name: 'Bank of Baroda', logo: 'BOB' },
  { name: 'IDFC First Bank', logo: 'IDFC' },
  { name: 'Canara Bank', logo: 'Canara' },
  { name: 'Union Bank', logo: 'Union' },
  { name: 'IDBI Bank', logo: 'IDBI' },
  { name: 'PNB', logo: 'PNB' },
];
