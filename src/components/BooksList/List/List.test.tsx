import React from 'react';
import {mount} from 'enzyme';
import List from './List';
import {Provider} from "../../../store/MainStore";


describe('List', () => {
    it('List displayed', () => {
        const book = {
            id: 'id',
            volumeInfo: {
                title: 'Mocked Book Title',
                authors: ['Authors'],
                publisher: 'publishers',
                description: 'description'
            }
        };
        const component = mount(<Provider><List booksList={[book]}/></Provider>);
        expect(component.contains(book.volumeInfo.title)).toBeTruthy();
    });
});
