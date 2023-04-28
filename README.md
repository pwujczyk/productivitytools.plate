<!--Category:react;typescript--> 
 <p align="right">
    <a href="http://productivitytools.top/alibabacloud-ipmonitor/"><img src="Images/Header/ProductivityTools_green_40px_2.png" /><a> 
    <a href="https://github.com/pwujczyk/productivitytools.plate"><img src="Images/Header/Github_border_40px.png" /></a>
</p>
<p align="center">
    <a href="http://http://productivitytools.tech/">
        <img src="Images/Header/LogoTitle_green_500px.png" />
    </a>
</p>


# PTPlate

My implementation of the Plate editor. I will be using it in my projects.
Right now here I list the problems which I have with creating it and running. 

## Issues
Use state not working, empty screen is showing and in console we see errror

```
Ract.development.js:209 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

I resolved it by tutorial on [react.js](https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html) org:
```
This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.
```

Builds and works button
```
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react",
    "declaration": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node"
  },
  "include": ["src/**/*.ts","src/**/*.tsx"]
}
```

building but not working error 
Could not find a declaration file for module 'productivitytools.plate'.

skipLib check did the trick. I went one by one throuth the snipped below and added it to the tsconfig in the productivitytools.plate directory. 

{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "outDir": "dist",
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "typeRoots": [
    "./typings",
    "./node_modules/@types/"
  ]
}