const calFunctions = require("./main.js");

let httpList = [
  "https://example.com/",
  "https://dducollegedu.ac.in/",
  "https://registry.gov.in/",
  "https://aktu.ac.in/",
  "https://www.aiims.edu/index.php?lang=en",
    "https://www.aiims.edu/en.html",
    "www.igib.res.in",
    "http://csjmu.ac.in/",
    "https://www.igib.res.in/",
    "https://bobbyhadz.com/blog/javascript-typeerror-string-split-is-not-a-function#:~:text=The%20%22split%20is%20not%20a,the%20split%20method%20on%20strings.",
    "https://www.w3schools.com/js/js_object_sets.asp",
    "https://www.w3schools.com/js/js_const.asp",
    "https://www.w3schools.com/js/js_loop_for.asp",
    "https://www.w3.org/TR/WCAG21/#link-purpose-in-context",
    "https://www.learningcontainer.com/mp4-sample-video-files-download/#",
    "https://habitica.com/",
    "https://docs.google.com/document/d/1deRJ2xaMBan5dLiMHDhj-NvO3Mf_mZlIhP5qdVZT51U/edit",
    "https://mail.google.com/mail/u/1/#inbox",
    "https://example.com/",
  ];
  let guidelineType = ['A','AA','AAA','InGuideline']

  var htttpSelected = 0;
  var messageList = [];
  var guidelineSelected = 3;
  /**
  * Main Testing Code Function calls
  */
 //Use promises and async to ensure that code runs in a stepwise manner
 var sslResult;
 var newPromise = new Promise((resolve, reject) => {
   var sslChecker = require("ssl-checker");
   var url = require('url');
   resolve(
     sslChecker(url.parse(httpList[htttpSelected]).hostname).then((result) => sslResult = result )
   );
 }).catch((e) => {
     console.error("Error in ssl check: ",e);
     //console.log("Some error in http check ssl checker");
   });
 newPromise.then((message) => {
     console.info("ssl Checker Results:",sslResult);
     // console.log(sslResult);
     // console.log(message);
   nextPromise = new Promise((resolve, reject) => {
     /**
      * Website Evaluation Function Call
      */
     resolve((messageList = calFunctions.evaluateUrlAlfa(httpList[htttpSelected],guidelineType[guidelineSelected])));
     ///////////////
   });
   nextPromise
     .then((message) => {
         /**
          * Calculation Function Call
          */
         //console.log("Failed Guideline List", messageList);
         console.log("Failed Guideline", message);
         //console.log("messageList Length", message.length);
         //var rulesNotFollowedSet = calFunctions.getSetOfFailedRules(message);
         console.log("Failed count",message.length)
         var score = calFunctions.evaluateScore(message.length , guidelineType[guidelineSelected]);
         console.log(score);
         console.log(calFunctions.toPercent(score,guidelineType[guidelineSelected]));
     })
     .catch((e) => {
       console.error("error",e);
     })
    .finally(()=>{
      console.log("executed all call promises");
    })
 });


