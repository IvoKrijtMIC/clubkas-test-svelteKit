<script>
    import Avatar from "./Avatar.svelte"
	import ContentCard from "./ContentCard.svelte";
    import Message from "./Message.svelte";
    import ProgressBar from "./ProgressBar.svelte";
    import Stats from "./Stats.svelte";
    export let message;
    export let progressTitle;
    let className = "profile";
</script>

<ContentCard {className}>
    <Avatar {className} />
    <Message />
    <ProgressBar />
    <Stats />
</ContentCard>