<template>
  <div
    class="flexBox"
    :style="{
      gap: `${gap}px`,
      flexDirection: direction,
      padding: `${pt || py}px ${pr || px}px ${pb || py}px ${pl || px}px`
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  props: {
    gap: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'column'
    },
    py: {
      type: Number,
      default: 0
    },
    px: {
      type: Number,
      default: 0
    },
    pt: {
      type: Number,
      default: 0
    },
    pr: {
      type: Number,
      default: 0
    },
    pb: {
      type: Number,
      default: 0
    },
    pl: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.flexBox {
  display: flex;
}
</style>
