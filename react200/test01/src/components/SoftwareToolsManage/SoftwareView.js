import React, { Component, useEffect,useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import $ from "jquery";
import Swal from "sweetalert2";
import axios from "axios";

const SoftwareView = ()=>{
  const navigate = useNavigate();
  const match = useParams(); // { swtcode : "register"}

  const location = useLocation();
  const toolData = location.state;

  const [inputData, setInputData] = useState(
    {is_Swtcode:'',
    is_Email:'',
    is_beforeSwtcode:match.swtcode,
    is_Swt_toolname:'',
    is_Swt_demo_site:'',
    is_Giturl:'',
    is_Comments:'',
    is_Swt_function:'',}
  );

  const handleDataChange=(key, value)=>{
    const tempInputData = {...inputData};
    tempInputData[key] = value;
    setInputData(tempInputData);
  }

  const sweetalertSucc = (title, showConfirmButton) => {
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: title,
      showConfirmButton: showConfirmButton,
      timer: 1000,
    });
  };

  //componentDidMount
  useEffect(()=>{
    if(match.swtcode === 'register'){
      $('.modifyclass').hide()
  }else{
      callSwToolInfoApi()
      $('.saveclass').hide()
  }
  },[])

  const callSwToolInfoApi = async () => {
    axios.post('/api/Swtool?type=list', {
        is_Swtcode: match.swtcode,
    })
    .then( response => {
        try {
            var data = response.data[0]
            $('#is_Swt_toolname').val(data.swt_toolname)
            $('#is_Swt_demo_site').val(data.swt_demo_site)
            $('#is_Giturl').val(data.swt_github_url)
            $('#is_Comments').val(data.swt_comments)
            $('#is_Swt_function').val(data.swt_function)
            const tempInputData = {...inputData};
            tempInputData['is_Swt_toolname'] = toolData.swt_toolname;
            tempInputData['is_Swt_demo_site'] = toolData.swt_demo_site;
            tempInputData['is_Giturl'] = toolData.swt_github_url;
            tempInputData['is_Comments'] = toolData.swt_comments;
            tempInputData['is_Swt_function'] = toolData.swt_function;
            setInputData(tempInputData);
        } catch (error) {
            alert('작업중 오류가 발생하였습니다')
        }
    })
    .catch( error => {alert(error); return false;} );
}

  const submitClick = async (type, e) => {
      console.log("submitClick들어왔다");
      // var jsonstr = $("form[name='frm']").serialize();
      // jsonstr = decodeURIComponent(jsonstr);
      // var Json_form = JSON.stringify(jsonstr).replace(/\"/gi, "");
      // Json_form =
      //   '{"' + Json_form.replace(/\&/g, '","').replace(/=/gi, '":"') + '"}';

      try {
        const response2 = await axios.post("/api/Swtool?type=" + type, inputData);
        if (response2.data === "succ") {
          if (type === "save") {
            sweetalertSucc("Software Tools 등록이 완료되었습니다.", false);
          }else if(type === "modify"){
            sweetalertSucc('Software Tools 수정이 완료되었습니다.', false)
        }
          setTimeout( ()=> {
            navigate('/');
          }, 1500);
        } else {
          
          alert("작업중 오류가 발생하였습니다.");
        }
      } catch (error) {
        console.log(12341234);
        alert("작업중 오류가 발생하였습니다.");
      }
    
  };


    return (
      <section className="sub_wrap">
        <article className="s_cnt mp_pro_li ct1">
          <div className="li_top">
            <h2 className="s_tit1">Software Tools 등록/수정</h2>
          </div>
          <div className="bo_w re1_wrap re1_wrap_writer">
            <form name="frm" id="frm" action="" method="post">
              <input id="is_Swtcode" type="hidden" name="is_Swtcode" />
              <input
                id="is_Email"
                type="hidden"
                name="is_Email"
                value="guest"
              />
              <input id="is_beforeSwtcode" type="hidden" name="is_beforeSwtcode" value={match.swtcode} />
              <article className="res_w">
                <p className="ment" style={{ textAlign: "right" }}>
                  <span className="red">(*)</span>표시는 필수입력사항 입니다.
                </p>
                <div className="tb_outline">
                  <table className="table_ty1">
                    <tbody>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_toolname">
                            툴 이름<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Swt_toolname"
                            id="is_Swt_toolname"
                            className=""
                            onChange={(e)=>handleDataChange("is_Swt_toolname",e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_demo_site">
                            데모 URL<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Swt_demo_site"
                            id="is_Swt_demo_site"
                            className=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Giturl">
                            Github URL<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Giturl"
                            id="is_Giturl"
                            className=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Comments">
                            설명<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <textarea
                            name="is_Comments"
                            id="is_Comments"
                            rows=""
                            cols=""
                          ></textarea>
                        </td>
                      </tr>
                      <tr className="div_tb_tr fileb">
                        <th>메뉴얼 파일 #1</th>
                        <td className="fileBox fileBox_w1">
                          <label htmlFor="uploadBtn1" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="manualfile"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="uploadBtn1"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("manual", e)}
                          />
                          <div id="upload_menual"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>메인 이미지</th>
                        <td className="fileBox fileBox1">
                          <label htmlFor="imageSelect" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="imagefile"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="imageSelect"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("file", e)}
                          />
                          <div id="upload_img"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>라벨 이미지</th>
                        <td className="fileBox fileBox2">
                          <label htmlFor="imageSelect2" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="imagefile2"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="imageSelect2"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("file2", e)}
                          />
                          <div id="upload_img2"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_function">
                            상세 기능<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <textarea
                            name="is_Swt_function"
                            id="is_Swt_function"
                            rows=""
                            cols=""
                          ></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="btn_confirm mt20"
                    style={{ marginBottom: "44px" }}
                  >
                    <Link
                      to={"/"}
                      className="bt_ty bt_ty1 cancel_ty1"
                    >
                      취소
                    </Link>
                    <a
                      href="#"
                      className="bt_ty bt_ty2 submit_ty1 saveclass"
                      onClick={(e) => {
                        submitClick("save", e);
                        e.preventDefault();
                      }}
                    >
                      저장
                    </a>
                    <a 
                    href="#" 
                    className="bt_ty bt_ty2 submit_ty1 modifyclass" 
                    onClick={(e) => submitClick("modify", e) }>
                      수정
                    </a>
                  </div>
                </div>
              </article>
            </form>
          </div>
        </article>
      </section>
    );
  }

export default SoftwareView;