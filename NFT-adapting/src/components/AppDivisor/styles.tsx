import styled from 'styled-components/native';

interface DivisorProps {
  width?: number;
  height?: number;
  color?: string;
}

export const DivisorLine = styled.View<DivisorProps>`
  height: ${(props) => (props.height ? props.height : 4)}px;
  width: ${(props) => (props.width ? props.width : 90)}%;
  background-color: ${(props) => (props.color ? props.color : '#A8CF47')};
  border-radius: 4px;
`;
export const DivisorContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
