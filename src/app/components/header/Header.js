import './Header.scss'
import template from './Header.html'

export class Header{
    constructor(){
        document.getElementById("header").innerHTML = template;
        var headerTemplate = document.getElementById("header");
        console.log('----------header',headerTemplate.querySelector("#fullScreen"))
     
        headerTemplate.querySelector("#toggleBaseGallery").addEventListener('click',e=>{
            console.log('toggle---------------------',document.querySelector(".sideBar"))
            // e.preventDefault(); 
             document.querySelector(".sideBar").classList.toggle("hidden");
        })
        headerTemplate.querySelector("#changeLanguage").addEventListener('click',e=>{
            e.preventDefault();
            localStorage.setItem('locale', headerTemplate.querySelector(e.currentTarget).attr("data-language"));
            location.reload();
        })
        headerTemplate.querySelector("#fullScreen").addEventListener('click',e=>{
            e.preventDefault();
            var elem = document.body; // Make the body go full screen.
            this.toggleFullscreen(elem);
        })
    }

     toggleFullscreen(elem) {
                        elem = elem || document.documentElement;
                        if (!document.fullscreenElement && !document.mozFullScreenElement &&
                            !document.webkitFullscreenElement && !document.msFullscreenElement) {
                            if (elem.requestFullscreen) {
                                elem.requestFullscreen();
                            } else if (elem.msRequestFullscreen) {
                                elem.msRequestFullscreen();
                            } else if (elem.mozRequestFullScreen) {
                                elem.mozRequestFullScreen();
                            } else if (elem.webkitRequestFullscreen) {
                                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                            }
                        } else {
                            if (document.exitFullscreen) {
                                document.exitFullscreen();
                            } else if (document.msExitFullscreen) {
                                document.msExitFullscreen();
                            } else if (document.mozCancelFullScreen) {
                                document.mozCancelFullScreen();
                            } else if (document.webkitExitFullscreen) {
                                document.webkitExitFullscreen();
                            }
                        }
            }
}

