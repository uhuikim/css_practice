const icon_width = 79,
    icon_height = 79,
    num_icon = 9,
    time_per_icon = 100,
    indexes = [0, 0, 0];

const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * num_icon + Math.round(Math.random() * num_icon);

    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style["background-position-y"]);

    console.log(backgroundPositionY);

    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
};

const rollAll = () => {
    const reelsList = document.querySelectorAll(".slots > .reel");

    [...reelsList].map((reel, index) => {
        roll(reel, index);
    });
};

rollAll();
