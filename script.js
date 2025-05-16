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

    function openModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show');
}
