// 元素進入可視範圍
const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const items = entry.target.querySelectorAll('.parallax-item')
      items.forEach((item) => {
        let result = item.classList.contains('parallax-child-sbs')
        let childs = item.querySelectorAll('.parallax-child-sbs > *')
        if (result) {
          if (entry.isIntersecting) {
            if (!childs[0].classList.contains('show')) {
              setAnimClass(childs, 'show')
            }
            item.classList.remove('show-out')
          } else {
            if (entry.boundingClientRect.y > 0) {
              childs.forEach((child) => {
                child.classList.remove('show')
              })
            } else {
              item.classList.add('show-out')
            }
          }
        } else {
          if (entry.isIntersecting) {
            item.classList.add('show')
          } else {
            item.classList.remove('show')
          }
        }
      })
    })
  },
  { threshold: 0.4 }
)

function setAnimClass(childrens, className) {
  let idx = 0
  const length = childrens.length

  function addClass() {
    if (idx < length) {
      childrens[idx].classList.add(className)
      idx++
      setTimeout(addClass, 10)
    }
  }
  addClass()
}

export default function (className) {
  const elements = document.querySelectorAll(className)

  elements.forEach((element) => {
    observe.observe(element)
  })

  const scrollElements = document.querySelectorAll('.parallax-item[data-type=slowMove]')
  scrollElements.forEach((element) => {
    const top = element.closest('.parallax').offsetTop
    window.addEventListener('scroll', () => {
      if (element.classList.contains('show')) {
        let scrollY = window.scrollY
        if (scrollY > top) {
          element.style.transform = `translateY(${(scrollY - top) * 0.5}px)`
        }
      }
    })
  })
}
