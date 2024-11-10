document.addEventListener("DOMContentLoaded", function () {
  var resultTextDiv = document.getElementById("resultText");
  var restartButton = document.getElementById("restartButton");

  // 로컬스토리지에서 답변 가져오기
  var answers = JSON.parse(localStorage.getItem("answers"));

  if (!answers) {
    resultTextDiv.textContent = "결과를 계산할 수 없습니다.";
    return;
  }

  var resultCountry = calculateResult(answers);

  resultTextDiv.innerHTML =
    "당신의 선택들이 합쳐져 만들어진 나라는 <strong>" +
    resultCountry +
    "</strong>입니다!";

  restartButton.addEventListener("click", function () {
    // 답변 초기화
    localStorage.removeItem("answers");
    // 홈 화면으로 이동
    window.location.href = "index.html";
  });

  function calculateResult(answers) {
    // 나라별 점수 초기화
    var scores = {
      미국: 0,
      독일: 0,
      일본: 0,
      한국: 0,
      영국: 0,
      러시아: 0,
      프랑스: 0,
      중국: 0,
      개발도상국: 0,
    };

    // 각 답변에 따라 점수 부여
    answers.forEach(function (answer, index) {
      switch (index) {
        case 0: // 첫 번째 질문
          if (answer === "전쟁을 한다") {
            scores["독일"] += 2;
            scores["러시아"] += 1;
          } else if (answer === "땅을 준다") {
            scores["프랑스"] += 1;
            scores["중국"] += 1;
          } else if (answer === "외교로 해결한다") {
            scores["영국"] += 2;
            scores["미국"] += 1;
          }
          break;
        case 1:
          if (answer === "투자하여 개발한다") {
            scores["미국"] += 2;
            scores["일본"] += 1;
            scores["한국"] += 1;
          } else if (answer === "무시한다") {
            scores["개발도상국"] += 1;
          } else if (answer === "다른 나라에서 사온다") {
            scores["중국"] += 2;
          }
          break;
        case 2:
          if (answer === "복지 정책을 강화한다") {
            scores["프랑스"] += 2;
            scores["스웨덴"] = (scores["스웨덴"] || 0) + 1;
          } else if (answer === "긴축 정책을 시행한다") {
            scores["독일"] += 2;
          } else if (answer === "다른 나라에 도움을 요청한다") {
            scores["개발도상국"] += 2;
          }
          break;
        case 3:
          if (answer === "개혁을 수용한다") {
            scores["한국"] += 2;
            scores["미국"] += 1;
          } else if (answer === "탄압한다") {
            scores["러시아"] += 2;
            scores["중국"] += 1;
          } else if (answer === "부분적으로 받아들인다") {
            scores["영국"] += 1;
            scores["프랑스"] += 1;
          }
          break;
        case 4:
          if (answer === "농업 기술을 발전시킨다") {
            scores["일본"] += 2;
            scores["미국"] += 1;
          } else if (answer === "수입을 늘린다") {
            scores["한국"] += 1;
            scores["영국"] += 1;
          } else if (answer === "식량 배급제를 실시한다") {
            scores["러시아"] += 2;
            scores["중국"] += 1;
          }
          break;
        case 5:
          if (answer === "동맹에 참여한다") {
            scores["영국"] += 2;
            scores["프랑스"] += 1;
          } else if (answer === "중립을 유지한다") {
            scores["스위스"] = (scores["스위스"] || 0) + 2;
          } else if (answer === "자체 군비를 강화한다") {
            scores["독일"] += 2;
            scores["러시아"] += 1;
          }
          break;
        case 6:
          if (answer === "자원을 개발한다") {
            scores["미국"] += 2;
            scores["러시아"] += 1;
          } else if (answer === "자연 보호를 우선한다") {
            scores["스웨덴"] = (scores["스웨덴"] || 0) + 2;
            scores["스위스"] = (scores["스위스"] || 0) + 1;
          } else if (answer === "외국 기업에 개발권을 준다") {
            scores["개발도상국"] += 2;
          }
          break;
        case 7:
          if (answer === "지원한다") {
            scores["프랑스"] += 2;
            scores["영국"] += 1;
          } else if (answer === "규제한다") {
            scores["중국"] += 2;
            scores["러시아"] += 1;
          } else if (answer === "관여하지 않는다") {
            scores["미국"] += 1;
            scores["스위스"] = (scores["스위스"] || 0) + 1;
          }
          break;
        case 8:
          if (answer === "출산 장려 정책을 펼친다") {
            scores["일본"] += 1;
            scores["러시아"] += 1;
          } else if (answer === "인구 조절 정책을 시행한다") {
            scores["중국"] += 2;
          } else if (answer === "별다른 조치를 취하지 않는다") {
            scores["미국"] += 1;
            scores["영국"] += 1;
          }
          break;
        case 9:
          if (answer === "백신 개발에 투자한다") {
            scores["한국"] += 2;
            scores["미국"] += 1;
          } else if (answer === "격리 조치를 시행한다") {
            scores["중국"] += 1;
            scores["일본"] += 1;
          } else if (answer === "전염병을 은폐한다") {
            scores["개발도상국"] += 2;
          }
          break;
        case 10:
          if (answer === "이민을 허용한다") {
            scores["독일"] += 2;
            scores["미국"] += 1;
          } else if (answer === "이민을 제한한다") {
            scores["일본"] += 2;
            scores["러시아"] += 1;
          } else if (answer === "이민자들을 추방한다") {
            scores["중국"] += 1;
            scores["개발도상국"] += 1;
          }
          break;
        case 11:
          if (answer === "조건을 받아들인다") {
            scores["개발도상국"] += 2;
          } else if (answer === "협상을 시도한다") {
            scores["영국"] += 1;
            scores["프랑스"] += 1;
          } else if (answer === "무역을 중단한다") {
            scores["북한"] = (scores["북한"] || 0) + 2;
          }
          break;
        default:
          break;
      }
    });

    // 최고 점수를 가진 나라를 선택
    var maxScore = 0;
    var resultCountries = [];
    for (var country in scores) {
      if (scores[country] > maxScore) {
        maxScore = scores[country];
        resultCountries = [country];
      } else if (scores[country] === maxScore) {
        resultCountries.push(country);
      }
    }

    // 결과가 여러 나라일 경우 랜덤 선택
    var resultCountry =
      resultCountries[Math.floor(Math.random() * resultCountries.length)];

    return resultCountry;
  }
});
