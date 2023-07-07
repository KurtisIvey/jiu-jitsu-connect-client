import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../axios/calendarClient";

export const fetchCalendarData = createAsyncThunk(
  "calendarData/fetchCalendarData",
  async () => {
    const response = await client.get("http://localhost:3001/api/calendar");
    return response.data;
  }
);

const calendarDataSlice = createSlice({
  name: "calendarData",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalendarData.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchCalendarData.rejected, (state, action) => {
        // Handle error state if needed
      });
  },
});

export default calendarDataSlice.reducer;
