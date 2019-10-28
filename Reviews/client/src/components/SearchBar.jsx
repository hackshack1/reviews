import React from 'react';
const styled = window.styled;

const SearchContainer =styled.div`
display: flex;
justify-content: flex-end;
`;

const SearchInput =styled.input`
border-radius: 4px;
border-style: groove;
padding-right: 30px;
`;

const SearchBar = (props) => {
  return (
    <SearchContainer>
      <form onSubmit={props.handleSubmit}>
        <label>
          <SearchInput autoFocus type='text' name='name' placeholder='Search reviews' value={props.value} onChange={props.handleChange}/>
        </label>
        {/* <input type='submit' value='Submit'/> */}
    </form>
    </SearchContainer>
  )
}

export default SearchBar;
