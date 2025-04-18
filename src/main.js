import './style.css'
import Dropdown from './Dropdown'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col justify-center items-center min-h-screen py-2">
    <h1 class="text-3xl font-bold mb-2">Dropdown</h1>
    <nav class='flex'></nav>
  </div>
`
// Dropdown 함수를 호출합니다.
Dropdown(
  // 첫 번째 인자: 드롭다운 메뉴를 삽입할 부모 HTML 요소를 지정
  document.querySelector('#app nav'), 
  'Dropdown Menu',
  // 두 번째 인자: 드롭다운 메뉴의 항목(item) 텍스트를 커스텀으로 설정하는 객체
  {
    menu1: 'HTML',
    menu2: 'CSS',
    menu3: 'JavaScript'
  }
)

Dropdown(
  // 첫 번째 인자: 드롭다운 메뉴를 삽입할 부모 HTML 요소를 지정
  document.querySelector('#app nav'), 
  'About',
  // 두 번째 인자: 드롭다운 메뉴의 항목(item) 텍스트를 커스텀으로 설정하는 객체
  {
    menu1: 'Products',
    menu2: 'History',
    menu3: 'Contact'
  }
)

