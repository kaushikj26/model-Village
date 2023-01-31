import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const initialValues = {
    title: '', state: '', district: '', village: '', allocationList: ['allocation1','allo2','allo3']
} 
export const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{allocationList: ['']}}
      onSubmit={values =>
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        // }, 500)
        console.log(values)
      }
      render={({ values }) => (
        <Form>
          <FieldArray name="allocationList"
            render={arrayHelpers => (
              <div>
                {values.allocationList && values.allocationList.length > 0 ? (
                  values.allocationList.map((allocation, index) => (
                    <div key={index}>
                      <Field name={`allocation.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} 
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);