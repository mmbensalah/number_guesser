let randomNumber = Math.floor(Math.random() * 10)

$( document ).ready(function() {
  $("#guessSubmit").click(function() {
    let userGuess = parseInt($(".guessField").val());
    const checkGuess = (userGuess) => {
      if (isNaN(userGuess)) {
        alert("Not a number, try again");
      } else if(11 < userGuess || userGuess < 0) {
        alert("Number out of range, try again");
      } else if(userGuess > randomNumber) {
        event.preventDefault();
        $(".lastGuess").text(userGuess);
        $(".highLow").text("Too high");
      } else if (userGuess < randomNumber) {
        event.preventDefault();
        $(".lastGuess").text(userGuess);
        $(".highLow").text("Too low");
      } else {
        event.preventDefault();
        $(".message").text("Boom!");
        $(".lastGuess").text("");
        $(".highLow").text("");
      }
    };
    checkGuess(userGuess)
  });
  $("#guessClear").click(function() {
    $(".guessField").text("");
  });
  $("#reset").click(function() {
    $(".guessField").text("");
    randomNumber = Math.floor(Math.random() * 10)
  });
  $(function () {
    $('.guessField').keyup(function () {
      if ($(this).val() == '') {
          $('#guessClear').prop('disabled', true);
          $('#reset').prop('disabled', false);
      } else {
          $('#guessClear').prop('disabled', false);
          $('#reset').prop('disabled', true);
      }
    });
  });
});

// $("#minMaxBtn").click(function() {
//   let min = parseInt($(".minRange").val());
//   let max = parseInt($(".maxRange").val());
//   return numRange(min,max)
// });

// const numRange = (min,max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };
