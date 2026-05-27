// components/home/data.tsx

type JourneyCard = {
  title: string;
  description: string;
};

type ServiceCard = {
  title: string;
  description: string;
  href: string;
};

type Step = {
  title: string;
  description: string;
};

type Story = {
  name: string;
  quote: string;
};

export const journeyCards: JourneyCard[] = [
  {
    title: "Sample journey title",
    description: "Sample journey description",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Sample service",
    description: "Sample service description",
    href: "/services",
  },
];

export const steps: Step[] = [
  {
    title: "Sample step",
    description: "Sample step description",
  },
];

export const stories: Story[] = [
  {
    name: "Sample name",
    quote: "Sample quote",
  },
];