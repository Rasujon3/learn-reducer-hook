import React from 'react';
import { useReducer } from 'react/cjs/react.development';
import { patientReducer, patientState } from '../reducer/patientReducer';

const PatientManagement = () => {
    const [state,dispatch] = useReducer(patientReducer,patientState);
    console.log(state);
    return (
        <div>
            <h1>Patient ManageMent: {state.patients.length}</h1>
            <form action="">
                <input type="text" ></input>
            </form>
        </div>
    );
};

export default PatientManagement;