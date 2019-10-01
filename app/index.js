import React from 'react'
import ReactDOM from 'react-dom'

import MasterForm from "./MasterForm";

class App extends React.Component {
  render() {
    return (
      <div className="constrained mh-auto ph-6 flex flex-wrap gutter-ns mt-7">
        <MasterForm />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)