import React, { useEffect } from 'react'
import { startMirage } from './server-mock'
import { useDispatch, useSelector } from 'react-redux';

import { regionAction } from './redux/regions'
import { regionsSelector } from './redux/selectors';
import { Regions } from './components/Regions/Regions';

if (process.env.NODE_ENV === 'development') {
  startMirage()
}


function App() {
  const dispatch = useDispatch();
  const regions = useSelector(regionsSelector);

  useEffect(() => {
    fetch("/api/regions")
      .then((response) => response.json())
      .then((json) => {
        dispatch(regionAction(json))
      })
  }, []);

  return (
    <div className="App">
      {regions.length && <Regions data={regions} />}
    </div>
  )
};

export default App

