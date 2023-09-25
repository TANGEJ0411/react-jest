// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// 基本上固定會導入的
import '@testing-library/jest-dom';


// 在測試中可能會使用到瀏覽器的 API 或進行全域環境的設定
// 這支檔案會在執行測試前自動被執行
// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
// };
// global.localStorage = localStorageMock;
