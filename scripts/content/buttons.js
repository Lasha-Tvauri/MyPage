const menuButtons = document.querySelectorAll('#menu .menuButton');
menuButtons.forEach(button => {
    button.onclick = function() {
        menuButtons.forEach(btn => {
            // Use the variable for idle state
            btn.style.color = 'var(--menu-btn-idle)';
        });
        
        // Use the variable for active state
        this.style.color = 'var(--menu-btn-active)';

        switch (this.innerText) {
            case 'Home':
                homeFunction();
                break;
            case 'About':
                aboutFunction();
                break;                
            case 'Projects':
                projectsFunction();
                break;
            case 'Contact':
                contactFunction();
                break;
            default:
                break;
        }        
    };
});
