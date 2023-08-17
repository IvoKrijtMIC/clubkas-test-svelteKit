<script>
    import Avatar from "./Avatar.svelte"
	import ContentCard from "./ContentCard.svelte";
    import Message from "./Message.svelte";
    import ProgressBar from "./ProgressBar.svelte";
    import Stats from "./Stats.svelte";
</script>

<ContentCard profileClass="profile">
    <Avatar avatarClass="profile" />
    <Message />
    <ProgressBar />
    <Stats />
</ContentCard>