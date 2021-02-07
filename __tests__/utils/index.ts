import ReactDOM from 'react-dom';

/**
 * 渲染组件
 * @param comp
 * @param container
 */
export function render(comp: any, container: HTMLElement) {
  ReactDOM.render(comp, container);
}

/**
 * 卸载组件
 * @param container
 */
export function destroy(container: HTMLElement) {
  ReactDOM.unmountComponentAtNode(container);
}

/**
 * 创建一个 div 节点，并放到 container，默认放到 body 上
 * @param title
 * @param container
 * @param id  容器 id
 */
export function createDiv(container: HTMLElement = document.body): HTMLElement {
  const div = document.createElement('div');

  container.appendChild(div);

  return div;
}

/**
 * 移除 dom 元素
 * @param dom
 */
export function removeDom(dom: HTMLElement) {
  const parent = dom.parentNode;

  if (parent) {
    parent.removeChild(dom);
  }
}
