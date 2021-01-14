import * as React from 'react';
import * as ReactDom from 'react-dom';
import Header from './components/Header/header';
import Form from './components/Form/form';
import * as Styled from './components/style';

ReactDom.render(
   <div>
    <Header text="React/TS Form "></Header>
    <Styled.MainWrapper>
    <Form email={''} gender={''} name={''} ></Form>
    </Styled.MainWrapper>
    </div>,
    document.querySelector('#root')
    

)