import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MasterForm from "./MasterForm";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <MasterForm />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)