import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initializeConnect } from "react-redux/es/components/connect";


const getAllQuestionUrl = 'http://localhost:8080/api/v1/all-questions';
const getQuestionByIdUrl = 'http://localhost:8080/api/v1/question';

const initialState = {
    questions: null,
    question: null,
}

export const getAllQuestion = createAsyncThunk('/all-question', async(thunkApi) => {
    const response = await axios({
        method: 'get',
        url: getAllQuestionUrl,
});
    return response.data;
});

export const getQuestionById = createAsyncThunk('question', async({id},thunkApi) => {
    const response = await axios({
        method: 'post',
        url: getQuestionByIdUrl,
        data: {
            id: id,
        }
    });
    return response.data;
});

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllQuestion.fulfilled, (state, action) => {
            state.questions = action.payload;
        });
        builder.addCase(getQuestionById.fulfilled, (state, action) => {
            state.question = action.payload;
        });
    }
});

export default questionSlice.reducer;