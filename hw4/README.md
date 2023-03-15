
    NAME: DRAKE OMAR 

    PID: A15326724

    NETLIFY LINK: https://spectacular-fox-5cf6da.netlify.app/

    PUBLIC GITHUB: https://github.com/drakeomar/CSE_134B_2

I would have liked to have made things a little bit cleaner/separated out a lot more of my code, but 
I did the best with the time that we had. 

Part 1:
        
    All of this part is contained within nativedialogs.html-- I simply included a script tag 
        with the appropriate script. 
    Prompt vs Safer Prompt: 
        The main difference between the two is the lack of DOM purification or 
        "sanitization" in the regular prompt displayed. This means that potentially
        malicious code entered as user input may be able to be injected, and, in
        general, the regular prompt is more susceptible to XSS attacks. The Safer
        Prompt takes advantage of DOMPurify in order to remove potentially harmful 
        bits of HTML all in order to scrub user input. 

    For the tagged template literals, I utilized them in order to sanitize my input.

    I utilized setTimeout in order to properly clear the output tag before displaying
    the alert.

Part 2:

    For the custom dialog section, there is customdialog.html and customdialog.js. I generated the dialog innerHTML
        based upon whichever button was pressed, and then proceeded with event listeners from there. The Main function
        handles most of the binding.
    
Part 3:

        crud.html is the main html page with blog.js associated with it. 

        For prepopulating the localStorage array and page with dummy posts, I simply initialized the
        array within localStorage storing all the posts with 4 generic blog postings.
        If this requirement did not exist, and/or if persistence across page loads was a requirement,
        then I would have simply populated the page with whatever exists in the array "posts"
        within localStorage.

        I have functions correlating to delete, update, and create, (deleteBlogPost(), updateBlogPost(), createBlogPost()), 
        whereupon event listeners attached to buttons drive the main interactivity of my page. The functions themselves
        pretty much 

        Each new post is indexed with id's for every significant element of each post, incremented based off of a count variable 
        stored in localStorage. For instance, one post will have an id "post-0" for its section tag, and the next will be 
        "post-1". I keep a hidden value in the dialog form to maintain which post the dialog box is appearing for when 
        updating or deleting a post. This way, the correct post may be updated within the backing array as well as 
        on the screen. 

Part 4:

        styledcrud.html is the html file for the styled CRUD Blog page. I changed the color scheme, added
        fonts and styled up the posts and buttons-- fixing alignment/display, as well.
        A lot of the styling for this part is inlined within the styledblog.js filed itself and
        then written onto styledcrud.html. However, there is also a styledblog.css file attached for certain 
        responsibilities.

Part 5: 

    Information found in changelog.md: (copied from there): 

        For the website changes (markup, style, content): 
    
            Updating some aspects of my website, I decided to include more and better content.
            I decided to write better descriptions and include more information for my work experiences, 
            and I also was more descriptive about each of the CS Projects listed. 
        
            For my art projects, I included two more photos with descriptions on the 
            art_projects.html page. I have also created a new webpage called art_gallery.html that hosts
            just the photos and titles of some of my art. It is intended to eventually hold all of my hosted art 
            on the site. Animations have been added on most pages. FAQs page is still a work in progress. 

            I also slightly updated my 404 page. 

        For the third party libraries:
        
            I downloaded fullPage.js and Anime.js, and the rest are pulled externally. 
        
            Google Analytics: Tracks user and traffic activity
            link: 
        
                I included the script tags in the head element of each page in order 
                to better track all activity across my site. This should help me better 
                understand how to improve my site with data.
        
            fullPage.js: Create full page websites/sections spanning the whole viewport easily
            link: https://alvarotrigo.com/fullPage/
                
                I utilized this in order to create my art-gallery page at art_gallery.html, whereupon
                one can scroll through pictures one at a time and appreciate each in its own individuality. 
                I included the link to the gallery on the main art_projects.html page.
        
            Animate on Scroll: add effects easily upon scrolling through the page
            link: https://github.com/michalsnik/aos
        
                I included this script of the bottom of the pages (as per the docs), 
                and utilized it in order to simplify allowing elements and sections to
                fade in upon being visible in the viewport. It is simple, but could be 
                better optimized, to be honest. 
        
            Anime: create and automate animations for html elements
            link: https://animejs.com/
        
                I used anime to simply animate the menu buttons doing a 360 degrees rotation upon
                the initital page load on every webpage. 


