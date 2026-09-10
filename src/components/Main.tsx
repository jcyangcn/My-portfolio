import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/Douglas.jpg`} alt="Douglas Guilherme" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jcyangcn" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/douglas-guinunes" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:guilhermedouglas332@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <p className="eyebrow">AI/LLM Evaluation · Computational Genomics · Precision Medicine</p>
          <h1>Douglas Guilherme</h1>
          <p className="role">Bioinformatics Machine Learning Specialist</p>
          <p className="summary">
            5+ years building and evaluating AI-driven genomic models — from raw sequencing pipelines to clinical interpretation,
            with a core focus on catching false-positive pathogenic calls, hallucinated pathway inferences, and weak biological reasoning.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn ghost" href={`${process.env.PUBLIC_URL}/Douglas-Guilherme-Resume.pdf`} download>
              <FileDownloadOutlinedIcon fontSize="small" /> Resume
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/jcyangcn" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/douglas-guinunes" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:guilhermedouglas332@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
