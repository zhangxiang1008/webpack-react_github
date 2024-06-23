{
  /* <div id="image-container">
  <img class="lazy" data-src="path/to/image1.jpg" alt="Image description 1">
  <img class="lazy" data-src="path/to/image2.jpg" alt="Image description 2">
  <!-- 更多图片... -->
</div> */
}

function lazyLoadImages() {
  const images = document.querySelectorAll(".lazy") || [];
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log("🚀======lazyLoadImages", windowHeight, scrollTop);
  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < windowHeight + scrollTop) {
      //在可视区域内
      const src = image.dataset.src;
      if (src) {
        image.src = src;
        image.classList.remove("lazy");
        image.classList.add("loaded");
      }
    }
  });
  // 如果所有图片都已加载，可以考虑移除滚动监听器
  if (!images.some?.((img) => img.className.includes("lazy"))) {
    window.removeEventListener("scroll", lazyLoadImages);
    window.removeEventListener("resize", lazyLoadImages);
  }
}

// 初始化时检查可视区域内的图片
lazyLoadImages();

// 监听滚动和窗口大小变化事件
window.addEventListener("scroll", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
