import React, { useState } from 'react'

function Autocomplete({ sugs }) {
  // Abbreviation Index
  // Suggestion === Sug
  // Suggestions === Sugs

  const [filteredSugs, setFilteredSugs] = useState([])
  const [activeSugIndex, setActiveSugIndex] = useState(0)
  const [showSugs, setShowSugs] = useState(false)
  const [input, setInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const resetInputField = () => {
    setInput('')
  }

  const onChange = (e) => {
    const newInput = e.target.value

    const unLinked = sugs.filter(
      (sug) => sug.toLowerCase().indexOf(newInput.toLowerCase()) > -1
    )

    setInput(e.target.value)
    setFilteredSugs(unLinked)
    setActiveSugIndex(0)
    setShowSugs(true)
  }

  const onClick = (e) => {
    setFilteredSugs([])
    setInput(e.target.innerText)
    setActiveSugIndex(0)
    setShowSugs(false)
  }

  const onKeyDown = (e) => {
    // If pressed enter key
    if (e.keycode === 13) {
      setInput(filteredSugs[activeSugIndex])
      setActiveSugIndex(0)
      setShowSugs(false)
    }

    // If pressed up arrow
    else if (e.keycode === 38) {
      if (activeSugIndex === 0) {
        return
      }

      setActiveSugIndex(activeSugIndex - 1)
    }

    // If pressed down arrow
    else if (e.keycode === 40) {
      if (activeSugIndex - 1 === filteredSugs.length) {
        return
      }

      setActiveSugIndex(activeSugIndex + 1)
    }
  }

  const SugsListComponent = () => {
    return filteredSugs.length ? (
      <ul className="autocomplete-suggestions">
        {filteredSugs.map((sug, index) => {
          let className

          if (index === activeSugIndex) {
            className = 'sug'
          }

          return (
            <li className={className} key={sug} onClick={onClick}>
              {sug}
            </li>
          )
        })}
      </ul>
    ) : (
      <div className="autocomplete-no-suggestion">
        <p className="emoji">😢</p>
        <p className="message">Oops! No suggestion matches.</p>
      </div>
    )
  }

  return (
    <section className="Autocomplete">
      <h1 className="title">Autocomplete</h1>

      <div className="autocomplete-wrapper">
        <form className="autocomplete-form" onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={input}
          />
          {showSugs && input && <SugsListComponent />}
          <button
            className="close-button"
            type="button"
            onClick={resetInputField}
          >
            x
          </button>
          <button
            className="close-background"
            type="button"
            onClick={resetInputField}
            aria-hidden
          >
            Click *grey area* to delete input text
          </button>
        </form>
      </div>
    </section>
  )
}

export default Autocomplete
