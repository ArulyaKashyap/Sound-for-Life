// components/home/types.ts

export type JourneyCard = {
  title: string;
  subtitle: string;
  copy: string;
  cta: string;
  href: string;
};

export type Step = {
  title: string;
  copy: string;
};

export type Brand = {
  name: string;
  models: string;
};

export type Story = {
  label: string;
  title: string;
  copy: string;
  outcome: string;
  cta: string;
  href: string;
};

export type Blog = {
  label: string;
  title: string;
  copy: string;
  href: string;
};

export type Clinic = {
  city: string;
  locality: string;
  address: string;
};

export type FAQ = {
  question: string;
  answer: string;
};