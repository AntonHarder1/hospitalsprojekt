import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { hospitalApi } from './apis/hospitalApi';

export const store = configureStore({
    reducer: {
        [hospitalApi.reducerPath]: hospitalApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
        return getDefaultMiddleware()
        .concat(hospitalApi.middleware)
    }    
});

setupListeners(store.dispatch);

export {useFetchHospitalAlarmsQuery, useFetchHospitalEmployeesQuery, useFetchHospitalPatientsQuery} from './apis/hospitalApi';