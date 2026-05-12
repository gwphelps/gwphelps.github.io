<%*
let title = await tp.system.prompt("enter title", "");
let todayDate = new Date();
let i = 1;
let fileNameStr = todayDate.toISOString().substring(0, 10) + "-" + i;
let exists = await tp.file.exists("./Entries/" + fileNameStr + ".md");
console.log(exists);
while(exists){
	console.log("exists")
	i+=1;
	fileNameStr = fileNameStr.substring(0, fileNameStr.length-1) + i;
	console.log(fileNameStr)
	exists = await tp.file.exists("./Entries/" + fileNameStr + ".md");
}
await tp.file.rename(fileNameStr);

const dv = this.app.plugins.plugins["dataview"].api;
let list = dv.pages('"Entries"').map(p => p.file.name).join("\n");
console.log(list);
let indexFile = tp.app.vault.getFileByPath("index.md");
await tp.app.fileManager.trashFile(indexFile);
tp.file.create_new(list, "index")

%>
## <% title %>

