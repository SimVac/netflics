<script>
    import Presentazione from "../../lib/components/Presentazione.svelte";
    export let noi = [{
        "foto" : "movie/static/",
        "nome" : "Andrea Scarsato",
        "descrizione": ""
    },
    {
        "foto" : "movie/static/",
        "nome" : "Mattia Corradini",
        "descrizione": ""
    },
    {
        "foto" : "movie/static/",
        "nome" : "Simone Vacca",
        "descrizione": ""
    }]
</script>

{#each noi as persona}
    <Presentazione {persona} />
{/each}