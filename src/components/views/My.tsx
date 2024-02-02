import React, { Component } from "react";
// import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";

import "../css/common.css";
import "../css/my.css";

class My extends Component {
    render() {
        return (
            <div className="my_page flex-col">
                <div className="my_box_2 flex-col">
                    <div className="my_image-wrapper_1 flex-row justify-between">
                        <img
                            className="my_image_2"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6b2e9ad53faeb8b562bc4c267c8cdb851e8355e9829773bb323ea1a15fac5f5f"
                            }
                        />
                        <img
                            className="my_label_1"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc98bb3c49e88dbf4f2885bb902a89ba35221dd06a6f86d2a236f5867b62ffaae"
                            }
                        />
                    </div>
                    <div className="my_group_1 flex-row">
                        <div className="my_image-text_1 flex-row justify-between">
                            <img
                                className="my_image_3"
                                src={
                                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge515b81d37e36b483ad353213d10c33a7d9adebe332b5cb426239af293a9fbe4"
                                }
                            />
                            <span className="my_text-group_1">時而生肖</span>
                        </div>
                        <div className="my_text-wrapper_1 flex-col">
                            <span className="my_text_2">一般會員</span>
                        </div>
                        <img
                            className="my_thumbnail_3"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng51850093d0f6913fbc324d8688147c8d7be14512b7ac4ea39e097c2edb12f695"
                            }
                        />
                        <img
                            className="my_thumbnail_4"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc6fde7b77de2cc7d4ef80a874c42e843bf95cd22a508c74930d8c1546ddd90d0"
                            }
                        />
                    </div>
                    <div className="my_text-wrapper_2 flex-col">
                        <span className="my_text_3">升級至會員，享購物95折12個月內累積消費額達HK$9000&nbsp;即可升級</span>
                        <span className="my_text_4">查看所有會員等級規則</span>
                    </div>
                    <div className="my_group_2 flex-col">
                        <span className="my_text_5">12個月內消費額</span>
                        <div className="my_text-wrapper_3 flex-row">
                            <span className="my_text_6">HK$</span>
                            <span className="my_text_7">1,899</span>
                            <span className="my_text_8">還差</span>
                            <span className="my_text_9">HK$</span>
                            <span className="my_text_10">9,000</span>
                            <span className="my_text_11">升級</span>
                        </div>
                        <div className="my_group_3 flex-col">
                            <div className="my_box_3 flex-col" />
                        </div>
                        <span className="my_text_12">
              自動更新時間為訂單完成付款的隔日凌晨，若因取消訂單或退貨未達成升級條件則不會升級
            </span>
                    </div>
                    <div className="my_group_4 flex-col">
                        <div className="my_group_5 flex-row justify-between">
                            <span className="my_text_13">我的訂單</span>
                            <div className="my_image-text_2 flex-row justify-between">
                                <span className="my_text-group_2">全部訂單</span>
                                <img
                                    className="my_thumbnail_5"
                                    src={
                                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga09a5eb486649eb449759ccc454dfa3e8069d56588849737dadb12be5a328290"
                                    }
                                />
                            </div>
                        </div>
                        <div className="my_list_1 flex-row">
                            <div className="my_image-text_3-0 flex-col">
                                <img
                                    className="my_label_2-0"
                                    src={
                                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6a2d0882ad9e966585dbe624490c12de6d3bf2a25ae3c770df8c991ff226c90a"
                                    }
                                />
                                <span className="my_text-group_3-0">待支付</span>
                            </div>
                            <div className="my_image-text_3-1 flex-col">
                                <img
                                    className="my_label_2-1"
                                    src={
                                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngade1a85dc005897c630b0b9b134f1a0392be8dc99f8c4101be14c87e296739e4"
                                    }
                                />
                                <span className="my_text-group_3-1">待完成</span>
                            </div>
                            <div className="my_image-text_3-2 flex-col">
                                <img
                                    className="my_label_2-2"
                                    src={
                                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng78d1b69b40437716b7645bb06e9b63d48d04f2f79d71f300351ddb9d528c6977"
                                    }
                                />
                                <span className="my_text-group_3-2">已完成</span>
                            </div>
                            <div className="my_image-text_3-3 flex-col">
                                <img
                                    className="my_label_2-3"
                                    src={
                                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng33d4b62b1c9f53df2285fb2d858d8911317f7cc4b617d2f4b6ccdb123595fc96"
                                    }
                                />
                                <span className="text-group_3-3">已取消</span>
                            </div>
                        </div>
                    </div>
                    <div className="my_group_6 flex-row justify-between">
                        <span className="my_text_14">我的優惠券</span>
                        <div className="my_image-text_4 flex-row justify-between">
                            <span className="my_text-group_4">展开</span>
                            <img
                                className="my_thumbnail_6"
                                src={
                                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga09a5eb486649eb449759ccc454dfa3e8069d56588849737dadb12be5a328290"
                                }
                            />
                        </div>
                    </div>
                    <div className="my_group_7 flex-col" />
                </div>
                <div className="my_box_4 flex-row">
                    <div className="my_group_8 flex-row">
                        <div className="my_image-text_5 flex-col">
                            <img
                                className="my_label_3"
                                src={
                                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf7903f2801ecac2a66d6500a01f9b14639d44a141d9724fe01dea8c879b9ba9f"
                                }
                            />
                            <span className="my_text-group_5">关于我们</span>
                        </div>
                    </div>
                    <div className="my_group_9 flex-col">
                        <div className="my_box_5 flex-col" />
                        <span className="my_text_15">玄機知識</span>
                        <img
                            className="my_label_4"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7c7f888e64515d859c45e5f45006d45d30b46a3c51e091ba4c453f3284a4a54e"
                            }
                        />
                    </div>
                    <img
                        className="my_image_4"
                        src={
                            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4a153726e9d3ec717982dfeff14e71d75816fc9505e065c8e560ce6d1d304277"
                        }
                    />
                    <div className="my_group_10 flex-col">
                        <div className="my_block_1 flex-col" />
                        <span className="my_text_16">購物車</span>
                        <img
                            className="my_label_5"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng93d709e9caba5ea132d6781a92e31a69661a60fcc8ec92d3bbce85709d088db2"
                            }
                        />
                    </div>
                    <div className="my_group_11 flex-col">
                        <div className="my_group_12 flex-col" />
                        <span className="my_text_17">我的</span>
                        <img
                            className="my_label_6"
                            src={
                                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng551bf240a58be84e4f23284ab8ba2195c2b872de62b390477c9c2447ebd7ccb7"
                            }
                        />
                    </div>
                </div>
                <img
                    className="my_image_5"
                    src={
                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng192ca24895533684586e460cc0e0a0a04dd856f69c7d62f9ba521b6105b3a889"
                    }
                />
            </div>
        );
    }
}
export default My;
