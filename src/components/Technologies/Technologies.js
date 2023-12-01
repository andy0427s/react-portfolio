import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph, GridContainer } from './TechnologiesStyles';
import { skills } from '../../constants/constants'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from '../SectionWrapper';


const Technologies = () => {

  const AnimatedSection = SectionWrapper(Section);

  return (
    <AnimatedSection id="skills">
      <SectionDivider divider />
      <motion.div variants={textVariant()}>
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionText>
        I am proficient in multiple programming languages including Java, Python, SQL, HTML/CSS, and Javascript. 
        My skills extend to technologies such as Spring Boot, Flask, Vue.js, MySQL, PostgreSQL, MongoDB, Linux, Git, Maven, and Hibernate. Additionally, I am experienced with tools like Jira, Bitbucket, and Slack.
        </SectionText>
      </motion.div>
      <GridContainer>
        {skills.map((technology, index) => (
          <TechCard key={technology.title} index={index} {...technology} />
        ))}
      </GridContainer>
    </AnimatedSection>
  );
} 
  

const TechCard = ({ index, title, icon }) => {
  // Inline styles for the div
  const divStyle = {
    borderRadius: '20px',
    width: '150px', // Fixed width
    height: '190px', // Fixed height
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    minHeight: '160px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    // Add styles for glassmorphism here if you know them
  };

  return (
    <motion.div 
      style={divStyle}
      variants={fadeIn("right", "spring", 0.4 * index, 0.65)}
    >
    {icon && (
      <img
        src={icon}
        alt={title}
        loading='lazy'
        style={{ width: '64px', height: '64px', objectFit: 'contain' }}
      />
    )}
    <Paragraph>{title}</Paragraph>
    </motion.div>
  );
};


export default Technologies;
