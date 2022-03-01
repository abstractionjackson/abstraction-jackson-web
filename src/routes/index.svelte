<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    export let heading = {
        header: 'Welcome',
        subHeader: 'Feb 28th, 2022'
    }
</script>

<main>
    <header>
        <Header {...heading} />
    </header>
</main>