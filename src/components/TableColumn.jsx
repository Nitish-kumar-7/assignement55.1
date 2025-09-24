import React from 'react'

export default function TableColumn({ base, startIndex, onNext }) {
  // Create 4 rows from startIndex .. startIndex+3
  const rows = Array.from({ length: 4 }, (_, i) => {
    const n = startIndex + i
    return {
      left: `${base} × ${n} = ${base * n}`
    }
  })

  return (
    <div className="col">
      <button className="nextBtn" onClick={onNext}>Next</button>
      <div className="rows">
        {rows.map((r, idx) => (
          <div key={idx} className="row">
            <span className="equation">{r.left}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
