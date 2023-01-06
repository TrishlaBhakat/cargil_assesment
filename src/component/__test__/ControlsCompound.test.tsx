import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import ControlsCompound from '../ControlsCompound';
import '@testing-library/jest-dom'

test('render ControlsCompound witout crashing', async () => {
    render(<ControlsCompound />)
    screen.getByRole('heading', {
        name: /search filter/i
      })
      const searchBox = screen.getByRole('searchbox', {
        name: /search here \.\.\./i
      })
      expect(searchBox).toBeTruthy()
     const nameCheckBox= screen.getByRole('checkbox', { name: /name/i })
     expect(nameCheckBox).toBeTruthy()
     const clearButton=  screen.getByRole('button', { name: /clear all filters/i })
     expect(clearButton).toBeEnabled()
    //  fireEvent.click(clearButton)
})