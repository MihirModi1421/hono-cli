#!/usr/bin/env node

import inquirer from "inquirer";
import { generateController } from "../src/commands/generateController.js";
import { generateService } from "../src/commands/generateService.js";
import { generateModule } from "../src/commands/generateModule.js";

const runCLI = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What do you want to generate?",
      choices: ["Controller", "Service", "Module"],
    },
  ]);

  switch (answers.command) {
    case "Controller":
      await generateController();
      break;
    case "Service":
      await generateService();
      break;
    case "Module":
      await generateModule();
      break;
    default:
      console.log("Unknown command");
  }
};

runCLI();
