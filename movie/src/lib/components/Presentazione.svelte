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