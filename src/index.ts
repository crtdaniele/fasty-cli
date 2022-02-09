#!/usr/bin/env node

import { Command } from "commander";
import { pushCode } from "./commands";

const cli = new Command();

cli.description("A CLI to fastify the commands to push your code into Git.");
cli.name("fastycli");
cli.addHelpCommand(true);
cli.helpOption(true);

/*
 ** PUSH YOUR CODE
 */
cli
  .command("push")
  .argument("<branch>", "name of branch")
  .argument("<commit>", "commit message")
  .description("Create branch, Add files, Commit and Push directly.")
  .action((branch, commit) => pushCode(branch, commit));

cli.parse(process.argv);
