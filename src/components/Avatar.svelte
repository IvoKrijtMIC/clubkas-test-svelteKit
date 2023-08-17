<script>
    export let avatarClass = "";
</script>

<div class="avatar w-[150px] mx-auto mb-8 shadow-md rounded-full bg-white p-0.5 relative {avatarClass}">
    <img alt="" src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/MIC+Prototypes+en+Demo%27s/MIC_basic_profile-image.svg" class="min-w-full" />
    <div class="badge absolute w-[75px] -bottom-6 -right-5">
        <img alt="" src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/MIC+Prototypes+en+Demo's/Badges/SVG/badge_blauw_brons" />
    </div>
</div>

<style>
    .avatar.profile {
        margin-top: -100px;
    }
</style>