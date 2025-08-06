import React from 'react';
import './scss/Project1.scss';
import { useNavigate } from 'react-router-dom';

const Project1 = () => {
    const nav = useNavigate();
  return (
    <div className="project1-page">
      <div className="project-left">
        <div className="project-card">
          <h1 className="project-title">프로젝트 소개: <span>알바인</span></h1>
          <p className="project-desc">
            "알바의 알바"와 "인천의 인"을 합쳐 <strong>알바인</strong>이라는 이름을 만들었습니다.<br />
            인천 지역의 다양한 알바 정보를 한곳에 모은 <strong>구인구직 플랫폼</strong>입니다.<br />
            사용자가 쉽고 빠르게 지역별 알바를 확인할 수 있도록 기획 및 개발하였습니다.
          </p>

          <h2>✅ 주요 기능</h2>
          <ul className="project-list">
            <li>📍 카카오맵 API로 핫플레이스 주변 알바 시각화</li>
            <button className="mini-button" onClick={() => nav('/kakaomap')}>
            미리보기
            </button>
            <li>🔍 조건별 필터 버튼 (지역, 직종, 요일)</li>
            <li>📝 공고 / 이력서 등록 기능</li>
            <button className="mini-button" onClick={() => nav('/resume')}>
            이력서 미리보기
            </button>
            <li>📄 이력서 등록 후 마이페이지에서 상세 정보 확인 및 수정 가능
            </li>
            <button onClick={() => nav('/mypage')} className="preview-btn">마이페이지 미리보기</button>
            <li>🔗 공고 클릭 시 상세 페이지 이동</li>
            <li>👨‍💼 기업회원만 공고 등록 가능하도록 권한 분리</li>
          </ul>

          <h2>🛠 사용 기술</h2>
          <div className="project-skills">
            <span>Spring Boot</span>
            <span>React</span>
            <span>MyBatis</span>
            <span>MySQL</span>
            <span>SCSS</span>
            <span>Kakao Map API</span>
          </div>
        </div>
      </div>

      <div className="project-right">
        <img
          src="/home.png"
          alt="알바인 홈 화면"
          className="home-preview-img"
        />
      </div>
    </div>
  );
};

export default Project1;
