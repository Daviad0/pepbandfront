<template>
    <div onclick="showGeneralError(null)" class="error-popup error-popup-hidden error-bg" id="error-popup">
        <div class="flex center">
            <span class="medium spacing-right material-symbols-rounded" id="error-popup-icon">error</span>
            <span class="small" id="error-popup-message">An Unexpected Error Occurred!</span>
        </div>
        
    </div>



    <div class="footer flex center">
        <div onclick="window.open('https://forms.gle/XH29yoLGFhqy7tYG7')" class="item error-bg">
            <a>Find a Problem?</a>
        </div>
        <div class="item" onclick="showPrivacyPolicy()">
            <a>Privacy Policy</a>
        </div>
        <div class="item" onclick="showTermsOfUse()">
            <a>Terms of Use</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        methods: {
            showPrivacyPolicy() {
                window.open('/privacy');
            },
            showTermsOfUse() {
                window.open('/terms');
            }
        }
    }
</script>