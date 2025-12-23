import { useState } from "react";
import Modal from "../components/Modal";

const CallForPapers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuideline, setSelectedGuideline] = useState(null);

  const guidelinesContent = {
    fullPaper: {
      title: "Guidelines for Full Paper",
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold mb-2">TITLE FORMAT:</p>
            <p className="text-sm">MAXIMUM 20 WORDS, ALL CAPITALS, BOLD, ARIAL NARROW, 11-POINT SIZE</p>
            <p className="text-sm mt-2">Author name/s (without titles such as Dr., Prof., etc.)</p>
            <p className="text-sm"><sup>1*</sup> Affiliation with Institute Name, University, City, Country, Email ID</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Requirements</h4>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Language:</span> The article must be written in English.
              </div>
              <div>
                <span className="font-semibold">Article length:</span> Should preferably not be longer than 6000 words (including abstract and references).
              </div>
              <div>
                <span className="font-semibold">Format:</span> Microsoft Word format.
              </div>
              <div>
                <span className="font-semibold">Abstract:</span> 300-350 words (excluding keywords), providing a concise, structured overview.
              </div>
              <div>
                <span className="font-semibold">Keywords:</span> Up to five (05) keywords in alphabetical order.
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Article Structure</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Introduction:</strong> Background, research problem, objectives, motivation/significance</li>
              <li><strong>Literature Review:</strong> Critical discussion, lacunae, hypotheses/conceptual framework</li>
              <li><strong>Methods:</strong> Research approach, strategies, site, sample, measures, analysis tools</li>
              <li><strong>Results & Discussion:</strong> Data description, analysis, hypothesis testing, inferences</li>
              <li><strong>Conclusion:</strong> Summary, recommendations, implications, limitations, future research</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">References</h4>
            <p className="mb-2">Follow APA Style (7th Edition):</p>
            <div className="space-y-2 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <p><strong>Journal:</strong> Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Journal</em>, volume(issue), pages. DOI</p>
              <p><strong>Book:</strong> Author, A. A., & Author, B. B. (Year). <em>Title of the book</em> (ed.). Publisher.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">General Text Guidelines</h4>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Font: Times New Roman 12pt, Paper: A4, Margins: 2.54cm/1 inch</li>
              <li>Heading levels: Level 1-5 with specific formatting, numbered consecutively</li>
              <li>Line spacing: 1.5</li>
              <li>Page numbering: Arabic numerals (1, 2, 3...)</li>
              <li>Tables numbered (12pt, left-aligned), heading at top</li>
              <li>Figures numbered (12pt, centered), heading under figure</li>
              <li>Formulas: Times New Roman 12pt, center-aligned, numbered</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Plagiarism and AI Use</h4>
            <p className="text-sm">All submissions must be original and free from plagiarism. AI tools may be used only for language editing and proofreading, not for generating content. Any AI assistance must be clearly acknowledged.</p>
          </div>
        </div>
      )
    },
    extendedAbstract: {
      title: "Guidelines for Extended Abstract",
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold mb-2">TITLE FORMAT:</p>
            <p className="text-sm">MAXIMUM 20 WORDS, ALL CAPITALS, BOLD, ARIAL NARROW, 11-POINT SIZE</p>
            <p className="text-sm mt-2">Author name/s (without titles such as Dr., Prof., etc.)</p>
            <p className="text-sm"><sup>1*</sup> Affiliation with Institute Name, University, City, Country, Email ID</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Abstract Requirements</h4>
            <p>300-350 words (excluding keywords), providing a concise, structured overview of the study.</p>
            <p className="mt-2"><strong>Keywords:</strong> Up to five (05) keywords in alphabetical order.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Structure</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">1. Introduction (max 300 words)</h5>
                <p className="text-sm">Background, research problem, purpose/aims/objectives, and significance.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">2. Research Methodology (max 200 words)</h5>
                <p className="text-sm">Philosophy, approach, methodology, strategy, context, unit of analysis, sample selection, and data collection methods. Justify its suitability.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">3. Results/Findings and Discussion (max 400 words)</h5>
                <p className="text-sm">Data analysis techniques, key findings, discussion comparing with previous studies.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">4. Conclusion and Implications (max 200 words)</h5>
                <p className="text-sm">Main conclusions, theoretical and practical implications.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">5. References</h5>
                <p className="text-sm">Use APA 7th edition for in-text citations and reference list.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Plagiarism and AI Use</h4>
            <p className="text-sm">All submissions must be original and free from plagiarism. Extended abstracts will be screened using plagiarism detection software. AI tools may be used only for language editing and proofreading.</p>
          </div>
        </div>
      )
    },
    doctoralColloquium: {
      title: "Guidelines for Doctoral Colloquium",
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Eligibility</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>Open to registered PhD / DBA / MPhil candidates in management, business, commerce, or related fields</li>
              <li>Candidates may be at proposal, data collection, or analysis/writing stage</li>
              <li>Each participant may submit only one extended abstract</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Submission Format</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Type:</strong> Extended abstract of doctoral research</li>
              <li><strong>Word limit:</strong> 1,000–1,500 words (excluding references)</li>
              <li><strong>File format:</strong> MS Word (.doc/.docx)</li>
              <li><strong>Font & spacing:</strong> Times New Roman, 12 pt, 1.5 spacing, justified</li>
              <li><strong>Referencing:</strong> APA 7th edition</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Recommended Structure</h4>
            <ul className="space-y-1 list-disc list-inside text-sm">
              <li>Title of the study</li>
              <li>Author's name, affiliation, and email</li>
              <li>Background and problem statement</li>
              <li>Research objectives / questions / hypotheses</li>
              <li>Brief literature insight and theoretical framework</li>
              <li>Methodology (design, data, sample, analysis)</li>
              <li>Expected / preliminary findings (if available)</li>
              <li>Contribution to theory, practice, and/or policy</li>
              <li>Key references</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Presentation Format</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Time:</strong> 10–12 minutes presentation + 8–10 minutes Q&A</li>
              <li><strong>Mode:</strong> Oral presentation (PowerPoint)</li>
              <li>Slides should be clear, concise, and visual</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Review and Selection</h4>
            <p>Peer-reviewed by expert panel. Evaluation considers:</p>
            <ul className="space-y-1 list-disc list-inside text-sm mt-2">
              <li>Clarity and originality of research problem</li>
              <li>Appropriateness of methodology</li>
              <li>Theoretical and practical contribution</li>
              <li>Overall coherence and scholarly quality</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Certificate & Feedback</h4>
            <p className="text-sm">Accepted participants receive a Certificate of Participation/Presentation and constructive feedback from senior academics.</p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Plagiarism and AI Use</h4>
            <p className="text-sm">All submissions must be original. AI tools may be used only for language editing and proofreading. Any AI assistance must be clearly acknowledged.</p>
          </div>
        </div>
      )
    },
    undergradPoster: {
      title: "Guidelines for Undergraduate Poster Presentation",
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Eligibility</h4>
            <p>Open to undergraduate students (individuals or groups up to 3 members).</p>
            <p className="mt-2">Posters should be based on:</p>
            <ul className="space-y-1 list-disc list-inside text-sm mt-2">
              <li>Final-year projects</li>
              <li>Independent studies</li>
              <li>Innovation/entrepreneurship projects</li>
              <li>Case studies or community-based projects in business, commerce, and management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Abstract Submission</h4>
            <p>Submit a short abstract (250–300 words) summarising:</p>
            <ul className="space-y-1 list-disc list-inside text-sm mt-2">
              <li>Background and objective</li>
              <li>Method/approach</li>
              <li>Key findings/outputs</li>
              <li>Implications or practical relevance</li>
            </ul>
            <p className="text-sm mt-2"><strong>File format:</strong> MS Word (.doc/.docx), Times New Roman, 12 pt, single spacing</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Poster Format</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Size:</strong> A1 (portrait)</li>
              <li><strong>Layout should include:</strong>
                <ul className="ml-6 mt-1 space-y-1 list-circle">
                  <li>Title, authors' names, affiliations</li>
                  <li>Introduction / background</li>
                  <li>Objectives / questions</li>
                  <li>Method / approach</li>
                  <li>Results / key insights (graphs, tables, visuals)</li>
                  <li>Conclusion and implications</li>
                  <li>Acknowledgements and references</li>
                </ul>
              </li>
              <li>Use large, readable fonts (minimum 24 pt for body text)</li>
              <li>Use figures, charts, images to communicate clearly</li>
              <li>Keep text short – bullets instead of long paragraphs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">On-site Display & Presentation</h4>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Presenters must print and bring their posters to the conference</li>
              <li>Posters mounted at allocated time and venue</li>
              <li>At least one student author must be present during viewing session</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Certificates & Awards</h4>
            <p className="text-sm">All presenters will receive a certificate of presentation.</p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Plagiarism and AI Use</h4>
            <p className="text-sm">All submissions must be original. Abstracts will be screened using plagiarism detection software. AI tools may be used only for language editing.</p>
          </div>
        </div>
      )
    }
  };

  const openGuideline = (type) => {
    setSelectedGuideline(type);
    setIsModalOpen(true);
  };

  return (
    <section id="call-for-papers" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Call for Papers
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
            ICCM 2026 invites full papers / extended abstracts from national and international researchers, providing
            an open forum to share research findings, ideas, and experiences in the fields of business, commerce,
            and management. Selected abstracts will be published in the conference proceedings.
          </p>
          <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Opportunity to Publish
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Selected high-quality full papers will have the opportunity to be forwarded to prestigious journals:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Journal of Management Development (Emerald; Scopus; ABDC; Q1)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Journal of Financial Reporting and Accounting (Emerald; Scopus; ABDC; Q1)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Journal of Accounting in Emerging Economies (Emerald; Scopus; ABDC; Q1)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>International Journal of Accounting and Business Finance (ABDC)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Journal of Business Studies (SLJOL)</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Submission Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Paper */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Full Paper
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Submit comprehensive research articles (up to 6000 words) with complete methodology, findings, and analysis. Ideal for established researchers presenting in-depth studies with substantial contributions to the field.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openGuideline('fullPaper');
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                >
                  View Guidelines
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Extended Abstract */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Extended Abstract
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Present your research in a structured, concise format with specific word limits per section. Suitable for ongoing studies or preliminary findings that warrant academic discussion and feedback.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openGuideline('extendedAbstract');
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                >
                  View Guidelines
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Doctoral Colloquium */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Doctoral Colloquium
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Exclusive opportunity for PhD, DBA, and MPhil candidates to present their doctoral research and receive constructive feedback from senior academics. Includes certificate and mentorship opportunities.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openGuideline('doctoralColloquium');
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                >
                  View Guidelines
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Undergraduate Poster */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Undergraduate Poster
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Designed for undergraduate students to showcase final-year projects, case studies, or innovation initiatives. Present your work visually through A1 posters with on-site display and receive participation certificates.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openGuideline('undergradPoster');
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                >
                  View Guidelines
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors group"
            >
              View Submission Guidelines
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://cmt3.research.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Submit via Microsoft CMT
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedGuideline(null);
        }}
        title={selectedGuideline ? guidelinesContent[selectedGuideline].title : "Submission Guidelines"}
      >
        {selectedGuideline ? (
          <div>
            {guidelinesContent[selectedGuideline].content}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
              <button
                onClick={() => setSelectedGuideline(null)}
                className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                ← Back to Guidelines
              </button>
              <a
                href="https://cmt3.research.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                Submit via CMT
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              Please select the appropriate submission type below:
            </p>
            
            <div className="grid gap-4">
              <button
                onClick={() => openGuideline('fullPaper')}
                className="p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Guidelines for Full Paper
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detailed guidelines for full paper submissions (max 6000 words)
                </p>
              </button>

              <button
                onClick={() => openGuideline('extendedAbstract')}
                className="p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Guidelines for Extended Abstract
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Requirements for extended abstract submissions (structured format)
                </p>
              </button>

              <button
                onClick={() => openGuideline('doctoralColloquium')}
                className="p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Guidelines for Doctoral Colloquium
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Submission guidelines for PhD / DBA / MPhil candidates (1000-1500 words)
                </p>
              </button>

              <button
                onClick={() => openGuideline('undergradPoster')}
                className="p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Guidelines for Undergraduate Poster Presentation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Requirements for undergraduate poster submissions (A1 portrait format)
                </p>
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://cmt3.research.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                Submit via Microsoft CMT
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default CallForPapers;
