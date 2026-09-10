import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const roles = [
  {
    date: "Jan 2024 – Present",
    title: "Bioinformatics Machine Learning Specialist",
    subtitle: "Nita Alimentos · Florianópolis, Brazil",
    points: [
      "Led enterprise ML pipelines for digital microbiological diagnostics across 3 production releases.",
      "Reduced contamination false-positive flags by 32% and saved 150+ hours of manual review each month.",
      "Audited AI variant and contamination reports against NCBI, ClinVar, and curated pathways, catching false positives in 15% of automated runs."
    ]
  },
  {
    date: "Oct 2023 – Dec 2023",
    title: "AI/ML Research Associate – Transcriptomics",
    subtitle: "Mosten · São Paulo, Brazil",
    points: [
      "Owned BDASeq predictive models and GCP infrastructure from prototype to production.",
      "Cut differential expression report time from 12s to 2.3s on BigQuery.",
      "Reduced production regression defects by 45% with automated testing and CI checks."
    ]
  },
  {
    date: "Jan 2022 – Sep 2023",
    title: "Genomic Data Scientist",
    subtitle: "DNA GTx Bioinformatics · Natal, Brazil",
    points: [
      "Accelerated D-Krypt clinical variant triage by 35% with React and Python.",
      "Reached 95% clinician satisfaction on primary variant filtering workflows.",
      "Shipped 20+ production features on time across a 20-month tenure."
    ]
  },
  {
    date: "Aug 2020 – Dec 2021",
    title: "Machine Learning Engineer – Structural Genomics",
    subtitle: "GenEstrut, UFPel · Pelotas, Brazil",
    points: [
      "Built ML models for structural and functional genomics in precision medicine research.",
      "Supported patent-bound microRNA and epigenetic pipelines licensed to biotech partners.",
      "Processed 10,000+ molecular tests in the COVID-19 Molecular Diagnostic Unit."
    ]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <p className="section-kicker">Career</p>
        <h1 className="section-title">Experience</h1>
        <p className="section-lead">
          From academic structural genomics to production diagnostics platforms — partnering with scientists,
          clinicians, and quality teams to validate genomic AI against biological benchmarks.
        </p>
        <VerticalTimeline>
          {roles.map((role) => (
            <VerticalTimelineElement
              key={role.title}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'var(--surface)', color: 'var(--text)', boxShadow: 'var(--shadow)', border: '1px solid var(--line)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--surface)' }}
              date={role.date}
              iconStyle={{ background: '#1f8b84', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{role.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{role.subtitle}</h4>
              <ul className="timeline-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
