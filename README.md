# resume 페이지

Next.js로 구축된 본인 소개 목적의 단일 페이지 애플리케이션입니다.

## 시작하기

이 안내서는 개발 및 테스트 목적으로 로컬 컴퓨터에서 프로젝트를 설정하고 실행하는 방법을 안내합니다.

### 사전 요구 사항

[Node.js](https://nodejs.org/)와 npm (또는 yarn/pnpm)

### 설치

1.  **저장소 복제**
    ```sh
    git clone git@github.com:small-goliath/resume-latest.git
    ```

2.  **NPM 패키지 설치**
    ```sh
    npm install
    ```

### .env.local 파일 설정

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고, 아래 변수들을 자신의 정보에 맞게 설정해야 합니다. 이 파일은 프로필, 경력, 기술 등 이력서에 표시될 모든 데이터를 관리합니다.

**기본 정보**
```env
NEXT_PUBLIC_WEB_URI="웹사이트 주소 (예: https://small-goliath.kro.kr)"
NEXT_PUBLIC_WEB_DESCRIPTION="웹사이트 설명 (예: 문제를 해결하고 가치를 창출하는 백엔드 엔지니어)"
NEXT_PUBLIC_PROFILE_NAME="페이지 공유할 때 노출시킬 이름"
NEXT_PUBLIC_NAME="페이지 내 노출할 이름"
NEXT_PUBLIC_MBTI="MBTI (예: ESTJ)"
```

**링크 정보**
```env
NEXT_PUBLIC_GITHUB_URL="GitHub 프로필 URL"
NEXT_PUBLIC_BLOG_URL="기술 블로그 URL"
NEXT_PUBLIC_RESUME_URL="이력서 PDF 파일 URL"
```

**학력 (`NEXT_PUBLIC_EDUCATION`)**
JSON 배열 형식으로, 각 학력 사항을 객체로 표현합니다.
```json
[
  {"institution": "한국대학교", "category": "컴퓨터공학 학사", "date": "2012-2018"}
]
```

**보유 기술 (`NEXT_PUBLIC_SKILLS`)**
JSON 배열 형식으로, 기술 분류를 객체로 표현합니다.
```json
[
  {"category": "언어", "list": ["Java", "Python", "Javascript"]},
  {"category": "백엔드 개발", "list": ["Spring Boot", "FastAPI"]}
]
```

**수상 내역 (`NEXT_PUBLIC_AWARDS`)**
JSON 배열 형식으로, 각 수상 내역을 객체로 표현합니다.
```json
[
  {"awardName": "우수상", "category": "xxxx 경진대회"}
]
```

**봉사활동 (`NEXT_PUBLIC_VOLUNTEERING`)**
JSON 배열 형식으로, 각 봉사활동을 객체로 표현합니다.
```json
[
  {"institution":"한국대학교", "description":"고등학교 야간자율학습 야식 배달, 연탄봉사, 프리허그 등 사회봉사 참여"}
]
```

**대외활동 (`NEXT_PUBLIC_ACTIVITIES`)**
JSON 배열 형식으로, 각 대외활동을 객체로 표현합니다.
```json
[
  {"institution":"ASAK 한국 대학생 홍보대사 연합", "description":"국내 각 대학교의 대표 홍보대사 연합"},
  {"institution":"홍보팀 / 한국대학교", "description":"학교를 대표하는 재학생 홍보대사"}
]
```

**인턴십 (`NEXT_PUBLIC_INTERNSHIPS`)**
JSON 배열 형식으로, 각 인턴십 경험을 객체로 표현합니다.
```json
[
  {"company":"구글 본사", "description":"코어 개발 (...)"}
]
```

**연구활동 (`NEXT_PUBLIC_RESEARCH`)**
JSON 배열 형식으로, 각 연구활동을 객체로 표현합니다.
```json
[
  {
    "category": "학술논문",
    "title": "xxx 제어 시스템",
    "remarks": "인터넷정보학회",
    "link": "논문 링크",
    "cdnUrl": "논문 PDF 파일 URL"
  }
]
```

**동료 평가 (`NEXT_PUBLIC_PEER_REVIEWS`)**
JSON 배열 형식으로, 각 동료 평가 이미지 URL을 문자열로 포함합니다.
```json
[
  "https://cdn.sample.com/sample.png"
]
```

**경력 타임라인 (`NEXT_PUBLIC_FOOTPRINTS`)**
JSON 배열 형식으로, 각 경력을 객체로 표현합니다.
```json
[
  {"company": "구글 본사", "role": "코어 개발", "startYear": "2018"}
]
```

## 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 스크립트를 실행할 수 있습니다.

### `npm run dev`

개발 모드에서 앱을 실행합니다.<br />
브라우저에서 [http://localhost:3000](http://localhost:3000) 주소로 접속하여 확인할 수 있습니다.

코드를 수정하면 페이지가 자동으로 새로고침되며, 콘솔에서 린트 오류를 확인할 수 있습니다.

### `npm run build`

프로덕션용으로 앱을 빌드하여 `.next` 폴더에 결과물을 생성합니다.<br />
React를 프로덕션 모드로 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

### `npm run start`

프로덕션 모드로 애플리케이션을 시작합니다. 이 명령을 실행하기 전에 `npm run build`를 통해 앱을 빌드해야 합니다.

### `npm run lint`

린터를 실행하여 코드 품질과 스타일 문제를 검사합니다.

## 주요 의존성

-   [next](https://nextjs.org/): 프로덕션용 React 프레임워크
-   [react](https://reactjs.org/): 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
-   [react-dom](https://reactjs.org/docs/react-dom.html): React를 위한 DOM 및 서버 렌더러 진입점

## 개발 의존성

-   [@eslint/eslintrc](https://www.npmjs.com/package/@eslint/eslintrc): ESLint RC 파일 지원
-   [@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss): Tailwind CSS용 PostCSS 플러그인
-   [@types/node](https://www.npmjs.com/package/@types/node): Node.js용 TypeScript 정의
-   [@types/react](https://www.npmjs.com/package/@types/react): React용 TypeScript 정의
-   [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): React DOM용 TypeScript 정의
-   [autoprefixer](https://www.npmjs.com/package/autoprefixer): CSS 규칙에 벤더 접두사를 추가하는 PostCSS 플러그인
-   [eslint](https://eslint.org/): JavaScript 코드의 문제를 찾고 수정하는 도구
-   [eslint-config-next](https.www.npmjs.com/package/eslint-config-next): Next.js 프로젝트를 위한 ESLint 설정
-   [postcss](https://postcss.org/): JS 플러그인을 사용하여 스타일을 변환하는 도구
-   [tailwindcss](https://tailwindcss.com/): 유틸리티 우선 CSS 프레임워크
-   [typescript](https://www.typescriptlang.org/): JavaScript의 타입이 지정된 상위 집합