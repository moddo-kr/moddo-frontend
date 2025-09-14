import { ShareData } from '../model/share.type';

const shareKakao = (shareData: ShareData) => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    buttonTitle: '정산하러 가기',
    content: {
      title: shareData.title,
      description: shareData.text,
      link: {
        webUrl: shareData.url,
      },
    },
  });
};

export default shareKakao;
