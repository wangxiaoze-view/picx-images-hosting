<script lang="ts" setup>
defineOptions({
  name: 'ComponentA'
})

interface IProps {
  msg: string
}
withDefaults(defineProps<IProps>(), {
  msg: 'ComponentA组件'
})
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
  </div>
</template>

<style lang="scss"></style>
