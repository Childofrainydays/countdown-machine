// code for timer lives in this file

export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();
    }

    static getHTML() {
        return `
            <button type="button" class="time-btn time-set">
                <span class="material-icons">timer</span>
            </button>
            <div>
                <span class="timer minutes">00</span>
                <span class="timer">:</span>
                <span class="timer seconds">00</span>
            </div>
            <button type="button" class="time-btn time-pause-play time-start">
                <span class="material-icons">play_arrow</span>
            </button>
        `;
    }
}

