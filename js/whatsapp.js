/**
 * whatsapp button functions
 */

'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    whatsappButton.addEventListener('mouseover', () => {
        whatsappButton.getElementsByClassName('whatsapp_text')[0].style.visibility = 'visible';
    });

    whatsappButton.addEventListener('mouseout', () => {
            whatsappButton.getElementsByClassName('whatsapp_text')[0].style.visibility = 'hidden';
    });

});
