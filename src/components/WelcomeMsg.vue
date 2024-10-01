<template>
  <div class="text-center welcome-msg"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const animTexts = ref([
  {
    content: ['Hi,', '歡迎來到我的小灶咖！', '/ 阿B protfolio /'],
    classLs: ['anim', 'anim delay', 'text-end me-5 anim small delay']
  },
  { content: ['這裡的心血', '比雞蛋還新鮮'], classLs: ['anim', 'anim delay'] },
  { content: ['可以直接往下', '謝謝'], classLs: ['anim', 'anim delay'] },
  {
    content: ['Hi,', '小灶咖已經準備就緒', '/ 阿B protfolio /'],
    classLs: ['anim', 'anim delay', 'text-end me-5 anim small delay']
  }
])

const creatText = (content, classLs, styleLs) => {
  let el = document.createElement('p')
  el.appendChild(document.createTextNode(content))
  if (classLs) el.setAttribute('class', classLs)
  if (styleLs) el.setAttribute('style', styleLs)
  return el
}

const animateShow = () => {
  const textBox = document.querySelector('.welcome-msg')

  if (animTexts.value.length) {
    if (textBox.hasChildNodes()) {
      const anims = textBox.querySelectorAll('.anim')
      anims.forEach((el) => {
        el.setAttribute('style', 'top:0')
        el.classList.remove('delay')
        el.classList.remove('show')
      })
    }

    const animText = animTexts.value.shift()
    setTimeout(() => {
      textBox.replaceChildren()
      animText.content.forEach((item, idx) => {
        const el = creatText(item, animText.classLs[idx])
        textBox.appendChild(el)
      })
    }, 500)

    setTimeout(() => {
      const anims = textBox.querySelectorAll('.anim')
      anims.forEach((el) => {
        el.classList.add('show')
      })

      setTimeout(() => {
        animateShow()
      }, 2000 * animText.content.length)
    }, 1000)
  }
}

onMounted(() => {
  animateShow()
})
</script>
