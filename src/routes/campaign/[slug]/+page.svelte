<script lang="ts">
    import ProfileSection from "../../../components/ProfileSection.svelte";
    import HeaderBar from "../../../components/HeaderBar.svelte";
</script>

<HeaderBar />

<ProfileSection
    message={"Hello World!"}
    progressTitle={"Hello World!"}
    currentAmount={50.00}
    targetAmount={100.00}
    donations={10}
/>