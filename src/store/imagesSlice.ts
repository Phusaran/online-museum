import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Image {
  id: string;
  author: string;
  download_url: string;
  width: number;
  height: number;
  url: string; 
}

interface ImagesState {
  images: Image[]; 
  currentImage: Image | null; 
  page: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  currentImageStatus: 'idle' | 'loading' | 'succeeded' | 'failed'; 
  error: string | null;
  collection: Image[];
}
const initialState: ImagesState = {
  images: [],
  currentImage: null, 
  page: 1,
  status: 'idle',
  currentImageStatus: 'idle', 
  error: null,
  collection: [],
};

const shuffleArray = (array: Image[]) => {
  const newArr = [...array]; 
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; 
  }
  return newArr; 
};

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (page: number) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=20`
    );
    return response.data as Image[];
  }
);

export const fetchImageById = createAsyncThunk(
  'images/fetchImageById',
  async (id: string) => {
    const response = await axios.get(
      `https://picsum.photos/id/${id}/info`
    );
    return response.data as Image;
  }
);

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
  setPage: (state, action: PayloadAction<number>) => {
    state.page = action.payload;
  },
  clearCurrentImage: (state) => {
    state.currentImage = null;
    state.currentImageStatus = 'idle';
  },
  toggleCollection: (state, action: PayloadAction<Image>) => {
    const image = action.payload;
    const existingIndex = state.collection.findIndex(
      (img) => img.id === image.id
    );

    if (existingIndex !== -1) {
      state.collection.splice(existingIndex, 1);
    } else {
      state.collection.push(image);
    }
  },
  },
  extraReducers: (builder) => {
  builder
    .addCase(fetchImages.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchImages.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.images = shuffleArray(action.payload); 
    })
    .addCase(fetchImages.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch images';
    })
    .addCase(fetchImageById.pending, (state) => {
      state.currentImageStatus = 'loading';
    })
    .addCase(fetchImageById.fulfilled, (state, action) => {
      state.currentImageStatus = 'succeeded';
      state.currentImage = action.payload;
    })
    .addCase(fetchImageById.rejected, (state, action) => {
      state.currentImageStatus = 'failed';
      state.error = action.error.message || 'Failed to fetch image';
    });
},
});

export const { setPage, clearCurrentImage, toggleCollection } = imagesSlice.actions;
export default imagesSlice.reducer;