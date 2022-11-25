import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataType {
  email: string;
  password: string;
}

const initialState: DataType = {
  email: '',
  password: '',
};

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    getUsers(state: any, action: PayloadAction<DataType>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
