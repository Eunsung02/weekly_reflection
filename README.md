# 🌿 우리의 한 주 - Weekly Reflection

매주 함께 돌아보는 소중한 시간. 두 사람이 세 가지 질문에 답하며 한 주를 회고하는 앱입니다.

---

## 📱 설치 방법 (3단계)

### 1단계: 무료 호스팅에 올리기

아래 3개 파일을 무료 호스팅 서비스에 업로드합니다:
- `index.html`
- `manifest.json`
- `sw.js`

**추천 방법 (가장 쉬운 순서):**

#### 방법 A: Netlify (가장 쉬움, 1분)
1. https://app.netlify.com 가입
2. 로그인 후 "Sites" 페이지에서 이 폴더를 드래그&드롭
3. 나온 URL (예: `https://내사이트.netlify.app`)을 복사

#### 방법 B: GitHub Pages (무료, 영구적)
1. https://github.com 가입
2. 새 Repository 만들기 (Public)
3. 3개 파일 업로드
4. Settings → Pages → Source를 "main" 브랜치로 설정
5. `https://아이디.github.io/저장소명/` 으로 접속

#### 방법 C: Vercel (무료, 빠름)
1. https://vercel.com 가입
2. 새 프로젝트 → 파일 업로드
3. 자동 배포된 URL 사용

### 2단계: 휴대폰에 앱으로 설치

호스팅된 URL을 휴대폰 브라우저에서 열고:

**아이폰 (Safari):**
1. Safari로 URL 접속
2. 하단 공유 버튼 (⬆️) 탭
3. "홈 화면에 추가" 선택
4. "추가" 탭 → 완료! 앱 아이콘이 홈 화면에 나타남

**갤럭시/안드로이드 (Chrome):**
1. Chrome으로 URL 접속
2. "홈 화면에 추가" 또는 "앱 설치" 팝업이 자동으로 뜸
3. 또는 ⋮ 메뉴 → "앱 설치" 또는 "홈 화면에 추가"
4. 설치 → 완료! 앱처럼 실행됨

### 3단계: 함께 사용하기

1. 한 사람이 앱에서 "새 방 만들기" → 6자리 코드 생성
2. 그 코드를 파트너에게 전달
3. 파트너가 같은 URL에서 앱 설치 후 "초대 코드로 참여하기"
4. 끝! 매주 각자 작성하고 "함께 보기"에서 서로의 답변 확인

---

## 🔥 Firebase 연동 (선택사항 - 실시간 공유)

Firebase 없이도 **혼자 사용 가능**합니다.
두 사람이 **실시간으로** 서로의 답변을 보려면 Firebase를 연동하세요.

### Firebase 설정 방법 (5분)

1. https://console.firebase.google.com 접속
2. "프로젝트 추가" 클릭 → 이름 입력 → 만들기
3. 왼쪽 메뉴 → "빌드" → "Realtime Database" → "데이터베이스 만들기"
4. 위치 선택 → **"테스트 모드에서 시작"** 선택 → 사용 설정
5. 왼쪽 메뉴 → 프로젝트 설정 (⚙️) → "일반" 탭
6. 아래쪽 "내 앱" → "</>" (웹) 클릭 → 앱 이름 입력 → 등록
7. 표시되는 `firebaseConfig` 값을 복사

### 코드에 붙여넣기

`index.html` 파일을 열고 아래 부분을 찾아서:

```javascript
const FIREBASE_CONFIG = {
  // apiKey: "여기에-붙여넣기",
  ...
};
```

Firebase에서 복사한 설정으로 교체:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD...",
  authDomain: "my-project.firebaseapp.com",
  databaseURL: "https://my-project-default-rtdb.firebaseio.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

저장 후 다시 호스팅에 업로드하면 끝!

---

## 📋 기능 요약

| 기능 | Firebase 없이 | Firebase 연동 |
|------|:---:|:---:|
| 세 가지 질문 작성 | ✅ | ✅ |
| 매주 기록 저장 | ✅ | ✅ |
| 지난 기록 보기 | ✅ | ✅ |
| 알림 설정 | ✅ | ✅ |
| 홈 화면 앱 설치 | ✅ | ✅ |
| 파트너 실시간 공유 | ❌ | ✅ |
| 함께 보기 | ❌ | ✅ |

---

## ❓ 문제 해결

**"홈 화면에 추가"가 안 보여요**
→ 반드시 HTTPS로 호스팅해야 합니다 (Netlify, GitHub Pages 등은 자동 HTTPS)

**알림이 안 와요**
→ 브라우저/앱 알림 권한을 허용했는지 확인하세요
→ 설정 → 앱 → 브라우저 → 알림 허용

**파트너 답변이 안 보여요**
→ Firebase가 설정되었는지 확인하세요
→ 두 사람이 같은 방 코드를 사용하고 있는지 확인하세요
