import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph } from './TechnologiesStyles';
import { skills } from '../../constants/constants'
import styled from 'styled-components';


const Technologies = () =>  (
  <Section nopadding id="skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
    I am proficient in multiple programming languages including Java, Python, SQL, HTML/CSS, and Javascript. 
    My skills extend to technologies such as Spring Boot, Flask, Vue.js, MySQL, PostgreSQL, MongoDB, Linux, Git, Maven, and Hibernate. Additionally, I am experienced with tools like Jira, Bitbucket, and Slack.
    </SectionText>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start', // Left aligned by default
        flexWrap: 'wrap',
        gap: '1rem',
        '@media (max-width: 400px)': { // Media query for smaller screens
          justifyContent: 'space-evenly', // Center aligned for small screens
          gap: '2rem'
        },
      }}
    >
      {skills.map((technology, index) => (
        <TechCard key={technology.title} index={index} {...technology} />
      ))}
    </div>
  </Section>
);

const TechCard = ({ index, title, icon }) => {
  // Inline styles for the div
  const divStyle = {
    borderRadius: '20px',
    width: '150px', // Fixed width
    height: '200px', // Fixed height
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '32px',
    paddingRight: '32px',
    minHeight: '160px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    // Add styles for glassmorphism here if you know them
  };

  return (
    <div style={divStyle}>
      {icon && (
        <img
          src={icon}
          alt={title}
          loading='lazy'
          style={{ width: '64px', height: '64px', objectFit: 'contain' }}
        />
      )}
      <Paragraph>{title}</Paragraph>
    </div>
  );
};


export default Technologies;
