import * as Yup from "yup";

export const validationSchema = Yup.object({
    // lower: Yup.string().required('Please enter lower value'),
    // upper: Yup.string().required('Please enter upper value'),
    state: Yup.string().required('*Required'),
    district: Yup.string().required('*Required'),
    subDistrict: Yup.string().required('*Required'),
    blockName: Yup.string().required('*Required'),
    villageName: Yup.string().required('*Required'),
    villageCode: Yup.string().required('*Required'),
    modelVill: Yup.string().required('*Required'),
    modelVillCyc: Yup.string().required('*Required'),
})

