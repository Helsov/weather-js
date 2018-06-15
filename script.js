$(document).ready(function() {
	// for (var prop in window.history){
	// 	document.write(prop + ': ' + window.history[prop] + '<br>');
	// }

	console.log(window.location);
	// Объект или ассоциативный массив
	var volodja = {
		vozrast: '38',
		rost: '170'
	};

	//Массив
	var vladimir = new Array(
		[harki => [
			rost => '183', ves => '80'
		]], [telek => '22', koordinat => [{
			visota: 1,
			shirina: 2
		}]]
	);

	// console.log(volodja);
	// console.log(vladimir);

	$(document).ready(function() {
		$('#sapog').each(function() {
			$(this).attr('href', $(this).attr('data-fuck'));
		});

		function fir() {
			var dit = new Date();
			$('#time').text(dit);
			setTimeout(fir, 1000);
		};

		fir();

		$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=499099&units=metric&lang=ru&APPID=ce804bdb83a3b31066a3d5d20b146d32', function(data) {
			console.log(data);
		});

		function Temperatura() {
			var globalTemp = $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=499099&units=metric&lang=ru&APPID=ce804bdb83a3b31066a3d5d20b146d32', function(data) {
				$('#city').text(data.name);
				$('<div>', {
					text: "Температура: ",
					append: $('<span>', {
						text: data.main.temp + ' ',
					}).add($('<img>', {
						src: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
						css: {
							width: '30px'
						},
					})).add($('<span>', {
						text: ' ' + data.weather[0].description,
					}))
				}).appendTo($('#tempet'));
			});
			$('#tempet').html(globalTemp);
			setTimeout(Temperatura, 300000);
		};
		Temperatura();
	});

/*********************************************************/
	

	function Donkey (name, fam){
		this.Name = name;
		this.Family = fam;
	};

	Donkey.prototype.walk = function(){
		console.log('Hello');
	};

	var iaDonkey = new Donkey('Volodja', 'Bogdanov');
	iaDonkey.prototype = Object.create(Donkey.prototype);

	console.log(iaDonkey);


/*********************************************************/
});

var Person = function (firstName){
	this.firstName = firstName;
};

Person.prototype.walk = function(){
	console.log("I am walking!");
};

Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
};

function Student(firstName, subject){
	Person.call(this, firstName);

	this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};


var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

console.log(student1 instanceof Person)

console.log(student1);

/*********************************************************/

var source, dest, len, now = 0,
	delay = 100,
	letters = 1;

function show_text() {
	source = document.getElementById("pageTextSource");
	dest = document.getElementById("pageText");
	len = source.innerText.length;
	show();
}

function show() {
	dest.innerText += source.innerText.substr(now, letters);
	now += letters;
	setTimeout("show()", delay);
}

show_text();


function User (name, age) {
    this.name = name;
    var _age = age;

    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
            _age = age;
    }
}

var man = new User('Volodja', 25);
console.log(man);
console.log(man.getAge());