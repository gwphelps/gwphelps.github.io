<%*
let fileNameStr = tp.file.title;
await tp.file.rename(fileNameStr.replace(" draft", ""));

const dv = this.app.plugins.plugins["dataview"].api;
let list = dv.pages('"Entries"').map(p => p.file.name).filter(n => !n.includes("draft")).join("\n");
console.log(list);
let indexFile = tp.app.vault.getFileByPath("index.md");
await tp.app.fileManager.trashFile(indexFile);
tp.file.create_new(list, "index")
%>