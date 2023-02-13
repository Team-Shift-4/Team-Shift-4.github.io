<template>
    <div v-html="ViewMarkdown"></div>
</template>
<script>
import marked from 'marked';
import highlight from 'highlight.js'
import 'highlight.js/styles/dark.css'
export default {
    computed: {
        ViewMarkdown() {
            return marked(this.markdown, {
                highlight(md) {
                    return highlight.highlightAuto(md).value
                }
            })
        }
    },
    props: ['markdown']
}
</script>

<style scoped>

</style>
