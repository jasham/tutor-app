import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../textBox'
import Button from '../button'
import ringer from '../../assets/images/ringer.PNG'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const HeaderWrapper = styled.div`
    height : 100px;
    box-shadow : 0px 0px 2px 1px rgba(0,0,0,0.1);
    /* background-color : rgba(255,255,0,0.5); */
`
const HeaderSubWrapper = styled.div`
    height : 100%;
    width : 90%;
`
const HeaderLeftWrapper = styled.div`
    height : 100%;
    width : 200px;
`
const HeaderRightWrapper = styled.div`
    height : 100%;
    width : 650px;
`
const Ringer = styled.div`
    width : 110px;
    height : 35px;
    background-image : url(${ringer});
    background-repeat : no-repeat;
    background-size : 115px;
`
const CellComponent = styled.div`
    padding : 10px;
`
class Header extends Component {

    state = {

    }

    render(){
        return(
            <HeaderWrapper>
                <Flex
                    direction="row"
                    jcontent="center"
                    aItems="center"
                    height="100%"
                >
                    <HeaderSubWrapper
                        // style={{
                        //     backgroundColor : "red"
                        // }}
                    >
                        <Flex
                           direction="row"
                           jcontent="space-between"
                           aItems="center"
                           height="100%"
                           width="100%"
                        //    style={{
                        //        backgroundColor : "green"
                        //    }} 
                        >
                            
                            <HeaderLeftWrapper>
                                <Flex
                                  direction="row"
                                  jcontent="flexstart"
                                  aItems="center"
                                  height="100%"
                                  width="200px"  
                                >
                                    <TextBox
                                        innerText={"Ask"}
                                        ffamily={"bold"}
                                        fsize={"biggest"}
                                        cstyle={'padding-right : 0px'}
                                        // width="35px" 
                                    />
                                    <TextBox
                                        innerText={"Guru"}
                                        ffamily={"bold"}
                                        fsize={"biggest"}
                                        cstyle={'padding-left : 0px'}
                                        color={"#228B22"}
                                        // width="35px" 
                                    />
                                </Flex>
                            </HeaderLeftWrapper>
                            <HeaderRightWrapper>
                                <Flex
                                    direction="row"
                                    jcontent="flexend"
                                    style={{
                                        marginTop :5
                                    }}
                                    height="100%"
                                >
                                    <table>
                                        <tr>
                                            <td>
                                                <CellComponent>
                                                     <Ringer /> 
                                                </CellComponent>
                                            </td>
                                            <td>
                                                <CellComponent>
                                                    <Form.Group controlId="formGroupEmail">
                                                        <Form.Control 
                                                            type="username" 
                                                            placeholder="Username" 
                                                        />
                                                    </Form.Group>
                                                </CellComponent>
                                            </td>
                                            <td>
                                                <CellComponent>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Control 
                                                            type="password" 
                                                            placeholder="Password" 
                                                        />
                                                    </Form.Group>
                                                </CellComponent>
                                            </td>
                                            <td>
                                                <Button
                                                    value={"Login"}
                                                    styleClass={"outline-primary"}
                                                    ffamily={"bold"}
                                                    fsize={"normal"}
                                                    buttonSize={"small"}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <Flex
                                                    direction="row"
                                                    jcontent="flexend"
                                                    aItems="flexend"
                                                    height="100%"
                                                >
                                                    <Button
                                                         value={"Forgot Password"}
                                                         backgroundColor={"#6666ff"}
                                                         styleClass={"link"}
                                                         ffamily={"regular"}
                                                         fsize={"normal"}
                                                         buttonSize={"small"}
                                                    />
                                                </Flex>
                                            </td>
                                            <td>

                                            </td>
                                        </tr>
                                    </table>

                                </Flex>
                            </HeaderRightWrapper>
                        </Flex>
                    </HeaderSubWrapper>

                </Flex>
            </HeaderWrapper>
        )
    }
}

export default Header