import React, { ReactElement } from 'react';
interface BreadcrumbProps {
    children: ReactElement;
    breadcrumb: boolean;
    centered?: boolean;
    right?: boolean;
    arrowseparator?: boolean;
    bulletseparator?: boolean;
    dotseparator?: boolean;
    succeedseparator?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
