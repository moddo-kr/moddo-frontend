/* eslint-disable @typescript-eslint/no-shadow */

/**
 * 글로벌 환경에서 Kakao 객체를 사용할 수 있도록 선언합니다.
 */
declare global {
  interface Window {
    Kakao: typeof Kakao;
  }
}

/**
 * Kakao JavaScript SDK namespace
 *
 * Reference: https://github.com/woosuk288/kakao-js-sdk
 * Document: https://developers.kakao.com/docs/latest/ko/getting-started/app
 */
declare namespace Kakao {
  const VERSION: string;

  function cleanup(): void;
  function init(appKey: string): void;
  function isInitialized(): boolean;

  namespace Share {
    /**
     * 카카오톡 공유와 관련된 리소스를 해제합니다.
     */
    function cleanup(): void;

    /**
     * 기본 템플릿 타입 (Feed, List, Location, Commerce, Text)에 따라 메시지를 구성하여 카카오톡 공유를 하는 기능입니다.
     * @param settings 카카오톡 공유와 관련된 설정을 key/value로 전달합니다.
     */
    function sendDefault(settings: DefaultFeedSettings): void;

    interface DefaultFeedSettings extends DefaultSettings<'feed'> {
      /**
       * 메시지의 메인 콘텐츠 정보
       */
      content: ContentObject;

      /**
       * 아이템 영역에 포함할 콘텐츠
       */
      itemContent?: ItemContentObject | undefined;

      /**
       * 콘텐츠에 대한 소셜 정보
       */
      social?: SocialObject | undefined;
    }

    type ObjectType = 'commerce' | 'feed' | 'list' | 'location' | 'text';

    interface DefaultSettings<T extends ObjectType> {
      /**
       * 고정 값들("commerce", "feed", "list", "location", "text") 중 하나
       */
      objectType: T;

      /**
       * 기본 버튼 타이틀 변경, [내 애플리케이션 > 플랫폼 > 사이트 도메인]의 첫 번째 주소 링크 (buttonTitle 보다 buttons가 우선순위 높음)
       */
      buttonTitle?: string | undefined;

      /**
       * 버튼 타이틀 및 링크 설정 가능, 최대 2개의 버튼 지원
       */
      buttons?: ButtonObject[] | undefined;

      /**
       * 카카오톡이 설치되어 있지 않은 경우 마켓의 카카오톡 설치 페이지로 이동
       * @defaultValue `false`
       */
      installTalk?: boolean;

      /**
       * 데스크톱 환경에서 카카오톡 공유를 완료했을 때 호출되는 콜백 함수 (IE 미지원)
       */
      callback?: (...args: any[]) => any;

      /**
       * 카카오톡 공유 시 전송되는 알림에 포함되는 파라미터 ([전송 성공 알림 설정하기](https://developers.kakao.com/docs/latest/ko/message/js-link#set-kakaolink-callback))
       */
      serverCallbackArgs?: { [key: string]: any } | string | undefined;
    }
  }
}
