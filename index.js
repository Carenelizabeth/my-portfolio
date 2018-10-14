function handleButtons(){
    console.log('handle buttons ran');
    $('.email').click(e => {
        e.preventDefault();
        console.log('email clicked')
    });
    $('.github').click(e => {
        e.preventDefault();
        console.log('github clicked')
        window.open('https://github.com/Carenelizabeth');
    });
    $('.linkedin').click(e => {
        e.preventDefault();
        console.log('linkedin clicked')
        window.open('https://www.linkedin.com/in/caren-keyes-5595b130/');
    });
}

handleButtons();