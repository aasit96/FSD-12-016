# EventLoop

JS is synchronous ans single threaded bydefault

## There can be async behavior
- with BrowserAPI - setTimeout, setInterval,setImmediate,nextTick
- with promises
- with event handlers
## Promise
A function not execute immediately but it must be after a while.It has some status during the execution at final it may resolve(success) or reject(unsuccess).
## call back function
that pass as argument or  the parameter to another function.
## modern java script divided into two category
1.Common js(.cjs)->supports OOPS -> require
      -first priority (nextTick, Promise, setImmediate/setTimeout)
2.ModuleJS (.mjs)->follow modular approach -> import 
      -priority (promise, nextTick, nextTick, setImmediate/setTimeout) 
      
