function handleButtons(){
    const email="cejkeyes@gmial.com";

    $('.email').click(e => {
        e.preventDefault();
        console.log('email clicked')
        window.location.href="mailto:cejkeyes@gmail.com"
    });
    $('.github').click(e => {
        e.preventDefault();
        window.open('https://github.com/Carenelizabeth');
    });
    $('.linkedin').click(e => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/caren-keyes-5595b130/');
    });
}

handleButtons();