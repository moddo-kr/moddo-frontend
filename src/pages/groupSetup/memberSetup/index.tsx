import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import * as S from '../index.styles';
import { ROUTE } from '@/common/constants/route';
import Header from '@/common/components/Header';
import { useState } from 'react';
import AddParticipant from '@/common/components/AddMember';
import AddMember from '@/common/components/AddMember';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

function MemberSetup() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="" showIcon={true} type="TitleLeft" />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt="10px"
        mb="32px"
        flexGrow={1}
      >
        <Flex direction="column">
          <S.TitleText>
            함께한 참가자를
            <br />
            추가해주세요.
          </S.TitleText>
          <AddMember />
        </Flex>
        <Button height={12} borderRadius={12}>
          다음
        </Button>
      </Flex>
    </>
  );
}

export default MemberSetup;
