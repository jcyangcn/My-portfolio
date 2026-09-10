import React from "react";
import '../assets/styles/Project.scss';

const publications = [
  {
    kicker: "Brain Sciences · 2025",
    title: "Enhanced Transcriptomic Discovery of Druggable Targets for Huntington's Disease",
    description: "Contributing author. Applied transcriptomic analysis to surface molecular targets for a neurodegenerative indication.",
    tag: "Publication"
  },
  {
    kicker: "MENA Rare Disease Congress, UAE · 2024",
    title: "BDASeq: A Scalable Analytical-Predictive Model for RNA-Seq Data Analysis",
    description: "Presented a production RNA-Seq platform that takes predictive models and cloud processing from prototype to partner-ready analysis.",
    tag: "Conference"
  },
  {
    kicker: "Journal of Computational Biology",
    title: "Machine Learning Approaches in Precision Oncology Diagnostics",
    description: "Manuscript under review. Focused on diagnostic machine learning methods for precision oncology workflows.",
    tag: "Under review"
  }
];

const selectedWork = [
  {
    title: "Digital microbiological diagnostics",
    org: "Nita Alimentos",
    description: "Enterprise ML pipelines, contamination-risk models, and AI-output audits that cut diagnostic decision time by 40%."
  },
  {
    title: "BDASeq transcriptomics platform",
    org: "Mosten",
    description: "Full-stack analytical features with GCP ingestion, BigQuery optimization, and partner onboarding documentation."
  },
  {
    title: "D-Krypt variant prioritization",
    org: "DNA GTx Bioinformatics",
    description: "React and Python components that accelerated clinical variant triage by 35% for diagnostic teams."
  }
];

function Project() {
    return(
    <div className="projects-container" id="research">
        <p className="section-kicker">Selected work</p>
        <h1 className="section-title">Research &amp; platforms</h1>
        <p className="section-lead">
            Peer-reviewed research, conference work, and production genomic platforms — with the same through-line as the resume:
            validated models, audited AI outputs, and scalable bioinformatics infrastructure.
        </p>

        <div className="work-grid">
            {selectedWork.map((item) => (
                <article className="work-card" key={item.title}>
                    <p className="work-org">{item.org}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>

        <h2 className="subhead">Publications</h2>
        <div className="projects-grid">
            {publications.map((item) => (
                <article className="project research-card" key={item.title}>
                    <span className="pub-tag">{item.tag}</span>
                    <p className="pub-kicker">{item.kicker}</p>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    </div>
    );
}

export default Project;
