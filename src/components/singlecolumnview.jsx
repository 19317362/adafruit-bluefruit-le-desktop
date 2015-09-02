// Single column of information view.
import React from 'react'


export default class SingleColumnView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="page-header">
            <h3>{this.props.header}</h3>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
