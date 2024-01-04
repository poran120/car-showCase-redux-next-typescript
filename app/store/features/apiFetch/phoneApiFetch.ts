import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action

const xRapidApiKey = "0bfc7d3c57mshb783830598ac7fep1f7ebfjsnb8afed32d414";
const xRapidApiHost = "mobile-phone-specs-database.p.rapidapi.com";

export const fetchPhoneApi = createAsyncThunk(
  "fetchPhoneApi",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-specifications-by-brandname-modelname/Samsung/Galaxy%20S22%20Ultra%205G",
      {
        headers: {
          "X-RapidAPI-Key": xRapidApiKey,
          "X-RapidAPI-Host": xRapidApiHost,
        },
      }
    );
    return response.json();
  }
);

const phoneApiSlice = createSlice({
  name: "phone",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoneApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPhoneApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPhoneApi.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export default phoneApiSlice.reducer;
