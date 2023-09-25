import userEvent from '@testing-library/user-event';
import InputComponent from '../InputComponent';
import { fireEvent, render, screen } from '@testing-library/react';

test('input change correct', async () => {
    const user = userEvent.setup()

    render(<InputComponent />)
    const textbox = screen.getByRole('textbox');

    // invoke input onChange
    // fireEvent.change(textbox, { target: { value: 'test' } });
    await user.type(textbox, 'World!');

    expect(textbox.value).toBe('World!');
    screen.debug();
})