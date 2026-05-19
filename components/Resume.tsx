"use client";

import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const content = document.getElementById("resume-content");
    if (!content) return;

    // Create a simple text-based PDF download
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Yashasvi Khatri - Resume</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
              h1 { text-align: center; }
              .contact { text-align: center; margin-bottom: 30px; }
              .section { margin: 20px 0; }
              .section h2 { border-bottom: 1px solid #000; padding-bottom: 5px; }
              .item { margin: 10px 0; }
              .subheading { font-weight: bold; }
              .date { float: right; font-style: italic; }
              .skills { display: flex; flex-wrap: wrap; gap: 10px; }
              .skill-tag { background: #f0f0f0; padding: 2px 8px; border-radius: 4px; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-zinc-100">Resume</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={14} /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-73px)] p-8 bg-white">
          <div
            id="resume-content"
            className="text-black font-sans"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Yashasvi Khatri</h1>
              <div className="text-sm text-gray-600 flex justify-center gap-4 flex-wrap">
                <span>📞 +91 98219 55539</span>
                <a href="mailto:yashasvikhatrii@gmail.com" className="text-blue-600">
                  ✉️ yashasvikhatrii@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/yashasvi-khatri"
                  className="text-blue-600"
                >
                  🔗 linkedin.com/in/yashasvi-khatri
                </a>
                <a
                  href="https://github.com/Yashasvi-Khatri"
                  className="text-blue-600"
                >
                  🔗 github.com/Yashasvi-Khatri
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">
                    Guru Gobind Singh Indraprastha University (GGSIPU)
                  </h3>
                  <span className="text-sm italic text-gray-600">2023 -- 2027</span>
                </div>
                <p className="text-sm italic text-gray-600">
                  B.Tech in Artificial Intelligence & Data Science | New Delhi, India
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Experience
              </h2>
              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">Defence Research and Development Organisation (DRDO)</h3>
                  <span className="text-sm italic text-gray-600">Jun 2025 -- Jul 2025</span>
                </div>
                <p className="text-sm italic text-gray-600 mb-2">
                  Research & Development Intern | New Delhi, India
                </p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>
                    Architected and shipped an AI-powered carbon tracking platform (React, Node.js,
                    MongoDB) that scaled to 1,200+ concurrent users while sustaining 99.7% uptime in a
                    live production environment.
                  </li>
                  <li>
                    Trained TensorFlow and Random Forest regression models for real-time CO₂ emission
                    forecasting, achieving R² = 0.87 and 8.5% MAPE --- surpassing the project's baseline
                    accuracy target by 15%.
                  </li>
                  <li>
                    Built an AI-driven recommendation engine that reduced emission levels by 28% across
                    monitored sites and achieved 78% feature adoption within the first 2 weeks of
                    deployment.
                  </li>
                  <li>
                    Hardened REST APIs with JWT authentication and MongoDB composite indexing, reducing
                    average query latency from &gt;200ms to 40ms and maintaining p95 response time at 145ms
                    under peak load.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Projects
              </h2>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">EcoEducator</h3>
                  <span className="text-xs">
                    <a
                      href="https://github.com/Yashasvi-Khatri"
                      className="text-blue-600"
                    >
                      Source
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://eco-educator-z87n.vercel.app/"
                      className="text-blue-600"
                    >
                      Live
                    </a>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS
                </p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>
                    Built a full-stack MERN educational platform with 15+ reusable React components,
                    protected routes, and role-based JWT authentication covering 3 user roles.
                  </li>
                  <li>
                    Optimized MongoDB schema and Express API layer, cutting content fetch latency by 35%
                    and supporting 10+ module types with no schema migrations; delivered a WCAG-compliant
                    UI scoring 91 on Lighthouse.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">Mazer AI Music Platform</h3>
                  <span className="text-xs">
                    <a
                      href="https://github.com/Yashasvi-Khatri"
                      className="text-blue-600"
                    >
                      Source
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://mazer-app-gamma.vercel.app/"
                      className="text-blue-600"
                    >
                      Live
                    </a>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  React.js, Firebase, Tailwind CSS
                </p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>
                    Launched an AI-inspired music generation platform with Firebase Authentication,
                    real-time user state, and personalized playlist workflows --- onboarding 50+ testers
                    during beta.
                  </li>
                  <li>
                    Built 20+ reusable React components using custom hooks and Context API, cutting
                    feature delivery time by 40% and boosting page render speed by 30% via lazy loading
                    and route-level code splitting.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">BusyBuy --- E-Commerce Platform</h3>
                  <span className="text-xs">
                    <a
                      href="https://github.com/Yashasvi-Khatri"
                      className="text-blue-600"
                    >
                      Source
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://busybuy.vercel.app"
                      className="text-blue-600"
                    >
                      Live
                    </a>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  React.js, Node.js, Express.js, MongoDB, Redux Toolkit
                </p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>
                    Assembled a production-grade MERN e-commerce platform with Redux Toolkit managing
                    8+ global state slices across cart, authentication, product catalog, and order
                    tracking workflows.
                  </li>
                  <li>
                    Developed 12 RESTful API endpoints with Express.js and implemented server-side
                    pagination, reducing initial payload size by 60% and improving first contentful paint
                    by 1.2s.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">SEO Tag Scanner</h3>
                  <span className="text-xs">
                    <a
                      href="https://github.com/Yashasvi-Khatri"
                      className="text-blue-600"
                    >
                      Source
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://seo-tag-scanner.vercel.app"
                      className="text-blue-600"
                    >
                      Live
                    </a>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Next.js, TypeScript, Tailwind CSS
                </p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>
                    Engineered a Next.js SEO auditing tool in TypeScript that inspects 30+ metadata
                    signals including Open Graph tags, JSON-LD structured data, canonical URLs, and Core
                    Web Vitals indicators.
                  </li>
                  <li>
                    Applied static generation and incremental data-fetching to achieve a Lighthouse SEO
                    score of 98 and TTFB under 180ms in the production environment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Technical Skills
              </h2>
              <div className="text-sm space-y-1">
                <p>
                  <span className="font-semibold">Languages:</span> JavaScript (ES6+), TypeScript,
                  Python, Java, C++, SQL, HTML5, CSS3
                </p>
                <p>
                  <span className="font-semibold">Frontend:</span> React.js, Next.js, Tailwind CSS,
                  Bootstrap, Redux Toolkit, Framer Motion, Responsive UI Design
                </p>
                <p>
                  <span className="font-semibold">Backend:</span> Node.js, Express.js, REST API
                  Development, JWT Authentication, Middleware Design, WebSockets
                </p>
                <p>
                  <span className="font-semibold">Databases:</span> MongoDB, MySQL, Aggregation
                  Pipelines, Schema Design, Indexing & Query Optimization
                </p>
                <p>
                  <span className="font-semibold">AI / ML:</span> TensorFlow, PyTorch, Keras,
                  Scikit-learn, NLP, Neural Networks, Sentiment Analysis, Random Forest
                </p>
                <p>
                  <span className="font-semibold">Cloud & DevOps:</span> Git, GitHub, Postman, Swagger,
                  AWS S3, Vercel, Render, Firebase
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">
                Certifications
              </h2>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Machine Learning Specialization</span> --- Coursera
                  (83J7VWVITWBB)
                </li>
                <li>
                  <span className="font-semibold">Supervised Machine Learning: Regression & Classification</span>{" "}
                  --- Coursera (NTQQ97Q30EQZ)
                </li>
                <li>
                  <span className="font-semibold">Advanced Learning Algorithms</span> --- Coursera
                  (SE0HXGDR1CHX)
                </li>
                <li>
                  <span className="font-semibold">Frontend Development, Backend Development & Data
                  Structures in Java</span> --- Coding Ninjas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
