<script>
    import { onMount } from 'svelte';
 
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

<section>
    <h1 class="centered">NETFLICS</h1>
    <div class="centered">
        <div id="buttons">
            <a href="/explore"><button class="button">EXPLORE</button></a>
            <a href="/explore"><button class="button">WATCHLIST</button></a>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    
    :global(body) {
        background-image: url("home_wallpaper.jpg");
    }

    h1 {
        font-size: 13vw;
        color: rgb(248, 11, 11);
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
    
    a:link { 
        text-decoration: none; 
    } 

    a:visited { 
        text-decoration: none; 
    } 

    a:hover { 
        text-decoration: none; 
    } 

    a:active { 
        text-decoration: none; 
    }
</style>


