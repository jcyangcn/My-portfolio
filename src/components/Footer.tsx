import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:guilhermedouglas332@gmail.com" aria-label="Email"><EmailIcon/></a>
        <a href="https://www.linkedin.com/in/douglas-guilherme-071a47323/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p>Douglas Guilherme · Bioinformatics Machine Learning Expert · Brazil</p>
    </footer>
  );
}

export default Footer;
