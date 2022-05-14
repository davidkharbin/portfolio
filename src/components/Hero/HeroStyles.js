import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl}{
    width: 99%;
    /* margin: 0; */
  } 

  @media ${(props) => props.theme.breakpoints.lg}{
    width: 70%;
    margin: 0;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 350px;
    display: flex;
    flex-direction: column;
  }
`;
