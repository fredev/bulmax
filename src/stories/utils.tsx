import React, { ReactElement } from 'react';

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px 0'
  } as React.CSSProperties,
  buttonContainer: {
    width: '33.333%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties,
};

interface StoryContainerProps {
  children: ReactElement | ReactElement[]
};

interface StoryButtonContainerProps {
  children: ReactElement | ReactElement[]
};

const StoryContainer: React.FC<StoryContainerProps> = ({ children }) => (
  <div style={style.container}>
      { children }
  </div>
);

const StoryButtonContainer: React.FC<StoryButtonContainerProps> = ({ children }) => (
  <div style={style.buttonContainer}>
    { children }
  </div>
)

export { StoryContainer, StoryButtonContainer };
