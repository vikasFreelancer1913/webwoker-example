# Learn Web-woker basic example

### How to run
Clone it and then run your application by using **http-server** command. If its not in your machine then you
can install it from:
```
npm i http-server
```

### First run without web-worker. Basic version
To run this first uncomment the **main_bad.js** and comment the **main.js** from **index.html**. As shown in image
![html script](./images/html_example.JPG)

Here when you click on Calculate button and then change background button. You will observe the page gets hanged and nothing is
happening, till the calculation not completed. This is because Javascript runs on single thread and until the whole calculation
not completed all other tasks gets queued. Once calculation is done then your background will change. Here you will face the 
demerit of single threaded Javascript.

### Now run with enabling Web-worker feature.
For this comment the **main_bad.js** and uncomment **main.js** form **index.html**. Now clear the cache and run your application again. Now follow the same process, first click on calculate button and then click on change background button. You will observe now your page is not getting hanged and your background is also changing and parallely the calculation is also running. After few seconds you will see the result of calculation also on your window.

#### TA_DA... The magic of WEB WORKER.

## Thanks for testing it, I hope you have learned something new today. To follow and learn more please visit my website [thisissingh.com](https://www.thisissingh.com/){:target="_blank" rel="noopener"}