  function scrollToDetails() {
    const detailsList = document.querySelectorAll('.ticket-info details');
    const firstDetails = detailsList[0];

    if (firstDetails) {
      // 開く
      firstDetails.setAttribute('open', '');

      // スクロール（スムーズに）
      firstDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

    function showModal() {
      const modal = document.getElementById("codeModal");
      modal.classList.add("show");
    }

    function closeModal() {
      const modal = document.getElementById("codeModal");
      modal.classList.remove("show");

      // opacityが消えるまで少し待ってから非表示にする（display: none）
  setTimeout(() => {
    if (!modal.classList.contains("show")) {
      modal.style.display = "none";
    }
  }, 300);
}

// 表示時に display:flex を強制してからアニメーション発動
const modal = document.getElementById("codeModal");
const observer = new MutationObserver(() => {
  if (modal.classList.contains("show")) {
    modal.style.display = "flex";
  }
});
observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
