<script context="module">
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1';

        fetch(url)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch(err => console.error('error:' + err));


</script>

<script>

</script>