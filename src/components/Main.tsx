import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
            <a href="https://www.linkedin.com/in/douglas-guilherme-071a47323/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:guilhermedouglas332@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <p className="eyebrow">Bioinformatics · Machine Learning · Precision Medicine</p>
          <h1>Douglas Guilherme</h1>
          <p className="role">Bioinformatics Machine Learning Expert</p>
          <p className="summary">
            5+ years building production-grade analytical models that connect AI with genomic data —
            from raw sequencing pipelines to clinical interpretation, model deployment, and high-availability infrastructure.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn ghost" href={`${process.env.PUBLIC_URL}/Douglas-Guilherme-Resume.pdf`} download>
              <FileDownloadOutlinedIcon fontSize="small" /> Resume
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/douglas-guilherme-071a47323/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:guilhermedouglas332@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
