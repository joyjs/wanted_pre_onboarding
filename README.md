<br />
<br />

<!-- Header -->

<div align="middle" >
  <img width="120px;" src="https://user-images.githubusercontent.com/46529118/153215954-219b6bd6-36cd-4faf-a15e-fc0b1f4b8749.png"/>
</div>
<br />
<h1 align="middle">원티드 프리온보딩 코스</h2>
<p align="middle">🎠 Casestudy with <a href="https://www.wanted.co.kr/" target="_blank">Wanted</a>'s GNB and TopCarousel</p>

<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-F1F0E7?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-React-61DBFB"/>
  <img src="https://img.shields.io/badge/language-SASS-BF4080"/>
  <img src="https://img.shields.io/badge/license-MIT-8B8C8D.svg?style=flat-square"/>
</p>

<p align="middle"><a href="https://blog.naver.com/rene2016/222643395280">✍️ 숏에세이(네이버 블로그) 바로 가기</a></p>

<br />
<br />

<!-- Content -->

## 구현한 방법과 이유에 대한 내용

<br />

- 각각의 컴포넌트들을 각기 다른 파일로 담아서 App.js에 렌더링 했습니다.
- 대략적인 파일 구조는 다음과 같습니다.
  <br />

```
/src
	App.js
	/components
		Autocomplete.js
		ClickToEdit.js
		Modal.js
		ModalButton.js
		Tab.js
		Tag.js
		Toggle.js
	/styles
		main.scss
		/base
			_globals.scss
			_normalize.scss
			_reset.scss
		/components
			_autocomplete.scss
			_clicktoedit.scss
			_modal-button.scss
			_modal.scss
			_tabs.scss
			_tags.scss
			_toggle.scss
		/constants
			_colors.scss
			_dimensions.scss
			_spacings.scss
			_typography.scss
		/layout
			_app.scss
		/mixins
			_flexbox.scss
			_positions.scss
			_text-style.scss
```

<br />

- 구조를 파악한 다음 Figma에 대략적인 컴포넌트의 구조를 디자인하고 시작했습니다.
- To-do list를 제작하여 구현 상황을 체크할 수 있도록 우선순위를 설정했습니다.
- 구현하기에 앞서서 전체적인 스타일을 적용하기 위해 CSS compiler인 SASS를 npm으로 적용했습니다.
- 기본적인 스타일 작업(base, constants, layout 등)을 미리 설정해놓아서 효율성을 높였습니다.
- Tag 컴포넌트의 경우 예시 GIF의 레이아웃을 업데이트하여 타이틀 아래에 컴포넌트 내용이 자리하게 제작했고, 각 탭의 레이아웃 또한 동일한 width 값을 가질 수 있도록 업데이트 했습니다.
- Autocomplete 컴포넌트의 경우 예시 GIF에서 주변을 클릭했을 때 input의 텍스트값이 초기화되는 것으로 추정되어서 이를 적용했으며, 이를 한 눈에 확인하실 수 있도록 별도의 설명과 함께 배경색을 다른 컴포넌트들과 다르게 설정해놓았습니다. 또한, 닫기 버튼(x)을 눌러도 같은 기능을 수행할 수 있도록 구행했습니다.
- 또한 Autocomplete 컴포넌트에서 input 값과 매치되는 결과값이 존재하지 않을 경우 사용성을 높이기 위해서 에러 메시지 기능을 추가했습니다.

<br />
<br />

## 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

- 보편적으로 React에 대해서는 기본적인 지식만 가지고 있었기에 Vanilla Javascript의 접근 방식으로 먼저 생각하고 React의 언어로 컴파일링하는 과정이 가장 어려웠습니다.
- Modal 컴포넌트에서 `useRef()`를 사용하여 current 속성을 가지고 있는 객체를 반환하고, 인자로 넘어온 초기값을 current 속성에 할당하여 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 다시 랜더링되지 않게 기능을 구현했습니다. React 컴포넌트가 다시 랜더링될 때도 마찬가지로 이 current 속성의 값이 유실되지 않는 독특한 성질을 이용하여 Modal 컴포넌트를 제작했습니다.

<br />
<br />
