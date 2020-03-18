<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import './iconfont.js';

export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`;
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className;
      }
      return 'svg-icon';
    },
  },
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
