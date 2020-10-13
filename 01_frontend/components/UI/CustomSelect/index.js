
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  select: {
    border: 0,
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.custom.palette.lightGrey,
    width: '100%',
    padding: theme.spacing(0.5, 1.5)
  },
  label: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 'bold'
  }
}));

const CustomSelect = ({ className, label, lists, value = false, onChange = () => { }, ...rest }) => {
  const classes = useStyles();

  return (
    <FormControl className={clsx(className, classes.root)}>
      {
        label &&
        <Typography className={classes.label}>
          {label}
        </Typography>
      }
      <Select
        className={classes.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChange}
        {...rest}
      >
        {
          lists.map((item, i) => 
            <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
          )
        }
      </Select>
    </FormControl>
  );
};

export default memo(CustomSelect);
