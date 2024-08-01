<template>
  <main>
    <!-- 캐러셀 부분 -->
    <div class="carousel">
      <div class="carousel-box">
        <div class="arrow" id="left">&lang;</div>
        <div class="arrow" id="right">&rang;</div>
        <div class="carousel-in-content">
          <p class="carousel-in-title">마감 임박 모임</p>
          <p class="carousel-in-text">
            곧 모집 인원 마감되는 모임을 알려드려요<br />상세 정보를 확인하신 후
            참여해보세요
          </p>
        </div>
        <div class="carousel-pagination">
          <div class="carousel-circle"></div>
          <div class="carousel-circle"></div>
          <div class="carousel-circle"></div>
          <div class="carousel-circle"></div>
        </div>
        <button type="button" class="carousel-btn">참석하기</button>
      </div>
    </div>

    <!-- 종목, 장소, 날짜, 시간 필터 -->
    <div class="main-bottom">
      <div class="filter">
        <div class="filter-list">
          <select class="list-select" title="운동 종목">
            <option value="" selected disabled>운동 종목</option>
          </select>
          <select class="list-select" title="장소">
            <option value="" selected disabled>장소</option>
          </select>
          <select class="list-select" title="날짜">
            <option value="" selected disabled>날짜</option>
          </select>
          <select class="list-select" title="시간">
            <option value="" selected disabled>시간</option>
          </select>
          <form class="search-box">
            <input
              type="text"
              name="search"
              class="search-input"
              placeholder="검색어를 입력하세요."
            />
            <img
              src="../assets/image/search.icon.png"
              alt="search"
              class="search-icon"
            />
          </form>
        </div>
        <div class="sort">
          <select class="sort-title" title="정렬">
            <option value="" selected disabled>정렬</option>
            <option value="1">인기순</option>
            <option value="2">오름차순</option>
            <option value="3">내림차순</option>
            <option value="4">최신순</option>
          </select>
        </div>

        <!-- 생성된 모임 영역 -->
        <div class="group">
          <div class="group-container">
            <div class="user-info">
              <img
                src="../assets/image/user_img.png"
                alt="사용자 이미지"
                class="user-img"
              />
              <span>김계란</span>
              <img
                src="../assets/image/상세설명 아이콘.png"
                alt=""
                class="detail-icon"
              />
            </div>
            <div class="group-content">
              <span class="title"> 수영 같이 하실 분 구함 </span>
            </div>
            <p class="date">24.06.14 (금)</p>
            <p class="time">8:00 PM</p>
            <div class="group-info">
              <img
                class="like-img"
                src="../assets/image/heart.png"
                alt="하트"
              />
              <span class="size">참여인원: 3/10</span>
              <span class="location">강남구</span>
              <span class="cancel">참석</span>
            </div>
          </div>
          <div class="group-container"></div>
          <div class="group-container"></div>
          <div class="group-container"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { useRouter } from 'vue-router';

export default {
  name: "Home",
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
}

/* 캐러셀 */
.carousel {
  display: flex;
  justify-content: center;
  height: 100%;
}

.carousel-box {
  position: relative;
  width: 1320px;
  height: 100%;
  border: 1px solid #ccc;
  display: flex;
  border-radius: 1%;
}

.arrow {
  z-index: 100;
  font-size: 2em;
  padding: 10px;
  color: #222;
  opacity: 0.4;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

#left {
  left: 10px;
}

#right {
  right: 10px;
}

.carousel-in-content {
  position: absolute;
  top: 10%;
  left: 12%;
}

.carousel-in-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #5d5a88;
  margin-bottom: 10px;
}

.carousel-in-text {
  font-size: 20px;
  color: #ccc;
}

.carousel-pagination {
  position: absolute;
  bottom: 10px;
  left: 48%;
  transform: translateY(-50%);
  display: flex;
}

.carousel-circle {
  width: 10px;
  height: 10px;
  background-color: #aaa;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-circle:active {
  background-color: #333;
}

.carousel-btn {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 165px;
  height: 65px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: #1a73e8;
  color: white;
  border-radius: 10px;
}

/* 필터 */
.main-bottom {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter {
  width: 1320px;
  height: 900px;
  display: grid;
  grid-template-rows: 100px 40px 4fr;
}

.filter-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-select {
  width: 200px;
  height: 48px;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  border: 1px solid whitesmoke;
  font-size: 16px;
}

/* 검색창 */
.search-box {
  display: flex;
  align-items: center;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 5px 0px 5px 5px;
  width: 250px;
  height: 48px;
}

.search-input {
  border: none;
  outline: none;
  padding: 5px 0px 5px 10px;
  font-size: 16px;
}

.search-icon {
  width: 15px;
  height: 15px;
  margin-left: 15px;
  cursor: pointer;
}

/* 정렬순 블럭 */
.sort {
  display: flex;
  justify-content: flex-end;
}

.sort-title {
  width: 110px;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid whitesmoke;
  box-sizing: border-box;
  font-size: 16px;
}

/* 생성 모임 영역 */
.group {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
}

.group-container {
  width: 360px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin: 29px 0 0 20px;
}

.user-img {
  width: 50px;
  height: 40px;
  margin-left: 10px;
}

.detail-icon {
  width: 20px;
  height: 20px;
  margin-left: 173px;
}

.group-content {
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #5d5a88;
}

.date {
  font-size: 18px;
  color: #9795b5;
  margin-left: 218px;
  margin-top: 20px;
  padding: 5px;
}

.time {
  font-size: 18px;
  color: #9795b5;
  margin-left: 252px;
  padding: 5px;
}

.group-info {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.like-img {
  width: 35px;
  height: 35px;
  margin-right: 30px;
}

.size {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 5px;
}

.location {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 5px;
}

.cancel {
  padding: 11px 17px;
  border: none;
  border-radius: 10px;
  background-color: #1a73e8;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 58px;
  height: 38px;
}
</style>
