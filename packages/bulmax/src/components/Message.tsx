import React, { ReactElement } from 'react';
import { message, isPrimary, isLink, isInfo, isDark, isSuccess, isWarning, isDanger, isSmall, isMedium, isLarge } from '../classes';
import classNames from 'classnames';

interface MessageProps {
  children: ReactElement | ReactElement[];
  primary?: boolean;
  link?: boolean;
  info?: boolean;
  dark?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Message: React.FC<MessageProps> = ({ children, dark, primary, link, info, success, warning, danger, small, medium, large }) => {

  const classes = classNames({
    [message]: true,
    [isPrimary]: primary,
    [isLink]: link,
    [isInfo]: info,
    [isDark]: dark,
    [isSuccess]: success,
    [isWarning]: warning,
    [isDanger]: danger,
    [isSmall]: small,
    [isMedium]: medium,
    [isLarge]: large,
  });

  return (
    <article className={classes}>
      {children}
    </article>
  )

}

Message.defaultProps = {
  primary: false,
  link: false,
  info: false,
  dark: false,
  success: false,
  warning: false,
  danger: false,
  small: false,
  medium: false,
  large: false,
}


export default Message;