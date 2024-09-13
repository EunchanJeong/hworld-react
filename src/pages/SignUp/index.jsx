import React from 'react';
import CommonLayout from '../../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Text from '../../components/Text';
import Button from '../../components/Button';
import AlertModal from '../../components/AlertModal';

import {
  SignUpLayout,
  StyledHr,
  InputLayout,
  InputDetailLayout,
  StyledInput,
  GenderButton,
  CheckButton,
} from './styled';

import { useState } from 'react';
import { axiosInstance } from '../../apis';

import success from '../../assets/images/success.svg';
import unsuccess from '../../assets/images/unsuccess.svg';

const SignUp = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [clickedGender, setClickedGender] = useState(null);
  const [birthdate, setBirthdate] = useState('');

  const [isIdAvailable, setIsIdAvailable] = useState(null);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(null);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginIdChange = (loginId) => {
    setLoginId(loginId);
    console.log('아이디 입력 -> ' + loginId);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    console.log('패스워드 입력 -> ' + password);
  };

  const handlePasswordValidationChange = (passwordValidation) => {
    setPasswordValidation(passwordValidation);
    console.log('패스워드 확인 입력 -> ' + passwordValidation);

    if (password === passwordValidation) setIsPasswordAvailable(true);
    else setIsPasswordAvailable(false);
  };

  const handleNicknameChange = (nickname) => {
    setNickname(nickname);
    console.log('닉네임 입력 -> ' + nickname);
  };

  const handleGenderChange = (gender) => {
    setGender(gender);
    setClickedGender(gender);
    console.log('성별 입력 -> ' + gender);
  };

  const handleBirthdateChange = (birthdate) => {
    console.log('생일 입력 -> ' + birthdate);

    if (birthdate.length === 8) {
      birthdate = birthdate.slice(0, 4) + '-' + birthdate.slice(4, 6) + '-' + birthdate.slice(6, 8);
    }

    setBirthdate(birthdate);
  };

  const checkLoginIdValidation = () => {
    console.log('아이디 중복 확인 -> ' + loginId);

    axiosInstance
      .get('/members/check-id', {
        params: {
          loginId: loginId,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsIdAvailable(response.data.success);
      })
      .catch((error) => {
        console.error('Error: ' + error);
        setIsIdAvailable(false);
      });
  };

  const checkNicknameValidation = () => {
    console.log('닉네임 중복 확인 -> ' + nickname);

    axiosInstance
      .get('/members/check-nickname', {
        params: {
          nickname: nickname,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsNicknameAvailable(response.data.success);
      })
      .catch((error) => {
        console.error('Error: ' + error);
        setIsNicknameAvailable(false);
      });
  };

  const handleSignUp = () => {
    console.log(loginId, password, passwordValidation);
    console.log(nickname, gender, birthdate);

    axiosInstance
      .post('/members/sign-up', {
        loginId: loginId,
        password: password,
        passwordValidation: passwordValidation,
        nickname: nickname,
        gender: gender,
        birthdate: birthdate,
      })
      .then((response) => {
        console.log(response.data);
        toast.success('회원가입이 완료되었습니다!');
      })
      .catch((error) => {
        console.log(error);
        toast.error('회원가입에 실패했습니다.');
      });
  };

  return (
    <CommonLayout>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
        style={{ textAlign: 'center' }}
      />
      <SignUpLayout>
        <Text theme="navytext">회원가입</Text>
        <StyledHr />
        <InputLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              아이디
            </Text>
            <StyledInput
              type="text"
              placeholder="아이디를 입력하세요"
              value={loginId}
              onChange={(e) => handleLoginIdChange(e.target.value)}
            ></StyledInput>
            <CheckButton onClick={(e) => checkLoginIdValidation()}>중복 확인</CheckButton>
            {isIdAvailable === true ? (
              <img src={success} alt="가능" />
            ) : isIdAvailable === false ? (
              <img src={unsuccess} alt="불가능" />
            ) : null}
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              패스워드
            </Text>
            <StyledInput
              type="password"
              placeholder="패스워드를 입력하세요"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            ></StyledInput>
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              패스워드 확인
            </Text>
            <StyledInput
              type="password"
              placeholder="패스워드 확인을 입력하세요"
              value={passwordValidation}
              onChange={(e) => handlePasswordValidationChange(e.target.value)}
            ></StyledInput>
            {isPasswordAvailable === true ? <img src={success} alt="가능" /> : <img src={unsuccess} alt="불가능" />}
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              닉네임
            </Text>
            <StyledInput
              type="text"
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => handleNicknameChange(e.target.value)}
            ></StyledInput>
            <CheckButton onClick={(e) => checkNicknameValidation()}>중복 확인</CheckButton>
            {isNicknameAvailable === true ? (
              <img src={success} alt="가능" />
            ) : isNicknameAvailable === false ? (
              <img src={unsuccess} alt="불가능" />
            ) : null}
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              성별
            </Text>
            <GenderButton onClick={(e) => handleGenderChange('m')} isGenderClicked={clickedGender === 'm'}>
              남성
            </GenderButton>
            <GenderButton onClick={(e) => handleGenderChange('f')} isGenderClicked={clickedGender === 'f'}>
              여성
            </GenderButton>
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              생일
            </Text>
            <StyledInput
              type="text"
              placeholder="생일을 입력하세요"
              value={birthdate}
              onChange={(e) => handleBirthdateChange(e.target.value)}
            />
          </InputDetailLayout>
        </InputLayout>
        <Button onClick={() => setIsModalOpen(true)}>완료</Button>
        {isModalOpen && (
          <AlertModal
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => {
              handleSignUp();
              setIsModalOpen(false);
            }}
            title="회원가입 완료"
            content="회원가입을 하시겠습니까?"
          />
        )}
      </SignUpLayout>
    </CommonLayout>
  );
};

export default SignUp;
