<script>
    document.head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRNhkzBbbLO_FqyvE22kq1PZfO01nYp1OGaEd2Svt1VG5eIhJpYYrEZiY7GCX5vV_IIkM2tMf3G7wEaKXxqf1KJ4UjOdEgiCsRRSQ-GY97oXrLIuTjeMe13i3ggmOrtwyHDqO9OxQqzgAUsZ48yenCK0YFRoFx8jo7crnc06Eer27k5j8TiqnT6JV1p1Ee/s1600/favicon192x192.png"
        type="image/png">
    <title>Tywofy Game - A Typing Game</title>
    <meta name="keywords"
        content="Typing Game, BoostSkills, Tally Games, accuracyIncrease, WPM, SpeedUp, English word typing game, english typing game, game for typing speed, s">
    <meta name="description"
        content="Tywofy is a dynamic typing game where players race against time to type words accurately, scoring points for speed and precision.">
    <link rel="stylesheet" href="https://fakewachat.github.io/tywofy/Home/Style/style.css">`;

    //Body Part of the code.
    document.body.innerHTML = ` <div id="Result">
        <div class="GameName">Tywofy</div>
        <div class="textDet">Completed: <p class="InformationDet" id="completedWordsR">0</p>
        </div>
        <div class="textDet">Missed: <p class="InformationDet" id="missedWordsR">0</p>
        </div>
        <div class="textDet">Speed: <p class="InformationDet" id="wpmSpeedR">0 WPM</p>
        </div>
        <div class="textDet">Incorrect Inputs: <p class="InformationDet" id="incorrectInR">0</p>
        </div>
        <div id="resultDet">This is your performance. See and take a screenshot and share it with your friends to show
            your score in this game. Also, refer this game to your friends. This game will help you speed up your typing
            speed and accuracy. <br> <br> Refresh this page to start a new game.</div>
    </div>
    <nav>
        <h1>TYWOFY</h1> - Best Game For Making Typing Intresting
    </nav>
    <div id="MWin">
        <div id="SpaceAlrt">Press 'SPACE'</div>
        <div id="details">
            <div class="textDet">Upcoming: <p class="InformationDet" id="upcomingWords">0</p>
            </div>
            <div class="textDet">Completed: <p class="InformationDet" id="completedWords">0</p>
            </div>
            <div class="textDet">Missed: <p class="InformationDet" id="missedWords">0</p>
            </div>
            <div class="textDet">Speed: <p class="InformationDet" id="wpmSpeed">0 WPM</p>
            </div>
            <div class="textDet">Incorrect Inputs: <p class="InformationDet" id="incorrectIn">0</p>
            </div>
        </div>
    </div>
    <div id="Introduction">Always press 'Space' after completing a word. This
        game will also increase the accuracy and speed of your typing. <br><br>This is a typing game. Type the words
        shown on the screen. We will count your incorrect
        inputs, missed words, speed and completed words. </div>
    <footer>
        Copyright © 2023 Tywofy
    </footer>`;

    //Here you can script right you done before. 
    //You can add more script files here by provided method above.
   function addExternalScript(src) {
            var script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        }

        // Function to add inline JavaScript code dynamically
        function addInlineScript(code) {
            var script = document.createElement('script');
            script.innerHTML = code;
            document.body.appendChild(script);
        }

        // Add external JavaScript file
        addExternalScript('https://fakewachat.github.io/tywofy/Home/Script/script.js');

        // Add inline JavaScript code
        var inlineCode = `
            // Inline JavaScript code goes here
            console.log('This is inline JavaScript code.');
        `;
        addInlineScript(inlineCode);
  
     function changeURLWithoutRedirect(newURL) {
            window.history.replaceState({}, document.title, newURL);
        }

        // Example usage
        var currentURL = window.location.href;
        var newURL = currentURL.replace('p/home.html', '');
        changeURLWithoutRedirect(newURL);
    console.log("Hellow");
</script>
