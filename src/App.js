import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe
("pk_test_51HQywvDSbdS2nx2U99I5iAz13KpPKIF24PKsFlg3LCCBXj8p2PPMif5WxvJjckoevCY53em6ZGXP2rmxOJeeqtD200G8VNRZ6c");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user is logged out from system...
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      // unsubscribe();
    };
  }, []);

  // console.log(user);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
