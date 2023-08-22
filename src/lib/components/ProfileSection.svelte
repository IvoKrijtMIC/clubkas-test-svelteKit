<script lang="ts">
    import Avatar from "./Avatar.svelte"
	import ContentCard from "./ContentCard.svelte";
    import Message from "./Message.svelte";
    import ProgressBar from "./ProgressBar.svelte";
    import Stats from "./Stats.svelte";
    export let message = "";
    export let current = 0;
    export let target = 0;
    export let donations = 0;
    let className = "profile";
</script>

<ContentCard {className}>
    <Avatar {className} />
    <Message {message} />
    <ProgressBar {current} {target} />
    <Stats {current} {donations} />
</ContentCard>