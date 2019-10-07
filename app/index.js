import React from 'react'
import ReactDOM from 'react-dom'

import Steps from "./Steps";

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-column w-full w-two-thirds-ns ph-2-ns mb-4 mb-0-ns">
        <Steps/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)