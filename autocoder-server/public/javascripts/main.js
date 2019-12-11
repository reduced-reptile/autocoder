function updateText(files) {
  const reader = new FileReader();
  reader.onload = function(evt) {
    let fileText = evt.target.result
    // sanitize the results to ASCII
    fileText.replace(/[^A-Za-z0-9 \n]+/g, "");
    console.log(fileText);
  };
  reader.readAsText(files[0]);
}

function showStep(stepnumber) {
  let steps = document.getElementsByClassName('step');
  for (const step of steps) {
    step.style.display = 'none';
  }
  document.getElementById('step' + stepnumber).style.display = 'block';
  switch(stepnumber) {
    case 2:
      toggleVisibilityForInput(2);
      break;
    case 3:
      toggleVisibilityForInput(3);
      callApi('ccc-prep', document.getElementById('contestInput').value)
      break;
    default:
      console.error('Invalid step number: ' + stepnumber);
  }
}

function toggleVisibilityForInput(stepnumber) {
  const e = document.getElementById('inputType');
  const displayElemenet = e.options[e.selectedIndex].value === 'file' ? 'fileInput' : 'formInput';
  const displayType = stepnumber === 2 ? 'block' : 'none';
  console.log(displayElemenet);
  document.getElementById(displayElemenet).style.display = displayType;
}

async function callApi(step, data) {
  const API_VERSION = '1.0.0';
  try {
    const answer = await postData(`/api/v${API_VERSION}/autocoder`, { step: step, data: data });
    console.log(JSON.stringify(answer)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
}

// copied from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}