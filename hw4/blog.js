/**setObj defined to simplify setting with JSON.stringify
 *
 * @param key
 * @param obj
 */
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
/**getObj defined to simplify getting with JSON.parse
 *
 * @param key
 * @returns {any}
 */
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


/**DOM ELEMENTS*/
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const summaryInput = document.getElementById('summary-text');
const updateTitleInput = document.getElementById('update-title-input');
const updateDateInput = document.getElementById('update-date-input');
const updateSummaryInput = document.getElementById('update-summary-text');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancel-button');
const outputBox = document.getElementById('output-box');

/**create new blog post, display it, and update backing array
 *
 */
function createBlogPost(){

    const newPostDialog = document.getElementById('new-post-dialog');
    const titleInput = document.getElementById('title-input');
    const dateInput = document.getElementById('date-input');
    const summaryInput = document.getElementById('summary-text');
    /*
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancel-button');
    const outputBox = document.getElementById('output-box');
    let newPost = "";
    let posts = localStorage.getObj("posts");
    */

    /**clear inputs and show dialog for new post*/
    titleInput.value = "";
    titleInput.required = true;
    dateInput.value = "";
    dateInput.required = true;
    summaryInput.value = "";
    summaryInput.required = true;
    newPostDialog.show();
}

/**
 * Update the current blog post being editted, display edits, and update backing arrow
 */
function updateBlogPost(){
    const updatePostDialog = document.getElementById('update-post-dialog');
    let posts = localStorage.getObj("posts");
    let postNumber = event.srcElement.id.slice(-1);

    /**assign corresponding inputs and show dialog for updating post*/
    document.getElementById('update-title-input').value = posts[postNumber][0];
    document.getElementById('update-title-input').required = true;
    document.getElementById('update-date-input').value = posts[postNumber][1];
    document.getElementById('update-date-input').required = true;
    document.getElementById('update-summary-text').value = posts[postNumber][2];
    document.getElementById('update-summary-text').required = true;
    document.getElementById('update-post-number').value = postNumber;

    updatePostDialog.show();

}
/**
 * delete the associated blog post from localStorage and the display
 *
 */
function deleteBlogPost(){
    let deleteDialog = document.getElementById('delete-post-dialog');

    let postNumber = event.srcElement.id.slice(-1);
    document.getElementById('delete-post-number').value = postNumber;

    deleteDialog.show();

}

/**blogMain
 * mainly attach even listeners and mock blog posts with helper functions
 */
function blogMain(){
    let posts;

    if (localStorage.getItem("count") === null) {
        localStorage.setObj('count', 0);
    }

    localStorage.setObj('count', 0);

    /**TESTING LOCALSTORAGE**
    localStorage.setObj(`post${localStorage.getObj}`, `1`)
    console.log(localStorage.getObj(`test`));
    */

    document.getElementById('add-post').addEventListener('click', () => {
        createBlogPost();
    });

    posts = localStorage.getObj('posts');

    if (localStorage.getItem("count") === null) {
        localStorage.setObj('posts', []);
    }
    if(posts.length === 0){
        posts = makeDummyPosts();
    }

    localStorage.setObj('posts', posts);

    const newPostDialog = document.getElementById('new-post-dialog');

    /** if user cancels their new post, then set all required input to not required and allow dialog to close*/
    cancelBtn.addEventListener('click', ()=>{
        titleInput.required = false;
        dateInput.required = false;
        summaryInput.required = false;
    });

    document.getElementById('delete-confirmBtn').addEventListener('click',()=>{

        let posts = localStorage.getObj("posts");
        let postNumber = document.getElementById('delete-post-number').value;
        posts.splice(postNumber); //remove from localStorage

        document.getElementById(`post-${postNumber}`).style.display = "none";

        //decrement count of posts
        localStorage.setObj("count", localStorage.getObj("count")-1);
        localStorage.setObj("posts", posts);
    });

    //listen for click of confirm button, and check if input is filled in,
    // if whitespace only, then dialoag will close as required will be satisifed
    // in the form inputs, but it will not make a new post, as the inputs are trimmed
    // for excess whitespace in the if statement check
    document.getElementById('update-confirmBtn').addEventListener('click', ()=>{
        let posts = localStorage.getObj("posts");
        let postNumber = document.getElementById('update-post-number').value;
        console.log("POSTNUMBER");
        console.log(postNumber);

        if(updateTitleInput.value.trim() && updateDateInput.value.trim() && updateSummaryInput.value.trim()){
            document.getElementById(`post-title-${postNumber}`).innerHTML = updateTitleInput.value;
            document.getElementById(`post-date-${postNumber}`).textContent = updateDateInput.value;
            document.getElementById(`post-summary-${postNumber}`).textContent = updateSummaryInput.value;

            /**update localStorage*/
            posts[postNumber][0] = updateTitleInput.value;
            posts[postNumber][1] = updateDateInput.value;
            posts[postNumber][2] = updateSummaryInput.value;
            localStorage.setObj('posts',posts);
        }


    });

    confirmBtn.addEventListener('click', () => {


            if(titleInput.value.trim() && dateInput.value.trim() && summaryInput.value.trim() ){

                //increment count of posts
                localStorage.setObj("count", localStorage.getObj("count")+1);

                let csPost = `
                        <li id="post-${localStorage.getObj("count")-1}"> 
                        <div style="display:flex; flex-direction: row; justify-content: space-around; align-items: center; 
                        border:solid black 1px;margin: 1rem; border-radius: 2rem">
                            
                                <div style="display: flex; flex-direction:row">
                                    <h2 id="post-title-${localStorage.getObj("count")-1}">${titleInput.value} </h2>
                                    <p id="post-date-${localStorage.getObj("count")-1}">posted ${dateInput.value} </p>
                                </div>

                                <p id="post-summary-${localStorage.getObj("count")-1}">${summaryInput.value}</p>
                                
                            
                            <button class="edit-buttons" id="edit-button-${localStorage.getObj("count")-1}">Edit</button>
                            <button class="delete-buttons" id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                            </div>
                        </li>
                        
                        `;

                document.getElementById("post-list").innerHTML += csPost;

                /** handle click events with correct functions for buttons*/
                document.getElementById(`delete-button-${localStorage.getObj("count")-1}`).onclick = () =>{
                    deleteBlogPost();
                };
                document.getElementById(`edit-button-${localStorage.getObj("count")-1}`).onclick = () =>{
                    updateBlogPost();
                };

                bindDummyButtons();

                let newPostArray = new Array();

                /**update posts in local storage*/
                newPostArray.push(titleInput.value);
                newPostArray.push(dateInput.value);
                newPostArray.push(summaryInput.value);
                posts.push(newPostArray);

                localStorage.setObj("posts", posts);
            }

    });
    populateWithBlogs(posts);
}

function makeDummyPosts(){
    return [["New JS Framework", "2023-01-02","This generic new framework/library will remedy all of your problems."],
        ["Using Bootstrap for Responsive Design", "2020-02-23","This article provides details on a framework to help expedite web design."],
        ["Hacking 101: Port Sniffing", "2023-02-02", "The basics and fundamentals of networking, ports, and common tools."],
        ["Creating Art with Code", "2019-05-22", "Simple ways to animate using CSS and JavaScript in a Web Browser."]];
}
function populateWithBlogs(posts){
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i]);
        let title = posts[i][0];
        let date = posts[i][1];
        let summary = posts[i][2];

        localStorage.setObj("count", localStorage.getObj("count")+1);

        let csPost = `
                        <li id="post-${localStorage.getObj("count")-1}"> 
                        <div style="display:flex; flex-direction: row; justify-content: space-around; align-items: center; 
                        border:solid black 1px;margin: 1rem; border-radius: 2rem">
                            
                                <div style="display: flex; flex-direction:row">
                                    <h2 id="post-title-${localStorage.getObj("count")-1}">${title} </h2>
                                    <p id="post-date-${localStorage.getObj("count")-1}">posted ${date} </p>
                                </div>

                                <p id="post-summary-${localStorage.getObj("count")-1}">${summary}</p>
                                
                            
                            <button class="edit-buttons" id="edit-button-${localStorage.getObj("count")-1}">Edit</button>
                            <button class="delete-buttons" id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                            </div>
                        </li>
                        `;

        document.getElementById("post-list").innerHTML += csPost;
    }
    bindDummyButtons();

}

/** binds the dummy or mock buttons separately to avoid conflicts
 *
 */
function bindDummyButtons(){
    let deleteButtons = document.getElementsByClassName('delete-buttons');
    for(let j = 0; j < deleteButtons.length; j++){
        deleteButtons[j].addEventListener('click', () => deleteBlogPost());
    }

    let editButtons = document.getElementsByClassName('edit-buttons');
    for(let j = 0; j < editButtons.length; j++){
        editButtons[j].addEventListener('click', () => updateBlogPost());
    }
}


export {blogMain}