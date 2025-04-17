// 기본 드롭다운 메뉴 항목들을 정의하는 객체입니다.
// Dropdown 함수 호출 시 options 인자가 전달되지 않으면 이 객체가 사용됩니다.
const defaultOptions = {
  menu1: 'HTML', // 첫 번째 메뉴 항목 텍스트
  menu2: 'CSS',  // 두 번째 메뉴 항목 텍스트
  menu3: 'JavaScript' // 세 번째 메뉴 항목 텍스트
};

/**
 * 드롭다운 컴포넌트를 생성하고 지정된 요소에 추가하는 함수입니다.
 * @param {HTMLElement} [element=document.body] - 드롭다운을 추가할 부모 DOM 요소입니다. 기본값은 document.body 입니다.
 * @param {object} [options=defaultOptions] - 드롭다운 메뉴 항목의 텍스트를 포함하는 객체입니다. 기본값은 defaultOptions 입니다.
 */
const Dropdown = (element = document.body, title='Dropdown', options = defaultOptions) => {
  const DropdownHtml = `
      <div class="dropdown relative w-[250px] flex flex-col gap-2 rounded-lg  shadow-lg bg-white">
        <button class="dropdown-toggle bg-linear-to-r from-[#B13EFB] to-[#FF188C] w-full px-4 py-[10px] text-white font-bold flex justify-between items-center rounded-lg hover:opacity-80 hover:cursor-pointer" type="button">
          ${title}
          <svg class='transition' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"/></svg>
        </button>
        <ul class="dropdown-menu flex flex-col absolute top-[54px] w-full rounded-lg bg-white shadow-lg hidden">
          <li>
            <a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">
              ${options.menu1} 
            </a>
          </li>
          <li>
            <a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">
              ${options.menu2}
            </a>
          </li>
          <li>
            <a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">
              ${options.menu3}  
            </a>
          </li>
        </ul>
      </div>
  `;

  element.insertAdjacentHTML('beforeend', DropdownHtml);

  // 방금 삽입한 드롭다운 요소만 찾습니다. 마지막 자식 요소를 가리킵니다.
  const newDropdown = element.querySelector('.dropdown:last-child');
  // const newDropdown = element.lastElementChild;
  
  // 새로 추가된 드롭다운 내부에서 버튼과 메뉴를 찾습니다.
  const toggleBtn = newDropdown.querySelector('.dropdown-toggle');
  const dropdownMenu = newDropdown.querySelector('.dropdown-menu');

  // 새로 추가된 버튼에만 이벤트 리스너를 추가합니다.
  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    toggleBtn.querySelector('svg').classList.toggle('rotate-180');
  });

};

export default Dropdown;
