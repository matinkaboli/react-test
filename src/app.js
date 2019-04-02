import React from 'react';
import { render } from 'react-dom';

render(<h1>Hello Worl</h1>, global.document.getElementById('root'));

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
