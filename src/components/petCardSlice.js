import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import FileSaver from "file-saver";

export const fetchPetCards = createAsyncThunk("fetchPetCards", async () => {
  let favList = []
  if (localStorage.getItem("cachedFavorites")) {
    favList = localStorage.getItem("cachedFavorites");
  }
  const response = await axios.get(
    "http://eulerity-hackathon.appspot.com/pets"
  );
  const mappedResponse = response.data.map((entry, index) => ({
    id: index,
    selected: false,
    favorited: favList.includes(index),
    ...entry,
  }));

  return mappedResponse;
});

export const petCardsSlice = createSlice({
  name: "petCards",
  initialState: {
    value: [],
  },
  reducers: {
    toggleSelect: (state, action) => {
      const item = state.value.findIndex(
        (petCard) => petCard.id === action.payload
      );
      state.value[item].selected = !state.value[item].selected;
    },
    toggleFavorite: (state, action) => {
      const item = state.value.findIndex(
        (petCard) => petCard.id === action.payload
      );
      state.value[item].favorited = !state.value[item].favorited;
      let favList = []
      state.value.forEach((petCard) => {
        if (petCard.favorited) {
          favList.push(petCard.id)
        }
      })
      localStorage.setItem("cachedFavorites", favList);
    },
    selectAll: (state) => {
      state.value.forEach((_petCard, index) => {
        state.value[index].selected = true;
      });
    },
    deselectAll: (state) => {
      state.value.forEach((_petCard, index) => {
        state.value[index].selected = false;
      });
    },
    downloadSelected: (state) => {
      state.value.forEach((petCard, index) => {
        if (state.value[index].selected) {
          FileSaver.saveAs(petCard.url, petCard.title);
        }
      });
      state.value.forEach((_petCard, index) => {
        state.value[index].selected = false;
      });
    },
  },
  extraReducers: {
    [fetchPetCards.rejected]: (state) => {
      state.status = "error";
    },
    [fetchPetCards.pending]: (state) => {
      state.status = "pending";
    },
    [fetchPetCards.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const newValue = action.payload;
      state.value = newValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleSelect,
  toggleFavorite,
  selectAll,
  deselectAll,
  downloadSelected,
} = petCardsSlice.actions;
export const selectPetCards = (state) => state.petCards.value;
export default petCardsSlice.reducer;
