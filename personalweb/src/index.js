import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.unregister();
