<script lang="ts">
    import Avatar from "./Avatar.svelte"
	import ContentCard from "./ContentCard.svelte";
    import Message from "./Message.svelte";
    import ProgressBar from "./ProgressBar.svelte";
    import Stats from "./Stats.svelte";
    export let message: string = "";
    export let progressTitle: string = "";
    export let currentAmount: number = 0.00;
    export let targetAmount: number = 0.00;
    export let donations: number = 0;
    let className: string = "profile";
</script>

<ContentCard {className}>
    <Avatar {className} />
    <Message {message} />
    <ProgressBar {progressTitle} progressValue={currentAmount} progressMax={targetAmount} />
    <Stats statsAmount={currentAmount} statsDonations={donations} />
</ContentCard>