// code for timer lives in this file

// Export Timer class from this file for use in script.js
export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".minutes"),
            seconds: root.querySelector(".seconds"),
            control: root.querySelector(".time-set"),
            start: root.querySelector(".time-start"),
            stop: root.querySelector(".time-stop"),
            reset: root.querySelector(".time-reset"),
        };

        //set the initial values to 0
        this.interval = null;
        this.timeRemain = 0;

        //Event listener for click event on the control button to set the time
        this.el.control.addEventListener("click", () => {
            //TODO: code here
        });

        //Event listener for click event on the start button to start or pause the timer
        this.el.start.addEventListener("click", () => {
            //TODO: code here
            if (this.interval === null) {
                this.start();
            }
        });
    }

    // Update the display of the timer
    displayTimeUpdate() {
        // Calculate the minutes and seconds remaining 
        const minutesRemaining = Math.floor(this.timeRemain / 60);
        const secondsRemaining = this.timeRemain % 60;
        //Access the textContent property of the minutes and use a ternary operator to display the remaining minutes with a preceeding 0 if less than 10
        this.el.minutes.textContent = minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
        //Access the textContent property of the seconds and use a ternary operator to display the remaining seconds with a preceeding 0 if less than 10
        this.el.seconds.textContent = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;

    }

    // Update button display
    displayControlUpdate() {
        // Change play/pause button based on whether the timer is running or not
        if (this.interval === null) {
        this.el.start.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.start.classList.add("time-start");
        this.el.start.classList.remove("time-pause-play");
        } else {
        this.el.start.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.start.classList.add("time-pause-play");
        this.el.start.classList.remove("time-start");
        }
    }
    
    // Start the timer
    start(){
        // Account for idiots: If the timer is already running, do nothing
        if(this.secondsRemaining === 0) return;

        // Code to decrement the time remaining
        this.interval = setInterval(() => {
            this.secondsRemaining--;
            this.displayTimeUpdate();

            // Check if the timer has reached zero
            if (this.secondsRemaining === 0) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }, 1000);
    }
         

    // insert HTML
    static getHTML() {
        // Button class key: 
        // time-start: play button; time-pause-play: pause button; time-stop: resets time to 00:00; 
        // time-set: button for user time input; time-reset: button to reset timer to user input
        // TODO: add stop button to reset timer to 00:00
        // TODO: add reset button to reset timer to user input
        return ` 
            <button type="button" class="time-btn time-set">
                <span class="material-icons">timer</span>
            </button>
            <button type="button" class="time-btn time-reset">
                <span class="material-icons">refresh</span>
            </button>
            <div>
                <span class="timer minutes">00</span>
                <span class="timer">:</span>
                <span class="timer seconds">00</span>
            </div>
            <button type="button" class="time-btn time-pause-play time-start">
                <span class="material-icons">play_arrow</span>
            </button>
            <button type="button" class="time-btn time-stop">
                <span class="material-icons">stop</span>
            </button>
        `;
    }
}

