import Dexie from 'dexie';

export const db = new Dexie("DexieTest");
db.version(1).stores({ users: "++id,username,usermail,password"})
//db.table("users").put({username: "First name", usermail: "Last name", password:"hshshs"});
db.open();
