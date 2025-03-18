  
  function startRaining(min, max) {
    // Run the raining effect for 5 seconds
    const rainDuration = 5000; // 5 seconds

    // Start the rain when the text is clicked
    const endTime = Date.now() + rainDuration;

    // Keep adding rain until the time is up
    const interval = setInterval(() => {
        if (Date.now() > endTime) {
            clearInterval(interval); // Stop raining after 5 seconds
        } else {
            let image = document.createElement('img');
            const randomImageNumber = Math.floor(Math.random() * (max-min+1)) + min; // Random number between 1 and 10
            image.src = `${randomImageNumber}.png`; // Image name changes dynamically from 1.png to 10.png
            image.style.position = 'absolute';
            image.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
            image.style.top = '-50px'; // Start above the screen
            image.classList.add('rain'); // Apply the falling animation

            image.style.width = '5%';  // Width of the image

            document.body.appendChild(image);

            // Remove the image after it falls off the screen
            setTimeout(() => {
                image.remove();
            }, 5000); // Match the duration of the animation
        }
    }, 100); // Add a new image every 100ms for the rain effect
}


function drawConnections() {
    const canvas = document.getElementById("connectionCanvas");
    const ctx = canvas.getContext("2d");

    // Resize canvas to match the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define specific connections (pairs of elements)
    const connections = [
        ["병아리", "감자와토끼의집"],
        ["감자와토끼의집", "배고파"],
        ["감자와토끼의집", "여우랑펭귄"],
        ["감자와토끼의집", "새까매"],
        ["새까매", "말차"],
        ["햄스터", "감자와토끼의집"],
        ["스타워즈", "감자와토끼의집"],
        ["감자와토끼의집", "카드보드"],
        ["감자와토끼의집", "야경"],
        ["새까매", "아마존"],
        ["새까매", "졸려"],
        ["졸려", "풀떼기"],
        ["감자와토끼의집", "한인회"],
        ["졸려", "지루해"],
        ["금속", "미로"],
        ["새까매", "미로"],
        ["졸려", "인쇄"],
        ["여우랑펭귄", "낭만"],
        ["여우랑펭귄", "금속"],
        ["지루해", "말차"],  // New connection
        ["병아리", "배고파"],  // New connection
        ["금속", "낡았어"],  // New connection
        ["햄스터", "스타워즈"]  // New connection
    ];

    // Function to get element positions
    function getElementPosition(className) {
        const el = document.querySelector(`.${className}`);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    // Clear canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set line styles
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)"; // White lines with 70% opacity
    ctx.lineWidth = 0.5;

    // Draw only the specified connections
    connections.forEach(([startClass, endClass]) => {
        const startPos = getElementPosition(startClass);
        const endPos = getElementPosition(endClass);

        if (startPos && endPos) {
            ctx.beginPath();
            ctx.moveTo(startPos.x, startPos.y);
            ctx.lineTo(endPos.x, endPos.y);
            ctx.stroke();
        }
    });
}

// Redraw lines when the page loads or resizes
window.onload = drawConnections;
window.onresize = drawConnections;
