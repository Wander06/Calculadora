/**
 * @jest-environment jsdom
 */

// query utilities:
// var assert = require('node:assert');
const testingLibraryDom = require("@testing-library/dom");
const { getByLabelText, getByText, getByTestId, queryByTestId, waitFor, screen, fireEvent } = testingLibraryDom;
require("@testing-library/jest-dom");
const { readFileSync } = require('node:fs');


  function getExampleDOM() {
    var data = readFileSync('index.html', 'utf8');
    //console.log(data)
                      
    // This is just a raw example of setting up some DOM
    // that we can interact with. Swap this with your UI
    // framework of choice 😉
    const div = document.createElement('div');
    div.innerHTML = data;
    return div
  }
  
  test('examples of some things', async () => {
    const container = getExampleDOM()
    var teclaUm = getByText(container, '1')
    var display = getByTestId(container, 'display')
    fireEvent.click(teclaUm);
    await waitFor(() =>
      expect(display).toHaveTextContent('1')
    )
  })