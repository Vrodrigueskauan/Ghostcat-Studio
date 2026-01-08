import barba from "@barba/core";
import { gsap } from "gsap";

barba.init({
    transitions: [
        {
            name: "portal-transition",

            async leave(data) {
                const portal = document.querySelector("#transition-portal");

                
                await gsap.to(data.current.container, {
                    opacity: 0,
                    filter: "blur(20px)",
                    scale: 0.95,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

                
                await gsap.to(portal, {
                    opacity: 1,
                    backdropFilter: "blur(40px)",
                    scale: 1.4,
                    duration: 0.7,
                    ease: "power3.out"
                });
            },

            async enter(data) {
                const portal = document.querySelector("#transition-portal");

                
                gsap.from(data.next.container, {
                    opacity: 0,
                    scale: 0.9,
                    filter: "brightness(2) blur(20px)",
                    duration: 0.6,
                    ease: "power2.out"
                });
// Portal fecha suavemente
                await gsap.to(portal, {
                    opacity: 0,
                    backdropFilter: "blur(0px)",
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.inOut"
                });
            }
        }
    ]
});
