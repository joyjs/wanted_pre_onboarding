import React from 'react'

function Tag() {
  return (
    <section className="Tag">
      <h1 className="title">Tag</h1>

      <div className="tags-stack">
        <ul>
          <li>
            <p>CodeStates</p>
            <p>x</p>
          </li>
          <li>
            <p>JJang</p>
            <p>x</p>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Please enter to add tags"
          // onKeyUp={addTag}
        />
      </div>
    </section>
  )
}

export default Tag
