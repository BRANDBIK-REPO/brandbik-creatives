import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Project {
  _id: string;
  // Add other fields as needed
}

interface ProjectsState {
  list: Project[];
  selected: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await axios.get('https://api.brandbik.com/admin/getProjects');
  return response.data;
});

export const fetchProjectById = createAsyncThunk('projects/fetchProjectById', async (id: string) => {
  const response = await axios.get(`https://api.brandbik.com/admin/getProjects/${id}`);
  return response.data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch projects';
      })
      .addCase(fetchProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch project details';
      });
  },
});

export default projectsSlice.reducer;
