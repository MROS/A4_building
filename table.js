var data = [
	["隊名", "小夫", "多啦", "大雄"],
	["第一次分數", "", "", ""],
	["第二次分數", "", "", ""],
	["第三次分數", "", "", ""],
	["第四次分數", 45.5, "", ""],
	["第五次分數", "", "", ""],
	["最佳分數", "", "", ""],
	["目前排名", "", "", ""],
];

var timesStart = 1;
var teamsStart = 1;
var MAX_TIMES = 5
var maxRow = 6;

var container = document.getElementById('grade_table');
var table = new Handsontable(container,
		{
			data: data,
			// minSpareRows: 1,
			// colHeaders: true,
			contextMenu: true
		});

table.addHook('afterChange', function(changes, source){

				if (changes[0][0] > 5 || changes[0][0] < 1) {return;}

				// 算最大值
				for(var teams = teamsStart; teams < data[0].length; teams++) {
					var max = 0;
					for (var times = timesStart; times < timesStart + MAX_TIMES; times++) {
						console.log(times);
						var score = table.getDataAtCell(times, teams);
						if (typeof(score)) {
							max = max < score ? score : max;
						}
					};
					table.setDataAtCell(6, teams, max);
				}
				// 排名
				var rankRow = 7;
				for(var teams = teamsStart; teams < data[0].length; teams++) {
					rank = 0;
					for(var enemy = teamsStart; enemy < data[0].length; enemy++) {
						if (table.getDataAtCell(maxRow, teams) < table.)
					}
				}
				// self.updateSettings({data: data});
			})

var add_group = document.getElementById('add_group');
add_group.onclick = function(){
	data[0].push("新隊伍名");
	for (var i = 1; i < data.length; i++) {
		data[i].push("");
	}
	table.updateSettings({data: data});
	console.log(data);
}
