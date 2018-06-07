// Example Codes


// Lecture
function Lecture(title, id, prof, grade, credit, isLiberalArt) {
	this.title = title;
	this.id = id;
	this.prof = prof;
	this.grade = grade;
	this.credit = credit;
	this.isLiberalArt = isLiberalArt;
}


function LBlock(lecture) {
	// Input values
	this.lecture = lecture;		// 강의

	// Output values
	this.room = '';				// 강의실
	this.dayTimeBlockList = [];	// 요일.시간, 요일.시간, ...
}

function TBlock(lecture) {
	// Input values
	this.lecture = lecture;

	// Output values
	this.room = '';
	this.dayTimeBlock = '';		// 요일.시간
}

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


function Classroom(roomName) {
	this.name = roomName;
	this.timetable = new Timetable();
	this.print = function() {
		console.log('name: ' + roomName);
	}
}
var room1 = new Classroom('room1');
var room2 = new Classroom('room2');

function Professor(name, researchDay) {
	this.name = name;
	this.researchDay = researchDay;
}

// 1. 가능한 모든 시간표 출력하기, 이후에 선택 (옵션은 하나씩 추가)
// 2. 강의 하나씩 원하는 곳에 배정하기 (실시간으로 모든 강의 배정가능여부 출력)

// 강의실 2개
// 시간표에 강의 넣고 결과 출력하기
// 주어진 시간만큼 사용가능한 곳 목록 출력하기
// 30분단위 사용가능여부 출력하기
// 해당 시간 강의 배정유무 확인
// 교수, 학년 비교해서 중복여부 확인
// 교수님 연구일 확인

// 요일별 가능한 시간 구하기
function getAvailableTimeWithDays() {}




// 어느 요일에 주어진 시간만큼 사용가능한 곳 목록 출력하기
function getAvailableTimes(day, prof, grade, credit) {
	console.log('@ function getAvailableTimes(day, prof, grade, credit):');

	var room1List = [];
	for (var dayTimeBlock in day) {
		// TODO: 연속 n credit 체크 && 같은 강의실
		if (isAvailable(room1, day, dayTimeBlock, prof, grade)) {
			room1List.push('' + day + '.' + dayTimeBlock);
		}
	}
	
	var room2List = [];
	for (var dayTimeBlock in day) {
		// TODO: 연속 n credit 체크 && 같은 강의실
		if (isAvailable(room2, day, dayTimeBlock, prof, grade)) {
			room1List.push('' + day + '.' + dayTimeBlock);
		}
	}

	var allLists = {'room1List': room1List, 'room2List': room2List};
	return allLists;
}

// 30분단위 사용가능여부 출력하기
function isAvailable(classroom, day, dayTimeBlock, prof, grade) {
	console.log('@ function isAvailable(classroom, day, dayTimeBlock, prof, grade):');
	console.log('classroom: ' + classroom.name);
	console.log('day: ' + day);
	console.log('dayTimeBlock: ' + dayTimeBlock);
	console.log('prof: ' + prof);
	console.log('grade: ' + grade);

	if (!isScheduled(classroom, day, dayTimeBlock)
		&& !isOverlapped(classroom, day, dayTimeBlock, prof, grade)
		&& !isResearchDay(day, dayTimeBlock, prof)) {
		return true;
	}
}

// 30분단위 해당 시간 강의 배정유무 확인
function isScheduled(classroom, day, dayTimeBlock) {
	console.log('@ function isScheduled(classroom, day, dayTimeBlock):');
	console.log('classroom: ' + classroom.name);
	console.log('day: ' + day);
	console.log('dayTimeBlock: ' + dayTimeBlock);

	var scheduledLecture = classroom['timetable'][day][dayTimeBlock];
	if (scheduledLecture == null) {
		return false;
	} else {
		console.log('scheduledLecture: ' + scheduledLecture);
		return true;
	}
}

// 30분단위 교수, 학년 비교해서 중복여부 확인
function isOverlapped(classroom, day, dayTimeBlock, prof, grade) {
	console.log('@ function isOverlapped(dayTimeBlock, prof, grade):');
}

// 교수님 연구일 확인
function isResearchDay(day, prof) {
	console.log('@ function isResearchDay(day, prof):');
	if (day == prof.researchDay) {
		return true;
	} else {
		return false;
	}
}




var lec0123 = new TBlock();
lec0123.title = 'Lecture0123';
lec0123.id = 'LEC0123';
lec0123.prof = 'Gildong, Hong';
lec0123.grade = 3;
lec0123.credit = 3;
lec0123.isLeberalArt = false;