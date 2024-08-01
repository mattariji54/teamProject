<template>
    <main>
            <div class="main-container">
                <div class="main-content">
                    <div class="content-changeimage">
                        <div class="changeimage-icon"></div>
                        <span>이미지 변경</span>
                    </div>
                    <div class="content-title">
                        <textarea type="text" placeholder="제목을 입력하세요."></textarea>
                    </div>
                    <div class="content-box" role="textbox">
                        <div class="contentbox-image"></div>
                        <p>공휴일에 멤버들이랑 kosta 짐에서 웨이트 했습니다~</p>
                    </div>
                    <div class="content-topic">
                        <p class="item topic-item">종목</p>
                        <p class="item">장소</p>
                        <p class="item">인원</p>
                    </div>
                </div>
                <div class="main-feature">
                    <div class="feature-topic">
                        <p class="topic-text">Choose Category</p>
                        <div class="topic-category">
                            <button class="category-tag" type="submit" name="category">
                            러닝
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            웨이트
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            라이딩
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            요가
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            수영
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            등산
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            테니스
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            클라이밍
                            </button>
                            <button class="category-tag" type="submit" name="category">
                            필라테스
                            </button>
                            <button class="category-tag" type="submit" name="category">GX</button>
                        </div>
                    </div>
                    <div class="feature-input">
                        <input type="text" class="input-framebox" placeholder="운동명을 입력하세요.">
                        <button class="frame-btn">확인</button>
                    </div>
                    <p class="category-text">choose location</p>
                    <div class="feature-input">
                        <input type="text" class="input-framebox" placeholder="위치를 검색하세요.">
                        <button class="frame-btn">확인</button>
                    </div>
                    <p class="category-text">choose group size</p>
                    <div class="feature-input">
                        <input type="text" class="input-framebox" placeholder="인원을 입력하세요.">
                        <button class="frame-btn">확인</button>
                    </div>
                    <button class="feature-modify">수정</button>
                </div>
            </div>
            
        </main>
</template>



<script>
export default {
    name: "PostModify",
};
</script>



<style scoped>
main {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    
}

input {
    outline: none;
}

.main-container {
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 360px;
}

.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content-changeimage {
    display: flex;
    width: 83%;
    align-items: center;
}

.changeimage-icon {
    width: 35px;
    height: 34px;
    background-color: #F2F2F2;
    background-image: url('@/assets/image/camera.png');
    background-repeat: no-repeat;
    background-size: 80% 80%;
    background-position: center;
    border-radius: 100%;
    margin: 10px 0;
    cursor: pointer;
}

.content-changeimage span {
    color: #00000099;
}

.content-title {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 60px;
    border-radius: 10px;
    margin: 10px 0;
}

.content-title textarea {
    border: none;
    font-size: 20px;
    width: 100%;
    height: 40px;
    color: #202020;
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
}

.content-title::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    align-items: center;
    background-color: #eee5e5;
    margin-top: 5px;
    position: relative;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
}

.content-box {
    width: 715px;
    height: 500px;
    overflow: hidden;
    cursor: text;
}

.contentbox-image {
    width: 526px;
    height: 439px;
    margin: auto;
    background-image: url('@/assets/image/image.png');
    background-position-y: -200px;
    background-position-x: center;
    margin-bottom: 5%;
}

.content-topic {
    display: flex;
    flex-direction: row;
    margin-right: 67%;
    margin-top: 50px;
}

.topic-item {
    width: 58px;
    height: 24px;
    font-size: 13px;
    cursor: pointer;
    background: #f2f2f2;
    z-index: 96;
    border-radius: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    margin: 5px 10px;
    font-weight: lighter;
    font-size: 13px;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* feature */
.main-feature {
    display: flex;
    flex-direction: column;
    position: relative;
}

.main-feature::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 90%;
    top: 0px;
    left: -30px;
    background-color: whitesmoke;
}

.feature-topic {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.topic-text {
    text-align: start;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .topic-category {
    width: 340px;
    height: 130px;
  }

  .category-tag {
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 10px;
    margin: 4px;
    padding: 0;
  }

.feature-topic p {
    justify-content: left;
    margin: 10px 15px;
}

.feature-input {
    width: 404px;
    height: 35px;
    display: flex;
    margin: 5px 0 15px 0;
    align-items: center;
}

.input-framebox {
    width: 245px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 5px;
    padding: 5px 0px 5px 10px;
}

.frame-btn {
    width: 60px;
    height: 35px;
    margin-left: 5px;
    padding: 8px 16px;
    border: none;
    background-color: #1a73e8;
    color: white;
    border-radius: 10px;
    font-size: 13.3333px;
    font-weight: bold;
    cursor: pointer;
}

.category-text {
    margin-bottom: 10px;
    margin-top : 30px;
}

.item-search {
    border: none;
    width: 95%;
    height: 80%;
    border-radius: 15px;
    margin-left: 3%;
}

.feature-group {
    display: flex;
    margin-left: 10px;
    align-items: center;
}

.feature-modify {
    width: 100%;
    height: 40px;
    background-color: #1A73E8;
    border-radius: 10px;
    border: none;
    margin-top: 20%;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
</style>