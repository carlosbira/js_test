// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Using fetch to test promises
/*
fetch("https://api.randomuser.me/?nat=US&results=1")
  .then(res => res.json())
  .then(json => json.results)
  .then(console.log);
*/

const getFakenMembers = async () => {
  let res = await fetch(`https://api.randomuser.me/?nat=US&results=20`);
  let { results } = await res.json();
  //console.log(results);
  return results;
};

const userLogs = userName => message =>
  console.log(`${userName} -> ${message}`);

const log = userLogs('grandpa23');

log('attempt to load 20 fake members');
getFakenMembers(20).then(
  members => log(`successfully loaded ${members.length} members`),
  error => log('encountered an error loading members')
);
/*
getFakenPerson();

const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(this.message);
    console.log("External msg: " + message);
  }
};

obj.log("test");
*/

// let schools = [
//   { name: 'Yorktown' },
//   { name: 'Stratford' },
//   { name: 'Washington & Liberty' },
//   { name: 'Wakefield' }
// ];

/* Version 1 of editName
const editName = (oldName, name, arr) =>
  arr.map((item, index) => {
    console.log("Item: " + index + " - " + item.name);
    if (item.name === oldName) {
      console.log(item);
      return { ...item, name };
    } else {
      return item;
    }
  });
*/

// Version 2 of editName
// const editName = (oldName, name, arr) =>
//   arr.map(item => (item.name === oldName ? { ...item, name } : item));

// let updateSchools = editName('Stratford', 'HB Woodlawn Updated', schools);
// console.log(updateSchools[1].name);
// console.log(schools[1].name);
