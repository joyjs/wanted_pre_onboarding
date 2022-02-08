import React from 'react'
import './styles/main.scss'
import ModalButton from './component/ModalButton'
import Tab from './component/Tab'
import Toggle from './component/Toggle'
import Tag from './component/Tag'
import Autocomplete from './component/Autocomplete'

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

      {/* Autocomplete */}
      <Autocomplete />
    </div>
  )
}

export default App
