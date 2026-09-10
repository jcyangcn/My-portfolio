import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDna, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "AI/LLM Evaluation",
    "Hallucination Detection",
    "Variant Pathogenicity Validation",
    "Causal Inference Auditing",
    "Human-in-the-loop Annotation",
    "Biological Benchmarks",
    "ClinVar / NCBI",
    "Deep Learning",
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
                Bridges computational genomics and clinical validation — owning pipelines end-to-end while stress-testing
                AI/LLM reasoning against gold-standard biological benchmarks.
            </p>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faClipboardCheck} size="2x"/>
                    <h3>AI/LLM Evaluation &amp; Auditing</h3>
                    <p>Stress-tests model reasoning in genomic diagnostics, flags hallucinated pathway inferences, and supplies structured human annotations for retraining — including variant pathogenicity and contamination-risk reports.</p>
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
                    <p>RNA-Seq, variant calling, microbiome profiling, and structural genomics workflows used in precision medicine, oncology diagnostics, drug discovery, and infectious disease genomics.</p>
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
                    <p>Production genomic platforms with Nextflow, Docker, Kubernetes, GCP, and AWS — plus observability, LGPD/HIPAA-aware handling, and measurable SLIs.</p>
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
