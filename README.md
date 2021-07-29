# 뿅카 데스크탑 리뉴얼 퍼블리싱


윈도우 환경에서 줄바꿈(new line)문자로 CR(Carrige-Return) LF(Line Feed)문자를 둘다 사용하기 때문에, git 글로벌 환경설정으로 아래와 같은 설정이 필요합니다.

```command
> git config --global core.autocrlf true
```

- [참고링크](http://handam.tistory.com/127)

## 환경

- [Sass](https://sass-guidelin.es/ko/)
- [Gulp](https://gulpjs.com/)

## Node & Gulp 태스크

### Node

의존성 설치 후 

```command
> npm install
> npm run start
```

start 태스크에 커맨드 선택을 할 수 있지만, 수동으로 작동할 수도 있습니다.

- "start": gulp 실행
- "dev": 개발자모드 gulp 실행
- "release": 파일 빌드 실행
- "serve": 서버 구동
- "live": 라이브서버 구동

### Gulp

참고로 es6 변환작업이 추가되어 있기 때문에 사용 가능.

- "default" : gulp 기본 구동
- "build" : 빌드 파일 생성
- "watch" : 파일 변경 감시
