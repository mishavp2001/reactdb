import * as React from 'react';

const SearchBox = ({onChange}) => (
        <input
          type='text'
          className='form-control'
          placeholder='Enter Search here'
          autoComplete={false}
          onChange={event => onChange(event.target.value)}
          />
      );

    SearchBox.propTypes = {
      onChange: React.PropTypes.func.isRequired
    };

export default SearchBox;
