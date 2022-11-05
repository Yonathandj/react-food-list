import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="searchItem">Search item</label>
      <input 
        type="text" 
        placeholder='Search item'
        className='searchBar'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  )
}

export default Search;