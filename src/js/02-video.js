import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(handleTimeUpdate, 1000));
function handleTimeUpdate(evt) {
  localStorage.setItem(CURRENT_TIME, evt.seconds);
}
// console.log(player);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);
