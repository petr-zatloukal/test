import React from 'react';
import {mount} from 'enzyme';
import BookSearch from './BookSearch';


jest.mock('./book-search.service', () => {
  return {getBooksByType: jest.fn(() => Promise.resolve('data'))}
});


describe('BookSearch', () => {
  it('setResults to have been called with response of getBooksByType', async () => {
    const setResults = jest.fn();
    const component = mount(<BookSearch offset={1} pageSize={1} setResults={setResults} />);
    component.find('input').simulate('change', { target: { value: 'Changed' } });
    await new Promise((r) => setTimeout(r, 500));
    expect(setResults).toHaveBeenCalledWith('data');
  });
});
