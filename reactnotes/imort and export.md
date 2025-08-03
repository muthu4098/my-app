
---

## 🔄 Why `import` and `export`?

In modern JavaScript (ES6+), we **split code into modules** (files) and share functionality between them using `export` and `import`.

---

## 🔁 **Two Main Types of Export**

### 1. ✅ **Named Export**

You export **multiple things** by name from a file.

```js
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

👉 **Import it like this:**

```js
// main.js
import { add, multiply } from './utils';
```

📝 You must use the **exact names** (`add`, `multiply`).

---

### 2. ✅ **Default Export**

You export **one main thing** from a file.

```js
// message.js
const greet = () => {
  console.log("Hello, world!");
};

export default greet;
```

👉 **Import it like this:**

```js
// main.js
import greet from './message';
```

📝 You can give it **any name** during import because it's the **default**.

---

## 🧠 Combined Example

```js
// math.js
export const subtract = (a, b) => a - b;
export default function divide(a, b) {
  return a / b;
}
```

```js
// main.js
import divide, { subtract } from './math';
```

---

## 📥 All Import Styles Recap

| Type                     | Syntax                            | Notes                         |
| ------------------------ | --------------------------------- | ----------------------------- |
| **Named Export**         | `export const name = ...`         | Use `{ name }` to import      |
| **Default Export**       | `export default ...`              | Can import with any name      |
| **Rename During Import** | `import { name as newName }`      | Useful to avoid conflicts     |
| **Import All**           | `import * as utils from './file'` | Access via `utils.add()` etc. |

---

## 🧪 Bonus: Export Everything from Another File

```js
// index.js
export * from './math';
```

---

## 🧙‍♂️ React Context Example

### `theme.js` (with default and named export):

```js
export const darkMode = true;

export default function toggleTheme() {
  console.log("Theme toggled");
}
```

### In another file:

```js
import toggleTheme, { darkMode } from './theme';
```

---

## 🔚 Summary

| Feature                     | Named Export      | Default Export   |
| --------------------------- | ----------------- | ---------------- |
| Export style                | `export {}`       | `export default` |
| Import style                | `import { name }` | `import name`    |
| Can have multiple per file? | ✅ Yes             | ❌ Only one       |
| Must use same name?         | ✅ Yes             | ❌ No             |

---

