document.addEventListener("DOMContentLoaded", () => {
	const userNameDisplay = document.getElementById("user-name");
	const loggedInUser = sessionStorage.getItem("username");
	if (loggedInUser) {
		userNameDisplay.textContent = loggedInUser;
	}
	else {
		window.location.href = "/2index.html";
	}

	document.getElementById("logout-button").addEventListener("click", () => {
		sessionStorage.clear();
		window.location.href = "/2index.html";
	});
});


document.getElementById('trivia-form').addEventListener('submit', function (event) {
	event.preventDefault();

	var score = 0;
	var answers = {
		question1: 'option2',
		question2: 'option1',
		question3: 'option3'
	};

	for (var question in answers) {
		var userAnswer = document.querySelector('input[name="' + question + '"]:checked');
		if (userAnswer && userAnswer.value === answers[question]) {
			score++;
		}
	}

	if (score != 1) {
		document.getElementById('score').textContent = 'Ai raspuns corect la ' + score + ' intrebari.';
	}
	else {
		document.getElementById('score').textContent = 'Ai raspuns corect la ' + score + ' intrebare.';

	}
	document.getElementById('score').style.borderRadius = '7px';

	saveHighScore(score);

	var scoreMessage = document.getElementById('score');
	if (score === 0) {
		scoreMessage.classList.add('low-score');
	} else if (score === 1) {
		scoreMessage.classList.add('medium-score');
	} else {
		scoreMessage.classList.add('high-score');
	}

	var scoreImages = document.getElementById('scoreImages');

	while (scoreImages.firstChild) {
		scoreImages.removeChild(scoreImages.firstChild);
	}

	var newImage = document.createElement('img');


	var borderRadius = Math.floor(Math.random() * 50);
	newImage.style.borderRadius = borderRadius + "%";

	if (score === 0) {
		newImage.src = 'Imagini/score0var2.gif';
	} else if (score === 1) {
		newImage.src = 'Imagini/score1.webp';
	} else if (score === 2 || score === 3) {
		newImage.src = 'Imagini/score23.jpg';
	}

	scoreImages.appendChild(newImage);
	var divTrivia = document.getElementById("divTrivia");

	divTrivia.parentNode.removeChild(divTrivia);


	function saveHighScore(score) {
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push(score);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        displayHighScores();
    }

	function displayHighScores() {
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        let highScoresDiv = document.getElementById('highScores');
        highScoresDiv.innerHTML = '<h1>Scorurile trecute</h1>';
        highScores.forEach((score, index) => {
            let scoreElement = document.createElement('div');
            scoreElement.textContent = `Jocul ${index + 1}: ${score} intrebari corecte`;
            highScoresDiv.appendChild(scoreElement);
        });
    }



});



document.querySelectorAll('input[type="radio"]').forEach(radio => {
	radio.addEventListener('change', (event) => {
		event.target.parentElement.classList.add('highlight');
	});
});

document.getElementById('trivia-form').querySelector('button[type="submit"]').addEventListener('mouseenter', function(event) {
	event.target.classList.add('hover');
});

document.getElementById('trivia-form').querySelector('button[type="submit"]').addEventListener('mouseleave', function(event) {
	event.target.classList.remove('hover');
});


window.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		console.log("Ai apasat tasta Esc si ai fost redirectionat pe pagina principala");
		window.location.href = "/index.html";
	}
});
