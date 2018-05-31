import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';

import { default as App } from './App';

if (__DEBUG__) setConfig({ logLevel: 'debug' });

ReactDOM.render(<App />, document.getElementById('root'));
