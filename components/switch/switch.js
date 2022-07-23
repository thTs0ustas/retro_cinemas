import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './switchStyles';

const Switch = () => (
  <FormControlLabel
    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
  />
);

export default Switch;
