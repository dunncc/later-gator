//  take a look at the expected behavior for Part 1 here: https://youtu.be/WH2TbnkirpQ
//
// assume you have access to 2 provided functions:
// 1. later(targetQuery, callback) finds a valediction that is appropriate for a targetQuery.
//    targetQuery: to whom you'd like to offer an appropriate valediction (https://en.wikipedia.org/wiki/Valediction)
//                  (if it is a substring of a known target, the corresponding valediction will be provided,
//                   otherwise a random one will be selected)
//    callback: function that you want later to call with the valediction result when it's ready.
//              this function will be called with the following argument:
//        result: an object with the keys:
//            target: to whom the result is intended to go
//            valediction: what to say to the target
// 2. options(callback, query) finds all known valediction targets or those that include the substring specified in query, if it's provided.
//    callback: function that you want options to call with the known valediction targets, when they're ready.
//              this function will be called with the following argument:
//        keys: an array of known valediction targets
//    query: a constraint on which valediction targets to include. Only those of which query is a substring will be included.
// get refs to the input and output elements in the page
// get refs to the input and output elements in the page


// for Part 2
// change the code so that rather than directly requesting a valediction with the user's input,
// the page instead queries for matching targets using the provided options() function 
// (if the user hasn't entered anything, simply exclude the query argument in your invocation to options).
// add each of the resulting target options as buttons in list items in the ul.
// when any of these buttons are clicked, user the later() function to request the corresponding valediction and update the output element as in Part 1
// get refs to the input, output, and available targets (ul) elements in the page
// get refs to the input, output, and available targets (ul) elements in the page
const input = document.getElementById("target");
const output = document.querySelector("output");
const availableTargets = document.getElementById("available-targets");

input.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    const query = input.value.trim(); 
    console.log("Enter detected. current value:", query);
    options(updateTargetButtons, query ? query : undefined);
  }
});

const updateTargetButtons = (targets) => {
  console.log("updateTargetButtons", targets);
  availableTargets.innerHTML = '';
  targets.forEach((target) => {
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = target;

    button.addEventListener('click', () => {
      later(target, setOutput); 
    });

    listItem.appendChild(button);
    availableTargets.appendChild(listItem);
  });
};

const setOutput = (result) => {
  console.log("setOutput", result);
  output.textContent = `${result.valediction}, ${result.target}`;
};
