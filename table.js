var data = [
	["隊名", "小夫", "多啦", "大雄"],
	["第一次分數", "", "", ""],
	["第二次分數", "", "", ""],
	["第三次分數", "", "", ""],
	["第四次分數", "", "", ""],
	["第五次分數", "", "", ""],
	["最佳", "", "", ""],
	["目前排名", "", "", ""],
];

var container = document.getElementById('grade_table');
var table = new Handsontable(container,
		{
			data: data,
			minSpareRows: 1,
			// colHeaders: true,
			contextMenu: true
		});
