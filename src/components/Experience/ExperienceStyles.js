import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const StyledList = styled.ul`
  margin-top: 10px; 
  list-style-type: disc !important;
  margin-left: 20px !important;
  padding-left: 0 !important;
  gap: 8px;
`;

export const StyledListItem = styled.li`
  color: white;
  font-size: 24px;
  letter-spacing: wider;
`;


// From here

// Styled components with media queries for RWD
export const DateText = styled.div`
  font-size: 2rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 0rem;
    margin-left: 0rem;
    margin-top: 1rem;
  }
`;

export const TitleText = styled.h3`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CompanyName = styled.p`
  && {
    color:rgba(184, 188, 194, 1.0);
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 1.5rem; // Example of reduced size for smaller screens
    }
  }
`;

export const PointItem = styled.li`
  color: white;
  font-size: 2rem;
  padding-left: 0; // No padding to the left of the bullet
  margin-left: 2rem; // No margin to the left of the bullet, adjust if necessary
  letter-spacing: wider;
  margin-top: 1rem;
  list-style: disc; // Ensures the bullet is inside the flow and does not disrupt alignment
  

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Responsive Icon Styled Component
export const ResponsiveIconContainer = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 6rem;  // default size
  height: 6rem; // default size

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }

  img {
    max-width: 100%; 
    max-height: 100%; 
    object-fit: contain;
  }
`;