document.addEventListener("DOMContentLoaded", function () {
  var nextButton = document.getElementById("nextButton");
  var questionDiv = document.getElementById("question");
  var choicesDiv = document.getElementById("choices");

  var currentQuestionIndex = 0;
  var answers = [];

  var questions = [
    {
      question:
        "1. 옆 나라가 땅을 요구하며, 거절하면 전쟁을 하겠다고 합니다. 어떻게 하시겠습니까?",
      choices: ["땅을 준다", "전쟁을 한다", "외교로 해결한다"],
    },
    {
      question: "2. 새로운 기술이 등장했습니다. 어떻게 대응하시겠습니까?",
      choices: ["투자하여 개발한다", "무시한다", "다른 나라에서 사온다"],
    },
    {
      question: "3. 경제 위기가 찾아왔습니다. 어떻게 극복하시겠습니까?",
      choices: [
        "복지 정책을 강화한다",
        "긴축 정책을 시행한다",
        "다른 나라에 도움을 요청한다",
      ],
    },
    {
      question: "4. 국민들이 개혁을 요구하고 있습니다. 어떻게 하시겠습니까?",
      choices: ["개혁을 수용한다", "탄압한다", "부분적으로 받아들인다"],
    },
    {
      question: "5. 식량 부족 사태가 발생했습니다. 어떻게 대처하시겠습니까?",
      choices: [
        "농업 기술을 발전시킨다",
        "수입을 늘린다",
        "식량 배급제를 실시한다",
      ],
    },
    {
      question: "6. 주변 나라들이 동맹을 맺고 있습니다. 어떻게 하시겠습니까?",
      choices: ["동맹에 참여한다", "중립을 유지한다", "자체 군비를 강화한다"],
    },
    {
      question:
        "7. 자원이 풍부한 지역을 발견했습니다. 어떻게 활용하시겠습니까?",
      choices: [
        "자원을 개발한다",
        "자연 보호를 우선한다",
        "외국 기업에 개발권을 준다",
      ],
    },
    {
      question: "8. 문화 예술이 발전하고 있습니다. 정부의 대응은?",
      choices: ["지원한다", "규제한다", "관여하지 않는다"],
    },
    {
      question: "9. 인구가 급격히 증가하고 있습니다. 어떻게 대응하시겠습니까?",
      choices: [
        "출산 장려 정책을 펼친다",
        "인구 조절 정책을 시행한다",
        "별다른 조치를 취하지 않는다",
      ],
    },
    {
      question: "10. 전염병이 퍼지고 있습니다. 어떻게 대처하시겠습니까?",
      choices: [
        "백신 개발에 투자한다",
        "격리 조치를 시행한다",
        "전염병을 은폐한다",
      ],
    },
    {
      question:
        "11. 다른 나라에서 이민자들이 몰려오고 있습니다. 어떻게 하시겠습니까?",
      choices: ["이민을 허용한다", "이민을 제한한다", "이민자들을 추방한다"],
    },
    {
      question:
        "12. 국제 무역에서 불리한 조건을 제시받았습니다. 어떻게 대응하시겠습니까?",
      choices: ["조건을 받아들인다", "협상을 시도한다", "무역을 중단한다"],
    },
  ];

  // 로컬스토리지에서 답변 불러오기
  var storedAnswers = localStorage.getItem("answers");
  if (storedAnswers) {
    answers = JSON.parse(storedAnswers);
    currentQuestionIndex = answers.length;
  }

  showQuestion();

  nextButton.addEventListener("click", function () {
    var selectedOption = document.querySelector('input[name="choice"]:checked');
    if (!selectedOption) {
      alert("선택지를 선택해주세요.");
      return;
    }
    answers.push(selectedOption.value);
    localStorage.setItem("answers", JSON.stringify(answers));
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // 결과 페이지로 이동
      window.location.href = "result.html";
    }
  });

  function showQuestion() {
    if (currentQuestionIndex >= questions.length) return;

    questionDiv.textContent = questions[currentQuestionIndex].question;
    choicesDiv.innerHTML = "";
    var choices = questions[currentQuestionIndex].choices;
    for (var i = 0; i < choices.length; i++) {
      var choiceLabel = document.createElement("label");
      choiceLabel.classList.add("choice");
      var choiceInput = document.createElement("input");
      choiceInput.type = "radio";
      choiceInput.name = "choice";
      choiceInput.value = choices[i];
      choiceLabel.appendChild(choiceInput);
      choiceLabel.appendChild(document.createTextNode(" " + choices[i]));
      choicesDiv.appendChild(choiceLabel);
    }
  }
});
