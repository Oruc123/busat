import styled from "styled-components";

export const SectionWrapper = styled.section<{ bgColor?: string }>`
  padding: 45px 0;
  background: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.color.bgColor};
`;
