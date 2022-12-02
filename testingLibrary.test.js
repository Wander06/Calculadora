require("@testing-library/jest-dom");
const { logDOM, getByText, getByTestId, waitFor, fireEvent } = require("@testing-library/dom");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

jest.spyOn(console, 'error').mockImplementation(() => {});


const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
let dom;
let container;

function waitForDom() {
  return new Promise((resolve) => {
    dom = new JSDOM(html, {
      runScripts: "dangerously",
      resources: "usable",
      url: `file://${path.resolve(__dirname, ".")}/index.html`,
    });
    dom.window.document.addEventListener("DOMContentLoaded", () => {
      resolve();
    });
  });
}

beforeAll(async () => await waitForDom());

beforeEach(() => {
  container = dom.window.document.body;
});

afterEach(() => container = null)


it("examples of some things", async () => {
  var teclaUm = getByText(container, '1')
  var display = getByTestId(container, 'display')
  fireEvent.click(teclaUm);
  await waitFor(() =>
    expect(display).toHaveTextContent('1'), {container}
  )
});
