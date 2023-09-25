import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Comics from "./Comics";
import Characters from "./Characters";
import backendUrl from "../config";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

const HeadlineNav = () => {
  const [value, setValue] = React.useState(0);
  const [comicData, setComicData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${backendUrl}/marvel/comic/db`);
      setComicData(data.data);
    };

    fetchData();
  }, []);

  const [charactersData, setCharactersData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${backendUrl}/marvel/character/db`);
      setCharactersData(data.data);
    };
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 5 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="COMICS" />
        <Tab label="CHARACTERS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Comics comicData={comicData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Characters charactersData={charactersData} />
      </TabPanel>
    </Box>
  );
};

export default HeadlineNav;
