import { observer } from 'mobx-react';
import React from 'react';

const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))
export default TimerView;