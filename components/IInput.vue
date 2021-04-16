<template>
  <div>
    <label>{{ name }}</label>
    <input
      type="text"
      :value="value"
      name="name"
      :placeholder="placeholder"
      class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-3"
    />
  </div>
</template>
<script>
export default {
  name: 'i-input',
  props: {
    value: String,
    name: String,
    placeholder: String,
  },
}
</script>