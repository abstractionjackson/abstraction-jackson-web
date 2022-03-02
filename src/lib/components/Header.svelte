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

<main id={`header=${id}`} class="p-3 mt-8">
    <heading>
        <h1 class="capitalize text-4xl mb-3">{header}</h1>
        <h2 class='text-lg'>{subHeader}</h2>
    </heading>
</main>