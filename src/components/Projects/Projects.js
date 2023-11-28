import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider/>
    <SectionTitle >Projects</SectionTitle>
    
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

const cardWidth = 'calc(50% - 1.75rem)'

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, sourceCodeLink, deployedLink } =
    project;
  const cardStyles = {
    width: cardWidth,
    height: '500px',
    border: '1px solid transparent',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
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

  const linkButtonStyles = {
    width: '40px', // Increase the width as needed
    height: '40px', // Increase the height as needed
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #0ea5e9, #6366f1)', // Your gradient here
    padding: '5px', // Add padding to make the background larger than the icon
    marginRight: '10px',
  };


  const iconStyles = {
    width: '70%', // Adjust as needed, ensuring it's smaller than the linkButtonStyles dimensions
    height: '70%', // Adjust as needed
    objectFit: 'contain'
  };

  const nameStyles = {
    marginTop: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.5rem',
  };

  const descriptionStyles = {
    marginTop: '24px',
    color: '#6b7280',
    fontSize: '2rem',
    color: '#fff'
  };

  const tagStyles = {
    marginTop: '10px',
    display: 'inline-block',
    marginRight: '8px',
    fontSize: '1.75rem',
    color: '#93c5fd',
  };

  return (
    <div style={cardStyles}>
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
            <div
              onClick={() => window.open(deployedLink, "_blank")}
              style={linkButtonStyles}
            >
              <FaExternalLinkAlt
                style={iconStyles}
                alt="link"
              />
            </div>
          )}
          <div
            onClick={() => window.open(sourceCodeLink, "_blank")}
            style={linkButtonStyles}
          >
            <AiFillGithub
              style={iconStyles}
              alt="github"
            />
          </div>
        </div>
        <div style={nameStyles}>{name}</div>
        <p style={descriptionStyles}>{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <p
              key={`${index}-${tagIndex}`}
              style={tagStyles}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;