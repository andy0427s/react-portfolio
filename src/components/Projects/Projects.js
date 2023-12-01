import React, {useRef, useEffect, useState} from 'react';

import {ProjectCardContainer,LinkButton,IconStyle,ProjectName,ProjectDescription,ProjectTag} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, whileInView } from "framer-motion";


const Projects = () => {

  const ref = useRef(null);
 
  return (
    <Section id="projects" ref={ref}>
      <SectionDivider divider/>
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ 
          y: 0, 
          opacity: 1,
          transition:{ type: "spring", duration: 1.25}
        }}
        viewport={{ once: true, amount: 0.25}}
      >
        <SectionTitle >Projects</SectionTitle>
      </motion.div>
      <div
        style={{
          marginTop: '3.5rem', // 14 * 0.25rem
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch', // Default alignment
          flexWrap: 'wrap',
          gap: '1.75rem', // 7 * 0.25rem
          // You can't include media queries directly in inline styles,
          // so you would handle them either in a separate stylesheet
          // or by dynamically updating these styles with JavaScript
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
  
      
    </Section>
  );
}

const ProjectCard = ({ project, index}) => {

  const { name, description, tags, image, sourceCodeLink, deployedLink } =
    project;

  // Initialize state with undefined or a default value
  const [screenWidth, setScreenWidth] = useState(undefined);

  useEffect(() => {
    // Set the screen width when the component mounts
    setScreenWidth(window.innerWidth);

    // Function to handle resize events
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this effect runs only once on mount

  const outerContainerStyles = {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'space-between', // Distribute space evenly
    alignItems: 'center', // Center items horizontally
    width: screenWidth <= 600 ? '100%' : 'calc(50% - 1.75rem)',
    height: screenWidth <= 400 ? '450px' : screenWidth <= 600 ? '400px' : '500px',
    border: '1px solid transparent',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    padding: '5px' // Add some padding
  };
    

  const innerContainerStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '20px',
  };

  const imageStyles = {
    position: 'relative',
    width: '100%',
    height: '190px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const buttonContainerStyles = {
    position: 'absolute',
    top: '4px',
    right: '4px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '2px',
    margin: '3px',
  };

  const direction = "up"; // Example direction, adjust as needed
  const delay = 0.3 * index; // Example delay, adjust as needed
  const duration = 0.65; // Example duration, adjust as needed

  return (
    <motion.div
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
      style={outerContainerStyles}
    >
      <div style={innerContainerStyles}>
        <div style={imageStyles}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            style={imageStyles}
          />
        </div>
        <div style={buttonContainerStyles}>
          {deployedLink && (
            <LinkButton onClick={() => window.open(deployedLink, "_blank")}>
              <IconStyle>
                <FaExternalLinkAlt alt="link" />
              </IconStyle>
            </LinkButton>
          )}
          <LinkButton onClick={() => window.open(sourceCodeLink, "_blank")}>
            <IconStyle>
              <AiFillGithub alt="github" />
            </IconStyle>
          </LinkButton>
        </div>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <ProjectTag key={`${index}-${tagIndex}`}>
              #{tag.name}
            </ProjectTag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;