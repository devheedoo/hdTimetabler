


// TBlock > Lecture > Professor
// Classroom > Timetable > DayTimeBlocks
// 명명규칙 적용 때문에 요일 첫 글자를 소문자로 사용함 ex) Monday(X), monday(O)


// 고려할 조건
// 강의실이 2개
// 교수님 선호 강의실 - 일단 선호 강의실로 찾고 안 되면 다음 강의실에서 찾기
// 수업은 최대한 점심 앞뒤로 모여있도록 (이른, 늦은 시간은 제외)
// 1,2시간 강의는 그냥 하면 되지만
// 3시간 강의인 경우 1.5시간으로 나눠서 중간에 하루 비우고 이틀 강의





// 남은 작업 순서
// 연속 n credit 확인
// 시간표 우선순위 적용
// 3시간 강의 반으로 나누기
// 결과 한 번에 나오도록 테스트 (for문 돌리기)
// 기타 옵션 추가




// Lecture: 강의 정보
function Lecture(title, id, prof, grade, credit, isLiberalArt) {
	this.title = title;
	this.id = id;
	this.prof = prof;
	this.grade = grade;
	this.credit = credit;
	this.isLiberalArt = isLiberalArt;

	this.room = '';
	this.dayTimeBlockList = [];
}


function LBlock(lecture) {
	// Input values
	this.lecture = lecture;	// 강의

	// Output values
	this.room = '';	// 강의실
	this.dayTimeBlockList = [];	// 요일.시간, 요일.시간, ...
}


function TBlock(lecture) {
	// Input values
	this.lecture = lecture;

	// Output values
	this.room = '';
	this.dayTimeBlock = '';	// 요일.시간
}

// dayTimeBlock 이름 목록
// 이 목록을 순서대로 검색하므로 검색 우선순위로 사용
var TIMEBLOCK_ORDER_LIST = ['t0900', 't0930', 't1000', 't1030', 't1100', 't1130',
	't1200', 't1230', 't1300', 't1330', 't1400', 't1430', 't1500', 't1530',
	't1600', 't1630', 't1700', 't1730', 't1800', 't1830', 't1900', 't1930'];



// DayTimeBlocks: 시간표 30분 단위
function DayTimeBlocks() { 
	this.t0900 = null;	// Lecture 객체 저장
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



// Timetable: 강의실별 시간표 정보
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




// Classroom: 강의실 정보
function Classroom(roomName) {
	this.name = roomName;
	this.timetable = new Timetable();
	this.print = function() {
		console.log('name: ' + roomName);
	}
}

var room1 = new Classroom('room1');
var room2 = new Classroom('room2');
// 강의실 목록
var CLASSROOM_LIST = [room1, room2];





function Professor(name, researchDay, room) {
	this.name = name;
	this.researchDay = researchDay;
	this.preferredClassroom = room;
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






// 1-1차: 교수님 선호 강의실로 결정할 수 있는지
// 1-2차: 만약 가까운 강의실 남으면 먼 강의실 교수님도 가까운 강의실로 일부 변경
// 2-1차: 선호 강의실로 안 되면 우선순위 필요





// 요일별 가능한 시간 구하기
function getAvailableTimeWithDays() {}




// 어느 요일에 주어진 시간만큼 사용가능한 곳 목록 출력하기
function getAvailableTimes(day, lecture) {
	console.log('@ function getAvailableTimes(day, lecture):');

	var room1List = [];
	// for (var dayTimeBlock in day) {
	for (var i=0; i<TIMEBLOCK_ORDER_LIST.length; i++) {
		// TODO: 연속 n credit 체크 && 같은 강의실
		var dayTimeBlock = TIMEBLOCK_ORDER_LIST[i];
		if (isAvailable(room1, day, dayTimeBlock, lecture.prof, lecture.grade)) {
			room1List.push('' + day + '.' + dayTimeBlock);
		}
	}
	
	var room2List = [];
	for (var i=0; i<TIMEBLOCK_ORDER_LIST.length; i++) {
		// TODO: 연속 n credit 체크 && 같은 강의실
		var dayTimeBlock = TIMEBLOCK_ORDER_LIST[i];
		if (isAvailable(room2, day, dayTimeBlock, lecture.prof, lecture.grade)) {
			room2List.push('' + day + '.' + dayTimeBlock);
		}
	}

	var allLists = {'room1List': room1List, 'room2List': room2List};
	return allLists;
}

// 30분단위 사용가능여부 출력하기
function isAvailable(classroom, day, dayTimeBlock, lecture) {
	// console.log('@ function isAvailable(classroom, day, dayTimeBlock, lecture):');
	// console.log('classroom: ' + classroom.name);
	// console.log('day: ' + day);
	// console.log('dayTimeBlock: ' + dayTimeBlock);
	// console.log('lecture: ' + lecture.name);

	if (!isResearchDay(day, dayTimeBlock, lecture.prof)) {
		if (isScheduled(classroom, day, dayTimeBlock)) {
			return false;
			/*
			if (!isOverlapped(classroom, day, dayTimeBlock, lecture.prof, lecture.grade)) {
				// 강의실 교체
				var anotherClassroom = CLASSROOM_LIST[0];
				if (anotherClassroom.name == classroom.name) {
					anotherClassroom = CLASSROOM_LIST[1];
				}
				if (isScheduled(anotherClassroom, day, dayTimeBlock)) {
					return false;					
				} else {
					return true;
				}
			} else {
				return false;
			}
			*/
		} else {
			return true;
		}
	} else {
		return false;
	}
}

// 30분단위 해당 시간 강의 배정유무 확인
function isScheduled(classroom, day, dayTimeBlock) {
	// console.log('@ function isScheduled(classroom, day, dayTimeBlock):');
	// console.log('classroom: ' + classroom.name);
	// console.log('day: ' + day);
	// console.log('dayTimeBlock: ' + dayTimeBlock);

	var scheduledLecture = classroom['timetable'][day][dayTimeBlock];
	if (scheduledLecture == null) {
		return false;
	} else {
		console.log('scheduledLecture: ' + scheduledLecture);
		return true;
	}
}


// 사용 대기 (교수님마다 강의실 정해지는 경우가 많음)
// 30분단위 교수, 학년 비교해서 중복여부 확인
function isOverlapped(classroom, day, dayTimeBlock, prof, grade) {
	// console.log('@ function isOverlapped(classroom, day, dayTimeBlock, prof, grade):');
	// console.log('classroom: ' + classroom.name);
	// console.log('day: ' + day);
	// console.log('dayTimeBlock: ' + dayTimeBlock);
	// console.log('prof: ' + prof);
	// console.log('grade: ' + grade);

	var scheduledLecture = classroom['timetable'][day][dayTimeBlock];
	if (scheduledLecture.prof != prof && scheduledLecture.grade != grade) {
		console.log('Different professor and grade, go to next classroom.');
	}
}

// 교수님 연구일 확인
function isResearchDay(day, prof) {
	// console.log('@ function isResearchDay(day, prof):');
	if (day == prof.researchDay) {
		return true;
	} else {
		return false;
	}
}








// Test Codes

// Professor(name, researchDay, room)
var professor01 = new Professor('Heedo Kim', 'monday', room1);
var professor02 = new Professor('Solin Choi', 'tuesday', room1);
var professor03 = new Professor('Gildong Hong', 'Wednesnday', room1);
var professor04 = new Professor('John Park', 'Thursday', room2);
var professor05 = new Professor('Kate Ahn', 'Friday', room2);


// Lecture(title, id, prof, grade, credit, isLiberalArt)
var lecture01 = new Lecture('Introduction to Computer Science', 'CS101', professor01, 1, 2, false);
var lecture02 = new Lecture('Introduction to Mathmatics', 'MA101', professor02, 1, 1, false);
var lecture03 = new Lecture('Introduction to Physics', 'PH101', professor03, 2, 3, false);
var lecture04 = new Lecture('Introduction to Japanese', 'JA101', professor04, 2, 2, false);
var lecture05 = new Lecture('Introduction to Chinese', 'CH101', professor05, 2, 3, true);


