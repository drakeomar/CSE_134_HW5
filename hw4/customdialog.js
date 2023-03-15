const dialogBox = document.getElementById("custom-alert-dialog");
const outputBox = document.getElementById('cs-output');
const alertBtn = document.getElementById('custom-alert-button');
const confirmBtn = document.getElementById('custom-confirm-button');
const promptBtn = document.getElementById('custom-prompt-button');

/**
 * Sanitize user inputs for the prompt dialog
 * @param strings
 * @param name
 * @returns {*}
 */
function customCleanUp(strings, name){
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    let cleanUserInput = DOMPurify.sanitize(`${str0}${name}${str1}${name}${str2}`, { USE_PROFILES: { html: true } });

    return cleanUserInput;
}

function customdialogMain() {

        /**listeners*/
        alertBtn.addEventListener('click', () => {
            outputBox.style.display = "none";
            alertDialog();
        });
        confirmBtn.addEventListener('click', () => {
            outputBox.style.display = "none";
            confirmDialog();
        });
        promptBtn.addEventListener('click', () => {
            outputBox.style.display = "none";
            promptDialog();
        });

    //document.getElementById('main-display').setHTML(testStr,new Sanitizer());
}

function alertDialog(){
    let dialogStr =
        ` <form method="dialog">
                <h2> ALERT! </h2>
                <p>
                   You are getting an URGENT MESSAGE!!
                </p>
                <div>
                    <button id="cs-confirm" value="default">OK</button>
                </div>
            </form>
        `;



    //let dialogBox = document.getElementById("custom-alert-dialog");
    dialogBox.innerHTML = dialogStr;

    const confirmBtn = document.getElementById('cs-confirm');
    //const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {

    });
    //cancelBtn.addEventListener('click', () => {

    //});

    dialogBox.show();
    return 0;
}
function confirmDialog(){
    let dialogStr =
        `<form method="dialog">
                <h2>Do you confirm to the terms and conditions?</h2>
                <div>
                    <button id="cs-cancel" value="cancel">No</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>`;

    dialogBox.innerHTML = dialogStr;


    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {
        outputBox.innerHTML = `<div style="border: solid black 4px;
                                        border-style:double;padding:1rem;"><p>Confirm Result: true </p></div>`;
        outputBox.style.display = "inline-block";
    });
    cancelBtn.addEventListener('click', () => {
        outputBox.innerHTML = `<div style="border: solid black 4px;
                                        border-style:double;padding:1rem;"><p>Confirm Result: false </p></div>`;
        outputBox.style.display = "inline-block";
    });

    dialogBox.show();
}
function promptDialog(){
    let dialogStr =
        `
            <form method="dialog">
                <p>
                    <label>What is your name?</label>
                    <input id="name-input" type="text" required maxlength="30">
                </p>
                <div>
                    <button id="cs-cancel" value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>`;


    //let dialogBox = document.getElementById("custom-alert-dialog");
    dialogBox.innerHTML = dialogStr;

    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {
        let personName = document.getElementById("name-input").value;
        if(personName.trim()){
            outputBox.innerHTML = customCleanUp`<div style="border: solid black 4px; border-style:double;padding:1rem;"><p>Welcome ${personName}!</p>
                               <p>This website aims to provide cool features for users like you, ${personName}</p></div>`;
            outputBox.style.display = "inline-block";
        }

    });
    cancelBtn.addEventListener('click', () => {
        document.getElementById('name-input').required = false;
        outputBox.innerHTML = `<div style="border: solid black 4px; border-style:double;padding:1rem;"><p>User did not enter anything! </p></div>`;
        outputBox.style.display = "inline-block";
    });

    dialogBox.show();
}

export {customdialogMain, confirmDialog, alertDialog, promptDialog}
