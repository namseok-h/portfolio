import React from 'react';
import './scss/KakaoMap.scss';
import { useNavigate } from 'react-router-dom';

const KakaoMap = () => {
    const nav = useNavigate();
  return (
    <div className="map-preview-container">
    <button className="back-button" onClick={() => nav(-1)}>← 뒤로가기</button>
      <h2>📍 알바인 지도 기능 미리보기</h2>

      <p className="map-description">
        사용자는 <strong>인천 내 핫플레이스</strong>를 클릭하면 해당 위치에 맞는 알바 마커가 지도에 나타납니다.<br />
        <strong>카카오맵 API</strong>를 사용하여 위치 기반 시각화 기능을 구현했으며,<br />
        선택된 지역에 따라 마커 위치와 개수가 <strong>동적으로 변경</strong>됩니다.
      </p>

      <img
        src="/kakaomap.png"
        alt="알바인 지도 미리보기"
        className="map-screenshot"
      />
    </div>
  );
};

export default KakaoMap;
