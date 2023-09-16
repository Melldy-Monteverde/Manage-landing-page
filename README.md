# Tailwind

[Tailwind official web](https://tailwindcss.com/)

1. Open a new terminal and type `npm init -y` and Install tailwindcss via npm, and create your tailwind.config.js file.
    - Then type `npm install -D tailwindcss`
    - Type `npx tailwindcss init`
2. Configure your template paths.

    Add the paths to all of your template files in your tailwind.config.js file.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. Add the Tailwind directives to your CSS.
  
    Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. Start the Tailwind CLI build process

    Run the CLI tool to scan your template files for classes and build your CSS.

    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

    or in the package.json you could add a script like: 'scanTailwind':

    ```json
    "scanTailwind": "npx tailwindcss -i ./src/css/config.css -o ./src/css/styles.css --watch"
    ```

    and execute the `npm run scanTailwind` command

5. Start using Tailwind in your HTML Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.
