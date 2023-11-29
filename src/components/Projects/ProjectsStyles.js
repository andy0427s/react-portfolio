import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`


// From here

export const ProjectCardContainer = styled.div`
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

    // Styled component for the button
    export const LinkButton = styled.div`
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
    export const IconStyle = styled.div`
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
  export const ProjectName = styled.div`
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;

    @media (max-width: 600px) {
      font-size: 2rem; // Smaller font size on small screens
    }
    `;

  // Styled component for the project description
  export const ProjectDescription = styled.p`
    margin-top: 24px;
    color: #fff; // No need to repeat color property
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 1.5rem; // Smaller font size on small screens
    }
    `;
  
    // Styled component for the project tags
    export const ProjectTag = styled.p`
      margin-top: 10px;
      display: inline-block;
      margin-right: 8px;
      font-size: 1.75rem;
      color: #93c5fd;
  
      @media (max-width: 600px) {
        font-size: 1.5rem; // Smaller font size on small screens
      }
      `;