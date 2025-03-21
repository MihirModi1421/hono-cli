export const controllerTemplate = (controllerName: string) => `
import { Hono } from 'hono';

const ${controllerName} = new Hono();

${controllerName}.get('/', (c) => c.text('Hello from ${controllerName}!'));

export default ${controllerName};
`;

export const serviceTemplate = (serviceName: string) => `
class ${serviceName} {
  constructor() {
    // Initialize service
  }

  // Add your methods here
}

export default ${serviceName};
`;

export const moduleTemplate = (moduleName: string) => `
import { Hono } from 'hono';
import ${moduleName}Controller from '../controllers/${moduleName}Controller';

const ${moduleName} = new Hono();

${moduleName}.route('/', ${moduleName}Controller);

export default ${moduleName};
`;
