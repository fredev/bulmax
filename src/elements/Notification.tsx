import React from "react";
import {
  notification,
  isPrimary,
  isLink,
  isInfo,
  isSuccess,
  isWarning,
  isDanger
} from "../classes";
import classNames from "classnames";

interface NotifcationProps {
  children: string
  primary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
};

const Notification: React.FC<NotifcationProps> = (
  {
    children,
    primary,
    link,
    info,
    success,
    warning,
    danger
  }
) => {
  const classes = classNames({
    [notification]: true,
    [isPrimary]: primary,
    [isLink]: link,
    [isInfo]: info,
    [isSuccess]: success,
    [isWarning]: warning,
    [isDanger]: danger
  });

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Notification.defaultProps = {
  primary: false,
  link: false,
  info: false,
  success: false,
  warning: false,
  danger: false
}

export default Notification;