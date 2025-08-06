import React from 'react';
import './scss/Home.scss'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();
    const project1 =  () => {
        nav('/project1');
    }
  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="title">CAREER</h1>
        <img src="/profile.png" alt="profile" className="profile-img" />

        <div className="info-box">
          <h3>개인 정보</h3>
          <p><strong>이름</strong> 허남석</p>
          <p><strong>이메일</strong> sim9416@nate.com</p>
          <p><strong>번호</strong> 010-7757-1098</p>
          <p><strong>주소</strong> 인천광역시 중구 신흥동2가<br></br> 1-82 삼정베스트빌 2동201호</p>
          <p><strong>깃허브</strong> <a href="https://github.com/namseok-h/namseok-h" target="_blank" rel="noreferrer">namseok-h</a></p>
        </div>
      </div>

      <div className="right-section">
        <div className="section">
          <h3>학력</h3>
          <p>2015.03 ~ 2018.02 인천생활과학고등학교 조리과학과 졸업</p>
        </div>

        <div className="section">
          <h3>경력</h3>
          <p>2018.04 ~ 2019.04 인천공항1터미널 푸드엠파이어(PHO)</p>
          <p>2021.07 ~ 2021.10 네스트호텔 플라츠</p>
          <p>2022.05 ~ 2023.03 싱글레지던스 고시원 총무</p>
          <p>2024.05 ~ 2024.12 컴포즈커피 카페 알바</p>
          <p>2024.12 ~ 2025.06 인천일보아카데미 자바앤파이썬 직업훈련</p>
        </div>

        <div className="section">
          <h3>프로젝트</h3>
          <p>2025.05 ~ 2025.06 팀프로젝트: 알바인 (React + Spring Boot + MySQL)</p>
          <button className="project-button" onClick={project1}>
          👉 알바인 프로젝트 보러가기
        </button>
        </div>
        <div className="section">
            <h3>스킬</h3>
            <div className="skills">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>SCSS</span>
                <span>Git</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
