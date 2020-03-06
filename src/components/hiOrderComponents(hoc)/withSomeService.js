import React from 'react';
import {SomeServiceConsumer} from "../some-context";

const withSomeService =() => (Wrapper) => {
    return (props)=> {
        return(
            <SomeServiceConsumer>
                {
                    (someService)=>{
                        return (<Wrapper {...props} someService={someService}/>);
                    }
                }
            </SomeServiceConsumer>
        );
    }
};

export default withSomeService;