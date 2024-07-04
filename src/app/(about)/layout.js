import InsightRoll from "../components/About/InsightRoll";


const insights = [
    "16+ Projects Completed",
    "5+ Years of Freelancing",
    "99% Client Satisfaction",
    "Full Stack Developer",
    "Licensed Attorney",
    "Multi-Platform Marketing",
    "Scientific Approach",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}