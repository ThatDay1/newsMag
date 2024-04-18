import React from 'react'

const App = () => {
  return (
    <div>
      <button type="button" classNameNameName="btn btn-primary">
        Primary
      </button>
      <button type="button" classNameNameName="btn btn-secondary">
        Secondary
      </button>
      <button type="button" classNameNameName="btn btn-success">
        Success
      </button>
      <button type="button" classNameNameName="btn btn-danger">
        Danger
      </button>
      <button type="button" classNameNameName="btn btn-warning">
        Warning
      </button>
      <button type="button" classNameNameName="btn btn-info">
        Info
      </button>
      <button type="button" classNameNameName="btn btn-light">
        Light
      </button>
      <button type="button" classNameNameName="btn btn-dark">
        Dark
      </button>

      <button type="button" classNameNameName="btn btn-link">
        Link
      </button>
      <div classNameName="dropdown">
        <button
          classNameName="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul classNameName="dropdown-menu">
          <li>
            <a classNameName="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a classNameName="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a classNameName="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default App
