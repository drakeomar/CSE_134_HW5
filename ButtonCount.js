/**Custom Element
 *
 */
class ButtonCount extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){

        this.attachShadow({mode: "open"}); //attach shadow root with open mode
        const wrapper_el = document.createElement("div");
        wrapper_el.setAttribute("class","click-effect"); //css click effect
        const button_el = wrapper_el.appendChild(document.createElement("span"));
        const count_el = wrapper_el.appendChild(document.createElement("span"));

        this.count_el = count_el;

        Object.assign(wrapper_el, {
            id: "button-wrapper",
            onclick: (event) => this.click_count++, //increase with every click
        })

        Object.assign(button_el, {
            id: "button-text",
            innerText: "Times Clicked : "
        })

        Object.assign(count_el, {
            id: "button-count",
            innerText: 0, //initial count value is 0

        })

        /**style*/
        const style = document.createElement("style");
        style.textContent = `
        /* Click effect */
       
        .click-effect {
          background-position: center;
          transition: background 0.5s;
        
        }
        .click-effect:hover {
          background: var(--highlight-color) radial-gradient(circle, transparent 1%, var(--highlight-color) 1%) center/20000%;
        }
        .click-effect:active {
          background-color: #6eb9f7;
          background-size: 100%;
          transition: background 0s;
        }
        
        /* Button style */
        #button-wrapper {
          display: flex; 
          flex-direction: row; 
          justify-content: space-between; 
          align-items: center; 
          border-radius: .25rem;
          border: var(--accent-color) solid .2rem; 
          padding: 1rem 1.5rem;
          margin: 1rem; 
          cursor: pointer;
          background-color: #faebed;; 
          box-shadow: 0 0 4px #999;
          outline: none;
          color: var(--main-background-color);
        }
        `
        /** attach nodes to shadowRoot */
        this.shadowRoot.append(style, wrapper_el);
    }

    /** getter for click_count, reads count_el text and returns*/
    get click_count(){
        return Number(this.count_el.innerText);
    }

    set click_count(count){
        this.count_el.innerText = `${count}`;
    }

}

customElements.define("button-count", ButtonCount);
