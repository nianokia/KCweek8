/*
- Test if the Header component is rendered correctly.
- Test if items in the list (Item component) are rendered correctly.
- Test if the Form component works as expected or is rendered correctly.
- Test any other functionality or edge case you think is necessary.

App Overview
1. See a list of items.
2. Add new items using a form.

PSEUDOCODE:
- import components (form, app, header, item) ( √ )
- describe header ( √ )
    - test render header
- describe item ( √ )
    - test item render
- describe form ( √ )
    - test form render
- test form adds item
    - render item
    - screen.getByRole(div, {name: /item.text/})

*/

import { render, screen, getByPlaceholderText, getByText, fireEvent } from "@testing-library/react";

import App from './App';
import Form from './components/form';
import Header from './components/header';
import Item from './components/item';

// -------- Checks if Header renders properly --------
describe('Header', () => {
    test('renders header component', () => {
      render(<Header />);
      expect(screen.getByRole('heading', { level: 1, name: /Hello Techtonica!/i }));
      expect(screen.getByRole('heading', { level: 4, name: /This is a Gratitud List/i }));
    });
});

// -------- Checks if Item renders properly --------
describe('Item', () => {
  test('renders item component', () => {
    const item = { text: "cohort" };
    render(<Item item={item} />);
    expect(screen.getByText(item.text));
  });
});

// -------- Checks if Form renders properly --------
describe('Form', () => {
  test('renders form component', () => {
    render(<Form />);

    // checks if input renders
    expect(screen.getByPlaceholderText(/Enter an item/i));
  });

  // I can't figure out how to test adding an item to a list, but I left it in here to show that I did try
  test('adds item to list', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/Enter an item/i);
    const submitBtn = screen.getByRole("button");

    // fireEvent mocks a user's interaction
    fireEvent.change(input, { target: { value: /cohort/ } });
    fireEvent.click(submitBtn);

    expect(getByText("cohort"));
  })
});


// -------- Check it App renders --------
describe('App', () => {
  test("renders initial state and allows adding items", () => {
    render(<App />);
  });
});