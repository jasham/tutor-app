import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../components/button'
import Dropdown from '../../components/dropDown'

export const MainWrapper = styled.div`
    position : absolute;
    top : 0px;
    left : 0px;
    width : 100%;
    height : 100%;
`
class Kitchensink extends Component {
    state = {
        inputValue : "",
        country : ""
    }

    handleClick = (country) => {
        this.setState({country:country});
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <MainWrapper>
                <Button
                    styleClass = 'btn-success'
                    value = 'Click me!'
                    onClick = {this.handleClick}
                />
                <div
                        style = {{
                        margin : 20
                    }}
                >
                    <Button
                        styleClass = 'btn-outline-primary'
                        value = 'Click me!'
                        onClick = {this.handleClick} 
                    />
                </div>
                <div
                    style = {{
                        margin : 20
                    }}
                >
                    <Button
                        styleClass = 'btn-link'
                        value = 'Click me!'
                        onClick = {this.handleClick} 
                    />
                </div>
                <div
                    style = {{
                        margin : 20
                    }}
                >
                    <Button
                        styleClass = 'btn-success btn-lg'
                        value = 'Click me!'
                        onClick = {this.handleClick} 
                    />
                </div>
                <div
                    style = {{
                        margin : 20
                    }}
                >
                    <Button
                        styleClass = 'btn-success btn-sm'
                        value = 'Click me!'
                        onClick = {this.handleClick} 
                    />
                </div>

                <div
                    style={{
                        margin : 20
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
                    />
                </div>
            </MainWrapper>
        )
    }
}

export default Kitchensink;