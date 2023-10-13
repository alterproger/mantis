import { createSlice } from '@reduxjs/toolkit';

// project import
// import axios from 'utils/axios';

// types
import { MenuProps } from 'types/menu';

// initial state
const initialState: MenuProps = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  selectedID: null,
  drawerOpen: false,
  componentDrawerOpen: true,
  menu: {
    id: 'group-dashboard',
    title: 'dashboard',
    type: 'group',
    icon: 'dashboard',
    children: [
      {
        id: 'dashboard',
        title: 'dashboard',
        type: 'item',
        icon: 'dashboard'
      },
      {
        id: 'tasks',
        title: 'Tasks / Projects',
        type: 'item',
        url: '/',
        icon: 'tasks'
      },
      {
        id: 'minutes',
        title: 'Minutes Utilisation',
        type: 'item',
        url: '/',
        icon: 'minutes'
      },
      {
        id: 'billing',
        title: 'Billing & Subscription',
        type: 'item',
        url: '/',
        icon: 'billing'
      },
      {
        id: 'support',
        title: 'Support / Help',
        type: 'item',
        url: '/',
        icon: 'support'
      }
    ]
  },
  error: null
};

// ==============================|| SLICE - MENU ||============================== //

// export const fetchMenu = createAsyncThunk('', async () => {
//   const response = await axios.get('/api/menu/dashboard');
//   return response.data;
// });

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },

    hasError(state, action) {
      state.error = action.payload;
    }
  }

  // extraReducers(builder) {
  //   builder.addCase(fetchMenu.fulfilled, (state, action) => {
  //     state.menu = action.payload.dashboard;
  //   });
  // }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, activeID } = menu.actions;
