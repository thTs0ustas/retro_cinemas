import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './switchStyles';

function Switch() {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={false} />}
      label=''
    />
  );
}

export default Switch;
