import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { skills } from '../../constants/constants'

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
    I am proficient in multiple programming languages including Java, Python, SQL, HTML/CSS, and Javascript. 
    My skills extend to technologies such as Spring Boot, Flask, Vue.js, MySQL, PostgreSQL, MongoDB, Linux, Git, Maven, and Hibernate. Additionally, I am experienced with tools like Jira, Bitbucket, and Slack.
    </SectionText>
    <div
      style={{
         // 14 * 0.25rem
        display: 'flex',
        justifyContent: 'flex-start', // center if needed 
        flexWrap: 'wrap',
        gap: '1rem', // 4 * 0.25rem
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
    width: '200px', // Fixed width
    height: '250px', // Fixed height
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

  // Inline styles for the paragraph
  const paragraphStyle = {
    color: 'white',
    fontSize: '20px', // Default font size
    fontWeight: '600', // Semibold
    textAlign: 'center',
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
      <p style={paragraphStyle}>
        {title}
      </p>
    </div>
  );
};


export default Technologies;
