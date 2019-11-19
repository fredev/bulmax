import React, { ReactElement } from 'react';
interface BreadcrumbProps {
    children: ReactElement;
    breadcrumb: boolean;
    centered?: boolean;
    isRight?: boolean;
    hasArrowSeparator?: boolean;
    hasBulletSeparator?: boolean;
    hasDotSeparator?: boolean;
    hasSucceedsSeparator?: boolean;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
