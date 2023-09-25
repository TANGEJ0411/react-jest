// 引入Query Methods
import { render, screen, fireEvent } from '@testing-library/react'
import Component from '../Component'

test('render test', () => {
    // 1. render 出要測試的元件
    render(<Component />)

    // 2. 找到元件中某元素位置
    // getByText要用正規表達式
    // const button = screen.getByText(/點我/i)
    const button = screen.getByRole('button')

    // 3. 對該元素進行操作和互動
    fireEvent.click(button)

    // 4. 檢視結果是否和預期相符
    // const numResult = screen.getByTestId('custom-element')
    const numResult = screen.getByRole('heading', { level: 1 })

    // 撈出來的content是字串所以要parseInt或是Number
    expect(parseInt(numResult.textContent)).toBe(1)

    fireEvent.click(button)

    expect(parseInt(numResult.textContent)).toBe(2)

})