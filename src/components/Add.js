import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createWordFB } from '../redux/modules/card';


function Add () {
  const history = useHistory();
  const word = useRef(null);
  const phonetic = useRef(null);
  const mean = useRef(null);
  const example = useRef(null);
  const description = useRef(null);
  

  const dispatch = useDispatch();

  const addWord = () => {
    dispatch(createWordFB({
      word: word.current.value,
      phonetic: phonetic.current.value,
      mean: mean.current.value,
      example: example.current.value,
      description : description.current.value
    }))
    history.push('/');
  };
  
  return (
    <AddWord>
      <p>단어 추가하기</p>
      <Input>
        <label>단어</label>
        <input type="text" maxLength="30" ref={word}></input>
      </Input>
      <Input>
        <label>병음</label>
        <input type="text" maxLength="20" ref={phonetic}></input>
      </Input>
      <Input>
        <label>의미</label>
        <input type="text" maxLength="60" ref={mean}></input>
      </Input>
      <Input>
        <label>예문</label>
        <input type="text" maxLength="20" ref={example}></input>
      </Input>
      <Input>
        <label>해석</label>
        <input type="text" maxLength="20" ref={description}></input>
      </Input>
      <button onClick={addWord}>저장하기</button>
    </AddWord>
  )
}

const AddWord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  padding-top: 20px;
  width: 500px;
  height: 800px;
  border: 1px solid gray;
  border-radius: 10px;
  p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: rgb(10, 112, 41);
  }
  button {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background-color: rgb(10, 112, 41);
    width: 200px;
    height: 40px;
    font-size: 16px;
    align-self: center;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  input {
    height: 28px;
    padding: 5px 0px;
    border-bottom: 2px solid rgb(219, 232, 216);
    font-size: 16px;
    font-weight: 500;
    transition: border-color 300ms ease-in-out 0s;
  }
`

export default Add;