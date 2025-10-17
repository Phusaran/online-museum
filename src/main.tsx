import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

import './index.css';

import { Layout } from './Layout.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { DetailPage } from './pages/DetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { CollectionPage } from './pages/CollectionPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
  
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: 'image/:id',
        element: <DetailPage />,
      },
      {
        path: 'collection',
        element: <CollectionPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);