import inquirer from 'inquirer';
import * as fsEx from 'fs-extra';
import * as path from 'path';
import { moduleTemplate } from '../lib/templates.js';

export const generateModule = async () => {
  const { moduleName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'moduleName',
      message: 'Enter the module name:',
    },
  ]);

  const modulePath = path.join(process.cwd(), 'src', 'modules', `${moduleName}.ts`);
  const content = moduleTemplate(moduleName);

  try {
    await fsEx.outputFile(modulePath, content);
    console.log(`Module ${moduleName} created at ${modulePath}`);
  } catch (error) {
    console.error('Error creating module:', error);
  }
};
