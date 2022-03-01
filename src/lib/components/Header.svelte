<script lang='ts'>
    export let id:number
    export let content = {
        header:'',
        subHeader:''
    }
    const {
        header,
        subHeader
    } = content;
</script>

<main id={`header=${id}`}>
    <heading>
        <h1>{header}</h1>
        <h2>{subHeader}</h2>
    </heading>
</main>