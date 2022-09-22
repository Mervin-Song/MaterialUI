import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './Login';
import PetOwnerSignUp from './PetOwnerSignUp';
import ServiceProviderSignUp from './ServiceProviderSignUp';
import '../../index.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SignInOutTab() {
  
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin:'auto', padding:'10px 10px' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#eeeee4' }}>
        <Tabs value={value} onChange={handleChange} aria-label="sign up" centered>
          <Tab label="Sign Up As A Pet Owner" {...a11yProps(0)} />
          <Tab label="Sign Up As A Service Provider" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <PetOwnerSignUp />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ServiceProviderSignUp />  
      </TabPanel>
    </Box>
  );
}