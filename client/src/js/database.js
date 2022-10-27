import { openDB } from 'idb';
const DB_NAME = 'jate';

const initdb = async () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log(DB_NAME + ' database already exists');
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
      console.log(DB_NAME + ' database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
//export const putDb = async (content) => console.error('putDb not implemented');

// Export a function to PUT the data into the database.
export const putDb = async (id, content) => {
  console.log('PUT to the database');
  console.log("id - " + id);
  console.log("content: " + content);
  const Db = await openDB(DB_NAME, 1);
  const tx = Db.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  const request = store.put({ id: id, content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};



// TODO: Add logic for a method that gets all the content from the database
//export const getDb = async () => console.error('getDb not implemented');

// Export a function to GET all data from the database.
export const getDb = async () => {
  console.log('GET all from the database');
  const Db = await openDB(DB_NAME, 1);
  const tx = Db.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};


initdb();