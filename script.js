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
      document.getElementById("codeModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("codeModal").style.display = "none";
    }
