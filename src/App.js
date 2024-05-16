import React, { useState,useEffect } from "react";
import { Grid, ThemeProvider } from "@material-ui/core";
 import Theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCards from "./components/Job/JobCards";
import NewjobModal from "./components/Job/NewjobModal";
import jobData from './dummyData';
//import { AppsOutlined } from "@material-ui/icons";
//import { firebase} from  "./firebase/Config";
//import { id } from "date-fns/locale";

 

 
export default () => {
  //const [ jobs, setJobs]= useState([]);
  const [newJobModal, setNewJobModal] = useState(false);
 
   useEffect(() =>{
            
 },[]);
  return ( 
    
  <ThemeProvider theme={Theme}>
    <Header openNewJobModal={() => setNewJobModal(true)} />
     <NewjobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} />
    
    <Grid container justifyContent="center">
      <Grid item xs={10}>

          <SearchBar />

         {jobData.map((job)=> (
          <JobCards Key={job.id} {...job} />

          ))} 
                     
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};
