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
      <Autocomplete
        sugs={[
          'antique',
          'vintage',
          '중고A급',
          'refurbished',
          'rustic',
          'Gatsby',
          'Reactjs',
          'Vuejs',
          'Svelte',
          'Nextjs',
          'Node',
          'Express',
          'React-router',
          'Redux',
        ]}
      />
    </div>
  )
}

export default App
