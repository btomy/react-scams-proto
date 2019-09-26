import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MultiStep from 'react-multistep';

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'


const steps = 
    [
      {name: 'Name', component: <StepOne/>},
      {name: 'Email', component: <StepTwo/>},
      {name: 'Password', component: <StepThree/>},
      {name: 'Agreement', component: <StepFour/>}
    ]

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <MultiStep showNavigation={true} steps={steps}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)