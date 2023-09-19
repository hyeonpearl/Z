import { Button } from '../_zlib/components/common/Button';
import { Form } from '../_zlib/components/common/Form';
import { Icon } from '../_zlib/components/common/Icon';
import { Input } from '../_zlib/components/common/Input';
import { LineBreak } from '../_zlib/components/common/LineBreak';
import { Spacing } from '../_zlib/components/common/Spacing';
import { Txt } from '../_zlib/components/common/Txt';
import { Wrapper } from '../_zlib/components/common/Wrapper';
import Loading from '../_zlib/components/Loading';
import colors from '../_zlib/constants/colors';
import useSignUp from '../_zlib/hooks/useSignUp';

export default function SignUp() {
  const {
    isLoading,
    form,
    error,
    onChange,
    onSubmit,
    onSignInGithub,
    moveToSignIn,
  } = useSignUp();

  return (
    <>
      {isLoading ? (
        <Loading text='계정 만드는 중...' />
      ) : (
        <Wrapper className='sign-form'>
          <Icon src='/z.svg' width={250} height={250} />
          <Txt typography={'h1'}>지금 일어나고 있는 일</Txt>
          <Spacing direction='vertical' size={50} />
          <Txt typography={'h4'}>지금 가입하세요.</Txt>
          <Spacing direction='vertical' size={30} />

          <Wrapper className='form'>
            <Button className='social' onClick={onSignInGithub}>
              <Icon src='github.svg' width={20} height={20} />
              Github로 가입하기
            </Button>
          </Wrapper>

          <Spacing direction={'vertical'} size={20} />
          <LineBreak text={'또는'} />
          <Spacing direction={'vertical'} size={20} />

          <Form className='sign-form' onSubmit={onSubmit}>
            <Input
              name='name'
              placeholder='이름'
              type='text'
              value={form.name}
              onChange={onChange}
              required
            />
            <Input
              name='email'
              placeholder='이메일'
              type='email'
              value={form.email}
              onChange={onChange}
              required
            />
            <Input
              name='password'
              placeholder='비밀번호'
              type='password'
              value={form.password}
              onChange={onChange}
              required
            />
            <Button className='primary' type='submit' required>
              계정 만들기
            </Button>
            {error ? (
              <Txt typography={'p'} color={colors.red01}>
                {error}
              </Txt>
            ) : null}
            <Spacing direction={'vertical'} size={25} />

            <Txt typography='h4'>이미 가입하셨나요?</Txt>
            <Spacing direction={'vertical'} size={5} />
            <Button className='secondary' onClick={moveToSignIn}>
              로그인
            </Button>
          </Form>
        </Wrapper>
      )}
    </>
  );
}
