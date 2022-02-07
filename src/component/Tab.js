import React, { useState } from 'react'

function Tab() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (i) => {
    setToggleState(i)
  }

  return (
    <section className="Tab">
      <h1 className="tabs-title">Tab</h1>

      <div className="tabs-wrapper">
        <div className="tabs-header">
          <button
            className={toggleState === 1 ? 'tab is-active' : 'tab'}
            onClick={() => toggleTab(1)}
          >
            Tab 1
          </button>
          <button
            className={toggleState === 2 ? 'tab is-active' : 'tab'}
            onClick={() => toggleTab(2)}
          >
            Tab 2
          </button>
          <button
            className={toggleState === 3 ? 'tab is-active' : 'tab'}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </button>
        </div>

        <dl className="tabs-contents">
          <dt className={toggleState === 1 ? 'content is-active' : 'content'}>
            Tab menu <strong>one</strong>
          </dt>
          <dt className={toggleState === 2 ? 'content is-active' : 'content'}>
            Tab menu <strong>two</strong>
          </dt>
          <dt className={toggleState === 3 ? 'content is-active' : 'content'}>
            Tab menu <strong>three</strong>
          </dt>
        </dl>
      </div>
    </section>
  )
}

export default Tab
