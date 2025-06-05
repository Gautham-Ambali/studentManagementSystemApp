import React from 'react'

function SearchSort({ searchTerm, setSearchTerm,sortKey,setSortKey }) {
  

  return (
    <div className="d-flex gap-5 align-items-center justify-content-between mb-4">
  <input
    type="text"
    placeholder="Search by name..."
    className="form-control"
    style={{width:"50%"}}
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    className="form-select"
    value={sortKey}
    onChange={(e) => setSortKey(e.target.value)}
    style={{
          width: "20%",
          backgroundColor: "#1f242d",
          color: "white",
          border: "1px solid #7cf03d",
        }}
  >
    <option value="">Sort By</option>
    <option value="name-asc">Name A-Z</option>
    <option value="name-desc">Name Z-A</option>
    <option value="age-asc">Age Low-High</option>
    
  </select>
</div>
  )
}

export default SearchSort