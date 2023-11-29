import React from 'react';

import {
  ProjectCardContainer,
  LinkButton,
  IconStyle,
  ProjectName,
  ProjectDescription,
  ProjectTag
} from './ProjectsStyles';
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

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, sourceCodeLink, deployedLink } =
    project;

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