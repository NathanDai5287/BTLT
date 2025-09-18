import { useState, type JSX } from 'react'
import { MyApp as Lec02Components } from './demos/lec02-creating-using-components'
import { PersonHighlight as Lec02DisplayingData } from './demos/lec02-displaying-data'
import { InputAge as Lec02State } from './demos/lec02-state'
import { BirthdayAge as Lec02SetStateFunction } from './demos/lec02-set-state-function'

function App() {
  const componentMap: Record<string, JSX.Element> = {
    lec02Components: <Lec02Components />,
    lec02DisplayingData: <Lec02DisplayingData />,
    lec02State: <Lec02State />,
    lec02SetStateFunction: <Lec02SetStateFunction />,
  };

  const [selected, setSelected] = useState("lec02Components");

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(componentMap).map((key) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>

      <div style={{
          marginTop: "16px",
          border: "2px solid gray",
          borderRadius: "8px",
          padding: "16px",
        }}>{componentMap[selected]}</div>
    </div>
  );
}

export default App
