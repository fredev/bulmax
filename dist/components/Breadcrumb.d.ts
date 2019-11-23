import React, { ReactElement } from 'react';
interface BreadcrumbProps {
    children: ReactElement;
    breadcrumb: boolean;
    centered?: boolean;
    right?: boolean;
    arrow?: boolean;
    bullet?: boolean;
    dot?: boolean;
    succeed?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
