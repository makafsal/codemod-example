# codemod-example
Created as an example for IBM FED Kochi 21st May 2025 session: _Writing Codemod: Unlock automated refactoring_

# How to run

1. Clone the repository
2. Open a terminal in the project directory
3. Run

   ```sh
   npm i && npm link
   ```

4. To list all available codemods, run:

   ```sh
   codemod-example list 
   ```

5. To run a codemod `codemod-example run <CODEMOD-NAME> <PATH-TO-FILE>`. 
   Eg:

    ```sh
    codemod-example run button-migration codemods/__testfixture__/button-migration.input.js
    ```
