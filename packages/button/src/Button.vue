<template>
    <div>
        <button class="yb-button" @click="clickHandler">
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
import { hello } from '@ybui/shared'
const prop = withDefaults(defineProps<{ text?: string }>(), { text: 'worldddd' })
const clickHandler = () => {
    hello(prop.text)
}
</script>

<style scoped></style>