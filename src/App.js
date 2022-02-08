import React from 'react'
import './styles/main.scss'
import ModalButton from './component/ModalButton'
import Tab from './component/Tab'
import Toggle from './component/Toggle'
import Tag from './component/Tag'

function App() {
  return (
    <div className="App">
      {/* Modal */}
      <ModalButton />

      {/* Tab */}
      <Tab />

      {/* Toggle */}
      <Toggle />

      {/* Tag */}
      <Tag />
    </div>
  )
}

export default App
