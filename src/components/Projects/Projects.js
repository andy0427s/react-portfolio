import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from 'styled-components';


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

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, sourceCodeLink, deployedLink } =
    project;

  const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column; // Stack elements vertically
    justify-content: space-between; // Distribute space evenly
    align-items: center; // Center items horizontally
    width: calc(50% - 1.75rem);
    height: 500px;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 5px; // Add some padding

    @media (max-width: 600px) {
      width: 100%;
      height: 400px; // Reduced height for smaller screens
    }
  
    @media (max-width: 400px) {
      height: 450px; // Further reduced height for very small screens
    }
  `;
  
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

        // Styled component for the button
    const LinkButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(to right, #0ea5e9, #6366f1);
    padding: 5px;
    margin-right: 10px;

    &:hover {
      background: linear-gradient(to right, #53c0f3, #8a85ff); // Brighter gradient on hover
    }
    `;

    // Styled component for the icon
    const IconStyle = styled.div`
    width: 70%;
    height: 70%;
    object-fit: contain;

    // Apply styles to the actual icon within IconStyle
    svg {
      width: 100%;
      height: 100%;
    }
    `;

  // Styled component for the project name
  const ProjectName = styled.div`
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;

    @media (max-width: 600px) {
      font-size: 2rem; // Smaller font size on small screens
    }
    `;

  // Styled component for the project description
  const ProjectDescription = styled.p`
    margin-top: 24px;
    color: #fff; // No need to repeat color property
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 1.5rem; // Smaller font size on small screens
    }
    `;

  // Styled component for the project tags
  const ProjectTag = styled.p`
    margin-top: 10px;
    display: inline-block;
    margin-right: 8px;
    font-size: 1.75rem;
    color: #93c5fd;

    @media (max-width: 600px) {
      font-size: 1.5rem; // Smaller font size on small screens
    }
    `;

  return (
    <ProjectCardContainer>
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
    </ProjectCardContainer>
  );
};

export default Projects;