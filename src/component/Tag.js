import React, { useState } from 'react'

function Tag(props) {
  const [tags, setTags] = useState(['CodeStates', 'JJang'])

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((_, i) => i !== tagToRemove))
  }

  const addTag = (e) => {
    if (e.target.value !== '') {
      setTags([...tags, e.target.value])
      props.selected([...tags, e.target.value])
      e.target.value = ''
    }
  }

  return (
    <section className="Tag">
      <h1 className="title">Tag</h1>

      <div className="tags-wrapper">
        <div className="tags-stack">
          <ul className="tags">
            {tags.map((tags, i) => (
              <li className="tag" key={i}>
                <p className="tag-text">{tags}</p>
                <button
                  className="tag-close-button"
                  type="button"
                  onClick={() => removeTag(i)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <input
            className="tags-stack-input"
            type="text"
            placeholder="Please enter to add tags"
            onKeyUp={(e) => (e.key === 'Enter' ? addTag(e) : null)}
          />
        </div>
      </div>
    </section>
  )
}

export default Tag
