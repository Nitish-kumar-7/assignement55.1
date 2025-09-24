import React, { useState } from 'react'
import TableColumn from './components/TableColumn'

export default function App() {
  const [base, setBase] = useState(2)          // table base (2 in image)
  const [starts, setStarts] = useState([1, 1]) // start index for each column

  // handler for incrementing one column's start index by 4
  function handleNext(columnIndex) {
    setStarts(prev => {
      const copy = [...prev]
      copy[columnIndex] = copy[columnIndex] + 4
      return copy
    })
  }

  return (
    <div className="page">
      <header className="header">
        <div className="title">Multiplication Tables</div>
        <div className="controls">
          <label>
            Base:
            <input
              type="number"
              min="1"
              value={base}
              onChange={(e) => setBase(Math.max(1, Number(e.target.value) || 1))}
              className="baseInput"
            />
          </label>
        </div>
      </header>

      <main className="grid">
        <TableColumn
          base={base}
          startIndex={starts[0]}
          onNext={() => handleNext(0)}
        />
        <TableColumn
          base={base}
          startIndex={starts[1]}
          onNext={() => handleNext(1)}
        />
      </main>

      <footer className="footer">Made with ♥ — Deploy this on Netlify after pushing to GitHub</footer>
    </div>
  )
}
