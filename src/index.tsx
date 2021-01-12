import * as React from 'react';
import * as ReactDom from 'react-dom';
import Header from './components/Header/header'
import Form from './components/Form/form'

ReactDom.render(
   <div>
    <Header text="React/TS "></Header>
    <Form></Form>
    </div>,
    document.querySelector('#root')
    

)