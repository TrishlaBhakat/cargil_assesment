import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('render APP without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});