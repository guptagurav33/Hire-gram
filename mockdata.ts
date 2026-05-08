export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  country: string;
  remote: "Remote" | "Hybrid" | "Onsite";
  salary: string;
  source: string;
  posted: string;
  matchScore: number;
  skills: string[];
  visa: boolean;
  easyApply: boolean;
};

export const JOBS: Job[] = [
  { id: "1", title: "Senior Frontend Engineer", company: "Stripe", location: "Berlin", country: "Germany", remote: "Hybrid", salary: "€95k–€130k", source: "LinkedIn", posted: "2h ago", matchScore: 96, skills: ["React", "TypeScript", "GraphQL"], visa: true, easyApply: true },
  { id: "2", title: "Full-Stack Developer", company: "Vercel", location: "Remote", country: "Worldwide", remote: "Remote", salary: "$120k–$160k", source: "Wellfound", posted: "5h ago", matchScore: 92, skills: ["Next.js", "Node", "Postgres"], visa: false, easyApply: true },
  { id: "3", title: "Product Designer", company: "Notion", location: "Toronto", country: "Canada", remote: "Hybrid", salary: "CA$110k–CA$140k", source: "LinkedIn", posted: "1d ago", matchScore: 88, skills: ["Figma", "Design Systems"], visa: true, easyApply: false },
  { id: "4", title: "ML Engineer", company: "Anthropic", location: "Remote", country: "USA", remote: "Remote", salary: "$180k–$240k", source: "Indeed", posted: "3h ago", matchScore: 91, skills: ["Python", "PyTorch", "LLMs"], visa: true, easyApply: false },
  { id: "5", title: "DevOps Engineer", company: "GitLab", location: "Warsaw", country: "Poland", remote: "Remote", salary: "PLN 240k–320k", source: "RemoteOK", posted: "6h ago", matchScore: 85, skills: ["Kubernetes", "Terraform", "AWS"], visa: false, easyApply: true },
  { id: "6", title: "Backend Engineer (Go)", company: "Uber", location: "Bangalore", country: "India", remote: "Onsite", salary: "₹40L–₹60L", source: "Naukri", posted: "12h ago", matchScore: 79, skills: ["Go", "gRPC", "Kafka"], visa: false, easyApply: false },
  { id: "7", title: "Data Engineer", company: "Canva", location: "Auckland", country: "New Zealand", remote: "Hybrid", salary: "NZ$140k–NZ$180k", source: "LinkedIn", posted: "2d ago", matchScore: 82, skills: ["Spark", "Airflow", "SQL"], visa: true, easyApply: true },
  { id: "8", title: "Solutions Architect", company: "AWS", location: "Dubai", country: "UAE", remote: "Onsite", salary: "AED 480k–620k", source: "Glassdoor", posted: "1d ago", matchScore: 87, skills: ["AWS", "Architecture"], visa: true, easyApply: false },
  { id: "9", title: "Mobile Engineer (iOS)", company: "Grab", location: "Singapore", country: "Singapore", remote: "Hybrid", salary: "S$120k–S$160k", source: "LinkedIn", posted: "4h ago", matchScore: 90, skills: ["Swift", "SwiftUI"], visa: true, easyApply: true },
  { id: "10", title: "Growth Marketing Lead", company: "Linear", location: "Remote", country: "Worldwide", remote: "Remote", salary: "$130k–$170k", source: "WeWorkRemotely", posted: "8h ago", matchScore: 75, skills: ["SEO", "Analytics"], visa: false, easyApply: true },
];

export const COUNTRIES = ["All", "India", "Poland", "New Zealand", "Germany", "Canada", "UAE", "Singapore", "USA", "Worldwide"];
export const SOURCES = ["LinkedIn", "Indeed", "Naukri", "Wellfound", "RemoteOK", "WeWorkRemotely", "Glassdoor", "Internshala"];

export type Course = {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: string;
  skills: string[];
  rating: number;
};

export const COURSES: Course[] = [
  { id: "c1", title: "Meta Front-End Developer Certificate", provider: "Coursera", duration: "32h", level: "Intermediate", skills: ["React", "JavaScript"], rating: 4.7 },
  { id: "c2", title: "freeCodeCamp Responsive Web Design", provider: "freeCodeCamp", duration: "300h", level: "Beginner", skills: ["HTML", "CSS"], rating: 4.9 },
  { id: "c3", title: "CS50's Intro to AI with Python", provider: "edX", duration: "60h", level: "Intermediate", skills: ["Python", "AI"], rating: 4.8 },
  { id: "c4", title: "Google Data Analytics Certificate", provider: "Coursera", duration: "180h", level: "Beginner", skills: ["SQL", "Data"], rating: 4.6 },
  { id: "c5", title: "HubSpot Inbound Marketing", provider: "HubSpot", duration: "5h", level: "Beginner", skills: ["Marketing"], rating: 4.5 },
  { id: "c6", title: "MIT OpenCourseWare: Algorithms", provider: "YouTube", duration: "40h", level: "Advanced", skills: ["DSA"], rating: 4.9 },
  { id: "c7", title: "Google Cloud Digital Leader", provider: "Google", duration: "20h", level: "Beginner", skills: ["Cloud", "GCP"], rating: 4.4 },
  { id: "c8", title: "Udemy: Docker & Kubernetes", provider: "Udemy", duration: "22h", level: "Intermediate", skills: ["DevOps"], rating: 4.7 },
];

export const APPLIED = [
  { id: "a1", company: "Stripe", role: "Senior Frontend Engineer", stage: "Interview", date: "2d ago", color: "warning" },
  { id: "a2", company: "Vercel", role: "Full-Stack Developer", stage: "Applied", date: "3d ago", color: "primary" },
  { id: "a3", company: "Notion", role: "Product Designer", stage: "Rejected", date: "5d ago", color: "destructive" },
  { id: "a4", company: "Anthropic", role: "ML Engineer", stage: "Offer", date: "1w ago", color: "success" },
  { id: "a5", company: "GitLab", role: "DevOps Engineer", stage: "Screen", date: "1w ago", color: "warning" },
  { id: "a6", company: "Linear", role: "Growth Lead", stage: "Applied", date: "1w ago", color: "primary" },
];
