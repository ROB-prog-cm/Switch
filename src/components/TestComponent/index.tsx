import React from 'react';
import styled from 'styled-components';
import { ComponentWrapper } from './index.styled';
import MaterialDesignSwitch from '../Switch';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
`;

const TestComponent: React.FC = () => {
  return (
    <ComponentWrapper>
      Place to do some things
      <Wrapper>
        <MaterialDesignSwitch div="Нет" checked={false} />
        <MaterialDesignSwitch div="Да" checked />
      </Wrapper>
    </ComponentWrapper>
  );
};

export default TestComponent;
