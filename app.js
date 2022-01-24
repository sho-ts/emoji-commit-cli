#!/usr/bin/env node
const { prompt } = require('enquirer');
const emojis = require('./emojis.json');
const options = require('./options.json');
const execSync = require('child_process').execSync;

(async () => {
  const res = await prompt([
    {
      type: 'input',
      name: 'commitMessage',
      message: 'コミットメッセージを入力'
    },
    {
      type: 'select',
      name: 'prefix',
      message: 'Prefix',
      choices: options,
    }
  ]);

  const index = options.findIndex(option => option.value === res.prefix);

  execSync(`git commit -m ":${emojis[index]}: ${res.commitMessage}"`);
})()
