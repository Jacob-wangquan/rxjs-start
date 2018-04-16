import Rx, { Observable } from 'rx';

var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .scan(count => count+1, 0)
  .subscribe(count => console.log("Clicked ${count} times"));