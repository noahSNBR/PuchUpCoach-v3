import './App.css';
import './Stylesheets/Interface.css';
import './Stylesheets/Today.css'
import './Stylesheets/Highscore.css';
import './Stylesheets/Settings.css';
import './Stylesheets/Radio.css';

import Today from './Javascripts/Today';
import Highscore from './Javascripts/Highscore';
import Settings from './Javascripts/Settings';

import React, { useState } from 'react';
export default function App() {
  const [state, setState] = useState({
    today: true,
    highscore: false,
    settings: false
  });

  function Interface() {
    const Icon = (props) => {
      return (<span className="material-symbols-rounded">{props.icon}</span>)
    }
    const Button = (props) => {
      return (
        <button onClick={props.onClick} className={props.className}>
          {props.info} <Icon icon={props.icon} />
        </button>
      );
    }
    const Area = () => {
      return (
        <div className='renderArea'>
          {state.today && <Today />}
          {state.highscore && <Highscore />}
          {state.settings && <Settings />}
        </div>
      );
    }

    function handleComponentChanges(component) {
      setState({
        today: component === 'today',
        highscore: component === 'highscore',
        settings: component === 'settings'
      });
    }

    return (
      <>
        <Button onClick={() => handleComponentChanges('today')} info='Today' className='today' icon='mode_heat' />
        <Button onClick={() => handleComponentChanges('highscore')} info='Highscore' className='highscore' icon='sports_score' />
        <Button onClick={() => handleComponentChanges('settings')} info='Settings' className='settings' icon='settings' />
        <Area />
      </>
    )
  }

  return (
    <div className="App">
      <Interface />
    </div>
  );
}