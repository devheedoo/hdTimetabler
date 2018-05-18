//Example Codes

function TBlock() {
  var title, id, prof, grade, credit, isLiberalArt;  // input values
  var room, time;  // output values
}

function getAvailableTimes() {}

function isAvailable() {}

function Classroom() {
	this.name = '';
	this.print() = function() {
		console.log('');
	}
}
var room1 = new Classroom();
var room2 = new Classroom();

function DayTimeBlocks() {
	this.t0900 = null;
	this.t0930 = null;
	this.t1000 = null;
	this.t1030 = null;
	this.t1100 = null;
	this.t1130 = null;
	this.t1200 = null;
	this.t1230 = null;
	this.t1300 = null;
	this.t1330 = null;
	this.t1400 = null;
	this.t1430 = null;
	this.t1500 = null;
	this.t1530 = null;
	this.t1600 = null;
	this.t1630 = null;
	this.t1700 = null;
	this.t1730 = null;
	this.t1800 = null;
	this.t1830 = null;
	this.t1900 = null;
	this.t1930 = null;
}

function Timetable() {
	this.monday = new DayTimeBlocks();
	this.tuesday = new DayTimeBlocks();
	this.wednesday = new DayTimeBlocks();
	this.thursday = new DayTimeBlocks();
	this.friday = new DayTimeBlocks();
	this.print = function() {
		console.log('');
	}
}



// 1. 가능한 모든 시간표 출력하기 (옵션은 하나씩 추가)
// 2. 강의 하나씩 원하는 곳에 배정하기 (실시간으로 모든 강의 배정가능여부 출력)

// 강의실 2개
// 시간표에 강의 넣고 결과 출력하기
// 주어진 시간만큼 사용가능한 곳 목록 출력하기
// 30분단위 사용가능여부 출력하기
// 해당 시간 강의 배정유무 확인
// 



var lec0123 = new TBlock();
lec0123.title = 'Lecture0123';
lec0123.id = 'LEC01234';
lec0123.prof = 'Gildong, Hong';
lec0123.grade = 3;
lec0123.credit = 3;
lec0123.isLeberalArt = false;