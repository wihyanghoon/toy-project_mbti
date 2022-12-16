const main = document.querySelector('#main')
const qna = document.querySelector('#qna')
const quesqion = document.querySelector("#quesqion")
const answerBox = document.querySelector("#answer_box")
const status = document.querySelector(".status_bar")
const result = document.querySelector("#result")
const resultName = document.querySelector(".result_name")
const imgBox = document.querySelector(".result_img")
const desc = document.querySelector(".result_desc")

let endPoint = 12
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0]

function calResult() {
    const result = select.indexOf(Math.max(...select))
    return result
}

function begin() {
    main.style.display = "none";
    qna.style.display = "flex";
    let i = 0
    goNext(i);
}

function goNext(index) {
    if (index >= endPoint) {
        goResult()
    } else {
        quesqion.innerHTML = qnaList[index].q;
        for (let i in qnaList[index].a) {
            addAnser(qnaList[index].a[i].answer, index, i)
        }
        status.style.width = (100 / endPoint) * (index + 1) + "%"
    }
}

function addAnser(answerText, index, resultIndex) {
    const answer = document.createElement('button')
    answer.classList.add('answer')
    answerBox.appendChild(answer)

    answer.innerHTML = answerText

    answer.addEventListener("click", function () {
        const answerlist = document.querySelectorAll(".answer")

        let target = qnaList[index].a[resultIndex].type; // type에 결과유형
        console.log(target[1])
        for (let i = 0; i < target.length; i++) { // target의 갯수만큼 반복함
            select[target[i]] += 1; // select 배열에 target의 i번째의 값을 select의 인덱스에 넣고 1 증가시킴
        }

        for (let i = 0; i < answerlist.length; i++) {
            answerlist[i].disabled = true;
            answerlist[i].style.display = "none";
        }
        goNext(++index)
    }, false)
}

function setResult() {
    let point = calResult();
    resultName.innerHTML = infoList[point].name

    let resultImg = document.createElement('img')
    let imgURL = `img/img-${point}.jpeg`
    resultImg.src = imgURL

    imgBox.appendChild(resultImg)

    desc.innerHTML = infoList[point].desc
}

function goResult() {
    qna.style.display = "none";
    result.style.display = "block";
    setResult();
}

function reFrash() {
    location.reload();
}