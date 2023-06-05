
import { configureStore } from '@reduxjs/toolkit';
import optionReducer from '../feature/optionT/OptionSlice.js'
import questionReducer from '../feature/question/QuestionSlice.js'

export const store = configureStore({
    reducer:
    {
         optionReducer,
         questionReducer,
    },
})
