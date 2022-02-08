import React from 'react'
import './styles/main.scss'
import ModalButton from './component/ModalButton'
import Tab from './component/Tab'
import Toggle from './component/Toggle'
import Tag from './component/Tag'

function App() {
  const selected = (tags) => console.log(tags)

  return (
    <div className="App">
      {/* Modal */}
      <ModalButton />

      {/* Tab */}
      <Tab />

      {/* Toggle */}
      <Toggle />

      {/* Tag */}
      <Tag selected={selected} />
    </div>
  )
}

export default App
