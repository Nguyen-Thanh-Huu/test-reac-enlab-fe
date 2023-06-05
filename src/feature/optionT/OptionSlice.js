import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const allOptionUrl = 'http://localhost:8080/api/v1/all-options';
const getOptionsByIdQuestionUrl = 'http://localhost:8080/api/v1/option-by-idquestion/';

const initialState = {
    option: null,
    optionByIdQuestion: null,
}

export const getAllOption = createAsyncThunk('/api/all-option', async(thunkApi) => {
    const response = await axios({
        method: 'get',
        url: allOptionUrl,
    });
    return response.data;
    
});


export const getAllOptionByIdQuestion = createAsyncThunk('/api/alcohol', async ({ id }, thunkApi) => {
    const response = await axios({
      method: 'get',
      url: getOptionsByIdQuestionUrl + id,
    });
    return response.data;
    
  });
  
export const optionSlice = createSlice({
    name: 'optionSlice',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getAllOption.fulfilled, (state, action) => {
            state.option = action.payload;
        });
        builder.addCase(getAllOptionByIdQuestion.fulfilled, (state, action) => {
            state.optionByIdQuestion = action.payload;
        });
    }
});

export default optionSlice.reducer