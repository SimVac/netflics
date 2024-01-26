<script>
    import { onMount } from 'svelte';
    import {fly} from "svelte/transition"
    onMount(() => {
        let button = document.querySelector('.button');
        let testA = document.querySelector('a');
        let backgroundButton = document.querySelector('.background__button');

        button.addEventListener('mouseenter', function(){
            testA.classList.add('is-white')
            backgroundButton.classList.add('is-hover');
        });

        button.addEventListener('mouseleave', function(){
            testA.classList.remove('is-white')
            backgroundButton.classList.remove('is-hover');
        });
    });
</script>

<section in:fly={{y: 50, duration:500, delay: 500}} out:fly={{y: 0, duration:500}}>
    <div class="cont">
        <h1 class="centered">NETFLICS</h1>
        <div class="centered">
            <p class="neon">Enjoy your favourite <span class="upper">movies</span> on your favourite 
                <span class="upper">website</span></p>
        </div>
        <div class="centered">
            <div id="buttons">
                <a href="/explore"><button class="button">EXPLORE</button></a>
                <a href="/watchlist"><button class="button">WATCHLIST</button></a>
            </div>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    .upper{
        color: #f4b2b2;
        text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 40px rgb(242, 59, 13),
            0 0 80px rgb(242, 59, 13),
            0 0 90px rgb(242, 59, 13),
            0 0 100px rgb(242, 59, 13),
            0 0 150px rgb(242, 59, 13);
    }

    p{
        font-size: x-large;
    }

    .cont{
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    h1 {
        font-size: 12vw;
        font-weight: 500;
        font-style: italic;
        color: #fff;
        padding: 1rem 1rem 1rem;
        border: 0.4rem solid #fff;
        border-radius: 2rem;
        text-transform: uppercase;
        animation: flicker 50s infinite alternate;
    }

    .centered {
        display: flex;
        justify-content: center;
    }

    #buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
    }

    .button {
        width: 10vw;
        height: 8vh;
        background-color: rgb(248, 11, 11);
        border: none;
        border-radius: 10px;
        font-family: 'Roboto';
        color: #fffafa;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1vw;
    }

    .button:hover {
        color: red;
        background-color: #fffafa;
        cursor: pointer;
    }
    
    a { 
        text-decoration: none; 
    }

    .neon {
        color: #fff;
        text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 40px rgb(0, 51, 255),
            0 0 80px rgb(0, 51, 255),
            0 0 90px rgb(0, 51, 255),
            0 0 100px rgb(0, 51, 255),
            0 0 150px rgb(0, 51, 255);
    }


    @keyframes flicker {
    
    19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
        
        box-shadow:
            0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem var(--neon-border-color),
            inset 0 0 2rem var(--neon-border-color),
            0 0 4rem var(--neon-border-color),
            inset 0 0 4rem var(--neon-border-color);        
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
        box-shadow: none;
    }    
}
</style>


