import inquirer from 'inquirer';
import * as fsEx from 'fs-extra';
import * as path from 'path';
import { controllerTemplate } from '../lib/templates.js';

export const generateController = async () => {
  const { controllerName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'controllerName',
      message: 'Enter the controller name:',
    },
  ]);

  const controllerPath = path.join(process.cwd(), 'src', 'controllers', `${controllerName}.ts`);
  const content = controllerTemplate(controllerName);

  try {
    await fsEx.outputFile(controllerPath, content);
    console.log(`Controller ${controllerName} created at ${controllerPath}`);
  } catch (error) {
    console.error('Error creating controller:', error);
  }
};
