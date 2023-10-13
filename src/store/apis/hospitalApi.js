import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hospitalApi = createApi({
    reducerPath: 'hospitals',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5047/api/'
    }),
    endpoints(builder){
        return{
            fetchHospitalAlarms: builder.query({
                query: () => {
                    return {
                        url: 'Alarm',
                        method: 'GET',
                    };
                },
            }),
            fetchHospitalPatients: builder.query({
                query: () => {
                    return {
                        url: 'Patient',
                        method: 'GET',
                    }
                }
            }),
            fetchHospitalEmployees: builder.query({
                query: () => {
                    return {
                        url: 'Employee',
                        method: 'GET',
                    }
                }
            }),
        };
    },
});

export const {useFetchHospitalAlarmsQuery, useFetchHospitalPatientsQuery, useFetchHospitalEmployeesQuery} = hospitalApi;
export {hospitalApi};