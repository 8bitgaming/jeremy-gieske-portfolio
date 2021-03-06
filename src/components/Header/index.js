import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Projects from "../Project";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

//Overall Navigation is driven by this Material-ui tab component
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Changed to scrollable for mobile friendly/small form factor screens
  //Based on value - presents the appropriate sub-component
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderLeft: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
          textColor= "primary.contrastText"
        >
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Portfolio" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
          <Tab label="Resume" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <About></About>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects></Projects>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact></Contact>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Resume></Resume>
      </TabPanel>
    </Box>
  );
}
