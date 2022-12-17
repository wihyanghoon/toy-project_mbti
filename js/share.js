const url = 'https://wihyanghoon.github.io/toy-project_mbti/'

function setShare() {
    const resultImg = document.querySelector('.result_img')
    const resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '재벌집 막내아들 환생 테스트 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = `${url}img/img-${resultAlt}.jpeg`
    const shareURL = `${url}page/result-${resultAlt}.html`
    Kakao.Share.sendDefault({
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
                title: '참여하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ],
    });
}