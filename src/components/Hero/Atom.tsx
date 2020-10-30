import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
export const BackgroundDiv = styled.div<{ bg: string }>`
  background: url(${(props) => props.bg}) 0 0 no-repeat;
  background-size: cover;
  height: 500px;
  position: relative;
  z-index: 1;
`;

export const Filter = styled.div`
  &::after{
      content:'';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: radial-gradient(circle at 0 0,#522128,rgba(82,33,40,0));
      z-index: -1;
    }
  }
`;

export const Body = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.whiteColor};
  font-weight: 300;
  font-size: 3rem;
  word-break: break-word;
  margin-bottom: 1rem;
`;
export const ShortDesc = styled.p`
  word-break: break-word;
  margin-top:0;
  font-weight; 400;color: ${(props) => props.theme.color.whiteColor};
`;
