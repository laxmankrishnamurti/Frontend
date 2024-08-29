# Integrate Tailwind CSS with React

1. Initialize a React Project with Vite bundler.

```bash
$ npm create vite@latest <directory_name or . -> For Current Directory>
```

2. Install Tailwind CSS

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

3. Configure the template path

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add Tailwind directives into the <code>index.css</code> file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
