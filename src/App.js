import React from 'react';

import { fetchQuizItems } from './contentful';

const App = () => {

    fetchQuizItems();
    return (
        <div>
            Hello World!
        </div>
    );
}

export default App;
