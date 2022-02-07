import React, { useState } from 'react'

function Toggle({ onChange }) {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <section className="Toggle">
      <h1 className="title">Toggle</h1>

      <form className="toggle-wrapper" action="">
        <label className="toggle" for="switch">
          <input
            id="switch"
            type="checkbox"
            onChange={(e) => setIsToggled(e.target.checked)}
          />
          <span className="slider" />
        </label>

        <p className="toggle-text">Toggle Switch {isToggled ? 'ON' : 'OFF'}</p>
      </form>
    </section>
  )
}

export default Toggle
