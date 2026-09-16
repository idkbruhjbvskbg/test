'use client';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-8">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Resume</span>
            </h1>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-lg border border-border overflow-hidden shadow-lg">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-[85vh] min-h-[700px]"
                title="Resume PDF Viewer"
                style={{ border: 'none' }}
                allowFullScreen
              />
            </div>
            
            {/* Download Button */}
            <div className="mt-6 text-center">
              <a
                href="/resume.pdf"
                download="Vivyn_Bhavani_Raaman_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

