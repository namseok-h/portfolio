import React from 'react';
import './scss/Resume.scss';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const nav = useNavigate();
  return (
    <div className="resume-preview-container">
        <button className="back-button" onClick={() => nav(-1)}>← 뒤로가기</button>
      <h2>📝 알바인 이력서 작성 기능 미리보기</h2>
      <p className="resume-desc">
        이력서 작성 페이지에서는 <strong>사진 업로드, 학력, 자기소개</strong>까지 간단하게 입력할 수 있습니다.<br />
        <strong>프론트: React</strong>, <strong>백엔드: Spring Boot</strong>로 구성되었으며<br />
        제출 시 DB 저장 및 기업 회원이 열람 가능하도록 설계했습니다.
      </p>
      <img
        src="/resume.png"
        alt="이력서 작성 화면"
        className="resume-screenshot"
      />
    </div>
  );
};

export default Resume;
