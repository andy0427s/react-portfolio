import React, {useRef, useState} from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph, GridContainer } from './TechnologiesStyles';
import { skills } from '../../constants/constants'
import { motion, whileInView } from "framer-motion";
import { textVariant, fadeIn } from '../../utils/motion';

const Technologies = () => {
  const ref = useRef(null);
  const textAnimation = textVariant();
  const [isSectionInView, setIsSectionInView] = useState(false);


  return (
    <Section id="skills" ref={ref}>
      <SectionDivider divider />
      <motion.div
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setIsSectionInView(true)}
        onViewportLeave={() => setIsSectionInView(false)}
        viewport={{ once: true, amount: 0.25 }}
        variants={textAnimation} 
      >
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionText>
        I am proficient in multiple programming languages including Java, Python, SQL, HTML/CSS, and Javascript. 
        My skills extend to technologies such as Spring Boot, Flask, Vue.js, MySQL, PostgreSQL, MongoDB, Linux, Git, Maven, and Hibernate. Additionally, I am experienced with tools like Jira, Bitbucket, and Slack.
        </SectionText>
      </motion.div>
      <GridContainer>
        {skills.map((technology, index) => (
          <TechCard 
          key={technology.title} 
          index={index} 
          {...technology} 
          isInView={isSectionInView}/>
        ))}
      </GridContainer>
    </Section>
  );
} 
  

const TechCard = ({ index, title, icon, isInView }) => {

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

  const fadeInAnimation = fadeIn("right", "spring", 0.3 * index, 0.65); // Example direction, type, delay, duration


  return (
    <motion.div 
      style={divStyle}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={fadeInAnimation}
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
