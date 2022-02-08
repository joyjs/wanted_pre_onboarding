import React from 'react'

function Tag() {
  return (
    <section className="Tag">
      <h1 className="title">Tag</h1>

      <div className="tags-wrapper">
        <div className="tags-stack">
          <ul className="tags">
            <li className="tag">
              <p className="tag-text">CodeStates</p>
              <p className="tag-close-button">x</p>
            </li>
            <li className="tag">
              <p className="tag-text">JJang</p>
              <p className="tag-close-button">x</p>
            </li>
          </ul>
          <input
            className="tags-stack-input"
            type="text"
            placeholder="Please enter to add tags"
            // onKeyUp={addTag}
          />
        </div>
      </div>
    </section>
  )
}

export default Tag
