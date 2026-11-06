const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('public/index.html','utf8');
const app = fs.readFileSync('public/app.js','utf8');
const css = fs.readFileSync('public/style.css','utf8');
test('criação guiada apresenta linguagem simples e cinco etapas',()=>{
  assert.match(html,/Você não precisa conhecer RPG para começar/);
  for (const label of ['charName','charClass','charSpecies','charBackground','abilityInputs','boostTwo','armorChoice','skillChoices']) assert.match(html,new RegExp('id="'+label+'"'));
  assert.match(app,/setupCharacterWizard/);
  assert.match(app,/Etapa \$\{current\+1\} de \$\{panes\.length\}/);
  assert.match(css,/\.wizard-progress/);
});
