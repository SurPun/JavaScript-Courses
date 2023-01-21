# Managing Promise Lifecycle Actions

## Conclusion

Well done! In this lesson you:

Learned the three promise lifecycle actions: pending, fulfilled, and rejected

Learned how to use createAsyncThunk, which abstracts the process of handling promise lifecycle states according to best practices/common design paradigms

Imported createAsyncThunk from the Redux Toolkit:

import { createAsyncThunk } from '@reduxjs/toolkit';

Refactored existing asynchronous action creators using createAsyncThunk.

Made your reducers respond to pending/fulfilled/rejected promise lifecycle actions by supplying the extraReducers property to createSlice.
