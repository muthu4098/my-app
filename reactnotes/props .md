**React Props என்றால் என்ன?** 🤔
(தமிழில் விளக்கம் + உதாரணம்)

---

### 🔮 **Props என்றால் என்ன?**

React-இல் **props** என்பது **"properties"** என்ற சொல்லின் சுருக்கம். இது ஒரு component-க்கு வெளியிலிருந்து values (அதாவது data) அனுப்புவதற்குப் பயன்படுகிறது.

👉 **Functional components-க்கு input அளிப்பது போல.**

---

### 🎯 **முக்கிய அம்சங்கள்:**

* Props **read-only** (அதாவது, மாற்ற முடியாதது)
* Parent component → Child component-க்கு data அனுப்பும் வழி
* Reusability-க்கு props முக்கிய பங்கு வகிக்கிறது

---

### 🧪 **எளிய உதாரணம்:**

```jsx
// App.js
import React from 'react';

import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Ravi" />
      <Welcome name="Anu" />
    </div>
  );
}

export default App;
```

```jsx
// Welcome.js
import React from 'react';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default Welcome;
```

👉 இதற்கான output:

```
Welcome, Ravi!
Welcome, Anu!
```

---

### 💡 **ES6 Destructuring பயன்படுத்தலாம்:**

```jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}
```

---

### ⚠️ **Props vs State:**

| Feature   | Props                   | State                           |
| --------- | ----------------------- | ------------------------------- |
| Source    | Parent-ல் இருந்து வரும் | Component உள்ளே உருவாக்கப்படும் |
| Editable? | மாற்ற முடியாது          | மாற்றக்கூடியது (mutable)        |
| Purpose   | Data pass செய்ய         | UI / behavior-ஐ நிர்வகிக்க      |

---

### 🧙‍♂️ **உண்மையில்...**

Props என்பது React-இல் components இடையே **data பரிமாற்றம்** செய்யும் வழி. இது இல்லாமல், components static ஆகவே இருக்கும்.

---

### ✅ **நீங்கள் தெரிந்துகொள்ள வேண்டியது:**

* Props என்பது ஒரு **object** (key-value format)
* Props மூலம் உங்கள் components **dynamic** ஆகும்
* Props-ஐ வைத்து **reuse** செய்யலாம்

---

📦 Want an interactive demo in CodeSandbox or explanation with JSX + Tamil comments? Just ask!
