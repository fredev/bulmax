import React, { ReactElement } from 'react';
interface StoryContainerProps {
    children: ReactElement | ReactElement[];
}
interface StoryButtonContainerProps {
    children: ReactElement | ReactElement[];
}
declare const StoryContainer: React.FC<StoryContainerProps>;
declare const StoryButtonContainer: React.FC<StoryButtonContainerProps>;
export { StoryContainer, StoryButtonContainer };
