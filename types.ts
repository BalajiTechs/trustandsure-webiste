
import { ReactNode } from 'react';

export interface LoanType {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  category: 'personal' | 'business';
}

export interface FeatureType {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PartnerType {
  name: string;
  logo: string;
}
