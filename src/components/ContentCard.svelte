<script lang="ts">
    export let className: string;
</script>

<div class="content-card p-5 bg-white m-5 shadow-md rounded {className}">
    <slot></slot>
</div>

<style>
    .content-card.profile {
        margin-top: -4rem;
    }
</style>