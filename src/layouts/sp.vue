<template>
  <FlexBox>
    <div class="sp-container">
      <slot />
    </div>
  </FlexBox>
</template>

<style lang="scss">
.sp-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
}
</style>
