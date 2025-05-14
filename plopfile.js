module.exports = plop => {
  // Your generators will be defined here
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{name}}/{{name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.ts',
        templateFile: 'plop-templates/Style.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.spec.tsx',
        templateFile: 'plop-templates/Test.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/typesFile.ts',
        templateFile: 'plop-templates/TypesFile.ts.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your Screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Screen.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/Style.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/Test.spec.tsx.hbs',
      },
    ],
  });
};
