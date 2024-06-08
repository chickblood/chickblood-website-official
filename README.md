# chickblood

## Custom Hooks
Custom hooks are created to better manage global states. Below are documentations on how to use them further.

### useColorPalette.js & ThemeProvider
#### useColorPalette hook 
Mananges colors appear in this project. It is defined in ```chickblood-test/src/hooks/useColorPalette.js```
To use it:
```
import useColorPalette from ".../hooks/useColorPalette";

export default function Example() {
  const colorPalette = useColorPalette();
  return (
    <div>
      <button
        style={{
          color: colorPalette.black,
          backgroundColor: corlorPalette.pear,
        }}></button>
    </div>
  )
}
```
Currently colors are defined as: 
```
{
    skyBlue: "#82CFEF",
    pear: "#DCDC22",
    egyptianBlue: "#013994",
    white: "#FFFFFF",
    black: "#000000",
}
```

#### ThemeProvider
ThemeProvider specifically helps managing the **light/dark mode** of the app. It uses ```useContext/useState/useMemo/useEffect``` hooks to store the current light/dark setting in localStorage. The injection point is wrapped by <ThemeProvider></ThemeProvider> so that this set up is applied globally. ThemeProvider.js can be found at ```chickblood-test/src/context/ThemeProvider.js```.

The color setting of two modes are as defined in the file. It is worth mention that currently the **background and text color** are naively defined as: 
```
**light**
palette:{
  mode: "light",
  background: {
      default: "#FFFFFF",    //pure white
      paper: "#FFFFFF",      //pure white
    },
  text: {
      primary: "#000000",    //pure black
      secondary: "#000000",  //pure black
    },
}
**dark**
palette:{
  mode: "dark",
  background: {
      default: "#222222",    //lighter black
      paper: "#222222",      //lighter black
    },
  text: {
      primary: "#FFFFFF",    //pure white
      secondary: "#FFFFFF",  //pure white
    },
}
```

