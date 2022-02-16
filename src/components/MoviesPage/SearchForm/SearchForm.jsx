import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import PropTypes from 'prop-types';

import { Form, FormBtn, FormBtnLabel, FormInput } from './SearchForm.styled';

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleSearchSubmit(e) {
    e.preventDefault();

    if (searchQuery === '') {
      return;
    }
    setSearchParams({ query: searchQuery.toLowerCase().trim() });
    resetForm();
  }

  function resetForm() {
    setSearchQuery('');
  }

  return (
    <Form onSubmit={handleSearchSubmit}>
      <FormBtn type="submit">
        <FormBtnLabel>Search</FormBtnLabel>
      </FormBtn>

      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeHolder="Search images and photos"
        name="searchQuery"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </Form>
  );
}

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
