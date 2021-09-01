import React from "react";

const App = () => {
  return (
    <div className="WholeWrapper">
      <div className="RsWrapper">
        <div className="header RowWrapper">
          <div className="header_hamburger">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fmenu.png?alt=media&token=672bca13-3d49-4a10-a0ea-8d7ecc9397f8`}
            />
          </div>
          <img
            className="headerLogo"
            src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Floggo.png?alt=media&token=1a3a56df-9f80-4c59-b0fb-b19251dec009`}
          />
          <div className="header_menu">회사소개</div>
          <div className="header_menu">매장안내</div>
          <div className="header_menu">가맹절차</div>
          <div className="header_menu">가맹상담/FAQ</div>
          <div className="header_menu header_menu_border">
            가맹문의 1588-1684
          </div>
        </div>

        <div className="Wrapper_1 Wrapper"></div>
        <div className="Wrapper_2 Wrapper">
          <div className="Wrapper2_contents">
            <div className="Wrapper_2_text_line RowWrapper">
              <div className="Wrapper_2_text">매장 현황</div>
              <div className="Wrapper_2_line"></div>
            </div>
            <div className="Wrapper_2_banners RowWrapper">
              <img
                className="Wrapper_2_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%A8_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%83%E1%85%A2%E1%84%80%E1%85%AE%E1%84%80%E1%85%A7%E1%86%BC%E1%84%87%E1%85%AE%E1%86%A8.png?alt=media&token=4c611032-521d-427e-a428-ae39e4e93627`}
              />
              <img
                className="Wrapper_2_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%201.png?alt=media&token=a2eaec23-d091-4414-b0b7-9974d8cb36e7`}
              />
              <img
                className="Wrapper_2_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F02_%E1%84%89%E1%85%A5%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.png?alt=media&token=20ec10ce-6ade-4f1c-9d07-887f8bea5a7f`}
              />
              <img
                className="Wrapper_2_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F03_%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.png?alt=media&token=fdaac040-87ae-47d3-90ea-ae66ab36819f`}
              />
            </div>
          </div>
        </div>
        <div className="Wrapper_3 Wrapper">
          <div className="Wrapper_3_title RowWrapper">
            <img
              className="Wrapper_3_title_img"
              src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20353.png?alt=media&token=5d9bdc8c-d15f-4964-a28f-f91d095b9617`}
            />
            <div className="Wrapper_3_title_texts">
              <div className="Wrapper_3_title_text">
                업계유일 최소 마진율 41%!
              </div>
              <div className="Wrapper_3_title_text">
                매장 규모별 순수익 공개!
              </div>
            </div>
          </div>
          <div className="Wrapper_3_contents RowWrapper">
            <img
              className="Wrapper_3_contents_graph"
              src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B3.png?alt=media&token=140b7659-b095-4c65-886f-8848e528145b`}
            />
            <ul className="Wrapper_3_contents_tableWrapper">
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">항목</ul>
                <ul className="">금액</ul>
                <ul className="">구성비</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">월매출</ul>
                <ul className="">80,000,000</ul>
                <ul className="">100%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">물류</ul>
                <ul className="">47,200,000</ul>
                <ul className="">59%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">임차료</ul>
                <ul className="">5,000,000</ul>
                <ul className="">6%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">인건비</ul>
                <ul className="">4,500,000</ul>
                <ul className="">6%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">제세공과금</ul>
                <ul className="">1,000,000</ul>
                <ul className="">1%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">기타제</ul>
                <ul className="">3,000,000</ul>
                <ul className="">4%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">영업이익</ul>
                <ul className="">32,800,000</ul>
                <ul className="">최소 41%</ul>
              </li>
              <li className="Wrapper_3_contents_tableList RowWrapper">
                <ul className="">월 순이익</ul>
                <ul className="">19,300,000</ul>
                <ul className="">24%</ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="Wrapper_4 Wrapper">
          <div className="Wrapper_4_rs">
            <div className="Wrapper_4_text1">팻마트 입점 브랜드</div>
            <div className="Wrapper_4_text2 RowWrapper">
              <div>펫마트는 약 700여개의 유명, 신규브랜드와</div>&nbsp;
              <div>5000여개의 품목을 취급하고 있습니다.</div>
            </div>
            <div className="Wrapper_4_banners RowWrapper">
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8F%E1%85%A9%E1%84%8F%E1%85%A9%E1%84%83%E1%85%A9%E1%86%A8_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=6bf7c275-6d70-42c9-83b1-f19ff222c91d`}
              />
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%91%E1%85%A2%E1%84%83%E1%85%B3_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=d59efe5d-62d5-425b-8d1c-6f288b80d1f2`}
              />
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A9%E1%84%85%E1%85%A2_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=1b7ea290-d4f4-48a8-84d2-5c0c29cb64e5`}
              />
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%A1%E1%86%B7%E1%84%90%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%8E%E1%85%B5_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png?alt=media&token=92b7fbd0-e5ea-430e-ac2e-63f81c31127e`}
              />
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%83%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B7%E1%84%83%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B7.png?alt=media&token=7ba315a9-985b-4440-b16c-ddaca11b269a`}
              />
              <img
                className="Wrapper_4_banner"
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8B%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%91%E1%85%A1%E1%86%B7.png?alt=media&token=6d71001e-9607-40fb-a314-b50d189d7651`}
              />
            </div>
          </div>
        </div>
        <div className="Wrapper_5 Wrapper">
          <div className="Wrapper_5_row RowWrapper">
            <div className="Wrapper_5_texts">
              <div>
                <div className="Wrapper_5_text">지금!&nbsp;</div>
                <div className="RowWrapper">
                  <div className="Wrapper_5_textY">펫마트</div>
                  <div className="Wrapper_5_text">를&nbsp;</div>
                </div>
              </div>
              <div>
                <div className="RowWrapper">
                  <div className="Wrapper_5_textY">시작</div>
                  <div className="Wrapper_5_text">해야</div>
                </div>
                <div className="Wrapper_5_text">되는 이유</div>
              </div>
            </div>
            <div className="Wrapper_mobileImage">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20546.png?alt=media&token=e4b19ea4-2f80-44c4-9917-6c78fd3b917c`}
              />
            </div>
            <div className="Wrapper_5_texts_images">
              <div className="Wrapper_5_texts_image1">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20544.png?alt=media&token=b92accee-7e09-418f-b10d-d6842ea34920`}
                />
              </div>
              <div className="Wrapper_5_texts_images_row RowWrapper">
                <div className="Wrapper_5_texts_image2">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20444.png?alt=media&token=c6742374-d6c1-4c6a-9227-494777140ce3`}
                  />
                </div>
                <div className="Wrapper_5_texts_image3">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20445.png?alt=media&token=f40f5556-12fa-4aa9-88cc-02c44abde127`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Wrapper_6">
          <div className="Wrapper_6_rs">
            <div className="RowWrapper">
              <div className="Wrapper_6_texts">
                <div>
                  <div className="Wrapper_6_text1">펫마트와</div>
                  <div className="Wrapper_6_text2 textY">함께인생</div>
                  <div className="Wrapper_6_text3 RowWrapper">
                    <div>제2막</div>
                    <div>시작!</div>
                  </div>
                </div>
                <div className="RowWrapper_mobile">
                  <div className="Wrapper_6_text4">가맹점 성공스토리&nbsp;</div>
                  <div className="Wrapper_6_text5 textY">68호 군산점</div>
                </div>
              </div>
              <div className="Wrapper_6_youW">
                <img
                  className="Wrapper_6_youC"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8B%E1%85%B2%E1%84%90%E1%85%B2%E1%84%87%E1%85%B3_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%A8.png?alt=media&token=d3a09286-37e7-4910-96a5-085c16489936`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 진해점 성공스토리
                </div>
              </div>
            </div>
            <div className="RowWrapper Wrapper_6_sgs1">
              <div className="Wrapper_6_sg1W">
                <img
                  className="Wrapper_6_sg1C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg1.png?alt=media&token=9221b5eb-c6b2-49a2-b86c-8dba8dbcc759`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 부산강서점 성공스토리
                </div>
              </div>
              <div className="Wrapper_6_sg2W">
                <img
                  className="Wrapper_6_sg2C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg2.png?alt=media&token=3c9158c9-8628-4911-9820-0d687a9378ee`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 제주도남점 성공스토리
                </div>
              </div>
              <div className="Wrapper_6_sg3W">
                <img
                  className="Wrapper_6_sg3C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg3.png?alt=media&token=14b9e0da-edfa-42d6-b0cc-381e3dce1ad5`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 전주효자점 성공스토리
                </div>
              </div>
            </div>
            <div className="RowWrapper Wrapper_6_sgs2">
              <div className="Wrapper_6_sg4W">
                <img
                  className="Wrapper_6_sg4C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg4.png?alt=media&token=8eda0b9e-a265-456d-9aaf-7156ac907ce7`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 비산점 성공스토리
                </div>
              </div>
              <div className="Wrapper_6_sg5W">
                <img
                  className="Wrapper_6_sg5C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg5.png?alt=media&token=86eaa1f0-da57-43ee-ab75-6b6d67e90a15`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 비산점 성공스토리
                </div>
              </div>
              <div className="Wrapper_6_sg6W">
                <img
                  className="Wrapper_6_sg6C"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fsg6.png?alt=media&token=e9e9b66a-013d-470d-9531-8ee2ab118b6d`}
                />
                <div className="Wrapper_6_sg_text">
                  펫마트 부천점 성공스토리
                </div>
              </div>
            </div>
            <div className="Wrapper_6_btn">더보기</div>
          </div>
        </div>
        <div className="Wrapper_7 Wrapper">
          <div className="Wrapper7_rs">
            <div className="Wrapper_7_titles">
              <div className="Wrapper_7_title1 RowWrapper">
                <div className="Wrapper_7_title1-1">왜&nbsp;</div>
                <div className="Wrapper_7_title1-2">펫마트&nbsp;</div>
                <div className="Wrapper_7_title1-3">일까?</div>
              </div>
              <div className="Wrapper_7_title2">
                예비 창업자들이 펫마트를 선택하는 이유!
              </div>
            </div>
            <div className="Wrapper_7_contents RowWrapper">
              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_01.png?alt=media&token=173958e5-69af-411f-b569-bfdbe7a184bd`}
                  />
                  <img
                    className="Wrapper_7_content_imgCM"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%2015.png?alt=media&token=592f31cd-a893-46ef-8132-ff11fbc83369`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20597.png?alt=media&token=999e487f-a24d-41ed-b133-ed06988a7497`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>체계적이고 안정적인 물류 시스템으로 일주일에 </div>
                  <div>한번씩 본사 직접 배송으로 불필요한 재고를 보유</div>
                  <div>할 필요없음</div>
                </div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_02.png?alt=media&token=c61324d3-979d-4534-bf75-9e9dc9f23609`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20598.png?alt=media&token=d71262e1-6208-4b7d-a036-745aa3ee3f73`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>강아지, 고양이, 소동물까지 펫을 위한 마트!</div>
                </div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_03.png?alt=media&token=b61cf72a-5395-42f1-85e2-e81bf1ff9f9a`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20599.png?alt=media&token=f4fadd99-a1c6-49b4-b9e7-75a2d8c79e23`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>가장 많은 비용을 차지하는 인테리어 비용을 창업</div>
                  <div>자 직접처리로 창업 비용 절감</div>
                </div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_04.png?alt=media&token=7508949b-fa55-46ce-9f53-7a787c7b84ca`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20600.png?alt=media&token=a54788e9-895f-4126-8edc-25d314364ac6`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>코로나로 인해 폐업률이 높은 자영업계에</div>
                  <div>비해 낮은 폐업률을 자랑하는 펫마트!</div>
                </div>
              </div>
            </div>
            <div className="Wrapper_7_onlys RowWrapper">
              <div className="Wrapper_7_onlyW">
                <img
                  className="Wrapper_7_onlyC"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%8E%E1%85%A9.png?alt=media&token=ce3abc0c-98c7-4624-af6c-7567425c1d42`}
                />
              </div>
              <div className="Wrapper_7_onlyW">
                <img
                  className="Wrapper_7_onlyC"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%8E%E1%85%A9-1.png?alt=media&token=4209939f-36fa-4b3d-83b1-28a3b2bb29c5`}
                />
              </div>
              <div className="Wrapper_7_onlyW">
                <img
                  className="Wrapper_7_onlyC"
                  src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%8E%E1%85%A9-2.png?alt=media&token=e99b0b56-1987-4d96-b1d4-b3e596c8f67d`}
                />
              </div>
            </div>
            <div className="Wrapper_7_contents Wrapper_7_contentsDN RowWrapper">
              <div className="Wrapper_7_content Wrapper_7_contentDN">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_05.png?alt=media&token=e7458229-31da-4650-a8c8-6f2b14b5ace0`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20601.png?alt=media&token=ddd8862c-e434-43e9-97a0-7493f6b79bad`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>월별, 분기별, 시즌에 맞는 이벤트 기획 운영</div>
                </div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_06.png?alt=media&token=e5975304-5dad-4fc9-8937-c55cb2a49a66`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20602.png?alt=media&token=79f202fd-1aa3-4156-9766-bb39a20b2c04`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>매장 담당자 지정관리로 빠른 피드백은 물론</div>
                  <div>매장수익분석, 교육 등 컨설팅 가능</div>
                </div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_07.png?alt=media&token=99492902-1442-44aa-961c-833e1973afbd`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20603.png?alt=media&token=f21dbbbf-04f2-4b5f-9a62-dcca938992a0`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>신상 품평회를 개최하여</div>
                </div>
                <div>최신 트렌드에 맞는 신상입고</div>
              </div>

              <div className="Wrapper_7_content">
                <div className="Wrapper_7_content_imgW">
                  <img
                    className="Wrapper_7_content_imgC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fimg_08.png?alt=media&token=97f9d31f-a1dd-48a7-8348-69492aa5c55d`}
                  />
                </div>
                <div className="Wrapper_7_content_titleW">
                  <img
                    className="Wrapper_7_content_titleC"
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20604.png?alt=media&token=1fe93b46-e112-4eab-bc74-d314647c29a5`}
                  />
                </div>
                <div className="Wrapper_7_content_desc">
                  <div>TV, 옥외광고 등 브랜딩, 바이럴,</div>
                  <div>신규고객 창출을 위한 마케팅 기획운영</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Wrapper_8 Wrapper">
          <div className="Wrapper_8_title">개설비용</div>
          <div className="Wrapper_8rs Wrapper">
            <img
              className="Wrapper_8rs_img"
              src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Ftable.png?alt=media&token=972b9aa1-dfc5-404d-94ab-02ed09582150`}
            />
            <div className="Wrapper_8_modal">
              <div className="Wrapper_8_modal_contents Wrapper">
                <div>창업문의</div>
                <div>펫마트의 전문 창업상담사 항시대기</div>
                <div>1:1문의로 편안하고 빠른 안내를 받아보세요.</div>
                <div className="RowWrapper">
                  <div>연락처</div>
                  <div>1588-1684</div>
                </div>
                <div className="RowWrapper">
                  <div>E-mail</div>
                  <div>ebajslee@sunjinpet.co.kr</div>
                </div>
              </div>
              <div className="Wrapper_8_modal_btn Wrapper">신청하기</div>
            </div>
          </div>
        </div>
        <div className="Wrapper_8_M Wrapper">
          <div className="Wrapper_8_M_title">창업문의</div>

          <div className="Wrapper_8_M_desc">
            펫마트의 전문 창업상담사 항시대기 1:1문의로
          </div>
          <div className="Wrapper_8_M_desc">
            편안하고 빠른 안내를 받아보세요.
          </div>
          <div className="Wrapper_8_M_desc_border">
            <div className="Wrapper_8_M_borderC">
              <div className="Wrapper_8_M_borderC1">연락처</div>
              <div className="Wrapper_8_M_borderC2">1588-1684</div>
            </div>
            <div className="Wrapper_8_M_borderC">
              <div className="Wrapper_8_M_borderC1">E-mail</div>
              <div className="Wrapper_8_M_borderC2">
                ebajslee@sunjinpet.co.kr
              </div>
            </div>
          </div>
          <div className="Wrapper_8_M_btn">신청하기</div>
        </div>

        <div className="footer">
          <div className="footer_rs RowWrapper">
            <div className="footer_1">
              <div>주식회사 선진펫</div>
              <div className="RowWrapper">
                <div className="footer_mR">
                  주소 :경상북도 청도군 청도읍 송읍길 79 주식회사 선진펫
                </div>
                <div className="footer_mR">대표이사 :이권형</div>
                <div>대표번호 :053-982-1550</div>
              </div>
              <div className="RowWrapper">
                <div className="footer_mR">팩스 :053-986-1545</div>
                <div>통신판매업신고번호 :제2012-대구동구-0113호</div>
              </div>
              <div>사업자등록번호 :502-86-16211 [사업자정보확인]</div>
              <div>Copyright ⓒ 주식회사 선진펫 All rights reserved.</div>
              <div className="RowWrapper footer_imgs">
                <div className="footer_img_1">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Fescrow_banner_kcp.png?alt=media&token=1090d8c8-8194-4873-852b-9b28898c7e87`}
                  />
                </div>
                <div className="footer_img_2">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/study-77c83.appspot.com/o/just%2Fpetmart%2Flogo_kftc.png?alt=media&token=551ef727-aa8b-4776-875e-6ab48f96f391`}
                  />
                </div>
              </div>
            </div>

            <div className="footer_content">
              <div>창업문의</div>
              <div>1588-1684</div>
              <div>ebajslee@sunjinpet.co.kr</div>
            </div>
            <div className="footer_content">
              <div>서울/수도권 가맹문의</div>
              <div>1577-0731</div>
              <div>vvvkmvvv@sunjinpet.co.kr</div>
            </div>

            <div>
              <div>평일 : 8:30 - 17:30</div>
              <div>점심시간: 12:30 - 13:30</div>
              <div>토,일/공휴일은 휴무</div>
              <div>E-Mail : sunjinpf@naver.com</div>
            </div>
          </div>
        </div>
        <div className="footer_mobile">
          <div className="footer_mobile_1">주식회사 선진펫</div>
          <div className="footer_mobile_2">
            주소 :경상북도 청도군 청도읍 송읍길 79 주식회사 선진펫
          </div>
          <div className="footer_mobile_3">
            대표이사 :이권형 | 대표번호 :053-982-1550
          </div>

          <div className="footer_mobile_4">
            팩스 :053-986-1545 | 통신판매업신고번호 :제2012-대구동구-0113호
          </div>
          <div className="footer_mobile_5">
            사업자등록번호 :502-86-16211 [사업자정보확인]
          </div>
          <div className="footer_mobile_6">
            Copyright ⓒ 주식회사 선진펫 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
