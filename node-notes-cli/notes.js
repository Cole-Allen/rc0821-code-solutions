let notes = require('./data.json');
const fs = require('fs');
const action = process.argv[2];

if (action === 'add' || action === 'create') {
  notes.notes[notes.nextId] = process.argv[3];
  notes.nextId++;
} else if (action === 'delete' || action === 'remove') {
  delete notes.notes[process.argv[3]];
} else if (action === 'update') {
  notes.notes[process.argv[3]] = process.argv[4];
} else if (action === 'read') {
  for (const [key, value] of Object.entries(notes.notes)) {
    console.log(`${key}: ${value}`);
  }
}

notes = JSON.stringify(notes, null, 2);

fs.writeFile('./data.json', notes, 'utf-8', err => {
  if (err) throw err;
});
