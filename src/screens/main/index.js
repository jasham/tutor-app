import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/button'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'
import Dropdown from '../../components/dropDown'
import Header from '../../components/header'
import school from '../../assets/images/school.png'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'
import InputGroup from 'react-bootstrap/InputGroup';
import InputBox from '../../components/inputField'

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
    margin-bottom : 0px;
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
                                        <TextBox
                                            innerText={"Create an account"}
                                            fsize={"larger"}
                                            ffamily={"bold"}
                                            color={"rgba(255, 255, 255, 0.7)"}
                                            style={{
                                                height : 43
                                            }}
                                        />
                                        <Context
                                            style={{
                                                paddingBottom : 35
                                            }}
                                        >
                                                <TextBox
                                                    innerText={"It's quick and easy"}
                                                    fsize={"big"}
                                                    ffamily={"bold"}
                                                    color={"rgba(65,105,225,0.8)"}

                                                />
                                        </Context>
                                        <Context>
                                            <Flex
                                                jcontent={"space-between"}
                                                direction={"row"} 
                                            >
                                                <InputBox
                                                    styleClass={"mb-3"}
                                                    width={"48%"}
                                                    placeholder={"Firstname"}
                                                    size={"lg"}
                                                    style={{
                                                        marginBottom : "10px !important"
                                                    }}
                                                />
                                                <InputBox
                                                    styleClass={"mb-3"}
                                                    width={"48%"}
                                                    placeholder={"Lastname"}
                                                    size={"lg"}
                                                    style={{
                                                        marginBottom : "10px !important"
                                                    }}
                                                />
                                            </Flex>
                                            </Context>
                                            <Flex
                                                width={"100%"}
                                            >
                                            <Context
                                                style={{
                                                    width : "100%",
                                                    paddingBottom : "10px"
                                                }}
                                            >
                                                <Dropdown data={[
                                                        {value:1, label:'India'},
                                                        {value:2, label:'USA'},
                                                        {value:3, label:'UK'},
                                                        {value:4, label:'Russia'},
                                                        {value:5, label:'China'},
                                                        {value:6, label:'Italy'},
                                                        {value:7, label:'Germany'},
                                                    ]}
                                                        value={this.state.country}
                                                        placeholder='Select Country'
                                                        onChange={this.handleDropdown}
                                                        dropDownSize={"big"}
                                                        width={"100%"}
                                                        fsize={"normal"}
                                                        // ffamily={"semi-bold"}
                                                        // color={"rgba(65,105,225,0.8)"}
                                                />
                                            </Context>
                                            </Flex>
                                                
                                                <Flex
                                                    direction={"column"}
                                                    width={"100%"}
                                                > 
                                                    <Context
                                                        style={{
                                                            width : "100%"

                                                        }}
                                                    >  
                                                        <InputBox
                                                            styleClass={"mb-3"}
                                                            width={"100%"}
                                                            placeholder={"Mobile Number"}
                                                            size={"lg"}
                                                            style={{
                                                                marginBottom : "10px !important"
                                                            }}
                                                        />
                                                    </Context>
                                                    <Context
                                                        style={{
                                                            width : "100%"
                                                        }}
                                                    >
                                                        <InputBox
                                                            styleClass={"mb-3"}
                                                            width={"100%"}
                                                            placeholder={"New Password"}
                                                            type={"password"}
                                                            size={"lg"}
                                                            style={{
                                                                marginBottom : "10px !important"
                                                            }}
                                                        />
                                                    </Context>
                                                    <Context
                                                        style={{
                                                            width : "100%"
                                                        }}
                                                    >
                                                        <Button
                                                            styleClass={"success"}
                                                            // backgroundColor={"#228B22"}
                                                            fsize={"big"}
                                                            // color={"#FFFFFF"}
                                                            value={"Sign Up"}
                                                            width={"100%"}
                                                            ffamily={"bold"} 
                                                            size={"lg"}
                                                        />
                                                    </Context> 
                                                </Flex>
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