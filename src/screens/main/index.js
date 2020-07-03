import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/button'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'
import Dropdown from '../../components/dropDown'
import Header from '../../components/header'
import school from '../../assets/images/school.png'

const MainWrapper = styled.div`
    position : absolute;
    top : 0px;
    left : 0px;
    width : 100%;
    height : 100%;
`
const BodyWrapper = styled.div`
    /* margin-top : 10px; */
    height : 500px;
    display : flex;
    flex-direction : row;
    justify-content : center;
    background-image : url(${school});
    background-repeat : no-repeat;
    background-size : 100%;
`
const BodySubWrapper = styled.div`
    width : 90%;
    height : 100%;
`
const School = styled.div`
    width : 100%;
    height : 100%;
    background-image : url(${school});
    background-repeat : no-repeat;
    background-size : 90%;
`
const LeftWrapper = styled.div`
    width : 48%;
    height : 100%;
`
const RightWrapper = styled.div`
    width : 48%;
    height : 100%;
`
const RightSubWrapper = styled.div`
    padding-top : 30px;
    height : 100%;
    width : 445px;
`
const Context = styled.div`
    margin-bottom : 13px;
`

class Main extends Component {
    state ={
       
    }
   
    render(){
        return(
            <MainWrapper>
                <Header />
                <BodyWrapper>
                    <BodySubWrapper>
                        
                        <Flex
                            height={"100%"}
                            jcontent={"space-between"}
                            direction={"row"}
                        >
                            <LeftWrapper>
                                <Flex
                                    height={"100%"}
                                    jcontent={"center"}
                                >
                                    <TextBox
                                        innerText={"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today."}
                                        ffamily={"medium-italic"}
                                        fsize={"bigger"}
                                        color={"rgba(250,250,210, 0.8)"} 
                                    />
                               </Flex>
                            </LeftWrapper>
                            <RightWrapper>
                                <Flex
                                    height={"100%"}
                                    jcontent={"flexend"}
                                    direction={"row"}
                                >
                                    <RightSubWrapper>
                                               
                                    </RightSubWrapper>
                                </Flex>
                            </RightWrapper>
                        </Flex>
                    </BodySubWrapper>
                </BodyWrapper>
                
            </MainWrapper>
        )
    }
}

export default Main