import inquirer from 'inquirer';
import * as fsEx from 'fs-extra';
import * as path from 'path';
import { serviceTemplate } from '../lib/templates.js';

export const generateService = async () => {
  const { serviceName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'serviceName',
      message: 'Enter the service name:',
    },
  ]);

  const servicePath = path.join(process.cwd(), 'src', 'services', `${serviceName}.ts`);
  const content = serviceTemplate(serviceName);

  try {
    await fsEx.outputFile(servicePath, content);
    console.log(`Service ${serviceName} created at ${servicePath}`);
  } catch (error) {
    console.error('Error creating service:', error);
  }
};
