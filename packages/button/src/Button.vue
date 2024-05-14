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

<style lang="scss">
.testClass {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #212529;
    background-color: #e9ecef;
}
</style>
