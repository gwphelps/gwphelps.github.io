<%*
let title = await tp.system.prompt("enter title", "");
let todayDate = new Date();
let i = 1;
let fileNameStr = todayDate.toISOString().substring(0, 10) + "-" + i;
let exists = await tp.file.exists("./Entries/" + fileNameStr + ".md");
while(exists){
	i+=1;
	fileNameStr = fileNameStr.substring(0, fileNameStr.length-1) + i;
	console.log(fileNameStr)
	exists = await tp.file.exists("./Entries/" + fileNameStr + ".md");
}
await tp.file.rename(fileNameStr + " draft");
%>
## <% title %>

