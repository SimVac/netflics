<script>
    import Presentazione from "../../lib/components/Presentazione.svelte";
    export let noi = [{
        "foto" : "./ska.jpg",
        "nome" : "Andrea Scarsato",
        "descrizione": "Andrea DevScornato is the master of coding with a smirk. They say his code not only runs flawlessly but also judges your life choices. Andrea is on a mission to inject sarcasm into every line of code. Beware: Working with him may lead to an addiction to dark humor and snow."
    },
    {
        "foto" : "./corra.jpg",
        "nome" : "Mattia Corradini",
        "descrizione": "Coding is an art, and Mattia AxiomShreds is here to make sure it rocks harder than your grandma's favorite band. When he's not shredding on his guitar, he's shredding through code like a metalhead through a mosh pit. With a knack for turning technical challenges into epic riffs, Mattia brings a rockstar vibe to the programming world. Warning: May unleash guitar solos during debugging sessions. Earplugs strongly recommended."
    },
    {
        "foto" : "./vacca.jpg",
        "nome" : "Simone Vacca",
        "descrizione": "Ever wanted to turn your code into a quantum leap of chaos? Simone QuantumChaos has got the secret sauce. This mysterious programmer defies the laws of logic and gravity, creating software that's as unpredictable as a black cat on Friday the 13th. Rumor has it, Simone once turned a bug into a virus just to spice things up. Don't be surprised if your code starts questioning its existence – that's just Simone's quantum touch."
    }]
</script>

<div>
    {#each noi as persona}
        <Presentazione {persona} />
    {/each}
</div>

<div>
    <a href="https://www.themoviedb.org/?language=it-IT" target="_blank"><img src="logo.png" alt=""></a>
    <span>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</span>
</div>
