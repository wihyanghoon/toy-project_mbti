const url = 'https://wihyanghoon.github.io/toy-project_mbti/'

function setShare(){
    
  
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: "dfdfd",
        description: "dfdfd",
        imageUrl: "dfdfd",
        link: {
          mobileWebUrl: "dfdfd",
          webUrl: "dfdfd"
        },
      },
  
      buttons: [
        {
          title: '결과확인하기',
          link: {
            mobileWebUrl: "dfdfd",
            webUrl: "dfdfd",
          },
        },
      ]
    });
  }