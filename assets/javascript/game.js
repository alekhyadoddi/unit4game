
$(document).ready(function () {
  var randomnumber;
  var totalScore = 0;
  var iscrystal;
  var win = 0;
  var loss = 0;
  var checkrandom = [];
  reset();
  // $(".link").on("click", game1());
  function reset() {

    $("#first-link").attr("rand", getrandomnum(true));
    $("#second-link").attr("rand", getrandomnum(true));
    $("#third-link").attr("rand", getrandomnum(true));
    $("#fourth-link").attr("rand", getrandomnum(true));

    $("#random-number").html("<h2>" + getrandomnum(false) + "</h2>");
    totalScore = 0;

    $("#totalscore").text(totalScore);
  }

  function checkrand(a) {

    if (checkrandom.indexOf(a)>= 0) {
      console.log("inside check random true");
      return true;

    }
    else {
      console.log("inside checkrandom false");
      return false;
    }

  }


  function getrandomnum(iscrystal) {
    if (iscrystal === true) {
      randomnumber = Math.floor(Math.random() * 12) + 1;
      console.log(randomnumber);
      var exists = checkrand(randomnumber);
      console.log(exists);
      if (exists === false) {
        console.log("doesnot exists");
        checkrandom.push(randomnumber);
        console.log(checkrandom);
        return randomnumber;
        console.log("crystal" + randomnumber);
      }
      else {
        console.log("exists hence calling again");

        getrandomnum(true);
      }
    }
    else {
      randomnumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
      return randomnumber;
      console.log("random" + randomnumber);
    }
  }



  $(".link").on("click", function () {
    var x = $(this).attr("rand");
    game(x);


  });


  function game(val) {
    console.log(val);
    console.log(val);


    totalScore = totalScore + parseInt(val);
    console.log(totalScore);
    $("#totalscore").text(totalScore);
    if (totalScore > randomnumber) {
      console.log("loss");
      looser();
    }
    else if (totalScore === randomnumber) {
      console.log(win);
      winner();
    }

  }
  function winner() {
    win++;
    $("#win").text(win);
    reset();
  }
  function looser() {
    console.log(loss);
    loss++;
    $("#loss").text(loss);
    reset();
  }



});



