import React, {useEffect, useState} from "react";
import {MDBContainer,MDBRow, MDBCol,MDBCard, MDBCardBody, MDBInput,MDBBtn } from "mdbreact";
import axios from 'axios'
const UDDATE_USER = "member/UDDATE_USER"
const MEMBER_CHANGER = "member/MEMBER_CHANGER"
export const mypageAction = data => ({type:UDDATE_USER,payload:data})
export const mypageReducer = (state = {},action) =>{
    switch (action.type) {
        case UDDATE_USER: return action.payload
        default:return state
    }
}
export const updateUserThunk = data => dispatch =>{
    axios.put('',data)
        .then(res=>dispatch(mypageAction(res.data)))
        .catch(err=>{alert(err)})
}
export const memberChangerThunk = data => dispatch=>{
    axios.put('',data)
        .then()
        .catch()
}
const MyPage = () =>{
    const [email,setEmail] = useState('')
    const [NameChanger,setNameChanger] = useState('')
    const [regdate,setRegdata] = useState('')
    const Changer = e =>{
        e.preventDefault()
    }
    const userNameUpdate = e=>{
        e.preventDefault()
    }
    const Update = e=>{
        e.preventDefault()
    }
    useEffect(()=>{
        setEmail(sessionStorage.getItem('email'))
    })
    return(
        <>
            <MDBContainer className="py-5">
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">회원 정보</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="이메일"
                                            group
                                            type="email"
                                            icon="null"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={email}
                                        />
                                        <MDBInput
                                            label="닉네임 (변경 하려면 클릭)"
                                            group
                                            type="text"
                                            icon="null"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={sessionStorage.getItem('userName')}
                                            onClick={Changer}
                                        />
                                        {NameChanger ?
                                            <div>
                                                <MDBInput
                                                    label="변경할 닉네임"
                                                    group
                                                    type="text"
                                                    icon="null"
                                                    validate
                                                    onChange={userNameUpdate}
                                                />
                                                <MDBInput
                                                    label="가입일"
                                                    group
                                                    type="text"
                                                    icon="null"
                                                    validate
                                                    value={regdate.split('T')[0]}
                                                />
                                            </div> :
                                            <MDBInput
                                                label="가입일"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                value={regdate.split('T')[0]}
                                            />}
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan"  onClick={Update}>
                                            닉네임 변경
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default MyPage