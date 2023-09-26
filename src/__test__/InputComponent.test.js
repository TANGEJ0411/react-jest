import userEvent from '@testing-library/user-event';
import InputComponent from '../InputComponent';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

test('input change correct', async () => {
    const user = userEvent.setup()

    // 建議需要包進act裡
    act(() => { render(<InputComponent />) })

    const textbox = screen.getByRole('textbox');

    // invoke input onChange
    // fireEvent.change(textbox, { target: { value: 'World!' } });
    // await user.type(textbox, 'World!');
    // 這邊需要包進act裡面
    await act(async () => { await user.type(textbox, 'World!'); })


    expect(textbox.value).toBe('World!');
    screen.debug();
})