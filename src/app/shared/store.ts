// import * as electron from 'electron';
// import * as path from 'path';
// import * as fs from 'fs';

// export class Store {
//   constructor(opts) {
//     const userDataPath = (electron.app || electron.remote.app).getPath('userData');
//     this.path = path.join(userDataPath, `${opts.configName}.json`);
//     this.data = this.parseDataFile(this.path, opts.default);
//   }

//   private path: string;
//   private data: Object;

//   get(key: string): Object {
//     return this.data[key];
//   }

//   set(key: string, val: any): void {
//     this.data[key] = val;
//     fs.writeFileSync(this.path, JSON.stringify(this.data));
//   }

//   private parseDataFile(filePath, defaults) {
//     try {
//       return JSON.parse(fs.readFileSync(filePath).toString());
//     } catch(error) {
//       return defaults;
//     }
//   }
// }