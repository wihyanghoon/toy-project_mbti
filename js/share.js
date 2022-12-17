function kakaoShare() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: "fdfd",
          description: "dfdfd",
          imageUrl: "dfdfd",
          link: {
            mobileWebUrl: "fdfd",
            webUrl: "dfdfdfd"
          },
        },
    
        buttons: [
          {
            title: '결과확인하기',
            link: {
              mobileWebUrl: "fdfd",
              webUrl: "dfdfdfd",
            },
          },
        ]
      });
}