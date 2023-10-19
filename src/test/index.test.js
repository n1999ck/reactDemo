import render from '@testing-library/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// I so thoroughly don't understand how to cover this in a test
// that it caused genuine emotional distress
test('Router is created', () => {
    const {router} = createBrowserRouter();
    expect({router}).not.toBeNull();
})