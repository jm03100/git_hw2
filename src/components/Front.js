import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadWordFB, deleteWordFB } from '../redux/modules/card';


function Front () {
  const history = useHistory();
  const dic_list = useSelector((state) => state.card.list);
  console.log(dic_list)

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <WrapCard>
    <Wrap>
      {dic_list.map((list, idx) => {
        return (
          <Card key={idx} id={list.id}>
            <ButtonWrap>
              <div>
                <input type="checkbox"/>
              </div>
              <div>
                <Button
                  onClick={() => {
                    dispatch(deleteWordFB(list.id))
                    history.push('/')
                  }} >삭제</Button>
              </div>
            </ButtonWrap>
            <Word>
                <Important>{list.word}</Important>
            </Word>
            <Word>
                <p>[{list.phonetic}]</p>
            </Word>
            <Word>
                <p>{list.mean}</p>
            </Word>
            <Word>
                <Example>{list.example}</Example>
            </Word>
            <Word>
                <Example>{list.description}</Example>
            </Word>  
        </Card>
        )
      })}
    </Wrap>
    <Link>
      <button onClick={() => {
        history.push('/add')
      }}>+</button>
    </Link>
    </WrapCard>
    )
  }

const WrapCard = styled.div`
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
`;
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    padding: 50px 0px;
`

const Card = styled.div`
    margin-top: 40px;
    padding: 0px 30px;
    position: relative;
    width: 30%;
    padding: 10px;
    border: 2px solid rgb(10, 112, 41);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: box-shadow 300ms ease-in-out 0s;
  p {
    font-size: 14px;
  }
`

const Important = styled.div`
    margin-right: 5px;
    font-size: 24px;
    font-weight: 600;
`;
const Word = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
`

const Example = styled.p`
    margin-top: 5px;
    color: rgb(9, 132, 227);
    font-size: 14px;
`
const ButtonWrap = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const Link = styled.div`
button {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(10, 112, 41);
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 100%;
  }
    `
const Button = styled.button`
    color: rgb(10, 112, 41);
    font-size: 24px;
`
export default Front;