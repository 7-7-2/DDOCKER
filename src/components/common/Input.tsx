import { ChangeEvent } from 'react';
import Icon from '@/components/common/Icon';
import { INPUT_TEXTS } from '@/constants/common';
import { ICON_UPLOAD } from '@/constants/icons';
import { InputProps } from '@/types/types';
import { styled } from 'styled-system/jsx';
import { Align, Between } from '@/styles/layout';
import { css, cx } from 'styled-system/css';
import { InputFontSm, InputFontBase } from '@/styles/styles';

export const Input = ({
  type,
  handleEvent,
  setInputValue,
  inputValue,
  setIsAlert,
  btn
}: InputProps) => {
  const { nickname, comment, title, search } = INPUT_TEXTS.type;
  let submitBtn;
  let inputLength;
  let inputPlaceholder;

  const handleInputBox = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    {
      e.target.value && setIsAlert && setIsAlert(false);
    }
  };

  switch (type) {
    case nickname.typeName:
      submitBtn = nickname.btnText;
      inputLength = 8;
      inputPlaceholder = nickname.placeholder;
      break;
    case comment.typeName:
      submitBtn = <Icon {...ICON_UPLOAD} />;
      inputPlaceholder = comment.placeholder;
      break;
    case title.typeName:
      inputLength = 16;
      inputPlaceholder = title.placeholder;
      break;
    case search.typeName:
      inputPlaceholder = search.placeholder;
      break;
  }

  return (
    <InputContainer
      tabIndex={0}
      className={
        type === title.typeName
          ? cx(Align, Between, TitleInput)
          : cx(Align, Between)
      }>
      <input
        className={InputFontBase}
        type="text"
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleInputBox}
        maxLength={inputLength && inputLength - 1}
      />
      <InputBox className={Align}>
        {inputLength && (
          <InpoutLength className={Align}>
            {inputValue?.length}
            <LengthLimit>/{inputLength}</LengthLimit>
          </InpoutLength>
        )}
        {btn && (
          <button
            className={
              type === nickname.typeName
                ? cx(nicknameBtn, InputFontSm)
                : InputFontSm
            }
            type="button"
            onClick={handleEvent}
            onTouchEnd={handleEvent}>
            {submitBtn}
          </button>
        )}
      </InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 14px 16px;
  height: 50px;
  border: 1px solid #ccc;
  &:focus-within {
    border: 1px solid var(--colors-main);
  }
`;

const InputBox = styled.div`
  height: 50px;
  gap: 8px;
`;

const TitleInput = css`
  background-color: #f5f5f5;
`;

const InpoutLength = styled.div`
  color: #313131;
  font-family: Pretendard;
  font-size: var(--font-sizes-xs);
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const LengthLimit = styled.div`
  color: #a6a6a6;
`;

const nicknameBtn = css`
  width: 75px;
  height: 34px;
  border-radius: 5px;
  padding: 0 13px;
  margin-right: -8px;
  color: #fff;
  background-color: var(--colors-main);
`;