import React from 'react'

function Autocomplete() {
  return (
    <section className="Autocomplete">
      <h1 className="title">Autocomplete</h1>

      <div className="autocomplete-wrapper">
        <form className="autocomplete-input" action="">
          <input type="text" />
          <button type="button">x</button>
        </form>

        <ul className="suggestions">
          <li className="suggestion">suggestion 1</li>
          <li className="suggestion">suggestion 2</li>
        </ul>

        <div className="no-suggestion">
          <p className="emoji">😢</p>
          <p className="message">Oops! No suggestion matches your keyword.</p>
        </div>
      </div>
    </section>
  )
}

export default Autocomplete
