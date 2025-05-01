// // ~/src/app/(about)/layout.js

import InsightRoll from "../components/About/InsightRoll";


const insights = [
    "Licensed Since 2016",
    "Family Law",
    "Modern Practice",
    "Transparent Pricing",
    "Clear Communication",
    "Vigorous Advocacy",
    "Good Advice",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}