import React from "react";
// import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {FormControl} from "@mui/material";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from "formik";
import { validationSchema } from "../schemas/validation";

const initialValues = {
    // state: '', district: '', subDistrict: '', blockName: '', 
    villageName: '',
    villageCode: ''
}

const SearchVillage = () => {
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, action ) => {
            console.log('final values',values)
            // action.resetForm()
        }  
    })
    // console.log(errors)


    return(
        <div>
            <form onSubmit={handleSubmit}>

            <h2>Search Village</h2>

            <Grid container rowSpacing={2}>

                <Grid container rowSpacing={2}>
                    <Grid item md={5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='hi'>State</InputLabel>
                    <Select labelId="hi" label='State' style={{width: "20em"}} >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select></FormControl> </Grid>

                    <Grid item md={5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='hi'>District</InputLabel>
                    <Select labelId="hi" label='District' style={{width: "20em"}} >
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select></FormControl> </Grid>

                    <Grid item md={5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='hi'>SubDistrict</InputLabel>
                    <Select labelId="hi" label='SubDistrict' style={{width: "20em"}} >
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select></FormControl> </Grid>

                    <Grid item md={5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='hi'>Block</InputLabel>
                    <Select labelId="hi" label='Block' style={{width: "20em"}} >
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select></FormControl> </Grid>
                    
                    <Grid item md={5}><TextField style={{width: "20em"}} error={touched.villageName && errors.villageName} id="outlined-basic" label="Village Name" variant="outlined" name='villageName' value={values.villageName} onChange={handleChange} onBlur={handleBlur} helperText={touched.villageName && errors.villageName}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "20em"}} error={touched.villageCode && errors.villageCode} id="outlined-basic" label="Village Code" variant="outlined" name='villageCode' value={values.villageCode} onChange={handleChange} onBlur={handleBlur} helperText={touched.villageCode && errors.villageCode}/> </Grid>

                    
                </Grid>               
            </Grid>
            </form>
        </div>
    )
}

export default SearchVillage