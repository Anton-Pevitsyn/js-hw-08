import _ from "lodash";
const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);
const currentTimePlay = JSON.parse(
  localStorage.getItem("videoplayer-current-time")
);
const throttleOnPlay = _.throttle(onPlay, 10);

function onPlay(data) {
  localStorage.setItem(
    "videoplayer-current-time",
    JSON.stringify(data.seconds)
  );
}

player.on("timeupdate", throttleOnPlay);

player
  .setCurrentTime(currentTimePlay)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        break;
      default:
        break;
    }
  });

player
  .getEnded()
  .then(function (ended) {
    localStorage.removeItem("videoplayer-current-time");
  })
  .catch(function (error) {});
