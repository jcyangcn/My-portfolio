import React from "react";
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <p className="section-kicker">Background</p>
      <h1 className="section-title">Education &amp; certifications</h1>
      <div className="edu-grid">
        <article className="edu-card">
          <p className="edu-label">Graduate</p>
          <h3>Master of Science in Bioinformatics</h3>
          <p className="edu-meta">Universidade Federal do Rio Grande do Norte (UFRN) · Natal, Brazil · Expected 2026</p>
          <p>Research focus: integration of artificial intelligence and transcriptomic data for molecular target identification.</p>
        </article>
        <article className="edu-card">
          <p className="edu-label">Undergraduate</p>
          <h3>Bachelor's Degree in Biotechnology</h3>
          <p className="edu-meta">Universidade Federal de Pelotas (UFPel) · Pelotas, Brazil · 2017 – 2021</p>
          <p>Graduated with honors. Emphasis on structural genomics and computational biology.</p>
        </article>
      </div>
      <div className="cert-list">
        <div className="cert-item"><strong>Machine Learning Specialization</strong><span>Stanford University / Coursera</span></div>
        <div className="cert-item"><strong>Deep Learning Specialization</strong><span>deeplearning.ai</span></div>
        <div className="cert-item"><strong>Genomic Data Science Specialization</strong><span>Johns Hopkins University / Coursera</span></div>
        <div className="cert-item"><strong>Nextflow &amp; Scalable Bioinformatics Workflows</strong><span>Seqera Labs</span></div>
      </div>
    </div>
  );
}

export default Education;
