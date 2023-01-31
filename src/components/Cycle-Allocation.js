import React, {useState} from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FieldArray, Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema=Yup.object({
    title: Yup.string().trim().required('Required'),
    state: Yup.string().trim().required('Required'),
    district: Yup.string().trim().required('Required'),
    village: Yup.string().trim().required('Required'),
    // allocation: Yup.string().trim().required('Required')
})

const CycleAllocation = () => {
    const [data, setData] = useState([{allocation: '', required: false}])

    return(
        <div>
            <h2>Other Cycle Allocation</h2>

            <Grid container rowSpacing={2}>
                <Grid container>
                <Grid item md={12}>

                <Formik
                    initialValues={{title: '', state: '', district: '', village: '', details:data}}
                    // validationSchema= {validationSchema}
                    onSubmit={values => console.log(values)}>


                    {({values, errors, touched, handleChange, handleBlur, handleSubmit,setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                        <FieldArray name="details"
                            render={arrayHelpers => (
                            <div>
                                <Grid container rowSpacing={2}>
                                <Grid item md={3}><TextField style={{width: "15em"}} error={touched.title && errors.title} id="outlined-basic" label="Title" variant="outlined" name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} helperText={touched.title && errors.title}/> </Grid>
                                
                                <Grid item md={3}><TextField style={{width: "15em"}} error={touched.state && errors.state} id="outlined-basic" label="State" variant="outlined" name='state' value={values.state} onChange={handleChange} onBlur={handleBlur} helperText={touched.state && errors.state}/> </Grid>

                                <Grid item md={3}><TextField style={{width: "15em"}} error={touched.district && errors.district}  id="outlined-basic" label="District Name" variant="outlined" name='district' value={values.district} onChange={handleChange} onBlur={handleBlur} helperText={touched.district && errors.district}/> </Grid>

                                <Grid item md={3}><TextField style={{width: "15em"}} error={touched.village && errors.village} id="outlined-basic" label="Village" variant="outlined" name='village' value={values.village} onChange={handleChange} onBlur={handleBlur} helperText={touched.village && errors.village}/> </Grid>
                                </Grid>
                                
                                {values.details.map((ele, index) => (
                                    <div key={index}>
                                    <Grid container rowSpacing={2}> 
                                    <Grid item md={2}><TextField style={{width: "15em"}} id="outlined-basic" label="Allocation" variant="outlined" name={`details.${index}.allocation`} value={ele.allocation ||''} onChange={(e)=>{
                                        setFieldValue(`details.${index}.allocation`,e.target.value)
                                    }} /></Grid>

                                    <Grid item md={1}><Checkbox style={{float: "bottom", width: "5%"}} type='checkbox' name={`details.${index}.required`} value={true} onChange={(e)=>{
                                        setFieldValue(`details.${index}.required`,e.target.value)
                                    }}/></Grid>
                                    
                                    {values.details.length > 1 && <Grid item md={1}><Button color="primary" variant="contained" type="button" onClick={() => arrayHelpers.remove(index)}>Remove</Button></Grid>}

                                    {values.details.length-1 === index && <Grid item md={1}><Button color="primary" variant="contained" type="button" onClick={() => {
                                        arrayHelpers.insert(index, '')
                                        let input=[]
                                        input.push({allocation:'',required:false})
                                        setData(input)}
                                    } > + Add </Button></Grid>}
                                    </Grid> 
                                    </div>
                                ))}
                                <Button color="primary" variant="contained" type="submit" >Submit</Button>
                            </div>
                            )}
                        />
                        </Form>
                    )}
                    </Formik>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CycleAllocation



{/* <FieldArray name='allocation' render={arryHelper => (
                        <div>
                            {values.allocationList.map((ele, index) => (
                                <div key={index}>
                                    <Grid container rowSpacing={2}>
                                        <TextField style={{width: "15em"}} error={touched.allocation.index && errors.allocation.index}  id="outlined-basic" label="Allocation" variant="outlined" name={`allocation.${index}.allocation`} value={ele.allocation.index} onChange={handleChange} onBlur={handleBlur} helperText={touched.allocation.index && errors.allocation.index} /> 

                                        <Checkbox style={{float: "bottom", width: "5%"}} name={`allocation.${index}.required`} requir />

                                        {values.allocationList.length > 1 && <Grid item md={1}><Button color="primary" variant="contained" type="remove" onClick={() => arryHelper.remove(index)}>Remove</Button></Grid>}

                                        {values.allocationList.length - 1 === index && <Grid item md={1}><Button color="primary" variant="contained" type="add" onClick={arryHelper.insert(index, {allocation:''})} > + Add </Button></Grid>}
                                    </Grid>
                                </div>
                            ))}
                        </div>
                    )}
                    /> */}





 {/* {allocationList.map((ele,index) => (
                //     <div key={index}>
                //         <Grid container rowSpacing={2}>
                //             <Grid item md={2}><TextField style={{width: "15em"}} error={touched.allocation && errors.allocation}  id="outlined-basic" label="Allocation" variant="outlined" name='allocation' value={ele.allocation} onChange={(e)=>handleChangeAllo(e, index)} onBlur={handleBlur} helperText={touched.allocation && errors.allocation} /> </Grid>
                            
                //             <Grid item md={1}><Checkbox style={{float: "bottom", width: "5%"}}/></Grid>

                //             {allocationList.length > 1 && <Grid item md={1}><Button color="primary" variant="contained" type="remove" onClick={() => handleRemove(index)}>Remove</Button></Grid>}

                //             {allocationList.length - 1 === index && <Grid item md={1}><Button color="primary" variant="contained" type="add" onClick={handleAdd} >+ Add</Button></Grid>}
                //         </Grid>
                //     </div>
                // ))} */}



                // const handleAdd = () => {
    //     setAllocationList([...allocationList, {allocation: ''}])
    // }

    // const handleRemove = (index) => {
    //     const list = [...allocationList]
    //     list.splice(index, 1)
    //     setAllocationList(list)
    // }

    // const handleChangeAllo = (e, index) => {
    //     const {name, value} = e.target
    //     const list = [...allocationList]
    //     list[index][name] = value
    //     setAllocationList(list)
    // }

    // const [allocationList, setAllocationList] = useState([{allocation: ''}])