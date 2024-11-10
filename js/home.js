document.addEventListener("DOMContentLoaded", function () {
  var startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    // 기존 답변 삭제
    localStorage.removeItem("answers");
    // question.html로 이동
    window.location.href = "question.html";
  });
});
