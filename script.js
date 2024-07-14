document.addEventListener("DOMContentLoaded", function () {
  let currentTextIndex = parseInt(localStorage.getItem("currentTextIndex")) || 0;
  const paragraphs = document.querySelectorAll('.slogans p');
  const numParagraphs = paragraphs.length;

  function showText(index) {
      paragraphs.forEach((paragraph, i) => {
          if (i == index) {
              paragraph.style.display = 'inline-block';
          } else {
              paragraph.style.display = 'none';
          }
      });
      localStorage.setItem("currentTextIndex", index);
  }

  function showNextSlog() {
      if (currentTextIndex < numParagraphs - 1) {
          currentTextIndex++;
      } else {
          currentTextIndex = 0; // Reset to the first paragraph
      }
      showText(currentTextIndex);
  }

  function showPreviousSlog() {
      if (currentTextIndex > 0) {
          currentTextIndex--;
      } else {
          currentTextIndex = numParagraphs - 1; // Move to the last paragraph
      }
      showText(currentTextIndex);
  }

  showText(currentTextIndex); // Show the current text on load

  document.getElementById('rightarrow').addEventListener('click', showNextSlog);
  document.getElementById('leftarrow').addEventListener('click', showPreviousSlog);

  // Set interval for automatic change every 1.2 seconds
  setInterval(showNextSlog, 2000);
});
   