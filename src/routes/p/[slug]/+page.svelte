<script lang="ts">
    import ProfileSection from "$lib/components/ProfileSection.svelte";
    import HeaderBar from "$lib/components/HeaderBar.svelte";
</script>

<HeaderBar />

<ProfileSection
    message={"Hello World!"}
    current={50}
    target={100}
    donations={10}
/>