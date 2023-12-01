import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants/constants";
import { DateText, TitleText, CompanyName, PointItem, ResponsiveIconContainer} from './ExperienceStyles'; // Import from wherever you've defined them
import SectionWrapper from '../SectionWrapper';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
        //   width: '400px',
        //   minHeight: '600px'
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={
          <DateText>{experience.date}</DateText>
          }
        iconStyle={{ background: experience.iconBg }}
        icon={
          <ResponsiveIconContainer>
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{
                maxWidth: '70%', 
                maxHeight: '70%', 
                objectFit: 'contain',
              }}
            />
          </ResponsiveIconContainer>
        }
      >
        <div>
          <TitleText>{experience.title}</TitleText>
          <CompanyName>{experience.company_name}</CompanyName>
        </div>
  
        <ul className="bullet-list" style={{ marginTop: '0.625rem' }}>
            {experience.points.map((point, index) => (
              <PointItem key={`experience-point-${index}`}>{point}</PointItem>
            ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const Experience = () =>  {

  const AnimatedSection = SectionWrapper(Section);

  return (
    <AnimatedSection id="experiences">
      
      <motion.div variants={textVariant()}>
        <SectionDivider divider />
        <SectionTitle>Experience</SectionTitle>
        <SectionText>
        I am a Software Engineer Placement at Lifecycle Software Ltd since September 2023. 
        Prior to this, I was a Software Engineer Intern at Therapyworks (Feb-Apr 2023), and I have MSc Computing degree from Cardiff University, which has provided a strong foundation for my technical skills and software development knowledge.
        </SectionText>
      </motion.div>
      
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
    </AnimatedSection>
  );
}


export default Experience;
