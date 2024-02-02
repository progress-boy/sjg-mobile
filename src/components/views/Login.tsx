import React, { Component } from "react";
import { Input, Checkbox  } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import "../css/common.css";
import "../css/login/login.css";
import api from "../../utils/http";

class Login extends Component {
    state = {
        "username": "",
        "passwd": "",
        "checked": false
    };
    getChecked = (e: CheckboxChangeEvent) => {
        if (this.state.checked) {
            this.setState({
                "checked": false
            })
        }else {
            this.setState({
                "checked": true
            })
        }
    };

    getUsername = (e: any) => {
        this.setState({
            "username": e.target.value
        })
    }

    getPasswd = (e: any) =>{
        this.setState({
            "passwd": e.target.value
        })
    }
    login = () => {
        if (this.state.checked) {
            console.log(this.state);
            api.post('api/v1/login', this.state)
                .then( //不走代理的请求
                    response=> {
                        console.log('成功了', response.data);
                    },
                    error=>{console.log('失败了',error)}
            )
        } else {
            alert("请勾选使用條款及隱私聲明")
        }
    }

    render() {
        return (
            <div className="login_page flex-col">
                <div className="login_image-wrapper_1 flex-row justify-between">
                    <img
                        className="login_image_2"
                        src={
                            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6b2e9ad53faeb8b562bc4c267c8cdb851e8355e9829773bb323ea1a15fac5f5f"
                        }
                    />
                    <img
                        className="login_label_1"
                        src={
                            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc98bb3c49e88dbf4f2885bb902a89ba35221dd06a6f86d2a236f5867b62ffaae"
                        }
                    />
                </div>
                <div className="login_box_2 flex-col">
                    <span className="login_text_2">登錄</span>
                    <div className="login_text-wrapper_1 flex-col">
                        <Input size="large"
                               value={this.state.username}
                               placeholder="輸入郵箱地址或手機號碼"
                               onChange = { this.getUsername}
                        />;
                    </div>
                    <div className="login_text-wrapper_2 flex-col">
                        <Input.Password
                            style={{ width: 300, height: 40 }}
                            placeholder="請輸入密碼"
                            value={this.state.passwd}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            onChange={ this.getPasswd}
                        />;
                    </div>
                    <div className="login_box_3 flex-row" onClick={this.login}>
                        <div className="login_image-text_1 flex-row justify-between">
                            <span className="login_text-group_1">立即登錄</span>
                            <img
                                className="login_thumbnail_3"
                                src={
                                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1beaf69597a0f6801560a9fd3be3c6b2a5d0fc6715100fbb827dfa867943a452"
                                }
                            />
                        </div>
                    </div>
                    <div className="login_text-wrapper_3 flex-row justify-between">
                        <span className="login_text_5">驗證碼登錄</span>
                        <span className="login_text_6">忘記密碼？</span>
                    </div>
                    <div className="login_image-text_2 flex-row justify-between">
                        <div className="login_group_1 flex-col">
                            <Checkbox onChange={this.getChecked}>
                            </Checkbox>
                        </div>
                        <span className="login_text-group_2">
                            我已閱讀並同意使用條款及隱私聲明，並同意我的部分個人信息將根據隱私聲明在境外處理。
                        </span>
                    </div>
                </div>
                <div className="login_box_4 flex-col">
                    <div className="login_block_1 flex-row">
                    <div className="login_group_2 flex-col" />
                        <span className="login_text_7">新客戶？</span>
                        <div className="login_group_3 flex-col" />
                    </div>
                    <div className="login_text-wrapper_4 flex-col">
                        <span className="login_text_8">創建您的賬戶</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
