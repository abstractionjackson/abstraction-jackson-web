
<script lang="ts">
    import Header from '$lib/components/Header.svelte'

    export let heading;
</script>

<main>
    <header>
        <Header {...heading} />
    </header>
</main>