$(document).ready(function () {
  var values = {
    100: "#ff0000",
    90: "#ffb300",
    80: "#ffff00",
    70: "#00ff00",
    60: "#00ff4c",
    50: "#00ffff",
    40: "#009aff",
    30: "#0000ff",
    20: "#d600ff",
    10: "#ff00ff",
    0: "#ff0000",
  };
  var colorState = false;
  var backgroundState = false;

  $(".color").click(function () {
    colorState = true;
    backgroundState = false;

    if (colorState && backgroundState === false) {
      $(".color").css("background-color", "#49b6f5");
      $(".background").css("background-color", "white");
    } else if (backgroundState && colorState === false) {
      $(".color").css("background-color", "white");
      $(".background").css("background-color", "#49b6f5");
    }
  });

  $(".background").click(function () {
    backgroundState = true;
    colorState = false;
    if (backgroundState && colorState === false) {
      $(".background").css("background-color", "#49b6f5");
      $(".color").css("background-color", "white");
    } else if (colorState && backgroundState === false) {
      $(".background").css("background-color", "white");
      $(".color").css("background-color", "#49b6f5");
    }
  });

  $(".slider").change(function () {
    $(".slider").data("data-color", values[this.value]);
    if (colorState) {
      $(".text").css("color", values[this.value]);
    } else if (backgroundState) {
      $(".text").css("background-color", values[this.value]);
    }
  });
});
