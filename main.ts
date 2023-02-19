import { Audit } from "@siteimprove/alfa-act";
import { Scraper } from "@siteimprove/alfa-scraper";

import rules from "@siteimprove/alfa-rules";

/**
 * Dictionary for Alfa Rules
 */
let rulesDictionary: { [key: string]: string[] } = {
  'https://alfa.siteimprove.com/rules/sia-r100': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r101': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r102': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r103': ['1.4.3', '1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r104': ['1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r109': ['3.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r10': ['1.3.5'],
  'https://alfa.siteimprove.com/rules/sia-r110': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r11': ['2.4.4', '2.4.9', '4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r12': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r13': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r14': ['2.5.3'],
  'https://alfa.siteimprove.com/rules/sia-r15': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r16': ['1.3.1', ' 4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r17': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r18': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r19': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r1': ['2.4.2'],
  'https://alfa.siteimprove.com/rules/sia-r20': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r21': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r22': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r23': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r24': ['1.2.8'],
  'https://alfa.siteimprove.com/rules/sia-r25': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r26': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r27': ['1.2.2'],
  'https://alfa.siteimprove.com/rules/sia-r28': ['1.1.1', '4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r29': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r2': ['1.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r30': ['1.2.1'],
  'https://alfa.siteimprove.com/rules/sia-r31': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r32': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r33': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r34': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r35': ['1.2.1'],
  'https://alfa.siteimprove.com/rules/sia-r36': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r37': ['1.2.5'],
  'https://alfa.siteimprove.com/rules/sia-r38': ['1.2.3', '1.2.5', '1.2.8'],
  'https://alfa.siteimprove.com/rules/sia-r39': ['1.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r3': ['4.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r40': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r41': ['2.4.9'],
  'https://alfa.siteimprove.com/rules/sia-r42': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r43': ['1.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r44': ['1.3.4'],
  'https://alfa.siteimprove.com/rules/sia-r45': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r46': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r47': ['1.4.4', '1.4.10'],
  'https://alfa.siteimprove.com/rules/sia-r48': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r49': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r4': ['3.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r50': ['1.4.2'],
  'https://alfa.siteimprove.com/rules/sia-r52': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r53': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r54': ['3.3.1', '4.1.3'],
  'https://alfa.siteimprove.com/rules/sia-r55': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r56': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r57': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r58': ['2.4.1'],
  'https://alfa.siteimprove.com/rules/sia-r59': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r5': ['3.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r60': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r61': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r62': ['1.4.1'],
  'https://alfa.siteimprove.com/rules/sia-r63': ['1.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r64': ['1.3.1', ' 2.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r65': ['2.4.7'],
  'https://alfa.siteimprove.com/rules/sia-r66': ['1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r67': ['1.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r68': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r69': ['1.4.4', '1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r6': ['3.1.1'],
  'https://alfa.siteimprove.com/rules/sia-r70': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r71': ['1.4.8'],
  'https://alfa.siteimprove.com/rules/sia-r72': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r73': ['1.4.8'],
  'https://alfa.siteimprove.com/rules/sia-r74': ['1.4.8'],
  'https://alfa.siteimprove.com/rules/sia-r75': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r76': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r77': ['1.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r78': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r79': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r7': ['3.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r80': ['1.4.8'],
  'https://alfa.siteimprove.com/rules/sia-r81': ['2.4.4', '2.4.9'],
  'https://alfa.siteimprove.com/rules/sia-r82': ['3.3.1'],
  'https://alfa.siteimprove.com/rules/sia-r83': ['1.4.4'],
  'https://alfa.siteimprove.com/rules/sia-r84': ['2.1.1', '2.1.3'],
  'https://alfa.siteimprove.com/rules/sia-r85': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r86': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r87': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r88': ['1.4.3', '1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r89': ['1.4.6'],
  'https://alfa.siteimprove.com/rules/sia-r8': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r90': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r91': ['1.4.12'],
  'https://alfa.siteimprove.com/rules/sia-r92': ['1.4.12'],
  'https://alfa.siteimprove.com/rules/sia-r93': ['1.4.12'],
  'https://alfa.siteimprove.com/rules/sia-r94': ['4.1.2'],
  'https://alfa.siteimprove.com/rules/sia-r96': ['2.2.4', '3.2.5'],
  'https://alfa.siteimprove.com/rules/sia-r97': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r98': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r99': ['NULL'],
  'https://alfa.siteimprove.com/rules/sia-r9': ['2.2.1', '2.2.4', ' 3.2.5'],
  'https://alfa.siteimprove.com/rules/sia-r95': ['2.1.1']
};
const ALFA_ALL_RULES = 35;

let rulesNotFollowedSet = new Set();

let httpList = [
  "https://www.aiims.edu/en.html",
  "www.igib.res.in",
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

Scraper.with(async (scraper) => {
  var outcomes;
  for (const input of await scraper.scrape(httpList[2])) {
    outcomes = await Audit.of(input, rules).evaluate();
    //console.log("Input: ", input)
    //console.log("Rules: ", rules)
  }
  //console.log(typeof outcomes)
  if (outcomes !== undefined) {
    const values = [...outcomes]
    //console.log(values[1])
    //console.log("FOUND URI: ", findUri(values[1]))
    //console.log("Dictionary", rulesDictionary[findUri(values[1])])

    values.forEach((jsonObj) => {
      //console.log(jsonObj)

      if (findUriForFailed(jsonObj) !== '') {
        rulesDictionary[findUriForFailed(jsonObj)].forEach((element) => {
          if (element !== 'NULL') {
            rulesNotFollowedSet.add(element)
          }
        })
      }
    })



    console.log(evaluateScore(rulesNotFollowedSet.size))
    console.log("TO Percent", toPercent(evaluateScore(rulesNotFollowedSet.size)))
    console.log("Testing Set", rulesNotFollowedSet)
    //   for (let key of Object.keys(values)) {
    //     console.log(values[key]);
    // }
    //loopKeys(values);
  }

  //console.log(outcomes)
});



function findUriForFailed(obj: any): string {
  if (obj._outcome === 'failed') {
    console.log(obj)
    return findUri(obj);
  }
  else {
    return '';
  }
}

function findUri(obj: any): string {
  for (const key in obj) {
    if (key === '_uri') {
      return obj[key];
    } else if (typeof obj[key] === 'object') {
      const result = findUri(obj[key]);
      if (result) {
        return result;
      }
    }
  }
  return '';

}

function evaluateScore(rulesNotFollowed: any) {
  return ALFA_ALL_RULES - rulesNotFollowed
}

function toPercent(value: number): number {
  var returnValue: number = 0.0;
  try {
    returnValue = parseFloat(((value / ALFA_ALL_RULES) * 100).toFixed(2));
  } catch (e) {
    console.error("toPercent error:", e);
    console.error("Setting Return Value to 0");
    returnValue = 0.0;
    return returnValue;
  } finally {
    return returnValue;
  }
}