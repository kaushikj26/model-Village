import React from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import {FormControl} from "@mui/material";
// import Select from '@mui/material/Select';
// import { MenuItem } from "@mui/material";
// import InputLabel from '@mui/material/InputLabel';
// import Checkbox from '@mui/material/Checkbox';
import { useFormik } from "formik";
import { validationSchema } from "../schemas/validation";

const initialValues = {
    state: '', district: '', subDistrict: '', blockName: '', villageName: '',
    villageCode: '', modelVill: '', modelVillCyc: ''
}

const FarmTrainingForm = () => {
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

            <h2>Farmer Training Village</h2>

            <Grid container rowSpacing={2}>

                <Grid container rowSpacing={2}>
                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.state && errors.state} id="outlined-basic" label="State" variant="outlined" name='state' value={values.state} onChange={handleChange} onBlur={handleBlur} helperText={touched.state && errors.state}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.district && errors.district}  id="outlined-basic" label="District Name" variant="outlined" name='district' value={values.district} onChange={handleChange} onBlur={handleBlur} helperText={touched.district && errors.district}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.subDistrict && errors.subDistrict} id="outlined-basic" label="Sub District Name" variant="outlined" name='subDistrict' value={values.subDistrict} onChange={handleChange} onBlur={handleBlur} helperText={touched.subDistrict && errors.subDistrict}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.blockName && errors.blockName} id="outlined-basic" label="Block Name" variant="outlined" name='blockName' value={values.blockName} onChange={handleChange} onBlur={handleBlur} helperText={touched.blockName && errors.blockName}/> </Grid>
                    
                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.villageName && errors.villageName} id="outlined-basic" label="Village Name" variant="outlined" name='villageName' value={values.villageName} onChange={handleChange} onBlur={handleBlur} helperText={touched.villageName && errors.villageName}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.villageCode && errors.villageCode} id="outlined-basic" label="Village Code" variant="outlined" name='villageCode' value={values.villageCode} onChange={handleChange} onBlur={handleBlur} helperText={touched.villageCode && errors.villageCode}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.modelVill && errors.modelVill} id="outlined-basic" label="Model Village" variant="outlined" name='modelVill' value={values.modelVill} onChange={handleChange} onBlur={handleBlur} helperText={touched.modelVill && errors.modelVill}/> </Grid>

                    <Grid item md={5}><TextField style={{width: "30em"}} error={touched.modelVillCyc && errors.modelVillCyc} id="outlined-basic" label="Model Village Cycle" variant="outlined" name='modelVillCyc' value={values.modelVillCyc} onChange={handleChange} onBlur={handleBlur} helperText={touched.modelVillCyc && errors.modelVillCyc}/></Grid>
                    
                
                    <Grid item md={5}><Button color="primary" variant="contained" type="submit">Submit</Button></Grid>
                    
                </Grid>               
            </Grid>
            </form>
        </div>
    )
}

export default FarmTrainingForm