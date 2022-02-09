import React from 'react'

function ClickToEdit() {
  return (
    <section className="ClickToEdit">
      <h1 className="title">ClickToEdit</h1>

      <div className="clicktoedit-wrapper">
        <form className="clicktoedit-form">
          <div className="clicktoedit-input-name">
            <label className="name-label" htmlFor="user-name">
              이름
            </label>
            <input id="user-name" className="name-input" type="text" />
          </div>

          <div className="clicktoedit-input-age">
            <label className="age-label" htmlFor="user-age">
              나이
            </label>
            <input id="user-age" className="age-input" type="text" />
          </div>
        </form>

        <div className="clicktoedit-results">
          <div className="clicktoedit-result-name">
            <p className="name-title">이름</p>
            <p className="name-binded">user input name</p>
          </div>

          <div className="clicktoedit-result-age">
            <p className="age-title">나이</p>
            <p className="age-binded">user input age</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClickToEdit
