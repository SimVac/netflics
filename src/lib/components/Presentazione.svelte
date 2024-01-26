<script>
    export let persona;
</script>

<div class="card">
    <img src={persona.foto} alt="">
    <div class="text">
        <h1>{persona.nome}</h1>
        <p>{persona.descrizione}</p>
    </div>
</div>

<style>
    .text{
        max-width: 500px;
    }
    img{
        width: 20vw;
        height: 20vh;
    }
    .card{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 90vw;
        justify-content: space-around;
        height: 40vh;
    }
</style>