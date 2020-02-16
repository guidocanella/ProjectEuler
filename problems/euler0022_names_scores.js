function namesScores(arr) {
  let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""), val = [];
  for (let i=0; i<alf.length; i++) val[alf[i]]=i+1;
  arr.sort();
  let sss = arr.reduce((sum, item, ind)=>sum+item.split("").reduce((s,c)=>s+val[c], 0)*(ind+1),0);
  alert(sss);
  return sss;
}

function txtToArrayFunc(file_name, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "data/"+file_name, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      let file = rawFile.responseText;
      let arr = file.substring(1,file.length-1).split('","');
      return callback(arr);
    }
  }
  rawFile.send();
}

const test0 = ['A', 'E', 'C'];
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];

function main(n) { 
	if (n == "test0") return namesScores(test0);
	if (n == "test1") return namesScores(test1);
	return txtToArrayFunc(n, namesScores);
	}