
import React, { memo } from 'react';
import Link from 'next/link';
import { Link as MaterialUILink } from '@material-ui/core';

const MaterialUILinkComponent = React.forwardRef(({ className, href, as, children }, ref) => (
  <Link href={href} as={as}>
    <a className={className}>
      {children}
    </a> 
  </Link>
));

const CustomLink = props => (
  <MaterialUILink component={MaterialUILinkComponent} {...props} />
);

export default memo(CustomLink);