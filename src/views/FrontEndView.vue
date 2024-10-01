<template>
  <header class="container">
    <div class="vh-100 d-flex align-items-center justify-content-center overflow-hidden parallax">
      <WelcomeMsg class="parallax-item" data-type="slowMove" />
    </div>
  </header>
  <main class="position-relative pb-5">
    <article class="triangle-bg line-bg triangle-group overflow-hidden parallax">
      <section class="container">
        <div class="vh-100 row align-items-center justify-content-center position-relative">
          <ul class="triangle-circle parallax-item parallax-child-sbs" data-type="viewShow">
            <li v-for="(i, k) in 36" :key="k"><span class="t"></span></li>
          </ul>
          <div class="col-10 col-lg-6">
            <p>
              嗨，大家好！我是阿B，一名喜歡設計的設計人，現在正朝著前端開發的方向邁進。對於程式編寫，我一直抱有濃厚的興趣，因此開始學習相關課程。
            </p>
            <p>
              在學習現代框架技術之前，我曾使用HTML、CSS、JavaScript、jQuery、PHP和MySQL，為公司製作過完整的客戶網站。
            </p>
            <p>未來希望善用設計與程式結合，成為一名出色的前端工程師</p>
            <p class="tag-line">
              <span>HTML5</span><span>CSS</span><span>SASS</span><span>JavaScript</span>
              <span>Vue.js</span><span>Bootstrap</span>
            </p>
          </div>
        </div>
      </section>
    </article>
    <h1 class="text-center my-5">/ PROJECTS /</h1>
    <article class="container-fluid" v-for="item of portfolio" :key="item.id">
      <section class="row align-items-center justify-content-center py-5">
        <div class="col-10 col-sm-4 project-img text-center align-content-enter">
          <template v-for="(img, key) of item.imgs" :key="key">
            <br v-if="key > 0" />
            <img :src="`/public/images/${img}`" :alt="item.title" />
          </template>
          <ul class="triangle-item">
            <li v-for="(i, k) in 5" :key="k"></li>
          </ul>
        </div>
        <div class="col-10 col-sm-4 ps-sm-5 pt-5">
          <h3 class="py-4">{{ item.title }}</h3>
          <template v-for="(con, key) of item.content" :key="key">
            <p>{{ con }}</p>
          </template>
          <p class="tag-bgc" style="color: #00bcd4" v-if="item.tags.length">
            <span v-for="(tag, key) of item.tags" :key="key">{{ tag }}</span>
          </p>
          <a v-if="item.other.type == 'url'" class="view-btn" :href="item.other.con[0]">VIEW</a>
          <a
            v-if="item.other.type != 'url'"
            class="view-btn"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#view-box"
            @click="useCon = item.other"
            >VIEW</a
          >
        </div>
      </section>
    </article>
  </main>
  <!-- Scrollable modal -->
  <div class="modal fade" id="view-box" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <template v-if="useCon.type == 'video'">
            <video
              v-for="(val, key) of useCon.con"
              :key="key"
              :src="`./video/${val}`"
              width="100%"
              controls
            ></video>
          </template>
          <template v-if="useCon.type == 'image'">
            <img
              class="mb-2"
              v-for="(val, key) of useCon.con"
              :key="key"
              :src="`./images/${val}`"
              width="100%"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
  <footer
    class="d-flex align-items-center justify-content-center bg-dark text-light parallax"
    style="height: 300px"
  >
    <div class="parallax-item" data-type="slowMove">
      <p>Thanks for watching.</p>
      <p>/ 阿B protfolio /</p>
    </div>
  </footer>
</template>

<script setup>
// import { onMounted, ref } from 'vue'
import WelcomeMsg from '@/components/WelcomeMsg.vue'
import parallax from '@/assets/parallax'
import { onMounted, ref } from 'vue'

const portfolio = ref([
  {
    id: 1,
    title: '數據分析後台',
    content: [
      '主要作為數據篩選、查詢、展示的後臺系統',
      '使用vue3建置，搭配axios與後端資料庫串接。當中使用d3套件呈現數據展示的特效，包含靜、動態數據'
    ],
    imgs: ['A-index.jpg', 'A-index02.jpg'],
    tags: ['bootstrap', 'd3'],
    // other: { type: 'image', con: ['A-index.jpg', 'A-index02.jpg', 'B-img.jpg'] }
    other: { type: 'video', con: ['video-1.mp4'] }
  },
  {
    id: 2,
    title: '天氣預報-中央氣象署API',
    content: [
      '設計天氣預報查詢系統，搭配中央氣象署-氣象資料開放平台資源，實作簡易查詢',
      '主要練習: 串接API實作'
    ],
    imgs: ['B-img.jpg'],
    tags: ['bootstrap', 'API'],
    other: { type: 'url', con: ['https://jfu90.github.io/weatherAPI/'] }
  }
])
const useCon = ref('')

onMounted(() => {
  parallax('.parallax')
})
</script>

<style></style>
