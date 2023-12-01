import React, {useRef} from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph, GridContainer } from './TechnologiesStyles';
import { skills } from '../../constants/constants'
import { motion, whileInView } from "framer-motion";

const Technologies = () => {
  const ref = useRef(null);

  return (
    <Section id="skills" ref={ref}>
      <SectionDivider divider />
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          transition:{ type: "spring", duration: 1.25}
        }}
        viewport={{ once: true, amount: 0.25}}
      >
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionText>
        I am proficient in multiple programming languages including Java, Python, SQL, HTML/CSS, and Javascript. 
        My skills extend to technologies such as Spring Boot, Flask, Vue.js, MySQL, PostgreSQL, MongoDB, Linux, Git, Maven, and Hibernate. Additionally, I am experienced with tools like Jira, Bitbucket, and Slack.
        </SectionText>
      </motion.div>
      <GridContainer>
        {skills.map((technology, index) => (
          <TechCard key={technology.title} index={index} {...technology}/>
        ))}
      </GridContainer>
    </Section>
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

  const direction = "right"; // Example direction, adjust as needed
  const delay = 0.3 * index; // Example delay, adjust as needed
  const duration = 0.65; // Example duration, adjust as needed

  return (
    <motion.div 
      style={divStyle}
      initial={{
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0
      }}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition:{ 
          type: "spring", 
          delay: delay, 
          duration: duration, 
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, amount: 0.25 }}
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
