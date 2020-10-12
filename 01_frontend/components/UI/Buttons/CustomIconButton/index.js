
import { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';

const CustomIconButton = ({ icon, ...rest }) => (
  <IconButton edge='start' color='primary' aria-label='menu' {...rest}>
    {icon}
  </IconButton>
);

export default memo(CustomIconButton);
