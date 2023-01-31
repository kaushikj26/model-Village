import React from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {FormControl} from "@mui/material";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import FormHelperText from '@mui/material/FormHelperText';

const ModelVillageForm = (props) => {
    const validationSchema = Yup.object({
        lower: Yup.string().required('Required'),
        upper: Yup.string().required('Required'),
        nv1: Yup.string().required('Required'),
        nv2: Yup.string().required('Required'), 
        nv3: Yup.string().required('Required'), 
        nv4: Yup.string().required('Required'), 
        nv5: Yup.string().required('Required'),
        pv1: Yup.string().required('Required'), 
        pv2: Yup.string().required('Required'), 
        pv3: Yup.string().required('Required'), 
        pv4: Yup.string().required('Required'), 
        pv5: Yup.string().required('Required'),
        kv1: Yup.string().required('Required'), 
        kv2: Yup.string().required('Required'), 
        kv3: Yup.string().required('Required'), 
        kv4: Yup.string().required('Required'), 
        kv5: Yup.string().required('Required'),
        cv1: Yup.string().required('Required'), 
        cv2: Yup.string().required('Required'), 
        cv3: Yup.string().required('Required'), 
        cv4: Yup.string().required('Required'), 
        cv5: Yup.string().required('Required'), 
        nv1Unit: Yup.string().required('Required'), 
        pv1Unit: Yup.string().required('Required'),
        kv1Unit: Yup.string().required('Required'),
        cv1Unit: Yup.string().required('Required'),
        category: Yup.string().required('Required'), 
        crop: Yup.string().required('Required'), 
        season: Yup.string().required('Required'), 
        duration: Yup.string().required('Required'), 
        irrigated: Yup.string().required('Required'), 
        soilType: Yup.string().required('Required'),
        time: Yup.string().required('Required'), 
        refUnit: Yup.string().required('Required'),
        modeFerti: Yup.string().required('Required'), 
    })

    return(
        <div>
            <h2>Crop details</h2>
            <Formik
                initialValues={{
                    lower: '', upper: '', nv1Unit: '', pv1Unit: '', kv1Unit: '', cv1Unit: '',
                    category: '', crop: '', season: '', duration: '', irrigated: '', soilType: '', time: '', refUnit: '',
                    nv1: '', nv2: '', nv3: '', nv4: '', nv5: '',
                    pv1: '', pv2: '', pv3: '', pv4: '', pv5: '',
                    kv1: '', kv2: '', kv3: '', kv4: '', kv5: '',
                    cv1: '', cv2: '', cv3: '', cv4: '', cv5: '',
                    modeFerti: '', remarks: ''
                }}
                validationSchema = {validationSchema}
                onSubmit={values => console.log('final',values)}
            >
            
            {({values, errors, touched, handleSubmit,handleChange, handleBlur}) => (
                <Form onSubmit={handleSubmit}>
                <Grid container rowSpacing={2}>
                <Grid item md={2.5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='hi'>Select crop category</InputLabel>
                    <Select label="Select crop category" style={{width: "15em"}} error={touched.category && errors.category} name='category' value={values.category} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {touched.category && errors.category ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null}  
                    </FormControl>
                </Grid>
                
                <Grid item md={8}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='h'>Select Crop</InputLabel>
                    <Select label="Select Crop" style={{width: "15em"}} error={touched.crop && errors.crop} name='crop' value={values.crop} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.crop && errors.crop ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null}  
                </FormControl></Grid>
                    
                {/* <Grid item md={12}><label>All Variety</label>
                <Checkbox /></Grid><br/>

                <Grid item md={12}><label>All District</label>
                <Checkbox /></Grid><br/> */}

                <Grid item md={2.5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Select Crop Season</InputLabel>
                    <Select label="Select Crop Season" style={{width: "15em"}} error={touched.season && errors.season} name='season' value={values.season} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.season && errors.season ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null}
                </FormControl></Grid>

                <Grid item md={8}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Duration</InputLabel>
                    <Select label="Duration" style={{width: "15em"}} error={touched.duration && errors.duration} name='duration' value={values.duration} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.duration && errors.duration ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null}  
                </FormControl></Grid><br/>
                    
                <Grid item md={2.5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Irrigated/Rainfed</InputLabel>
                    <Select label="Irrigated/Rainfed" style={{width: "15em"}} error={touched.irrigated && errors.irrigated} name='irrigated' value={values.irrigated} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.irrigated && errors.irrigated ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                </FormControl></Grid>
                    
                <Grid item md={8}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Select Soil Type</InputLabel>
                    <Select label="Select Soil Type" style={{width: "15em"}} error={touched.soilType && errors.soilType} name='soilType' value={values.soilType} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.soilType && errors.soilType ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                </FormControl></Grid>

                <Grid item md={2.5}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Select Time of Application</InputLabel>
                    <Select label="Select Time of Application" style={{width: "15em"}} error={touched.time && errors.time} name='time' value={values.time} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.time && errors.time ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                </FormControl></Grid><br/>

                <Grid item md={12}><label>Reference Yield</label></Grid>
                <Grid item md={2.5}><TextField error={touched.lower && errors.lower} id="outlined-basic" label="Lower" variant="outlined" name='lower' value={values.lower} onChange={handleChange} onBlur={handleBlur} helperText={touched.lower && errors.lower}/></Grid>

                <Grid item md={2}><TextField error={touched.upper && errors.upper} id="outlined-basic" label="Upper" variant="outlined" name='upper' value={values.upper} onChange={handleChange} onBlur={handleBlur} helperText={touched.upper && errors.upper}/></Grid>
                <Grid item md={4}><FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Unit</InputLabel>
                    <Select label="RefUnit" style={{width: "15em"}} error={touched.refUnit && errors.refUnit} name='refUnit' value={values.refUnit} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.refUnit && errors.refUnit ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null}  
                </FormControl></Grid><br/><br/>
            </Grid>

            <h2>General Recommended Dose</h2>

            <Grid container rowSpacing={2}>
                <Grid item md={2}><label>Nitrogen</label></Grid>
                <Grid item md={2}><label>P2O5</label></Grid>
                <Grid item md={2}><label>K2O</label></Grid>
                <Grid item md={2}><label>FYM/Compost</label></Grid>
                <br/>

                <Grid container>
                <Grid item md={1}>
                    <TextField id="outlined-basic" label="Medium Value" style={{width: "8em"}} error={touched.nv1 && errors.nv1} variant="outlined" name='nv1' value={values.nv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv1 && errors.nv1}/>
                    </Grid>
                    <Grid item md={1}>
                    <FormControl sx={{  minWidth: 120,marginLeft:1 }}>
                    <InputLabel>Unit</InputLabel>
                    <Select label="unit" style={{width: "5.5em"}} error={touched.nv1Unit && errors.nv1Unit} name='nv1Unit' value={values.nv1Unit} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select> 
                    {touched.nv1Unit && errors.nv1Unit ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                    </FormControl>
                </Grid>

                <Grid item md={1}>
                    <TextField id="outlined-basic" label="Medium Value" style={{width: "8em"}} error={touched.pv1 && errors.pv1} variant="outlined" name='pv1' value={values.pv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv1 && errors.pv1}/>
                    </Grid>
                    <Grid item md={1}>
                    <FormControl sx={{  minWidth: 120,marginLeft:1 }}>
                    <InputLabel>Unit</InputLabel>
                    <Select label="unit" style={{width: "5.5em"}} error={touched.pv1Unit && errors.pv1Unit} name='pv1Unit' value={values.pv1Unit} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                    {touched.pv1Unit && errors.pv1Unit ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                    </FormControl>
                </Grid>
                
                <Grid item md={1}>
                    <TextField id="outlined-basic" label="Medium Value" style={{width: "8em"}} error={touched.kv1 && errors.kv1} variant="outlined" name='kv1' value={values.kv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv1 && errors.kv1}/>
                    </Grid>
                    <Grid item md={1}>
                    <FormControl sx={{  minWidth: 120,marginLeft:1 }}>
                    <InputLabel>Unit</InputLabel>
                    <Select label="unit" style={{width: "5.5em"}} error={touched.kv1Unit && errors.kv1Unit} name='kv1Unit' value={values.kv1Unit} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.kv1Unit && errors.kv1Unit ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                    </FormControl>
                </Grid>

                <Grid item md={1}>
                    <TextField id="outlined-basic" label="Medium Value" style={{width: "8em"}} error={touched.cv1 && errors.cv1} variant="outlined" name='cv1' value={values.cv1} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv1 && errors.cv1}/>
                    </Grid>
                    <Grid item md={1}>
                    <FormControl sx={{  minWidth: 120,marginLeft:1 }}>
                    <InputLabel>Unit</InputLabel>
                    <Select label="unit" style={{width: "5.5em"}} error={touched.cv1Unit && errors.cv1Unit} name='cv1Unit' value={values.cv1Unit} onChange={handleChange} onBlur={handleBlur}>
                        <MenuItem value=""><em>None</em></MenuItem>
                    </Select> 
                    {touched.cv1Unit && errors.cv1Unit ? <FormHelperText style={{color: "red"}}>Required</FormHelperText> : null} 
                    </FormControl>
                </Grid></Grid>
                <hr/>

                <Grid container rowSpacing={2}>
                    <Grid item md={2}><TextField id="outlined-basic" label="Very Low Value" variant="outlined" error={touched.nv2 && errors.nv2} name='nv2' value={values.nv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv2 && errors.nv2}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Very Low Value" variant="outlined" error={touched.pv2 && errors.pv2} name='pv2' value={values.pv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv2 && errors.pv2}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Very Low Value" variant="outlined" error={touched.kv2 && errors.kv2} name='kv2' value={values.kv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv2 && errors.kv2}/></Grid>
                    <Grid item md={6}><TextField id="outlined-basic" label="Very Low Value" variant="outlined" error={touched.cv2 && errors.cv2} name='cv2' value={values.cv2} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv2 && errors.cv2}/></Grid>
                    
                    <Grid item md={2}><TextField id="outlined-basic" label="Low Value" variant="outlined" error={touched.nv3 && errors.nv3} name='nv3' value={values.nv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv3 && errors.nv3}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Low Value" variant="outlined" error={touched.pv3 && errors.pv3} name='pv3' value={values.pv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv3 && errors.pv3}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Low Value" variant="outlined" error={touched.kv3 && errors.kv3} name='kv3' value={values.kv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv3 && errors.kv3}/></Grid>
                    <Grid item md={6}><TextField id="outlined-basic" label="Low Value" variant="outlined" error={touched.cv3 && errors.cv3} name='cv3' value={values.cv3} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv3 && errors.cv3}/></Grid>
                    
                    <Grid item md={2}><TextField id="outlined-basic" label="High Value" variant="outlined" error={touched.nv4 && errors.nv4} name='nv4' value={values.nv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv4 && errors.nv4}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="High Value" variant="outlined" error={touched.pv4 && errors.pv4} name='pv4' value={values.pv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv4 && errors.pv4}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="High Value" variant="outlined" error={touched.kv4 && errors.kv4} name='kv4' value={values.kv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv4 && errors.kv4}/></Grid>
                    <Grid item md={6}><TextField id="outlined-basic" label="High Value" variant="outlined" error={touched.cv4 && errors.cv4} name='cv4' value={values.cv4} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv4 && errors.cv4}/></Grid>
                    
                    <Grid item md={2}><TextField id="outlined-basic" label="Very High Value" variant="outlined" error={touched.nv5 && errors.nv5} name='nv5' value={values.nv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.nv5 && errors.nv5}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Very High Value" variant="outlined" error={touched.pv5 && errors.pv5} name='pv5' value={values.pv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.pv5 && errors.pv5}/></Grid>
                    <Grid item md={2}><TextField id="outlined-basic" label="Very High Value" variant="outlined" error={touched.kv5 && errors.kv5} name='kv5' value={values.kv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.kv5 && errors.kv5}/></Grid>
                    <Grid item md={6}><TextField id="outlined-basic" label="Very High Value" variant="outlined" error={touched.cv5 && errors.cv5} name='cv5' value={values.cv5} onChange={handleChange} onBlur={handleBlur} helperText={touched.cv5 && errors.cv5}/></Grid>
                    
                    <Grid item md={7.75}><TextField fullWidth label="Mode and Schedule of fertilizer application" rows="4" cols="50" error={touched.modeFerti && errors.modeFerti} name='modeFerti' value={values.modeFerti} onChange={handleChange} onBlur={handleBlur} helperText={touched.modeFerti && errors.modeFerti} /></Grid><br/>

                    <Grid item md={7.75}><TextField fullWidth label="Remarks/Tips" rows="4" cols="50" error={touched.remarks && errors.remarks} name='remarks' value={values.remarks} onChange={handleChange} onBlur={handleBlur} helperText={touched.remarks && errors.remarks} /></Grid><br/>
                
                    <Grid container justifyContent="center"><Button variant="contained" type='submit'>Submit</Button></Grid>
                </Grid>               
                </Grid>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default ModelVillageForm