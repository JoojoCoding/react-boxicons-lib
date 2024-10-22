# React component to Boxicons!
If you ever wanted an icon component compatible with ts, this package is perfect for you!
1. To start you need to install this package
```
> npm i @joojocoding/react-boxicons
```
2. Next, put this line in `index.css`
```
@import url("boxicons/css/boxicons.min.css");
```
3. Now, import `Icon` component and use in your project!
```
//App.jsx

//import component
import Icon from '@joojocoding/react-boxicons'
import './App.css'

function App() {
  return (
    {/*Put component into project*/}
    <Icon name="edit" color='white' />
  )
}

export default App
```

---

Link to boxicons: https://boxicons.com

---

Link to npm: https://www.npmjs.com/package/@joojocoding/react-boxicons

---

Link to github: https://github.com/JoojoCoding/react-boxicons-lib