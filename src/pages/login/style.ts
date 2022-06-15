import styled from "styled-components";

export const StyledTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
`;
export const StyledTitleLabel = styled.label(StyledTitle);

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    padding-top: 20px;
  }

  .input {
    background-color: #f5f5f5;
    width: 640px;
    height: 60px;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  .inputError {
    @apply .input;
    border: 1px solid red;
    color: red;
  }
  .inputError:focus {
    outline-color: red;
  }

  .errorMessageInput {
    position: absolute;
    top: 20vh;
    background-color: #f5e9e9;
    border: 1px solid red;
    display: flex;
    align-items: center;
    width: 640px;
    height: 60px;
    border-radius: 8px;
  }
  .errorMessage {
    padding-left: 20px;
    font-size: 16px;
  }

  .button {
    width: 640px;
    height: 60px;
    background: #4a67ff;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    margin-top: 20px;
  }
  .disableButton {
    @apply .button;
    background: #99a9ff;
  }

  .error {
    color: #e26f6f;
    margin-bottom: 20px;
    margin-top: -10px;
  }

  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .checkbox {
    display: inline-block;
    height: 14px;
    width: 14px;
    background: #fff;
    border: 1px #000 solid;
    margin-right: 15px;
    border-radius: 2px;
    cursor: pointer;
  }

  .checkbox--active {
    border-color: #000;
    background: #4a67ff;
  }
`;
