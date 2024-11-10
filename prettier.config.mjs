/**
 * @type {import("prettier").Config}
 *
 * Prettier 設定檔案
 *
 * 注意事項:
 * - 修改設定後需要重新啟動 IDE
 * - 開啟命令面板 (Ctrl + Shift + P) 並執行 > Reload Window 指令
 *
 * 設定說明:
 * @property {number} printWidth - 每行程式碼的最大字元數 (預設: 100)
 * @property {number} tabWidth - 縮排空格數 (預設: 2)
 * @property {boolean} useTabs - 是否使用 tab 縮排 (預設: false)
 * @property {boolean} semi - 是否在語句結尾加分號 (預設: false)
 * @property {boolean} singleQuote - 是否使用單引號 (預設: true)
 * @property {string} quoteProps - 物件屬性引號處理方式 (預設: 'as-needed')
 * @property {boolean} jsxSingleQuote - JSX 是否使用單引號 (預設: false)
 * @property {string} trailingComma - 多行時的尾隨逗號設定 (預設: 'es5')
 * @property {boolean} bracketSpacing - 物件字面值括號是否加空格 (預設: true)
 * @property {boolean} bracketSameLine - 多行 JSX 結尾括號是否同行 (預設: false)
 * @property {string} arrowParens - 箭頭函式參數括號設定 (預設: 'avoid')
 * @property {string[]} plugins - 使用的 Prettier 插件
 */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
