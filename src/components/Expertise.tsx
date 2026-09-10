import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Deep Learning",
    "Neural Networks",
    "Predictive Modeling",
    "Feature Engineering",
    "Clustering",
    "Hyperparameter Optimization",
    "Dimensionality Reduction",
    "Statistical Analysis",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn"
];

const labelsSecond = [
    "RNA-Seq Analysis",
    "Variant Calling",
    "Genome Assembly",
    "Transcriptomics",
    "Metagenomics",
    "Proteogenomics",
    "Molecular Docking",
    "Virtual Screening",
    "Microbiome Profiling",
    "Bioconductor",
    "QIIME2"
];

const labelsThird = [
    "Python",
    "R",
    "SQL",
    "Nextflow",
    "Docker",
    "Kubernetes",
    "GCP",
    "AWS",
    "PostgreSQL",
    "BigQuery",
    "Prometheus",
    "Grafana"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <p className="section-kicker">Capabilities</p>
            <h1 className="section-title">Expertise</h1>
            <p className="section-lead">
                End-to-end ownership of bioinformatics machine learning systems — from sequencing data and feature design
                through model registries, clinical interpretation, and production observability.
            </p>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="2x"/>
                    <h3>Machine Learning &amp; AI</h3>
                    <p>Production analytical-predictive models for contamination risk, variant prioritization, and transcriptomic discovery, with versioned registries and biological validation metrics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDna} size="2x"/>
                    <h3>Bioinformatics &amp; Genomics</h3>
                    <p>RNA-Seq, variant annotation, microbiome profiling, and structural genomics workflows used in precision medicine, oncology diagnostics, and infectious disease genomics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="2x"/>
                    <h3>Platforms &amp; Infrastructure</h3>
                    <p>Scalable genomic data platforms with Nextflow, Docker, Kubernetes, and cloud services — designed for high availability, LGPD/HIPAA-aware handling, and measurable SLIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
