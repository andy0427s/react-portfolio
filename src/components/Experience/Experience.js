import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants/constants";

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        //   width: '400px',
        //   minHeight: '600px'
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={
            <div style={{ fontSize: '2rem', marginRight:"1.5rem", marginLeft:"1.5rem"}}> {/* Adjust fontSize and color as needed */}
              {experience.date}
            </div>
          }
        iconStyle={{ background: experience.iconBg, width: '60px', height:'60px' }}
        icon={
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100%', 
            height: '100%'
          }}>
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
              }}
            />
          </div>
        }
      >
        <div>
          <h3 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
            {experience.title}
          </h3>
          <p style={{ color: '#d1d5db', fontSize: '2rem', fontWeight: '600', margin: 0 }}>
            {experience.company_name}
          </p>
        </div>
  
        <ul className="bullet-list" style={{ marginTop: '0.625rem' }}>
            {experience.points.map((point, index) => (
                <li
                key={`experience-point-${index}`}
                style={{ color: 'white', fontSize: '2rem', paddingLeft: '0.5rem', letterSpacing: 'wider' }}
              >
                {point}
              </li>
            ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const Experience = () =>  (
  <Section nopadding id="experiences">
    <SectionDivider divider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
    I am a Software Engineer Placement at Lifecycle Software Ltd since September 2023. 
    Prior to this, I was a Software Engineer Intern at Therapyworks (Feb-Apr 2023), and I have MSc Computing degree from Cardiff University, which has provided a strong foundation for my technical skills and software development knowledge.
    </SectionText>
    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column' }}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
  </Section>
);

export default Experience;
