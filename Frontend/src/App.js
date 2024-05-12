// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from './actions/itemActions.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ItemList from './components/ItemList.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="container">
      {/* <Header /> */}
      <main className="main-content">
        <ItemList />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
