import React, { Component } from 'react';
import {View ,Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyCXnzPuagk5aNj5X9aH87nikYJoPIb21og",
            authDomain: "friendlychat-1bac4.firebaseapp.com",
            databaseURL: "https://friendlychat-1bac4.firebaseio.com",
            projectId: "friendlychat-1bac4",
            storageBucket: "friendlychat-1bac4.appspot.com",
            messagingSenderId: "36349134030",
            appId: "1:36349134030:web:9ccb0ef0fb91a903"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;