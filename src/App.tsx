import * as React  from 'react';
import * as ReactDom from 'react-dom';
import Header from './components/Header/header';
import Form from './components/Form/form';
import * as Styled from './components/style';
import PhoneDiv from './components/Phone';

const App = (props) => {
   return(
    <div>
    <Header text="React/TS Form "></Header>
    <Styled.MainWrapper>
    
    <Form email={''} gender={''} name={''} phone={''}  > 
    
    </Form>
    </Styled.MainWrapper>
    </div>
    )
}

export default App;