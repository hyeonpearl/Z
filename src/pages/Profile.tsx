import { Button } from '../_zlib/components/common/Button';
import { Icon } from '../_zlib/components/common/Icon';
import { Input } from '../_zlib/components/common/Input';
import { Spacing } from '../_zlib/components/common/Spacing';
import { Txt } from '../_zlib/components/common/Txt';
import { Wrapper } from '../_zlib/components/common/Wrapper';
import TimeLine from '../_zlib/components/TimeLine';
import Title from '../_zlib/components/Title';
import colors from '../_zlib/constants/colors';
import useProfile from '../_zlib/hooks/useProfile';

export default function Profile() {
  const { user, tweets, profile, onNameChange, onPictureChange } = useProfile();

  return (
    <Wrapper className='page'>
      <Title title={'프로필'} />
      <Spacing direction={'vertical'} size={30} />
      <Wrapper className='row'>
        <Spacing direction={'horizontal'} size={30} />
        <Input.Label className='profile' htmlFor='picture'>
          {profile.picture ? (
            <Icon width={50} height={50} src={profile.picture} />
          ) : (
            <Icon.Profile type='fill' />
          )}
        </Input.Label>
        <Input
          onChange={onPictureChange}
          id='picture'
          type='file'
          accept='image/*'
        />
      </Wrapper>

      <Wrapper className='profile-info'>
        <Wrapper className='profile-detail'>
          <Wrapper className='row-spacing'>
            <Txt typography={'h4'}>{profile.username ?? '익명'}</Txt>
            <Button className='secondary' onClick={onNameChange}>
              이름 변경
            </Button>
          </Wrapper>

          <Txt typography={'p'} color={colors.gray02}>
            {profile.email}
          </Txt>
          <Spacing direction={'vertical'} size={20} />

          <Wrapper className='profile-date'>
            <Icon.Calendar color={colors.gray02} />
            <Txt typography={'p'} color={colors.gray02}>
              가입일 : {profile.creationTime}
            </Txt>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <TimeLine user={user} tweets={tweets} />
    </Wrapper>
  );
}
