import React from "react";
import {Box, Button, Grid, Toolbar} from "@mui/material";
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { schema, uiSchema, formData } from "./formData";
import './index.css';

const Main =() =>{
  const onError = (errors) => console.log(errors);

  const onSubmit = ({ formData }, e) => {
    console.log("Data submitted: ", formData);
  };

  const errorListTemplate = (props) =>{
    const { errors } = props;
    console.log(errors);
    return (
      <div>
        <h2>Custom error list</h2>
        <ul>
          {errors.map((error) => (
            <li key={error.stack}>{error.stack}</li>
          ))}
        </ul>
      </div>
    );
  }

  const ObjectFieldTemplate =({ properties }) =>{
    return(
      <Grid container>
        {properties.map((props, index)=>(
          <Grid key={index} item md={6} xs={12}>
            {props.content}
          </Grid>
        ))}
      </Grid>
    )
  }
  const customValidator =(formData, errors)=> {
    if (!formData.firstname) {
      errors.firstName.addError("Enter firstName");
    }
    return errors;
  }

  return(
        <Box component="main" sx={{ padding:'5rem 1rem' }}>
          <Toolbar />
          <Form className="applicationForm"
            validator={validator}
            schema={schema}
            uiSchema={uiSchema}
            templates={{ObjectFieldTemplate}}
            showErrorList={true}
            ErrorList={errorListTemplate}
            onError={onError}
            onSubmit={onSubmit}
            formData={formData}
            liveValidate
         >
          <Grid container>
              <Grid item xs={12} md={6}>
                <Button type="button" variant="outlined" sx={{width:'95%'}}>Cancel</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button type="submit" variant="contained" sx={{width:'95%'}}>Submit</Button>
              </Grid>
          </Grid>
      </Form>
        </Box>
    )
}

export default Main;