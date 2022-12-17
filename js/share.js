const url = 'https://wihyanghoon.github.io/toy-project_mbti/'

function setShare(){
    console.log(infoList[0].name)
    var resultImg = document.querySelector('.result_img');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '십이간지 연애유형 결과';
    const shareDes = infoList[0].name;
    const shareImage = url + 'img/image-' + 0 + '.jpeg';
    const shareURL = url + 'page/result-' + 0 + '.html';
  
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
  
      buttons: [
        {
          title: '결과확인하기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ]
    });
  }