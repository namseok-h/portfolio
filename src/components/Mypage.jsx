import React from 'react';
import { useNavigate } from 'react-router-dom';
import './scss/Mypage.scss';

const Mypage = () => {
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1); 
  };

  return (
    <div className="mypage-preview-container">
        <button className="back-button" onClick={handleBack}>
        뒤로가기
      </button>
        <p className="description">
        마이페이지에서는 회원의 프로필 정보를 확인할 수 있으며,<br />
        좌측 메뉴를 통해 정보 수정 및 이력서 관리 페이지로 이동할 수 있습니다.
      </p>
      <h2>🙍 마이페이지 미리보기</h2>
      <img
        src="/mypage.png"
        alt="마이페이지 미리보기"
        className="mypage-screenshot"
      />
      
    </div>
  );
};

export default Mypage;
