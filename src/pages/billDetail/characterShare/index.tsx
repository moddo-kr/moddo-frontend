import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';

function CharacterShare() {
  // const { groupToken } = useLoaderData();
  // 캐릭터를 로드하는 로직이 필요 없나?
  const navigate = useNavigate();
  const { unit } = useTheme();

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width={unit[24]} />}
        leftButtonOnClick={() => {
          navigate(-1);
        }}
      />
      <div>hey</div>
    </>
  );
}

export default CharacterShare;
